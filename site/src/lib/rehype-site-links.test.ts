import assert from 'node:assert'
import path from 'node:path'
import { describe, it } from 'node:test'
import type { Root } from 'hast'
import { find } from 'lodash-es'
import { REPO_ROOT } from './links'
import { rehypeSiteLinks } from './rehype-site-links'
import { readAllPages } from './summary'

const pages = readAllPages()

describe('rehypeSiteLinks', () => {
  it('should rewrite links and images and open external links in a new tab', () => {
    const file = 'knowledge-base/getting-started/campaign-basics.md'
    const tree: Root = {
      type: 'root',
      children: [
        { type: 'element', tagName: 'a', properties: { href: 'basics-creating-email.md' }, children: [] },
        { type: 'element', tagName: 'a', properties: { href: 'https://example.com' }, children: [] },
        { type: 'element', tagName: 'img', properties: { src: '../../.gitbook/assets/1.-Before.png' }, children: [] },
      ],
    }
    rehypeSiteLinks({ pages })(tree, { path: path.join(REPO_ROOT, file) })
    const [internal, external, image] = tree.children as { properties: Record<string, string | string[]> }[]
    assert.strictEqual(internal.properties.href, '/getting-started/campaign-basics/basics-creating-email')
    assert.strictEqual(internal.properties.target, undefined)
    assert.deepStrictEqual([external.properties.target, external.properties.rel], ['_blank', ['noopener']])
    assert.strictEqual(image.properties.src, '/.gitbook/assets/1.-Before.png')
    assert.ok(find(pages, { file }))
  })
})
