import path from 'node:path'
import type { Element, Root } from 'hast'
import { find } from 'lodash-es'
import { visit, EXIT } from 'unist-util-visit'
import type { SitePage } from './summary'

export const rehypePageDescription = (options: { pages: SitePage[]; root: string }) => (tree: Root, file: { path: string }) => {
  const pageFile = path.relative(options.root, file.path).split(path.sep).join('/')
  const description = find(options.pages, { file: pageFile })?.description
  if (!description) {
    return
  }
  const paragraph: Element = {
    type: 'element',
    tagName: 'p',
    properties: { className: ['page-description'] },
    children: [{ type: 'text', value: description }],
  }
  visit(tree, 'element', (element, index, parent) => {
    if (element.tagName !== 'h1' || !parent || index === undefined) {
      return
    }
    parent.children.splice(index + 1, 0, paragraph)
    return EXIT
  })
}
