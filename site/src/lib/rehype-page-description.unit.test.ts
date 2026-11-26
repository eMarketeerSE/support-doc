import assert from 'node:assert'
import { describe, it } from 'node:test'
import type { Element, Root } from 'hast'
import { Space } from './summary'
import { rehypePageDescription } from './rehype-page-description'

const element = (tagName: string, text: string): Element => ({
  type: 'element',
  tagName,
  properties: {},
  children: [{ type: 'text', value: text }],
})

const pages = [
  { url: '/a', file: 'a.md', title: 'A', description: 'About A', space: Space.English },
  { url: '/b', file: 'b.md', title: 'B', description: '', space: Space.English },
]
const run = (children: Element[], file: string): string[] => {
  const tree: Root = { type: 'root', children }
  rehypePageDescription({ pages, root: '/repo/' })(tree, { path: `/repo/${file}` })
  return (tree.children as Element[]).map((child) => `${child.tagName}:${(child.children[0] as { value: string }).value}`)
}

describe('rehypePageDescription', () => {
  it('should put the description right after the first h1', () => {
    const result = run([element('p', 'intro'), element('h1', 'Title'), element('p', 'body'), element('h1', 'Again')], 'a.md')
    assert.deepStrictEqual(result, ['p:intro', 'h1:Title', 'p:About A', 'p:body', 'h1:Again'])
  })

  it('should leave the body unchanged when it has no h1', () => {
    assert.deepStrictEqual(run([element('h2', 'Sub'), element('p', 'body')], 'a.md'), ['h2:Sub', 'p:body'])
  })

  it('should add nothing when the page has no description', () => {
    assert.deepStrictEqual(run([element('h1', 'Title'), element('p', 'body')], 'b.md'), ['h1:Title', 'p:body'])
  })
})
