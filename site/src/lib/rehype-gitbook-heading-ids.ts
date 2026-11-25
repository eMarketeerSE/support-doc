import type { Root } from 'hast'
import { toString } from 'hast-util-to-string'
import { visit } from 'unist-util-visit'

const HEADING = /^h[1-6]$/
const MAX_LENGTH = 100

export const gitbookSlug = (text: string): string => {
  const slug = text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/&/g, ' and ')
    .replace(/>/g, ' greater than ')
    .replace(/</g, ' less than ')
    .replace(/[-/]/g, ' ')
    .replace(/[^\w\s$*+~.()'"!:@]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase()
    .replace(/:-/g, '-')
    .replace(/:/g, '-')
    .replace(/[^a-z0-9.-]/g, '')
    .replace(/\bad(s\b|vert)/g, 'a-d$1')
    .slice(0, MAX_LENGTH)
    .replace(/-+$/, '')
  return /^[0-9]/.test(slug) ? `id-${slug}` : slug
}

export const rehypeGitbookHeadingIds = () => (tree: Root) => {
  const countBySlug = new Map<string, number>()
  visit(tree, 'element', (element) => {
    if (!HEADING.test(element.tagName)) {
      return
    }
    const slug = gitbookSlug(toString(element))
    const count = countBySlug.get(slug) ?? 0
    countBySlug.set(slug, count + 1)
    element.properties.id = count === 0 ? slug : `${slug}-${count}`
  })
}
