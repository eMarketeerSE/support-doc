import assert from 'node:assert'
import path from 'node:path'
import { describe, it } from 'node:test'
import type { Root } from 'hast'
import { rehypeSiteLinks } from './rehype-site-links'
import { REPO_ROOT, Space, type SitePage } from './summary'

const IMAGE = 'basics-creating-email-add-email-dialog.png'
const FILE = 'guides/intro.md'

const pages: SitePage[] = [
  { url: '/guides/intro', file: FILE, title: 'Intro', description: '', space: Space.English },
  { url: '/guides/other', file: 'guides/other.md', title: 'Other', description: '', space: Space.English },
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
    rehypeSiteLinks({ pages })(tree, { path: path.join(REPO_ROOT, FILE) })
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
    rehypeSiteLinks({ pages })(tree, { path: path.join(REPO_ROOT, FILE) })
    const links = tree.children as { properties: Record<string, string | string[]> }[]
    assert.deepStrictEqual(
      links.map((link) => [link.properties.target, link.properties.rel]),
      [[undefined, undefined], [undefined, undefined]],
    )
  })
})
