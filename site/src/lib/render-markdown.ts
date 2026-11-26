import { compact, dropWhile, find, join, split, startsWith } from 'lodash-es'
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
  return line.replace(LINK_OR_CODE, (match, _code, markdownHref?: string, tagName?: string) => {
    if (markdownHref !== undefined) {
      return `](${absoluteUrl(resolveLink(markdownHref, page, pages, root), page, pages)}`
    }
    if (tagName !== undefined) {
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
  const content = startsWith(lines[0], '# ') ? lines.slice(1) : lines
  const output: string[] = []
  let fence: string | null = null
  for (const line of content) {
    const insideCode = fence !== null
    fence = nextFence(line, fence)
    output.push(insideCode || fence !== null ? line : rewriteLine(line, page, pages, root))
  }
  return `${join(compact([NOTE, `# ${page.title}`, page.description, join(trimBlank(output), '\n')]), '\n\n')}\n`
}
