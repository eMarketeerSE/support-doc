import assert from 'node:assert/strict'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it } from 'node:test'
import type { Element, Root } from 'hast'
import { drop, join, map, slice, split } from 'lodash-es'
import { renderMarkdown } from './render-markdown'
import { rehypeSiteLinks } from './rehype-site-links'
import { Space, type SitePage } from './summary'

const ROOT = fileURLToPath(new URL('fixtures/repo/', import.meta.url))
const NOTE = '> For the complete documentation index, see [llms.txt](https://support.emarketeer.com/llms.txt).'

const overview: SitePage = { url: '/', file: 'overview.md', title: 'Welcome', description: 'The home page.', space: Space.English }
const intro: SitePage = { url: '/guides/intro', file: 'guides/intro.md', title: 'Intro', description: 'Start here.', space: Space.English }
const other: SitePage = { url: '/guides/other', file: 'guides/other.md', title: 'Other', description: 'About other things', space: Space.English }
const blank: SitePage = { url: '/guides/blank', file: 'guides/blank.md', title: 'Blank', description: '', space: Space.English }
const section: SitePage = { url: '/guides/section', file: 'guides/section/README.md', title: 'Section', description: 'A hub.', space: Space.English }
const swedish: SitePage = { url: '/docs/docs_se/guider/intro', file: 'sv/guides/intro.md', title: 'Intro sv', description: 'Börja här.', space: Space.Swedish }
const pages = [overview, intro, other, blank, section, swedish]

describe('renderMarkdown', () => {
  it('should write the note, title and description, then the body without its H1', () => {
    assert.equal(
      renderMarkdown(intro, '\n# Intro heading\n\nFirst paragraph.\n\n## Part\n\nMore.\n', pages, ROOT),
      join([NOTE, '', '# Intro', '', 'Start here.', '', 'First paragraph.', '', '## Part', '', 'More.', ''], '\n'),
    )
  })

  it('should omit the description and its blank line when the description is empty', () => {
    assert.equal(renderMarkdown(blank, '# Blank\n\nText.\n', pages, ROOT), join([NOTE, '', '# Blank', '', 'Text.', ''], '\n'))
  })

  it('should make a relative .md link and a folder link absolute and keep the fragment', () => {
    const output = renderMarkdown(intro, '# Intro\n\nSee [Other](other.md#setup) and [the hub](section/).\n', pages, ROOT)
    assert.equal(
      split(output, '\n')[6],
      'See [Other](https://support.emarketeer.com/guides/other.md#setup) and [the hub](https://support.emarketeer.com/guides/section.md).',
    )
  })

  it('should make a ../ link to the root page point at /overview.md', () => {
    const output = renderMarkdown(intro, '# Intro\n\n[Home](../overview.md)\n', pages, ROOT)
    assert.equal(split(output, '\n')[6], '[Home](https://support.emarketeer.com/overview.md)')
  })

  it('should make an image an absolute asset URL', () => {
    const output = renderMarkdown(swedish, '# Intro\n\n<div data-with-frame="true" align="left"><img src="../.gitbook/assets/example.png" alt="Example"></div>\n', pages, ROOT)
    assert.equal(
      split(output, '\n')[6],
      '<div data-with-frame="true" align="left"><img src="https://support.emarketeer.com/docs/docs_se/.gitbook/assets/example.png" alt="Example"></div>',
    )
  })

  it('should rewrite an href inside inline HTML and keep an external link unchanged', () => {
    const output = renderMarkdown(intro, '# Intro\n\n<td><a href="other.md">Other</a> <a href="https://example.com/x">x</a></td>\n', pages, ROOT)
    assert.equal(split(output, '\n')[6], '<td><a href="https://support.emarketeer.com/guides/other.md">Other</a> <a href="https://example.com/x">x</a></td>')
  })

  it('should leave src on an iframe or a source element unchanged', () => {
    const output = renderMarkdown(intro, '# Intro\n\n<iframe class="video" src="x"></iframe><video><source src="y"></video>\n', pages, ROOT)
    assert.equal(split(output, '\n')[6], '<iframe class="video" src="x"></iframe><video><source src="y"></video>')
  })

  it('should point a same-page fragment link at the .md file of the page', () => {
    const output = renderMarkdown(intro, '# Intro\n\n[Below](#part)\n', pages, ROOT)
    assert.equal(split(output, '\n')[6], '[Below](https://support.emarketeer.com/guides/intro.md#part)')
  })

  it('should turn a card into a list line with the title and description', () => {
    const output = renderMarkdown(intro, '# Intro\n\n<a class="card" href="other.md"></a>\n\n<a class="card" href="blank.md"></a>\n', pages, ROOT)
    assert.deepEqual(drop(split(output, '\n'), 6), [
      '- [Other](https://support.emarketeer.com/guides/other.md): About other things',
      '',
      '- [Blank](https://support.emarketeer.com/guides/blank.md)',
      '',
    ])
  })

  it('should turn an external card into a list line with its host', () => {
    const output = renderMarkdown(intro, '# Intro\n\n<a class="card" href="https://example.com/x"></a>\n', pages, ROOT)
    assert.equal(split(output, '\n')[6], '- [example.com](https://example.com/x)')
  })

  it('should throw for a card that is not a page or an external URL', () => {
    assert.throws(
      () => renderMarkdown(intro, '# Intro\n\n<a class="card" href="mailto:support@emarketeer.com"></a>\n', pages, ROOT),
      /^Error: guides\/intro\.md: card mailto:support@emarketeer\.com is not a page or an external URL$/,
    )
  })

  it('should list every child card of a hub', () => {
    const body = join([
      '# Section',
      '',
      '<div class="columns">',
      '',
      '<div>',
      '',
      '<a class="card" href="../intro.md"></a>',
      '',
      '<a class="card" href="../other.md"></a>',
      '',
      '</div>',
      '',
      '<div>',
      '',
      '<a class="card" href="../blank.md"></a>',
      '',
      '</div>',
      '',
      '</div>',
      '',
    ], '\n')
    assert.deepEqual(split(renderMarkdown(section, body, pages, ROOT), '\n'), [
      NOTE,
      '',
      '# Section',
      '',
      'A hub.',
      '',
      '<div class="columns">',
      '',
      '<div>',
      '',
      '- [Intro](https://support.emarketeer.com/guides/intro.md): Start here.',
      '',
      '- [Other](https://support.emarketeer.com/guides/other.md): About other things',
      '',
      '</div>',
      '',
      '<div>',
      '',
      '- [Blank](https://support.emarketeer.com/guides/blank.md)',
      '',
      '</div>',
      '',
      '</div>',
      '',
    ])
  })

  it('should leave links inside a fenced code block unchanged', () => {
    const output = renderMarkdown(intro, '# Intro\n\n```html\n<a href="other.md">x</a>\n```\n', pages, ROOT)
    assert.deepEqual(drop(split(output, '\n'), 6), ['```html', '<a href="other.md">x</a>', '```', ''])
  })

  it('should leave links inside inline code unchanged', () => {
    const output = renderMarkdown(intro, '# Intro\n\nWrite `<a href="url">Link</a>` or ``[x](y)`` and see [Other](other.md).\n', pages, ROOT)
    assert.equal(split(output, '\n')[6], 'Write `<a href="url">Link</a>` or ``[x](y)`` and see [Other](https://support.emarketeer.com/guides/other.md).')
  })

  it('should write the same targets as rehypeSiteLinks, plus the host and .md', () => {
    const cases = [
      ['other.md', '/guides/other', 'https://support.emarketeer.com/guides/other.md'],
      ['../guides/other.md#setup', '/guides/other#setup', 'https://support.emarketeer.com/guides/other.md#setup'],
      ['section/', '/guides/section', 'https://support.emarketeer.com/guides/section.md'],
      ['../.gitbook/assets/example.png', '/.gitbook/assets/example.png', 'https://support.emarketeer.com/.gitbook/assets/example.png'],
      ['https://example.com/x', 'https://example.com/x', 'https://example.com/x'],
    ]
    const tree: Root = {
      type: 'root',
      children: map(cases, ([href]): Element => ({ type: 'element', tagName: 'a', properties: { href }, children: [] })),
    }
    rehypeSiteLinks({ pages, root: ROOT })(tree, { path: path.join(ROOT, intro.file) })
    const body = join(['# Intro', '', ...map(cases, ([href]) => `[x](${href})`), ''], '\n')
    assert.deepEqual(
      map(tree.children as Element[], 'properties.href'),
      map(cases, 1),
    )
    assert.deepEqual(
      slice(split(renderMarkdown(intro, body, pages, ROOT), '\n'), 6, 11),
      map(cases, ([, , mdTarget]) => `[x](${mdTarget})`),
    )
  })

  it('should throw with the page file for a single-quoted or unquoted href or src', () => {
    assert.throws(
      () => renderMarkdown(intro, "# Intro\n\n<a href='other.md'>Other</a>\n", pages, ROOT),
      /^Error: guides\/intro\.md: a link was not rewritten: <a href='other\.md'>$/,
    )
    assert.throws(
      () => renderMarkdown(intro, '# Intro\n\n<img src=pic.png alt="x">\n', pages, ROOT),
      /^Error: guides\/intro\.md: img link was not rewritten: <img src=pic\.png alt="x">$/,
    )
  })

  it('should throw with the page file when the body ends inside a code fence', () => {
    assert.throws(
      () => renderMarkdown(intro, '# Intro\n\n```js\nconst a = 1\n', pages, ROOT),
      /^Error: guides\/intro\.md: unclosed code fence$/,
    )
  })

  it('should throw with the page file for a card line that does not match the card form', () => {
    assert.throws(
      () => renderMarkdown(intro, '# Intro\n\n<a class="card" href="other.md">Other</a>\n', pages, ROOT),
      /^Error: guides\/intro\.md: card line has an unexpected form: <a class="card" href="other\.md">Other<\/a>$/,
    )
  })
})
