import assert from 'node:assert'
import { describe, it } from 'node:test'
import { find } from 'lodash-es'
import { isExternal, resolveLink } from './links'
import { readAllPages } from './summary'

const pages = readAllPages()
const english = find(pages, { file: 'knowledge-base/getting-started/campaign-basics.md' })!
const swedish = find(pages, { file: 'sv/knowledge-base/getting-started/campaign-basics.md' })!

describe('resolveLink', () => {
  it('should map a relative .md link to the URL of its file', () => {
    assert.strictEqual(
      resolveLink('basics-creating-email.md', english, pages),
      '/getting-started/campaign-basics/basics-creating-email',
    )
  })

  it('should keep the fragment of a page link', () => {
    assert.strictEqual(
      resolveLink('basics-creating-email.md#step-2', english, pages),
      '/getting-started/campaign-basics/basics-creating-email#step-2',
    )
  })

  it('should map a docs-space GitBook link to the path after the space id', () => {
    assert.strictEqual(
      resolveLink('https://app.gitbook.com/s/0ywqCs3au1x0DqPhEJTR/guides/guides/forms/the-form-component', english, pages),
      '/guides/guides/forms/the-form-component',
    )
  })

  it('should map the changelog space link to /changelog', () => {
    assert.strictEqual(
      resolveLink('https://app.gitbook.com/o/1JdVdPfmES6QvXxigQJW/s/R2AVUzAq8nYYHcGZOcNU/', english, pages),
      '/changelog',
    )
  })

  it('should map an English image to /.gitbook/assets', () => {
    assert.strictEqual(
      resolveLink('../../.gitbook/assets/basics-creating-email-add-email-dialog.png', find(pages, { file: 'knowledge-base/getting-started/basics-creating-email.md' })!, pages),
      '/.gitbook/assets/basics-creating-email-add-email-dialog.png',
    )
  })

  it('should map a Swedish image to /docs/docs_se/.gitbook/assets', () => {
    assert.strictEqual(
      resolveLink('../../.gitbook/assets/1.-Before.png', swedish, pages),
      '/docs/docs_se/.gitbook/assets/1.-Before.png',
    )
  })

  it('should encode an image name with spaces and brackets', () => {
    assert.strictEqual(
      resolveLink('../../.gitbook/assets/2018-05-22_08-52-07 (1).png', english, pages),
      '/.gitbook/assets/2018-05-22_08-52-07%20(1).png',
    )
  })

  it('should leave https, mailto and #fragment links unchanged', () => {
    assert.strictEqual(resolveLink('https://example.com/a?b=1', english, pages), 'https://example.com/a?b=1')
    assert.strictEqual(resolveLink('mailto:support@emarketeer.com', english, pages), 'mailto:support@emarketeer.com')
    assert.strictEqual(resolveLink('#top', english, pages), '#top')
    assert.strictEqual(isExternal('https://example.com'), true)
    assert.strictEqual(isExternal('/getting-started'), false)
  })

  it('should throw on a link to a file in no SUMMARY.md', () => {
    assert.throws(() => resolveLink('not-listed.md', english, pages), /campaign-basics\.md.*not-listed\.md/)
  })

  it('should throw on a missing image', () => {
    assert.throws(() => resolveLink('../../.gitbook/assets/no-such-image.png', english, pages), /campaign-basics\.md.*no-such-image\.png/)
  })

  it('should throw on a gitbook.io or gitbook.com link it cannot map', () => {
    assert.throws(() => resolveLink('https://docs.gitbook.com/x', english, pages), /docs\.gitbook\.com/)
    assert.throws(() => resolveLink('https://app.gitbook.com/s/otherSpaceId/x', english, pages), /otherSpaceId/)
    assert.throws(() => resolveLink('https://emarketeer.gitbook.io/x', english, pages), /gitbook\.io/)
  })
})
