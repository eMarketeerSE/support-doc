import assert from 'node:assert'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { describe, it } from 'node:test'
import { createMarkdownProcessor } from '@astrojs/markdown-remark'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { convertGitbook } from './convert-gitbook'
import { rehypeGitbookHeadingIds } from './rehype-gitbook-heading-ids'
import { rehypeSiteLinks } from './rehype-site-links'
import { Space, type SitePage } from './summary'

const ROOT = fileURLToPath(new URL('fixtures/repo/', import.meta.url))
const FILE = 'guides/intro.md'

const pages: SitePage[] = [
  { url: '/guides/intro', file: FILE, title: 'Intro', description: '', space: Space.English },
  { url: '/guides/other', file: 'guides/other.md', title: 'Other', description: 'About other things', space: Space.English },
]

const processor = await createMarkdownProcessor({
  syntaxHighlight: false,
  smartypants: false,
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypeRaw, rehypeGitbookHeadingIds, [rehypeSiteLinks, { pages, root: ROOT }]],
})

const render = async (lines: string[]): Promise<string> =>
  (await processor.render(convertGitbook(lines.join('\n'), FILE), { fileURL: pathToFileURL(path.join(ROOT, FILE)) })).code

describe('the Markdown pipeline of the site', () => {
  it('should render a content-ref as a filled card', async () => {
    assert.strictEqual(
      await render(['{% content-ref url="other.md" %}', 'other.md', '{% endcontent-ref %}']),
      '<p><a class="card" href="/guides/other"><strong>Other</strong><span>About other things</span></a></p>',
    )
  })

  it('should render a stepper with a hint as an ordered list of steps', async () => {
    assert.strictEqual(
      await render(['{% stepper %}', '{% step %}', '### Name it', '', '{% hint style="info" %}', 'Names are internal.', '{% endhint %}', '{% endstep %}', '{% endstepper %}']),
      [
        '<ol class="steps" role="list">',
        '<li class="step">',
        '<h3 id="name-it">Name it</h3>',
        '<aside class="hint hint-info">',
        '<p>Names are internal.</p>',
        '</aside>',
        '</li>',
        '</ol>',
      ].join('\n'),
    )
  })

  it('should throw for an Ask button left in the Markdown', async () => {
    await assert.rejects(
      render(['<button type="button"', 'data-action="ask">Ask</button>']),
      /guides\/intro\.md: data-action attribute on button is not allowed/,
    )
  })
})
