import path from 'node:path'
import type { Root } from 'hast'
import { find } from 'lodash-es'
import { visit } from 'unist-util-visit'
import { resolveLink } from './links'
import { REPO_ROOT, type SitePage } from './summary'

const WEB_LINK = /^https?:/i

export const rehypeSiteLinks = (options: { pages: SitePage[] }) => (tree: Root, file: { path: string }) => {
  const pageFile = path.relative(REPO_ROOT, file.path).split(path.sep).join('/')
  const page = find(options.pages, { file: pageFile })
  if (!page) {
    throw new Error(`${pageFile} is not listed in any SUMMARY.md`)
  }

  visit(tree, 'element', (element) => {
    if (element.tagName === 'a' && typeof element.properties.href === 'string') {
      element.properties.href = resolveLink(element.properties.href, page, options.pages)
      if (WEB_LINK.test(element.properties.href)) {
        element.properties.target = '_blank'
        element.properties.rel = ['noopener']
      }
    }
    if (element.tagName === 'img' && typeof element.properties.src === 'string') {
      element.properties.src = resolveLink(element.properties.src, page, options.pages)
    }
  })
}
