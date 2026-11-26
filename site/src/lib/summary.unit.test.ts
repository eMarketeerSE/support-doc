import assert from 'node:assert'
import { describe, it } from 'node:test'
import { map } from 'lodash-es'
import { Space, findTwinUrl, isNavItemOpen, parseSummary, slug } from './summary'

const noDescription = () => ''
const noIcon = () => null

describe('summary', () => {
  it('should build urls from the group, the nesting, README entries and link titles', () => {
    const summary = [
      '* [Home](overview.md)',
      '## Guides',
      '* [Intro](guides/intro.md)',
      '  * [Deep](guides/deep.md "2026")',
      '* [Section](guides/section/README.md)',
    ].join('\n')
    const { pages } = parseSummary(summary, Space.English, noDescription, noIcon)
    assert.deepStrictEqual(map(pages, 'url'), ['/', '/guides/intro', '/guides/intro/deep', '/guides/section'])
  })

  it('should throw with the line number when a list line is not a valid entry', () => {
    assert.throws(
      () => parseSummary('* [A](a.md)\n- [B](b.md)', Space.Legal, noDescription, noIcon),
      /legal\/SUMMARY\.md line 2/,
    )
  })

  it('should throw on a line that is not a blank, a title, a heading, an entry or a comment', () => {
    const invalid = ['* [A](a.md)\n\t* [B](b.md)', '* [A](a.md)\n+ [B](b.md)', '* [A](a.md)\n1. [B](b.md)', '## Guides\n##Group', '* [A](a.md)\n### Sub']
    for (const summary of invalid) {
      assert.throws(() => parseSummary(summary, Space.Legal, noDescription, noIcon), /legal\/SUMMARY\.md line [23]: cannot read line/)
    }
  })

  it('should accept blank lines, the title line and comment lines', () => {
    const { pages } = parseSummary('# Table of contents\n\n<!-- note -->\n* [A](a.md)\n', Space.Legal, noDescription, noIcon)
    assert.deepStrictEqual(map(pages, 'url'), ['/legal'])
  })

  it('should throw when a heading has no letters or digits', () => {
    assert.throws(() => parseSummary('* [A](a.md)\n## 🚀', Space.Legal, noDescription, noIcon), /legal\/SUMMARY\.md line 2: heading has no letters or digits/)
  })

  it('should throw when an entry title is empty', () => {
    assert.throws(() => parseSummary('* [](a.md)', Space.Legal, noDescription, noIcon), /legal\/SUMMARY\.md line 1: entry title is empty/)
  })

  it('should throw when an entry path is not a .md file', () => {
    assert.throws(() => parseSummary('* [A](guides/)', Space.Legal, noDescription, noIcon), /legal\/SUMMARY\.md line 1: entry path must end in \.md/)
  })

  it('should throw when an entry path leaves the space', () => {
    assert.throws(() => parseSummary('* [A](../a.md)', Space.Legal, noDescription, noIcon), /legal\/SUMMARY\.md line 1: entry path leaves the space/)
  })

  it('should throw when an entry indent is not a multiple of 2', () => {
    assert.throws(
      () => parseSummary('* [A](a.md)\n * [B](b.md)', Space.Legal, noDescription, noIcon),
      /legal\/SUMMARY\.md line 2: indent must be a multiple of 2/,
    )
  })

  it('should put the first entry of the English and legal spaces at their prefix', () => {
    const english = parseSummary('* [Home](overview.md)\n* [A](a.md)', Space.English, noDescription, noIcon)
    const legal = parseSummary('* [Legal](legal.md)\n* [Terms](terms.md)', Space.Legal, noDescription, noIcon)
    assert.deepStrictEqual(map(english.pages, 'url'), ['/', '/a'])
    assert.deepStrictEqual(map(legal.pages, 'url'), ['/legal', '/legal/terms'])
    assert.deepStrictEqual(map(legal.pages, 'file'), ['legal/legal.md', 'legal/terms.md'])
  })

  it('should build Swedish urls under /docs/docs_se with the sv/ folder', () => {
    const { pages } = parseSummary('* [Hem](overview.md)\n## Guider\n* [A](guides/a.md)', Space.Swedish, noDescription, noIcon)
    assert.deepStrictEqual(map(pages, 'url'), ['/docs/docs_se', '/docs/docs_se/guider/a'])
    assert.deepStrictEqual(map(pages, 'file'), ['sv/overview.md', 'sv/guides/a.md'])
  })

  it('should build changelog urls under /changelog and read a link title', () => {
    const { pages } = parseSummary('* [Releases](README.md "2026")\n* [May](may.md "May 2026")', Space.Changelog, noDescription, noIcon)
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
    const { nav } = parseSummary(summary, Space.English, noDescription, noIcon)
    assert.deepStrictEqual(nav, [
      { heading: null, items: [{ title: 'Home', url: '/', icon: null, children: [] }] },
      {
        heading: 'Guides',
        items: [
          { title: 'Intro', url: '/guides/intro', icon: null, children: [{ title: 'Deep', url: '/guides/intro/deep', icon: null, children: [] }] },
          { title: 'Section', url: '/guides/section', icon: null, children: [] },
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
    const { pages } = parseSummary(summary, Space.English, noDescription, noIcon)
    assert.strictEqual(pages[1].url, '/getting-started/campaign-basics/basics-creating-email')
  })

  it('should throw when two entries give the same url', () => {
    assert.throws(
      () => parseSummary('* [A](a.md)\n* [B](x.md)\n* [C](x.md)', Space.Legal, noDescription, noIcon),
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

describe('icons in the nav', () => {
  const summary = ['* [Home](overview.md)', '  * [Child](child.md)', '* [Guides](guides.md)'].join('\n')
  const readIcon = (file: string) => (file === 'legal/overview.md' ? '<svg></svg>' : null)

  it('should give an icon to top-level items only', () => {
    const { nav } = parseSummary(summary, Space.Legal, noDescription, () => '<svg></svg>')
    assert.deepStrictEqual(
      map(nav[0].items, 'icon'),
      ['<svg></svg>', '<svg></svg>'],
    )
    assert.strictEqual(nav[0].items[0].children[0].icon, null)
  })

  it('should leave the icon empty when the page has none', () => {
    const { nav } = parseSummary(summary, Space.Legal, noDescription, readIcon)
    assert.deepStrictEqual(map(nav[0].items, 'icon'), ['<svg></svg>', null])
  })
})

describe('parseSummary group roots', () => {
  it('should map each group url prefix to the url of its first page', () => {
    const summary = [
      '* [Home](overview.md)',
      '',
      '## Getting started',
      '',
      '* [Basics](getting-started/basics/README.md)',
      '  * [Send](getting-started/basics/send.md)',
      '',
      '## Kom igång nu',
      '',
      '* [Intro](intro.md)',
    ].join('\n')
    const { groupRoots } = parseSummary(summary, Space.English, noDescription, noIcon)
    assert.deepStrictEqual(groupRoots, {
      '/getting-started': '/getting-started/basics',
      '/kom-igang-nu': '/kom-igang-nu/intro',
    })
  })

  it('should prefix the group roots of the Swedish space', () => {
    const summary = ['* [Hem](overview.md)', '', '## Guider', '', '* [Guider](guides.md)'].join('\n')
    const { groupRoots } = parseSummary(summary, Space.Swedish, noDescription, noIcon)
    assert.deepStrictEqual(groupRoots, { '/docs/docs_se/guider': '/docs/docs_se/guider/guides' })
  })
})

describe('isNavItemOpen', () => {
  const nav = parseSummary(
    [
      '* [A](a.md)',
      '  * [A1](a1.md)',
      '    * [A1x](a1x.md)',
      '  * [A2](a2.md)',
      '    * [A2x](a2x.md)',
      '* [B](b.md)',
      '  * [B1](b1.md)',
    ].join('\n'),
    Space.Legal,
    noDescription,
    noIcon,
  ).nav[0].items
  const [a, b] = nav
  const [a1, a2] = a.children

  it('should open the ancestors of the current page and close the other branches', () => {
    const currentUrl = '/legal/a/a1/a1x'
    assert.deepStrictEqual(map([a, a1, a2, b], (item) => isNavItemOpen(item, currentUrl)), [true, true, false, false])
  })

  it('should open the current page when it has children', () => {
    assert.strictEqual(isNavItemOpen(b, '/legal/b'), true)
  })

  it('should close every branch when the current page is elsewhere', () => {
    assert.deepStrictEqual(map([a, b], (item) => isNavItemOpen(item, '/legal/elsewhere')), [false, false])
  })

  it('should not open a leaf page', () => {
    assert.strictEqual(isNavItemOpen(a1.children[0], '/legal/a/a1/a1x'), false)
  })
})
