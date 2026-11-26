import assert from 'node:assert'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'
import { endsWith, filter, keys, map, size, uniq } from 'lodash-es'
import { readRedirects } from './redirects'

describe('redirects', () => {
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
