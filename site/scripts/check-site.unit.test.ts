import assert from 'node:assert/strict'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { filter, map } from 'lodash-es'
import { CSP, Expect, judgeResponse, listImagePaths, listSiteChecks, MISSING_PATH, type SiteResponse } from './check-site.ts'

const SITE_HTML = '<html data-site="support-doc"><p>page</p></html>'
const NOT_FOUND_HTML = '<html data-site="support-doc"><title>Page not found - eMarketeer Support</title></html>'
const REDIRECT_HTML =
  '<!doctype html><title>Redirecting to: /new</title><meta http-equiv="refresh" content="0;url=/new">'

const respond = (overrides: Partial<SiteResponse>): SiteResponse => ({
  status: 200,
  location: null,
  body: SITE_HTML,
  headers: {},
  ...overrides,
})

describe('listImagePaths', () => {
  it('should collect each absolute image src once and skip relative ones', () => {
    const root = mkdtempSync(join(tmpdir(), 'check-site-'))
    try {
      writeFileSync(join(root, 'a.html'), '<img src="/.gitbook/assets/a.png"><img src="../x.png"><img src="//cdn.example.com/y.png">')
      writeFileSync(join(root, 'b.html'), '<img alt="b" src="/.gitbook/assets/a.png"><img src="/changelog/.gitbook/assets/b%20c.png">')
      const paths = listImagePaths([join(root, 'a.html'), join(root, 'b.html')])
      assert.deepEqual([...paths].sort(), ['/.gitbook/assets/a.png', '/changelog/.gitbook/assets/b%20c.png'])
    } finally {
      rmSync(root, { recursive: true, force: true })
    }
  })
})

describe('listSiteChecks', () => {
  it('should list a slash check for every snapshot URL but /', () => {
    const checks = listSiteChecks(['/', '/a', '/b/c'], {}, [])
    const slashPaths = map(filter(checks, { expect: Expect.SlashRedirect }), 'path')
    assert.deepEqual(slashPaths, ['/a/', '/b/c/'])
  })

  it('should check a redirect source as a redirect page, not as a page', () => {
    const checks = listSiteChecks(['/docs'], { '/docs': '/' }, [])
    assert.deepEqual(filter(checks, { path: '/docs' }), [{ path: '/docs', expect: Expect.RedirectPage }])
  })

  it('should add file, not found and headers checks', () => {
    const checks = listSiteChecks(['/', '/a'], {}, ['/.gitbook/assets/a.png'])
    assert.deepEqual(filter(checks, { expect: Expect.File }), [{ path: '/.gitbook/assets/a.png', expect: Expect.File }])
    assert.deepEqual(filter(checks, { expect: Expect.NotFound }), [{ path: MISSING_PATH, expect: Expect.NotFound }])
    assert.deepEqual(filter(checks, { expect: Expect.Headers }), [{ path: '/', expect: Expect.Headers }])
    assert.deepEqual(filter(checks, { expect: Expect.Page }), [
      { path: '/', expect: Expect.Page },
      { path: '/a', expect: Expect.Page },
    ])
  })
})

describe('judgeResponse', () => {
  it('should pass a page with the site marker', () => {
    assert.equal(judgeResponse({ path: '/x', expect: Expect.Page }, respond({})), null)
  })

  it('should fail a page without the site marker', () => {
    const problem = judgeResponse({ path: '/x', expect: Expect.Page }, respond({ body: '<html></html>' }))
    assert.match(problem ?? '', /data-site/)
  })

  it('should name the path and the status in a problem line', () => {
    const problem = judgeResponse({ path: '/x', expect: Expect.Page }, respond({ status: 404 }))
    assert.ok(problem?.includes('/x'))
    assert.ok(problem?.includes('404'))
  })

  it('should pass a redirect page', () => {
    assert.equal(judgeResponse({ path: '/x', expect: Expect.RedirectPage }, respond({ body: REDIRECT_HTML })), null)
  })

  it('should fail a redirect source that serves a page', () => {
    const problem = judgeResponse({ path: '/x', expect: Expect.RedirectPage }, respond({}))
    assert.match(problem ?? '', /not an Astro redirect page/)
  })

  it('should pass a slash redirect to the path without the slash', () => {
    const response = respond({ status: 301, location: '/a/b' })
    assert.equal(judgeResponse({ path: '/a/b/', expect: Expect.SlashRedirect }, response), null)
  })

  it('should fail a slash redirect that is a 200 or points elsewhere', () => {
    const ok = judgeResponse({ path: '/a/', expect: Expect.SlashRedirect }, respond({}))
    assert.match(ok ?? '', /status 200, expected 301/)
    const elsewhere = respond({ status: 301, location: '/b' })
    const moved = judgeResponse({ path: '/a/', expect: Expect.SlashRedirect }, elsewhere)
    assert.match(moved ?? '', /location is \/b, expected \/a$/)
  })

  it('should pass a file with status 200 and fail one with 404', () => {
    assert.equal(judgeResponse({ path: '/a.png', expect: Expect.File }, respond({ body: '' })), null)
    const problem = judgeResponse({ path: '/a.png', expect: Expect.File }, respond({ status: 404 }))
    assert.match(problem ?? '', /status 404, expected 200/)
  })

  it('should pass the 404 page answered with status 404', () => {
    assert.equal(judgeResponse({ path: MISSING_PATH, expect: Expect.NotFound }, respond({ status: 404, body: NOT_FOUND_HTML })), null)
  })

  it('should fail an ordinary page answered with status 404', () => {
    const problem = judgeResponse({ path: MISSING_PATH, expect: Expect.NotFound }, respond({ status: 404 }))
    assert.match(problem ?? '', /not the 404 page/)
  })

  it('should fail a slash redirect to another host with the same path', () => {
    const problem = judgeResponse({ path: '/a/', expect: Expect.SlashRedirect }, respond({ status: 301, location: 'https://attacker.example/a' }))
    assert.match(problem ?? '', /location is https:\/\/attacker\.example\/a, expected \/a$/)
  })

  it('should fail a 404 check that answers 200 or lacks the marker', () => {
    const found = judgeResponse({ path: MISSING_PATH, expect: Expect.NotFound }, respond({}))
    assert.match(found ?? '', /status 200, expected 404/)
    const unmarked = judgeResponse({ path: MISSING_PATH, expect: Expect.NotFound }, respond({ status: 404, body: 'x' }))
    assert.match(unmarked ?? '', /not the 404 page/)
  })

  it('should pass the exact CSP without x-frame-options', () => {
    const response = respond({ headers: { 'content-security-policy': CSP } })
    assert.equal(judgeResponse({ path: '/', expect: Expect.Headers }, response), null)
  })

  it('should fail a wrong CSP or an x-frame-options header', () => {
    const wrong = respond({ headers: { 'content-security-policy': "default-src 'self'" } })
    assert.match(judgeResponse({ path: '/', expect: Expect.Headers }, wrong) ?? '', /content-security-policy/)
    const framed = respond({ headers: { 'content-security-policy': CSP, 'x-frame-options': 'DENY' } })
    assert.match(judgeResponse({ path: '/', expect: Expect.Headers }, framed) ?? '', /x-frame-options/)
  })
})
