import assert from 'node:assert'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'
import { endsWith, filter, includes, keys, map, size, uniq, values } from 'lodash-es'
import { readRedirects } from './redirects'
import { readAllPages } from './summary'

describe('redirects', () => {
  const pageUrls = map(readAllPages(), 'url')

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

  it('should hold no source key twice in redirects.json', () => {
    const text = readFileSync(new URL('../../redirects.json', import.meta.url), 'utf8')
    const sources = map(Array.from(text.matchAll(/^\s*"([^"]+)"\s*:/gm)), 1)
    assert.strictEqual(size(sources), size(uniq(sources)))
    assert.ok(size(sources) > 0)
  })
})
