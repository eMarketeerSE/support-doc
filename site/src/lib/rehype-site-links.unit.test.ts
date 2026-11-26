import assert from 'node:assert'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it } from 'node:test'
import type { Element, Root, Text } from 'hast'
import { rehypeSiteLinks } from './rehype-site-links'
import { Space, type SitePage } from './summary'

const IMAGE = 'example.png'
const ROOT = fileURLToPath(new URL('fixtures/repo/', import.meta.url))
const FILE = 'guides/intro.md'

const pages: SitePage[] = [
  { url: '/guides/intro', file: FILE, title: 'Intro', description: '', space: Space.English },
  { url: '/guides/other', file: 'guides/other.md', title: 'Other', description: 'About other things', space: Space.English },
]

describe('rehypeSiteLinks', () => {
  it('should rewrite links and images and open external links in a new tab', () => {
    const tree: Root = {
      type: 'root',
      children: [
        { type: 'element', tagName: 'a', properties: { href: 'other.md' }, children: [] },
        { type: 'element', tagName: 'a', properties: { href: 'https://example.com' }, children: [] },
        { type: 'element', tagName: 'img', properties: { src: `../.gitbook/assets/${IMAGE}` }, children: [] },
      ],
    }
    rehypeSiteLinks({ pages, root: ROOT })(tree, { path: path.join(ROOT, FILE) })
    const [internal, external, image] = tree.children as { properties: Record<string, string | string[]> }[]
    assert.strictEqual(internal.properties.href, '/guides/other')
    assert.strictEqual(internal.properties.target, undefined)
    assert.deepStrictEqual([external.properties.target, external.properties.rel], ['_blank', ['noopener']])
    assert.strictEqual(image.properties.src, `/.gitbook/assets/${IMAGE}`)
  })

  it('should leave mailto and tel links in the same tab', () => {
    const tree: Root = {
      type: 'root',
      children: [
        { type: 'element', tagName: 'a', properties: { href: 'mailto:support@emarketeer.com' }, children: [] },
        { type: 'element', tagName: 'a', properties: { href: 'tel:+4681234567' }, children: [] },
      ],
    }
    rehypeSiteLinks({ pages, root: ROOT })(tree, { path: path.join(ROOT, FILE) })
    const links = tree.children as { properties: Record<string, string | string[]> }[]
    assert.deepStrictEqual(
      links.map((link) => [link.properties.target, link.properties.rel]),
      [[undefined, undefined], [undefined, undefined]],
    )
  })

  it('should fill an empty card with the title and description of its page', () => {
    const tree: Root = {
      type: 'root',
      children: [{ type: 'element', tagName: 'a', properties: { className: ['card'], href: 'other.md' }, children: [] }],
    }
    rehypeSiteLinks({ pages, root: ROOT })(tree, { path: path.join(ROOT, FILE) })
    const card = tree.children[0] as Element
    assert.strictEqual(card.properties.href, '/guides/other')
    assert.deepStrictEqual(
      card.children.map((child) => [(child as Element).tagName, ((child as Element).children[0] as Text).value]),
      [['strong', 'Other'], ['span', 'About other things']],
    )
  })

  it('should omit the description span when the page has none', () => {
    const tree: Root = {
      type: 'root',
      children: [{ type: 'element', tagName: 'a', properties: { className: ['card'], href: 'intro.md' }, children: [] }],
    }
    rehypeSiteLinks({ pages, root: ROOT })(tree, { path: path.join(ROOT, FILE) })
    assert.deepStrictEqual((tree.children[0] as Element).children.map((child) => (child as Element).tagName), ['strong'])
  })

  it('should fill an empty card to an external URL with its host', () => {
    const tree: Root = {
      type: 'root',
      children: [{ type: 'element', tagName: 'a', properties: { className: ['card'], href: 'https://example.com/x' }, children: [] }],
    }
    rehypeSiteLinks({ pages, root: ROOT })(tree, { path: path.join(ROOT, FILE) })
    const card = tree.children[0] as Element
    assert.deepStrictEqual(
      card.children.map((child) => [(child as Element).tagName, ((child as Element).children[0] as Text).value]),
      [['strong', 'example.com']],
    )
  })

  it('should leave a card that already has content unchanged', () => {
    const existing: Text = { type: 'text', value: 'Custom' }
    const tree: Root = {
      type: 'root',
      children: [{ type: 'element', tagName: 'a', properties: { className: ['card'], href: 'other.md' }, children: [existing] }],
    }
    rehypeSiteLinks({ pages, root: ROOT })(tree, { path: path.join(ROOT, FILE) })
    assert.deepStrictEqual((tree.children[0] as Element).children, [existing])
  })

  it('should throw with the page file for an element with data-action', () => {
    const tree: Root = {
      type: 'root',
      children: [{ type: 'element', tagName: 'button', properties: { dataAction: 'ask' }, children: [] }],
    }
    assert.throws(
      () => rehypeSiteLinks({ pages, root: ROOT })(tree, { path: path.join(ROOT, FILE) }),
      /guides\/intro\.md: data-action attribute on button is not allowed/,
    )
  })
})
