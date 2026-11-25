import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { checkBuild } from './check-build.ts'

const REDIRECT_HTML = '<meta http-equiv="refresh" content="0;url=/new">'

const writeFile = (dist: string, relativePath: string, content: string): void => {
  mkdirSync(dirname(join(dist, relativePath)), { recursive: true })
  writeFileSync(join(dist, relativePath), content)
}

const createDist = (): string => {
  const dist = mkdtempSync(join(tmpdir(), 'check-build-'))
  writeFile(dist, 'sitemap.xml', '<urlset/>')
  writeFile(dist, 'robots.txt', 'User-agent: *')
  return dist
}

describe('checkBuild', () => {
  it('should accept a snapshot URL that is a page', () => {
    const dist = createDist()
    writeFile(dist, 'index.html', '<p>home</p>')
    writeFile(dist, 'a/b.html', '<p>page</p>')
    assert.deepEqual(checkBuild(dist, ['/', '/a/b'], {}), [])
  })

  it('should accept a snapshot URL that is a redirect source', () => {
    const dist = createDist()
    writeFile(dist, 'old/page.html', REDIRECT_HTML)
    assert.deepEqual(checkBuild(dist, ['/old/page'], { '/old/page': '/new' }), [])
  })

  it('should report a snapshot URL with no page and no redirect', () => {
    const dist = createDist()
    const problems = checkBuild(dist, ['/missing/page'], {})
    assert.deepEqual(problems, [
      '/missing/page was live and now has no page. If you renamed or removed it, add a line to site/redirects.json.',
    ])
  })

  it('should report a snapshot URL that is a refresh file but not in the redirects list', () => {
    const dist = createDist()
    writeFile(dist, 'old/page.html', REDIRECT_HTML)
    const problems = checkBuild(dist, ['/old/page'], {})
    assert.deepEqual(problems, ['/old/page is a redirect file but is not in the redirects list'])
  })

  it('should report a redirect source that is also a page', () => {
    const dist = createDist()
    writeFile(dist, 'old/page.html', '<p>real page</p>')
    const problems = checkBuild(dist, ['/old/page'], { '/old/page': '/new' })
    assert.ok(problems.some((problem) => problem.includes('/old/page')))
  })

  it('should report a missing sitemap.xml and robots.txt', () => {
    const dist = mkdtempSync(join(tmpdir(), 'check-build-'))
    const problems = checkBuild(dist, [], {})
    assert.equal(problems.length, 2)
    assert.ok(problems.some((problem) => problem.includes('sitemap.xml')))
    assert.ok(problems.some((problem) => problem.includes('robots.txt')))
  })
})
