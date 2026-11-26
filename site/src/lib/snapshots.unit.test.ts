import assert from 'node:assert'
import { describe, it } from 'node:test'
import { includes, size, uniq } from 'lodash-es'
import { readSnapshotUrls } from './snapshots'

describe('readSnapshotUrls', () => {
  it('should read the sitemap snapshot and the GitBook redirects snapshot without duplicates', () => {
    const urls = readSnapshotUrls()
    assert.ok(includes(urls, '/changelog'))
    assert.ok(includes(urls, '/kb/general-information'))
    assert.ok(includes(urls, '/docs/docs_se/integrationer'))
    assert.strictEqual(size(urls), size(uniq(urls)))
  })
})
