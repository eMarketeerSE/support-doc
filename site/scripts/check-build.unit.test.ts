import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { after, before, describe, it } from 'node:test'
import { checkBuild } from './check-build.ts'

const REDIRECT_HTML =
  '<!doctype html><title>Redirecting to: /new</title><meta http-equiv="refresh" content="0;url=/new">'
const VALID_LLMS = [
  '# eMarketeer Support',
  '',
  '## Support docs',
  '',
  '- [Welcome](https://support.emarketeer.com/overview.md): Home.',
  '',
  '## Legal',
  '',
  '- [Legal](https://support.emarketeer.com/legal/legal.md)',
  '',
].join('\n')
let root: string
let distCount = 0

const writeFile = (dist: string, relativePath: string, content: string): void => {
  mkdirSync(dirname(join(dist, relativePath)), { recursive: true })
  writeFileSync(join(dist, relativePath), content)
}

const createDist = (): string => {
  const dist = join(root, `dist-${distCount++}`)
  writeFile(dist, 'sitemap.xml', '<urlset/>')
  writeFile(dist, 'robots.txt', 'User-agent: *')
  writeFile(dist, 'llms.txt', VALID_LLMS)
  return dist
}

describe('checkBuild', () => {
  before(() => {
    root = mkdtempSync(join(tmpdir(), 'check-build-'))
  })

  after(() => {
    rmSync(root, { recursive: true, force: true })
  })

  it('should accept a snapshot URL that is a page', () => {
    const dist = createDist()
    writeFile(dist, 'index.html', '<p>home</p>')
    writeFile(dist, 'a/b.html', '<p>page</p>')
    assert.deepEqual(checkBuild(dist, ['/', '/a/b'], {}), [])
  })

  it('should accept a snapshot URL that is a redirect source', () => {
    const dist = createDist()
    writeFile(dist, 'old/page.html', REDIRECT_HTML)
    writeFile(dist, 'new.html', '<p>new</p>')
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
    writeFile(dist, 'new.html', '<p>new</p>')
    const problems = checkBuild(dist, ['/old/page'], { '/old/page': '/new' })
    assert.deepStrictEqual(problems, ['/old/page is a redirect source but the build has a page there'])
  })

  it('should report a missing sitemap.xml and robots.txt', () => {
    const dist = join(root, `dist-${distCount++}`)
    mkdirSync(dist)
    const problems = checkBuild(dist, [], {})
    assert.deepStrictEqual(problems, ['dist/sitemap.xml is missing', 'dist/robots.txt is missing', 'dist/llms.txt is missing'])
  })

  it('should report a redirect whose target is not a page', () => {
    const dist = createDist()
    writeFile(dist, 'old/a.html', REDIRECT_HTML)
    writeFile(dist, 'old/b.html', REDIRECT_HTML)
    writeFile(dist, 'index.html', '<p>home</p>')
    const redirects = { '/old/a': '/gone', '/old/b': '/old/a' }
    assert.deepStrictEqual(checkBuild(dist, [], redirects), [
      '/old/a redirects to /gone, which is not a page',
      '/old/b redirects to /old/a, which is not a page',
    ])
  })

  it('should accept a redirect to the home page', () => {
    const dist = createDist()
    writeFile(dist, 'old/a.html', REDIRECT_HTML)
    writeFile(dist, 'index.html', '<p>home</p>')
    assert.deepStrictEqual(checkBuild(dist, [], { '/old/a': '/' }), [])
  })

  it('should treat a page that shows a refresh tag in a code block as a page', () => {
    const dist = createDist()
    writeFile(dist, 'guide.html', '<title>Guide</title><pre><code>&lt;meta http-equiv="refresh"&gt;</code></pre>')
    writeFile(dist, 'raw.html', '<title>Guide</title><pre><meta http-equiv="refresh" content="0"></pre>')
    assert.deepStrictEqual(checkBuild(dist, ['/guide', '/raw'], {}), [])
  })

  it('should report a redirect source with no file in the build', () => {
    const dist = createDist()
    writeFile(dist, 'new.html', '<p>new</p>')
    assert.deepStrictEqual(checkBuild(dist, [], { '/old/page': '/new' }), [
      '/old/page is in site/redirects.json but the build has no redirect page there',
    ])
  })

  it('should report a missing llms.txt', () => {
    const dist = createDist()
    rmSync(join(dist, 'llms.txt'))
    assert.deepEqual(checkBuild(dist, [], {}), ['dist/llms.txt is missing'])
  })

  it('should report a list line that eMMa cannot read', () => {
    const dist = createDist()
    writeFile(
      dist,
      'llms.txt',
      '# eMarketeer Support\n\n## Changelog\n\n- [Bad](https://support.emarketeer.com/changelog/page): No md\n- [Good](https://support.emarketeer.com/changelog/ok.md)\n',
    )
    assert.deepEqual(checkBuild(dist, [], {}), [
      'dist/llms.txt line is not in eMMa\'s format: - [Bad](https://support.emarketeer.com/changelog/page): No md',
    ])
  })

  it('should ignore list lines outside the three eMMa sections', () => {
    const dist = createDist()
    writeFile(dist, 'llms.txt', '# eMarketeer Support\n\n## Other\n\n- not a link\n')
    assert.deepEqual(checkBuild(dist, [], {}), [])
  })
})
