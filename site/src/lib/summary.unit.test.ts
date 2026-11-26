import assert from 'node:assert'
import { describe, it } from 'node:test'
import { map } from 'lodash-es'
import { Space, findTwinUrl, parseSummary, slug } from './summary'

const noDescription = () => ''

describe('summary', () => {
  it('should build urls from the group, the nesting, README entries and link titles', () => {
    const summary = [
      '* [Home](overview.md)',
      '## Guides',
      '* [Intro](guides/intro.md)',
      '  * [Deep](guides/deep.md "2026")',
      '* [Section](guides/section/README.md)',
    ].join('\n')
    const { pages } = parseSummary(summary, Space.English, noDescription)
    assert.deepStrictEqual(map(pages, 'url'), ['/', '/guides/intro', '/guides/intro/deep', '/guides/section'])
  })

  it('should throw with the line number when a list line is not a valid entry', () => {
    assert.throws(
      () => parseSummary('* [A](a.md)\n- [B](b.md)', Space.Legal, noDescription),
      /legal\/SUMMARY\.md line 2/,
    )
  })

  it('should throw on a line that is not a blank, a title, a heading, an entry or a comment', () => {
    const invalid = ['* [A](a.md)\n\t* [B](b.md)', '* [A](a.md)\n+ [B](b.md)', '* [A](a.md)\n1. [B](b.md)', '## Guides\n##Group', '* [A](a.md)\n### Sub']
    for (const summary of invalid) {
      assert.throws(() => parseSummary(summary, Space.Legal, noDescription), /legal\/SUMMARY\.md line [23]: cannot read line/)
    }
  })

  it('should accept blank lines, the title line and comment lines', () => {
    const { pages } = parseSummary('# Table of contents\n\n<!-- note -->\n* [A](a.md)\n', Space.Legal, noDescription)
    assert.deepStrictEqual(map(pages, 'url'), ['/legal'])
  })

  it('should throw when a heading has no letters or digits', () => {
    assert.throws(() => parseSummary('* [A](a.md)\n## 🚀', Space.Legal, noDescription), /legal\/SUMMARY\.md line 2: heading has no letters or digits/)
  })

  it('should throw when an entry title is empty', () => {
    assert.throws(() => parseSummary('* [](a.md)', Space.Legal, noDescription), /legal\/SUMMARY\.md line 1: entry title is empty/)
  })

  it('should throw when an entry path is not a .md file', () => {
    assert.throws(() => parseSummary('* [A](guides/)', Space.Legal, noDescription), /legal\/SUMMARY\.md line 1: entry path must end in \.md/)
  })

  it('should throw when an entry path leaves the space', () => {
    assert.throws(() => parseSummary('* [A](../a.md)', Space.Legal, noDescription), /legal\/SUMMARY\.md line 1: entry path leaves the space/)
  })

  it('should throw when an entry indent is not a multiple of 2', () => {
    assert.throws(
      () => parseSummary('* [A](a.md)\n * [B](b.md)', Space.Legal, noDescription),
      /legal\/SUMMARY\.md line 2: indent must be a multiple of 2/,
    )
  })

  it('should put the first entry of the English and legal spaces at their prefix', () => {
    const english = parseSummary('* [Home](overview.md)\n* [A](a.md)', Space.English, noDescription)
    const legal = parseSummary('* [Legal](legal.md)\n* [Terms](terms.md)', Space.Legal, noDescription)
    assert.deepStrictEqual(map(english.pages, 'url'), ['/', '/a'])
    assert.deepStrictEqual(map(legal.pages, 'url'), ['/legal', '/legal/terms'])
    assert.deepStrictEqual(map(legal.pages, 'file'), ['legal/legal.md', 'legal/terms.md'])
  })

  it('should build Swedish urls under /docs/docs_se with the sv/ folder', () => {
    const { pages } = parseSummary('* [Hem](overview.md)\n## Guider\n* [A](guides/a.md)', Space.Swedish, noDescription)
    assert.deepStrictEqual(map(pages, 'url'), ['/docs/docs_se', '/docs/docs_se/guider/a'])
    assert.deepStrictEqual(map(pages, 'file'), ['sv/overview.md', 'sv/guides/a.md'])
  })

  it('should build changelog urls under /changelog and read a link title', () => {
    const { pages } = parseSummary('* [Releases](README.md "2026")\n* [May](may.md "May 2026")', Space.Changelog, noDescription)
    assert.deepStrictEqual(map(pages, 'url'), ['/changelog', '/changelog/may'])
    assert.deepStrictEqual(map(pages, 'file'), ['changelog/README.md', 'changelog/may.md'])
  })

  it('should build the nav tree with groups and nested children', () => {
    const summary = [
      '* [Home](overview.md)',
      '## Guides',
      '* [Intro](guides/intro.md)',
      '  * [Deep](guides/deep.md "2026")',
      '* [Section](guides/section/README.md)',
    ].join('\n')
    const { nav } = parseSummary(summary, Space.English, noDescription)
    assert.deepStrictEqual(nav, [
      { heading: null, items: [{ title: 'Home', url: '/', children: [] }] },
      {
        heading: 'Guides',
        items: [
          { title: 'Intro', url: '/guides/intro', children: [{ title: 'Deep', url: '/guides/intro/deep', children: [] }] },
          { title: 'Section', url: '/guides/section', children: [] },
        ],
      },
    ])
  })

  it('should nest a page under its parent and its ## group', () => {
    const summary = [
      '## Getting started',
      '* [Campaign basics](knowledge-base/getting-started/campaign-basics.md)',
      '  * [Create an email](knowledge-base/getting-started/basics-creating-email.md)',
    ].join('\n')
    const { pages } = parseSummary(summary, Space.English, noDescription)
    assert.strictEqual(pages[1].url, '/getting-started/campaign-basics/basics-creating-email')
  })

  it('should throw when two entries give the same url', () => {
    assert.throws(
      () => parseSummary('* [A](a.md)\n* [B](x.md)\n* [C](x.md)', Space.Legal, noDescription),
      /Duplicate url/,
    )
  })

  it('should slug a heading to ASCII lower case', () => {
    assert.strictEqual(slug('Ämnen & guider'), 'amnen-guider')
  })

  it('should link a page to its twin in the other language', () => {
    const english = { url: '/guides/intro', file: 'guides/intro.md', title: '', description: '', space: Space.English }
    const swedish = { url: '/docs/docs_se/guider/intro', file: 'sv/guides/intro.md', title: '', description: '', space: Space.Swedish }
    assert.strictEqual(findTwinUrl(english, [english, swedish]), swedish.url)
    assert.strictEqual(findTwinUrl(swedish, [english, swedish]), english.url)
  })

  it('should link a page with no twin to the other start page', () => {
    const changelog = { url: '/changelog', file: 'changelog/README.md', title: '', description: '', space: Space.Changelog }
    const legal = { url: '/legal', file: 'legal/legal.md', title: '', description: '', space: Space.Legal }
    const orphan = { url: '/docs/docs_se/x', file: 'sv/x.md', title: '', description: '', space: Space.Swedish }
    const pages = [changelog, legal, orphan]
    assert.strictEqual(findTwinUrl(changelog, pages), '/docs/docs_se')
    assert.strictEqual(findTwinUrl(legal, pages), '/docs/docs_se')
    assert.strictEqual(findTwinUrl(orphan, pages), '/')
  })
})
