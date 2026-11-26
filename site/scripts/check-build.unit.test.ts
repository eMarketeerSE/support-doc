import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { after, before, describe, it } from 'node:test'
import { join as joinLines } from 'lodash-es'
import { Space, type SitePage } from '../src/lib/summary.ts'
import { checkBuild } from './check-build.ts'

const REDIRECT_HTML =
  '<!doctype html><title>Redirecting to: /new</title><meta http-equiv="refresh" content="0;url=/new">'
const VALID_LLMS = joinLines(
  [
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
  ],
  '\n',
)
const PAGES: SitePage[] = [
  { url: '/', file: 'overview.md', title: 'Welcome', description: 'Home.', space: Space.English },
  { url: '/legal', file: 'legal/legal.md', title: 'Legal', description: '', space: Space.Legal },
  { url: '/docs/docs_se', file: 'sv/overview.md', title: 'Välkommen', description: '', space: Space.Swedish },
]
const PAGEFIND_ENTRY = JSON.stringify({ version: '1.6.0', languages: { en: { page_count: 2 }, sv: { page_count: 1 } } })
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
  writeFile(dist, 'overview.md', '# Welcome\n')
  writeFile(dist, 'legal/legal.md', '# Legal\n')
  writeFile(dist, 'docs/docs_se/overview.md', '# Välkommen\n')
  writeFile(dist, 'pagefind/pagefind-entry.json', PAGEFIND_ENTRY)
  writeFile(dist, 'pagefind/pagefind-component-ui.js', '')
  writeFile(dist, 'pagefind/pagefind-component-ui.css', '')
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
    assert.deepEqual(checkBuild(dist, PAGES, ['/', '/a/b'], {}), [])
  })

  it('should accept a snapshot URL that is a redirect source', () => {
    const dist = createDist()
    writeFile(dist, 'old/page.html', REDIRECT_HTML)
    writeFile(dist, 'new.html', '<p>new</p>')
    assert.deepEqual(checkBuild(dist, PAGES, ['/old/page'], { '/old/page': '/new' }), [])
  })

  it('should report a snapshot URL with no page and no redirect', () => {
    const dist = createDist()
    const problems = checkBuild(dist, PAGES, ['/missing/page'], {})
    assert.deepEqual(problems, [
      '/missing/page was live and now has no page. If you renamed or removed it, add a line to site/redirects.json.',
    ])
  })

  it('should report a snapshot URL that is a refresh file but not in the redirects list', () => {
    const dist = createDist()
    writeFile(dist, 'old/page.html', REDIRECT_HTML)
    const problems = checkBuild(dist, PAGES, ['/old/page'], {})
    assert.deepEqual(problems, ['/old/page is a redirect file but is not in the redirects list'])
  })

  it('should report a redirect source that is also a page', () => {
    const dist = createDist()
    writeFile(dist, 'old/page.html', '<p>real page</p>')
    writeFile(dist, 'new.html', '<p>new</p>')
    const problems = checkBuild(dist, PAGES, ['/old/page'], { '/old/page': '/new' })
    assert.deepStrictEqual(problems, ['/old/page is a redirect source but the build has a page there'])
  })

  it('should report a missing sitemap.xml and robots.txt', () => {
    const dist = createDist()
    rmSync(join(dist, 'sitemap.xml'))
    rmSync(join(dist, 'robots.txt'))
    assert.deepStrictEqual(checkBuild(dist, PAGES, [], {}), ['dist/sitemap.xml is missing', 'dist/robots.txt is missing'])
  })

  it('should report a redirect whose target is not a page', () => {
    const dist = createDist()
    writeFile(dist, 'old/a.html', REDIRECT_HTML)
    writeFile(dist, 'old/b.html', REDIRECT_HTML)
    writeFile(dist, 'index.html', '<p>home</p>')
    const redirects = { '/old/a': '/gone', '/old/b': '/old/a' }
    assert.deepStrictEqual(checkBuild(dist, PAGES, [], redirects), [
      '/old/a redirects to /gone, which is not a page',
      '/old/b redirects to /old/a, which is not a page',
    ])
  })

  it('should accept a redirect to the home page', () => {
    const dist = createDist()
    writeFile(dist, 'old/a.html', REDIRECT_HTML)
    writeFile(dist, 'index.html', '<p>home</p>')
    assert.deepStrictEqual(checkBuild(dist, PAGES, [], { '/old/a': '/' }), [])
  })

  it('should treat a page that shows a refresh tag in a code block as a page', () => {
    const dist = createDist()
    writeFile(dist, 'guide.html', '<title>Guide</title><pre><code>&lt;meta http-equiv="refresh"&gt;</code></pre>')
    writeFile(dist, 'raw.html', '<title>Guide</title><pre><meta http-equiv="refresh" content="0"></pre>')
    assert.deepStrictEqual(checkBuild(dist, PAGES, ['/guide', '/raw'], {}), [])
  })

  it('should report a redirect source with no file in the build', () => {
    const dist = createDist()
    writeFile(dist, 'new.html', '<p>new</p>')
    assert.deepStrictEqual(checkBuild(dist, PAGES, [], { '/old/page': '/new' }), [
      '/old/page is in site/redirects.json but the build has no redirect page there',
    ])
  })

  it('should report a missing llms.txt', () => {
    const dist = createDist()
    rmSync(join(dist, 'llms.txt'))
    assert.deepEqual(checkBuild(dist, PAGES, [], {}), ['dist/llms.txt is missing'])
  })

  it('should report a list line that eMMa cannot read', () => {
    const dist = createDist()
    writeFile(
      dist,
      'llms.txt',
      joinLines(
        [
          '# eMarketeer Support',
          '',
          '## Changelog',
          '',
          '- [Bad](https://support.emarketeer.com/changelog/page): No md',
          '- [Good](https://support.emarketeer.com/changelog/ok.md)',
          '',
        ],
        '\n',
      ),
    )
    assert.deepEqual(checkBuild(dist, PAGES, [], {}), [
      "dist/llms.txt line is not in eMMa's format: - [Bad](https://support.emarketeer.com/changelog/page): No md",
    ])
  })

  it('should ignore list lines outside the three eMMa sections', () => {
    const dist = createDist()
    writeFile(dist, 'llms.txt', `${VALID_LLMS}\n## Other\n\n- [x](nope)\n`)
    assert.deepEqual(checkBuild(dist, PAGES, [], {}), [])
  })

  it('should report a relative Markdown link in a .md file with the file name', () => {
    const dist = createDist()
    writeFile(dist, 'overview.md', '# A\n\nSee [B](../b.md) and [C](https://support.emarketeer.com/c.md).\n')
    assert.deepEqual(checkBuild(dist, PAGES, [], {}), ['dist/overview.md has a relative link: ../b.md'])
  })

  it('should accept absolute, fragment and mailto links and links inside code in a .md file', () => {
    const dist = createDist()
    writeFile(
      dist,
      'overview.md',
      joinLines(['# A', '', '[x](https://a.com) [y](http://b.com) [z](#part) [m](mailto:a@b.com) `[c](c.md)`', '', '```', '[d](d.md)', '```', ''], '\n'),
    )
    assert.deepEqual(checkBuild(dist, PAGES, [], {}), [])
  })

  it('should report a page whose .md file is missing, Swedish included, with the page file', () => {
    const dist = createDist()
    rmSync(join(dist, 'docs/docs_se/overview.md'))
    assert.deepEqual(checkBuild(dist, PAGES, [], {}), ['sv/overview.md: dist/docs/docs_se/overview.md is missing'])
  })

  it('should report a .md file that belongs to no page', () => {
    const dist = createDist()
    writeFile(dist, 'guides/stray.md', '# Stray\n')
    assert.deepEqual(checkBuild(dist, PAGES, [], {}), ['dist/guides/stray.md belongs to no page'])
  })

  it('should report when llms.txt lists fewer articles than the pages outside the Swedish space', () => {
    const dist = createDist()
    writeFile(dist, 'llms.txt', '# eMarketeer Support\n\n## Legal\n\n- [Legal](https://support.emarketeer.com/legal/legal.md)\n')
    assert.deepEqual(checkBuild(dist, PAGES, [], {}), [
      'dist/llms.txt has 1 article lines but the site has 2 pages outside the Swedish space',
    ])
  })

  it('should report missing Pagefind files', () => {
    const dist = createDist()
    rmSync(join(dist, 'pagefind'), { recursive: true })
    assert.deepEqual(checkBuild(dist, PAGES, [], {}), [
      'dist/pagefind/pagefind-entry.json is missing',
      'dist/pagefind/pagefind-component-ui.js is missing',
      'dist/pagefind/pagefind-component-ui.css is missing',
    ])
  })

  it('should report a search index without the Swedish language', () => {
    const dist = createDist()
    writeFile(dist, 'pagefind/pagefind-entry.json', JSON.stringify({ languages: { en: { page_count: 3 } } }))
    assert.deepEqual(checkBuild(dist, PAGES, [], {}), [
      'dist/pagefind/pagefind-entry.json does not have the languages en and sv',
    ])
  })

  it('should report a search index whose page count differs from the number of pages', () => {
    const dist = createDist()
    writeFile(dist, 'pagefind/pagefind-entry.json', JSON.stringify({ languages: { en: { page_count: 2 }, sv: { page_count: 0 } } }))
    assert.deepEqual(checkBuild(dist, PAGES, [], {}), [
      'dist/pagefind/pagefind-entry.json indexes 2 pages but the site has 3',
    ])
  })
})
