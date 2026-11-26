import { compact, drop, dropWhile, find, includes, join, split, startsWith } from 'lodash-es'
import { nextFence, trimBlank } from './convert-gitbook'
import { WEB_LINK, isExternal, resolveLink } from './links'
import { mdPath } from './llms'
import { SITE_URL } from './site-files'
import type { SitePage } from './summary'

const NOTE = `> For the complete documentation index, see [llms.txt](${SITE_URL}/llms.txt).`
const CARD = /^<a class="card" href="([^"]*)"><\/a>$/
const LINK_OR_CODE = /(`+).*?\1|\]\(([^)\s]+)(?=[)\s])|<(a|img)\s[^>]*>/g
const HREF = /(\shref=")([^"]*)"/
const SRC = /(\ssrc=")([^"]*)"/
const LINK_ATTRIBUTE = /\s(?:href|src)\s*=/

const absoluteUrl = (resolved: string, page: SitePage, pages: SitePage[]): string => {
  if (isExternal(resolved)) {
    return resolved
  }
  const [targetUrl] = split(resolved, '#')
  const linkedPage = targetUrl === '' ? page : find(pages, { url: targetUrl })
  return `${SITE_URL}${linkedPage ? mdPath(linkedPage) : targetUrl}${resolved.slice(targetUrl.length)}`
}

const renderCard = (href: string, page: SitePage, pages: SitePage[], root: string): string => {
  const resolved = resolveLink(href, page, pages, root)
  const linkedPage = find(pages, { url: split(resolved, '#')[0] })
  if (linkedPage) {
    const description = linkedPage.description === '' ? '' : `: ${linkedPage.description}`
    return `- [${linkedPage.title}](${absoluteUrl(resolved, page, pages)})${description}`
  }
  if (!WEB_LINK.test(resolved)) {
    throw new Error(`${page.file}: card ${href} is not a page or an external URL`)
  }
  return `- [${new URL(resolved).host}](${resolved})`
}

const rewriteLine = (line: string, page: SitePage, pages: SitePage[], root: string): string => {
  const card = CARD.exec(line)
  if (card) {
    return renderCard(card[1], page, pages, root)
  }
  if (includes(line, 'class="card"')) {
    throw new Error(`${page.file}: card line has an unexpected form: ${line}`)
  }
  return line.replace(LINK_OR_CODE, (match, _code, markdownHref?: string, tagName?: string) => {
    if (markdownHref !== undefined) {
      return `](${absoluteUrl(resolveLink(markdownHref, page, pages, root), page, pages)}`
    }
    if (tagName !== undefined) {
      if (!(tagName === 'a' ? HREF : SRC).test(match) && LINK_ATTRIBUTE.test(match)) {
        throw new Error(`${page.file}: ${tagName} link was not rewritten: ${match}`)
      }
      return match.replace(
        tagName === 'a' ? HREF : SRC,
        (_attribute, start: string, href: string) => `${start}${absoluteUrl(resolveLink(href, page, pages, root), page, pages)}"`,
      )
    }
    return match
  })
}

export const renderMarkdown = (page: SitePage, body: string, pages: SitePage[], root: string): string => {
  const lines = dropWhile(split(body, '\n'), (line) => line.trim() === '')
  const content = startsWith(lines[0], '# ') ? drop(lines) : lines
  const output: string[] = []
  let fence: string | null = null
  for (const line of content) {
    const insideCode = fence !== null
    fence = nextFence(line, fence)
    output.push(insideCode || fence !== null ? line : rewriteLine(line, page, pages, root))
  }
  if (fence !== null) {
    throw new Error(`${page.file}: unclosed code fence`)
  }
  return `${join(compact([NOTE, `# ${page.title}`, page.description, join(trimBlank(output), '\n')]), '\n\n')}\n`
}
