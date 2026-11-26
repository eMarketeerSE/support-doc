import assert from 'node:assert'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'

interface QueryValue {
  value: string
  multiValue?: { value: string }[]
}

const source = readFileSync(new URL('./viewer-request.js', import.meta.url), 'utf8')
const handler = new Function(`${source}; return handler;`)()

const request = (uri: string, querystring: Record<string, QueryValue> = {}) => ({
  request: { uri, headers: {}, querystring },
})

describe('viewer-request', () => {
  it('should 301 a trailing slash to the bare path and keep the query', () => {
    const response = handler(request('/guides/intro/', { utm_source: { value: 'x' } }))
    assert.strictEqual(response.statusCode, 301)
    assert.strictEqual(response.headers.location.value, '/guides/intro?utm_source=x')
  })

  it('should keep every value of a repeated query key', () => {
    const response = handler(
      request('/guides/intro/', {
        k: { value: 'a', multiValue: [{ value: 'a' }, { value: 'b' }] },
      }),
    )
    assert.strictEqual(response.headers.location.value, '/guides/intro?k=a&k=b')
  })

  it('should pass / on unchanged', () => {
    const response = handler(request('/'))
    assert.strictEqual(response.uri, '/')
  })

  it('should append .html to a page path', () => {
    const response = handler(request('/docs/docs_se'))
    assert.strictEqual(response.uri, '/docs/docs_se.html')
  })

  it('should pass a path with a dot in its last segment unchanged', () => {
    for (const uri of ['/.gitbook/assets/a%20(1).png', '/sitemap.xml', '/_astro/x.css']) {
      assert.strictEqual(handler(request(uri)).uri, uri)
    }
  })

  it('should treat a dot in a folder name as part of a page path', () => {
    const response = handler(request('/a.b/page'))
    assert.strictEqual(response.uri, '/a.b/page.html')
  })

  it('should pass a path that starts with // on unchanged instead of redirecting', () => {
    const bare = handler(request('//evil.com/'))
    assert.strictEqual(bare.statusCode, undefined)
    assert.strictEqual(bare.uri, '//evil.com/')
    const withQuery = handler(request('//evil.com/x/', { a: { value: '1' } }))
    assert.strictEqual(withQuery.statusCode, undefined)
    assert.strictEqual(withQuery.uri, '//evil.com/x/')
  })

  it('should never answer with a location that starts with //', () => {
    for (const uri of ['//evil.com/', '//evil.com/x/', '///evil.com/', '/a/', '/a//b/']) {
      const response = handler(request(uri, { a: { value: '1' } }))
      assert.ok(!(response.headers.location?.value ?? '').startsWith('//'), uri)
    }
  })
})
