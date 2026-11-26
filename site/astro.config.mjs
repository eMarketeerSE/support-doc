import { defineConfig } from 'astro/config'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { REPO_ROOT, readAllPages } from './src/lib/summary'
import { readRedirects } from './src/lib/redirects'
import { rehypeGitbookHeadingIds } from './src/lib/rehype-gitbook-heading-ids'
import { rehypePageDescription } from './src/lib/rehype-page-description'
import { rehypeSiteLinks } from './src/lib/rehype-site-links'

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  redirects: readRedirects(),
  build: { format: 'file' },
  vite: { build: { assetsInlineLimit: 0 } },
  markdown: {
    syntaxHighlight: false,
    smartypants: false,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeRaw,
      rehypeGitbookHeadingIds,
      [rehypeSiteLinks, { pages: readAllPages(), root: REPO_ROOT }],
      [rehypePageDescription, { pages: readAllPages(), root: REPO_ROOT }],
    ],
  },
})
