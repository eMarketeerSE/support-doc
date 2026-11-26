import assert from 'node:assert'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'
import { endsWith, filter, has, keys, map, size, uniq, values } from 'lodash-es'
import { mergeGroupRoots, readAllRedirects, readRedirects } from './redirects'
import { Space } from './summary'

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

  it('should point no redirect at another redirect', () => {
    const redirects = readAllRedirects()
    assert.deepStrictEqual(filter(values(redirects), (target) => has(redirects, target)), [])
  })
})

describe('mergeGroupRoots', () => {
  const pages = [{ url: '/a/b', file: 'a/b.md', title: 'B', description: '', space: Space.English }]

  it('should add the group roots to the redirects', () => {
    assert.deepStrictEqual(mergeGroupRoots({ '/old': '/a/b' }, { '/a': '/a/b' }, pages), { '/old': '/a/b', '/a': '/a/b' })
  })

  it('should fail when a group root is a page', () => {
    assert.throws(() => mergeGroupRoots({}, { '/a/b': '/a/b/c' }, pages), /group root collides.*\/a\/b/)
  })

  it('should fail when a group root is a line in redirects.json', () => {
    assert.throws(() => mergeGroupRoots({ '/a': '/a/b' }, { '/a': '/a/b' }, pages), /group root collides.*\/a/)
  })

  it('should send the eight GitBook group roots to their first page', () => {
    const redirects = readAllRedirects()
    assert.deepStrictEqual(
      map(
        ['/getting-started', '/guides', '/references', '/integrations', '/docs/docs_se/kom-igang', '/docs/docs_se/guider', '/docs/docs_se/referens', '/docs/docs_se/integrationer'],
        (root) => redirects[root],
      ),
      [
        '/getting-started/campaign-basics',
        '/guides/guides',
        '/references/apis-developer',
        '/integrations/superoffice',
        '/docs/docs_se/kom-igang/campaign-basics',
        '/docs/docs_se/guider/guides',
        '/docs/docs_se/referens/apis-developer',
        '/docs/docs_se/integrationer/superoffice',
      ],
    )
  })
})
