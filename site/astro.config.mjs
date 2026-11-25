import { defineConfig } from 'astro/config'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { readAllPages } from './src/lib/summary'
import { readRedirects } from './src/lib/redirects'
import { rehypeSiteLinks } from './src/lib/rehype-site-links'

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  redirects: readRedirects(),
  build: { format: 'file' },
  vite: { build: { assetsInlineLimit: 0 } },
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeRaw, [rehypeSiteLinks, { pages: readAllPages() }]],
  },
})
