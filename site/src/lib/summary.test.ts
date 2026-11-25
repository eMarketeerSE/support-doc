import assert from 'node:assert'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'
import { filter, find, map, sortBy } from 'lodash-es'
import { Space, findTwinUrl, parseSummary, readAllPages, readSpace, slug } from './summary'

const noDescription = () => ''

describe('summary', () => {
  it('should derive every live URL from the 4 SUMMARY.md files', () => {
    const expected = readFileSync('sitemap-snapshot.txt', 'utf8').trim().split('\n')
    assert.deepStrictEqual(sortBy(map(readAllPages(), 'url')), sortBy(expected))
  })

  it('should give each space 235 / 235 / 5 / 12 pages', () => {
    assert.deepStrictEqual(
      [Space.English, Space.Swedish, Space.Changelog, Space.Legal].map((space) => readSpace(space).length),
      [235, 235, 5, 12],
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
