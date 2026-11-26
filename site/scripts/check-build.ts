import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { endsWith, filter, flatMap, includes, keys, split, startsWith, toPairs, union } from 'lodash-es'
import { nextFence } from '../src/lib/convert-gitbook.ts'
import { EMMA_ARTICLE_LINE } from '../src/lib/llms.ts'

const EMMA_SECTIONS = ['## Support docs', '## Changelog', '## Legal']
const MARKDOWN_TARGET_OR_CODE = /(`+).*?\1|\]\(([^)\s]+)/g
const ABSOLUTE_TARGET = /^(https?:|#|mailto:)/

export const isRedirectPage = (html: string): boolean =>
  html.includes('<title>Redirecting to:') && html.includes('<meta http-equiv="refresh"')

export const checkLlmsTxt = (text: string): string[] =>
  flatMap(split(text, /^(?=## )/m), (block) => {
    const [heading, ...lines] = split(block, '\n')
    if (!includes(EMMA_SECTIONS, heading)) {
      return []
    }
    return flatMap(lines, (line) =>
      startsWith(line, '- [') && !EMMA_ARTICLE_LINE.test(line)
        ? [`dist/llms.txt line is not in eMMa's format: ${line}`]
        : [],
    )
  })

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

export const checkBuild = (dist: string, snapshot: string[], redirects: Record<string, string>): string[] => {
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
    ? checkLlmsTxt(readFileSync(join(dist, 'llms.txt'), 'utf8'))
    : []
  const markdownProblems = flatMap(
    filter(readdirSync(dist, { recursive: true, encoding: 'utf8' }), (file) => endsWith(file, '.md')),
    (file) => checkMarkdownLinks(`dist/${file}`, readFileSync(join(dist, file), 'utf8')),
  )
  return [...missingFiles, ...llmsProblems, ...markdownProblems, ...urlProblems, ...targetProblems]
}
