import assert from 'node:assert'
import { describe, it } from 'node:test'
import { endsWith, filter, includes, keys, map, size, values } from 'lodash-es'
import { readRedirects } from './redirects'
import { readAllPages } from './summary'

describe('redirects', () => {
  const pageUrls = map(readAllPages(), 'url')

  it('should hold 48 redirects', () => {
    assert.strictEqual(size(readRedirects()), 48)
  })

  it('should point every redirect at a page URL', () => {
    const missing = filter(values(readRedirects()), (target) => !includes(pageUrls, target))
    assert.deepStrictEqual(missing, [])
  })

  it('should never use a page URL as a source', () => {
    const clashes = filter(keys(readRedirects()), (source) => includes(pageUrls, source))
    assert.deepStrictEqual(clashes, [])
  })

  it('should hold no source with a trailing slash', () => {
    const slashed = filter(keys(readRedirects()), (source) => endsWith(source, '/'))
    assert.deepStrictEqual(slashed, [])
  })

  it('should send /documentation/legal to /legal, not to /legal/legal', () => {
    assert.strictEqual(readRedirects()['/documentation/legal'], '/legal')
  })
})
