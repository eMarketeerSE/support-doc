import path from 'node:path'
import type { Root } from 'hast'
import { toString } from 'hast-util-to-string'
import { find, includes } from 'lodash-es'
import { visit } from 'unist-util-visit'
import { WEB_LINK, resolveLink } from './links'
import type { SitePage } from './summary'

export const rehypeSiteLinks = (options: { pages: SitePage[]; root: string }) => (tree: Root, file: { path: string }) => {
  const pageFile = path.relative(options.root, file.path).split(path.sep).join('/')
  const page = find(options.pages, { file: pageFile })
  if (!page) {
    throw new Error(`${pageFile} is not listed in any SUMMARY.md`)
  }

  visit(tree, 'element', (element) => {
    if ('dataAction' in element.properties) {
      throw new Error(`${pageFile}: data-action attribute on ${element.tagName} is not allowed`)
    }
    if (element.tagName === 'a' && typeof element.properties.href === 'string') {
      const rawHref = element.properties.href
      element.properties.href = resolveLink(rawHref, page, options.pages, options.root)
      if (WEB_LINK.test(element.properties.href)) {
        element.properties.target = '_blank'
        element.properties.rel = ['noopener']
      }
      const linkedPage = find(options.pages, { url: element.properties.href.split('#')[0] })
      const onlyChild = element.children.length === 1 ? element.children[0] : undefined
      if (linkedPage && !includes(rawHref, '#') && onlyChild?.type === 'text' && onlyChild.value === path.posix.basename(rawHref)) {
        element.children = [{ type: 'text', value: linkedPage.title }]
      }
      if (includes(element.properties.className as string[] | undefined, 'card') && toString(element).trim() === '') {
        if (!linkedPage && !WEB_LINK.test(element.properties.href)) {
          throw new Error(`${pageFile}: card ${rawHref} is not a page or an external URL`)
        }
        const title = linkedPage?.title ?? new URL(element.properties.href).host
        element.children = [{ type: 'element', tagName: 'strong', properties: {}, children: [{ type: 'text', value: title }] }]
        if (linkedPage?.description) {
          element.children.push({ type: 'element', tagName: 'span', properties: {}, children: [{ type: 'text', value: linkedPage.description }] })
        }
      }
    }
    if (element.tagName === 'img' && typeof element.properties.src === 'string') {
      element.properties.src = resolveLink(element.properties.src, page, options.pages, options.root)
    }
  })
}
