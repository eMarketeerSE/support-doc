import path from 'node:path'
import type { Root } from 'hast'
import { toString } from 'hast-util-to-string'
import { find, includes, isEmpty } from 'lodash-es'
import { visit } from 'unist-util-visit'
import { resolveLink } from './links'
import type { SitePage } from './summary'

const WEB_LINK = /^https?:/i

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
      if (linkedPage && toString(element) === path.posix.basename(rawHref.split('#')[0])) {
        element.children = [{ type: 'text', value: linkedPage.title }]
      }
      if (includes(element.properties.className as string[] | undefined, 'card') && isEmpty(element.children)) {
        const target = find(options.pages, { url: element.properties.href.split('#')[0] })
        const title = target?.title ?? new URL(element.properties.href).host
        element.children = [{ type: 'element', tagName: 'strong', properties: {}, children: [{ type: 'text', value: title }] }]
        if (target?.description) {
          element.children.push({ type: 'element', tagName: 'span', properties: {}, children: [{ type: 'text', value: target.description }] })
        }
      }
    }
    if (element.tagName === 'img' && typeof element.properties.src === 'string') {
      element.properties.src = resolveLink(element.properties.src, page, options.pages, options.root)
    }
  })
}
