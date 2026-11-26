import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import {
  difference,
  endsWith,
  filter,
  flatMap,
  has,
  includes,
  keys,
  map,
  reject,
  size,
  split,
  startsWith,
  sumBy,
  toPairs,
  union,
  values,
} from 'lodash-es'
import { nextFence } from '../src/lib/convert-gitbook.ts'
import { EMMA_ARTICLE_LINE, EMMA_SECTIONS, mdPath } from '../src/lib/llms.ts'
import { Space, type SitePage } from '../src/lib/summary.ts'

const PAGEFIND_FILES = ['pagefind-entry.json', 'pagefind-component-ui.js', 'pagefind-component-ui.css']
const MARKDOWN_TARGET_OR_CODE = /(`+).*?\1|\]\(([^)\s]+)/g
const ABSOLUTE_TARGET = /^(https?:|#|mailto:)/

export const isRedirectPage = (html: string): boolean =>
  html.includes('<title>Redirecting to:') && html.includes('<meta http-equiv="refresh"')

export const checkLlmsTxt = (text: string, pages: SitePage[]): string[] => {
  const articleLines = flatMap(split(text, /^(?=## )/m), (block) => {
    const [heading, ...lines] = split(block, '\n')
    return includes(map(EMMA_SECTIONS, 'heading'), heading) ? filter(lines, (line) => startsWith(line, '- [')) : []
  })
  const formatProblems = map(
    reject(articleLines, (line) => EMMA_ARTICLE_LINE.test(line)),
    (line) => `dist/llms.txt line is not in eMMa's format: ${line}`,
  )
  const pageCount = size(reject(pages, { space: Space.Swedish }))
  return size(articleLines) === pageCount
    ? formatProblems
    : [...formatProblems, `dist/llms.txt has ${size(articleLines)} article lines but the site has ${pageCount} pages outside the Swedish space`]
}

const checkPagefind = (dist: string, pages: SitePage[]): string[] => {
  const missingFiles = flatMap(PAGEFIND_FILES, (name) =>
    existsSync(join(dist, 'pagefind', name)) ? [] : [`dist/pagefind/${name} is missing`],
  )
  if (!existsSync(join(dist, 'pagefind', 'pagefind-entry.json'))) {
    return missingFiles
  }
  const entry = JSON.parse(readFileSync(join(dist, 'pagefind', 'pagefind-entry.json'), 'utf8'))
  if (!has(entry, 'languages.en') || !has(entry, 'languages.sv')) {
    return [...missingFiles, 'dist/pagefind/pagefind-entry.json does not have the languages en and sv']
  }
  const indexedCount = sumBy(values(entry.languages), 'page_count')
  return indexedCount === size(pages)
    ? missingFiles
    : [...missingFiles, `dist/pagefind/pagefind-entry.json indexes ${indexedCount} pages but the site has ${size(pages)}`]
}

export const checkMarkdownLinks = (file: string, text: string): string[] => {
  const problems: string[] = []
  let fence: string | null = null
  for (const line of split(text, '\n')) {
    const insideCode = fence !== null
    fence = nextFence(line, fence)
    if (insideCode || fence !== null) {
      continue
    }
    for (const match of line.matchAll(MARKDOWN_TARGET_OR_CODE)) {
      if (match[2] !== undefined && !ABSOLUTE_TARGET.test(match[2])) {
        problems.push(`${file} has a relative link: ${match[2]}`)
      }
    }
  }
  return problems
}

export const checkBuild = (
  dist: string,
  pages: SitePage[],
  snapshot: string[],
  redirects: Record<string, string>,
): string[] => {
  const missingFiles = flatMap(['sitemap.xml', 'robots.txt', 'llms.txt'], (name) =>
    existsSync(join(dist, name)) ? [] : [`dist/${name} is missing`],
  )
  const urlProblems = flatMap(union(snapshot, keys(redirects)), (url) => {
    const file = join(dist, url === '/' ? 'index.html' : `${url}.html`)
    if (!existsSync(file) && url in redirects) {
      return [`${url} is in site/redirects.json but the build has no redirect page there`]
    }
    if (!existsSync(file)) {
      return [`${url} was live and now has no page. If you renamed or removed it, add a line to site/redirects.json.`]
    }
    const isRedirectFile = isRedirectPage(readFileSync(file, 'utf8'))
    if (url in redirects && !isRedirectFile) {
      return [`${url} is a redirect source but the build has a page there`]
    }
    if (!(url in redirects) && isRedirectFile) {
      return [`${url} is a redirect file but is not in the redirects list`]
    }
    return []
  })
  const targetProblems = flatMap(toPairs(redirects), ([source, target]) => {
    const file = join(dist, target === '/' ? 'index.html' : `${target}.html`)
    const isPage = existsSync(file) && !isRedirectPage(readFileSync(file, 'utf8'))
    return isPage ? [] : [`${source} redirects to ${target}, which is not a page`]
  })
  const llmsProblems = existsSync(join(dist, 'llms.txt'))
    ? checkLlmsTxt(readFileSync(join(dist, 'llms.txt'), 'utf8'), pages)
    : []
  const markdownFiles = filter(readdirSync(dist, { recursive: true, encoding: 'utf8' }), (file) => endsWith(file, '.md'))
  const missingMarkdown = flatMap(pages, (page) =>
    existsSync(join(dist, mdPath(page))) ? [] : [`${page.file}: dist${mdPath(page)} is missing`],
  )
  const strayMarkdown = map(
    difference(map(markdownFiles, (file) => `/${file}`), map(pages, mdPath)),
    (file) => `dist${file} belongs to no page`,
  )
  const markdownProblems = flatMap(markdownFiles, (file) =>
    checkMarkdownLinks(`dist/${file}`, readFileSync(join(dist, file), 'utf8')),
  )
  return [
    ...missingFiles,
    ...llmsProblems,
    ...missingMarkdown,
    ...strayMarkdown,
    ...markdownProblems,
    ...checkPagefind(dist, pages),
    ...urlProblems,
    ...targetProblems,
  ]
}
