import assert from 'node:assert'
import { fileURLToPath } from 'node:url'
import { describe, it } from 'node:test'
import { ASSET_URL_PREFIX, isExternal, resolveLink } from './links'
import { Space, type SitePage } from './summary'

const IMAGE = 'example.png'
const ROOT = fileURLToPath(new URL('fixtures/repo/', import.meta.url))

const overview: SitePage = { url: '/', file: 'overview.md', title: 'Home', description: '', space: Space.English }
const intro: SitePage = { url: '/guides/intro', file: 'guides/intro.md', title: 'Intro', description: '', space: Space.English }
const other: SitePage = { url: '/guides/other', file: 'guides/other.md', title: 'Other', description: '', space: Space.English }
const section: SitePage = { url: '/guides/section', file: 'guides/section/README.md', title: 'Section', description: '', space: Space.English }
const swedishIntro: SitePage = { url: '/docs/docs_se/guider/intro', file: 'sv/guides/intro.md', title: 'Intro', description: '', space: Space.Swedish }
const changelogYear: SitePage = { url: '/changelog/2025', file: 'changelog/2025.md', title: '2025', description: '', space: Space.Changelog }
const pages = [overview, intro, other, section, swedishIntro, changelogYear]

describe('resolveLink', () => {
  it('should map a folder link to the README page of the folder', () => {
    assert.strictEqual(resolveLink('section/', intro, pages, ROOT), '/guides/section')
  })

  it('should map a folder link from the overview to the README page of the folder', () => {
    assert.strictEqual(resolveLink('guides/section/', overview, pages, ROOT), '/guides/section')
  })

  it('should throw for a folder without a README page', () => {
    assert.throws(() => resolveLink('../no-such-folder/', intro, pages, ROOT), /cannot map link/)
  })

  it('should throw with context for an href that is not a valid URL', () => {
    assert.throws(() => resolveLink('http:', intro, pages, ROOT), /guides\/intro\.md: cannot map link http:/)
  })

  it('should map a relative .md link to the URL of its file', () => {
    assert.strictEqual(resolveLink('other.md', intro, pages, ROOT), '/guides/other')
  })

  it('should map a relative .md link into another space to the URL of its file', () => {
    assert.strictEqual(resolveLink('../changelog/2025.md#march', intro, pages, ROOT), '/changelog/2025#march')
  })

  it('should keep the fragment of a page link', () => {
    assert.strictEqual(resolveLink('other.md#step-2', intro, pages, ROOT), '/guides/other#step-2')
  })

  it('should map a docs-space GitBook link to the path after the space id', () => {
    assert.strictEqual(
      resolveLink('https://app.gitbook.com/s/0ywqCs3au1x0DqPhEJTR/guides/other', intro, pages, ROOT),
      '/guides/other',
    )
  })

  it('should keep the fragment of a docs-space GitBook link', () => {
    assert.strictEqual(
      resolveLink('https://app.gitbook.com/s/0ywqCs3au1x0DqPhEJTR/guides/other#step-2', intro, pages, ROOT),
      '/guides/other#step-2',
    )
  })

  it('should throw on a docs-space GitBook link to an unknown path', () => {
    assert.throws(
      () => resolveLink('https://app.gitbook.com/s/0ywqCs3au1x0DqPhEJTR/guides/unknown', intro, pages, ROOT),
      /guides\/intro\.md.*no page for space 0ywqCs3au1x0DqPhEJTR path \/guides\/unknown/,
    )
  })

  it('should map the changelog space link to /changelog', () => {
    assert.strictEqual(
      resolveLink('https://app.gitbook.com/o/1JdVdPfmES6QvXxigQJW/s/R2AVUzAq8nYYHcGZOcNU/', intro, pages, ROOT),
      '/changelog',
    )
  })

  it('should keep the fragment on the changelog root link', () => {
    assert.strictEqual(
      resolveLink('https://app.gitbook.com/s/R2AVUzAq8nYYHcGZOcNU/#latest', intro, pages, ROOT),
      '/changelog#latest',
    )
  })

  it('should map a changelog-space link with a path to the changelog page', () => {
    assert.strictEqual(
      resolveLink('https://app.gitbook.com/s/R2AVUzAq8nYYHcGZOcNU/2025#march', intro, pages, ROOT),
      '/changelog/2025#march',
    )
  })

  it('should throw on a changelog-space link to a path that is not a page', () => {
    assert.throws(
      () => resolveLink('https://app.gitbook.com/s/R2AVUzAq8nYYHcGZOcNU/no-such-release', intro, pages, ROOT),
      /no-such-release/,
    )
  })

  it('should map a docs-space link with an empty path to the home page', () => {
    assert.strictEqual(resolveLink('https://app.gitbook.com/s/0ywqCs3au1x0DqPhEJTR/', intro, pages, ROOT), '/')
    assert.strictEqual(resolveLink('https://app.gitbook.com/s/0ywqCs3au1x0DqPhEJTR', intro, pages, ROOT), '/')
    assert.strictEqual(resolveLink('https://app.gitbook.com/s/0ywqCs3au1x0DqPhEJTR/#intro', intro, pages, ROOT), '/#intro')
    assert.strictEqual(resolveLink('https://app.gitbook.com/s/0ywqCs3au1x0DqPhEJTR#intro', intro, pages, ROOT), '/#intro')
  })

  it('should map the legal image folder to /legal/.gitbook/assets/', () => {
    assert.strictEqual(ASSET_URL_PREFIX['legal/.gitbook/assets/'], '/legal/.gitbook/assets/')
  })

  it('should map an English image to /.gitbook/assets', () => {
    assert.strictEqual(resolveLink(`../.gitbook/assets/${IMAGE}`, intro, pages, ROOT), `/.gitbook/assets/${IMAGE}`)
  })

  it('should map a Swedish image to /docs/docs_se/.gitbook/assets', () => {
    assert.strictEqual(
      resolveLink(`../.gitbook/assets/${IMAGE}`, swedishIntro, pages, ROOT),
      `/docs/docs_se/.gitbook/assets/${IMAGE}`,
    )
  })

  it('should encode an image name with spaces and brackets', () => {
    assert.strictEqual(
      resolveLink('../.gitbook/assets/screenshot (1).png', intro, pages, ROOT),
      '/.gitbook/assets/screenshot%20(1).png',
    )
  })

  it('should leave https, mailto and #fragment links unchanged', () => {
    assert.strictEqual(resolveLink('https://example.com/a?b=1', intro, pages, ROOT), 'https://example.com/a?b=1')
    assert.strictEqual(resolveLink('mailto:support@emarketeer.com', intro, pages, ROOT), 'mailto:support@emarketeer.com')
    assert.strictEqual(resolveLink('#top', intro, pages, ROOT), '#top')
    assert.strictEqual(isExternal('https://example.com'), true)
    assert.strictEqual(isExternal('/getting-started'), false)
  })

  it('should throw on a link to a file in no SUMMARY.md', () => {
    assert.throws(() => resolveLink('not-listed.md', intro, pages, ROOT), /guides\/intro\.md.*not-listed\.md/)
  })

  it('should throw on a missing image', () => {
    assert.throws(() => resolveLink('../.gitbook/assets/no-such-image.png', intro, pages, ROOT), /guides\/intro\.md.*no-such-image\.png/)
  })

  it('should throw on a gitbook.io or gitbook.com link it cannot map', () => {
    assert.throws(() => resolveLink('https://docs.gitbook.com/x', intro, pages, ROOT), /docs\.gitbook\.com/)
    assert.throws(() => resolveLink('https://app.gitbook.com/s/otherSpaceId/x', intro, pages, ROOT), /otherSpaceId/)
    assert.throws(() => resolveLink('https://emarketeer.gitbook.io/x', intro, pages, ROOT), /gitbook\.io/)
  })
})
