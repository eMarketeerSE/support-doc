import assert from 'node:assert'
import { describe, it } from 'node:test'
import type { Element, Root } from 'hast'
import { gitbookSlug, rehypeGitbookHeadingIds } from './rehype-gitbook-heading-ids'

describe('gitbookSlug', () => {
  const cases: [string, string][] = [
    ['6. Consent sync', 'id-6.-consent-sync'],
    ['6. Samtyckessynk', 'id-6.-samtyckessynk'],
    ['Välj utlösare', 'valj-utlosare'],
    ['Open Users & Teams', 'open-users-and-teams'],
    ['Dynamics 365 → eMarketeer', 'dynamics-365-emarketeer'],
    ['On Step 2, Send Options, click + Add recipients', 'on-step-2-send-options-click--add-recipients'],
    ['Show/hide logic', 'show-hide-logic'],
    ['Länkar och URL:er', 'lankar-och-url-er'],
    ['Method 1: standard import', 'method-1-standard-import'],
    ['Dark mode (beta)', 'dark-mode-beta'],
    ['Colors & Fonts -> HTML', 'colors-and-fonts-greater-than-html'],
    ['Meta Lead Ads Testing tool', 'meta-lead-a-ds-testing-tool'],
    ['Connect social media advertising', 'connect-social-media-a-dvertising'],
    ['Add recipients', 'add-recipients'],
  ]
  for (const [text, slug] of cases) {
    it(`should turn "${text}" into the GitBook anchor ${slug}`, () => {
      assert.strictEqual(gitbookSlug(text), slug)
    })
  }

  it('should cut a long heading at 100 characters without a trailing dash', () => {
    const slug = gitbookSlug(
      'A.4. The data controller’s audits, including inspections, of the processing of personal data being performed',
    )
    assert.strictEqual(slug, 'a.4.-the-data-controllers-audits-including-inspections-of-the-processing-of-personal-data-being-perf')
  })
})

describe('rehypeGitbookHeadingIds', () => {
  it('should number repeated headings on one page', () => {
    const heading = (text: string): Element => ({
      type: 'element',
      tagName: 'h3',
      properties: {},
      children: [{ type: 'text', value: text }],
    })
    const tree: Root = { type: 'root', children: [heading('Notes'), heading('Notes'), heading('Notes')] }
    rehypeGitbookHeadingIds()(tree)
    assert.deepStrictEqual(
      (tree.children as Element[]).map((element) => element.properties.id),
      ['notes', 'notes-1', 'notes-2'],
    )
  })

  it('should give each details block the id of its summary, counted with the headings', () => {
    const details = (text: string): Element => ({
      type: 'element',
      tagName: 'details',
      properties: {},
      children: [
        { type: 'element', tagName: 'summary', properties: {}, children: [{ type: 'text', value: text }] },
        { type: 'element', tagName: 'p', properties: {}, children: [{ type: 'text', value: 'A contact we cannot email.' }] },
      ],
    })
    const heading: Element = { type: 'element', tagName: 'h2', properties: {}, children: [{ type: 'text', value: 'Undeliverable contact' }] }
    const tree: Root = { type: 'root', children: [details('Undeliverable contact'), details('Undeliverable contact'), heading] }
    rehypeGitbookHeadingIds()(tree)
    assert.deepStrictEqual(
      (tree.children as Element[]).map((element) => element.properties.id),
      ['undeliverable-contact', 'undeliverable-contact-1', 'undeliverable-contact-2'],
    )
  })

  it('should keep the id a details block already has', () => {
    const tree: Root = {
      type: 'root',
      children: [
        {
          type: 'element',
          tagName: 'details',
          properties: { id: 'custom' },
          children: [{ type: 'element', tagName: 'summary', properties: {}, children: [{ type: 'text', value: 'Bounce' }] }],
        },
      ],
    }
    rehypeGitbookHeadingIds()(tree)
    assert.strictEqual((tree.children[0] as Element).properties.id, 'custom')
  })
})
