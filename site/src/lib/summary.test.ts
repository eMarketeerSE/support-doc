import assert from 'node:assert'
import { describe, it } from 'node:test'
import { filter, find, map } from 'lodash-es'
import { Space, findTwinUrl, parseSummary, readAllPages, readSpace, slug } from './summary'

const noDescription = () => ''

describe('summary', () => {
  it('should read at least one page in each of the 4 spaces', () => {
    const counts = [Space.English, Space.Swedish, Space.Changelog, Space.Legal].map((space) => readSpace(space).length)
    assert.ok(counts.every((count) => count > 0))
  })

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

  it('should throw when an entry indent is not a multiple of 2', () => {
    assert.throws(
      () => parseSummary('* [A](a.md)\n * [B](b.md)', Space.Legal, noDescription),
      /legal\/SUMMARY\.md line 2: indent must be a multiple of 2/,
    )
  })

  it('should put the first entry of a space at its prefix', () => {
    const firstFiles = [Space.English, Space.Swedish, Space.Changelog, Space.Legal].map((space) => {
      const page = readSpace(space)[0]
      return [page.file, page.url]
    })
    assert.deepStrictEqual(firstFiles, [
      ['overview.md', '/'],
      ['sv/overview.md', '/docs/docs_se'],
      ['changelog/README.md', '/changelog'],
      ['legal/legal.md', '/legal'],
    ])
  })

  it('should nest a page under its parent and its ## group', () => {
    const page = find(readSpace(Space.English), {
      file: 'knowledge-base/getting-started/basics-creating-email.md',
    })
    assert.strictEqual(page?.url, '/getting-started/campaign-basics/basics-creating-email')
  })

  it('should read an entry with a link title like one without', () => {
    const { pages } = parseSummary('* [A](README.md "2026")\n* [B](b.md)', Space.Changelog, noDescription)
    assert.deepStrictEqual(map(pages, 'url'), ['/changelog', '/changelog/b'])
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
    const file = 'knowledge-base/getting-started/basics-creating-email.md'
    const pages = readAllPages()
    const english = find(pages, { file })
    const swedish = find(pages, { file: `sv/${file}` })
    assert.strictEqual(findTwinUrl(english!, pages), swedish!.url)
    assert.strictEqual(findTwinUrl(swedish!, pages), english!.url)
  })

  it('should link a page with no twin to the other start page', () => {
    const pages = readAllPages()
    assert.strictEqual(findTwinUrl(find(pages, { space: Space.Changelog })!, pages), '/docs/docs_se')
    assert.strictEqual(findTwinUrl(find(pages, { space: Space.Legal })!, pages), '/docs/docs_se')
    const english = filter(pages, { space: Space.English })
    const orphan = { url: '/docs/docs_se/x', file: 'sv/x-nonexistent.md', title: '', description: '', space: Space.Swedish }
    assert.strictEqual(findTwinUrl(orphan, [...english, orphan]), '/')
  })
})
