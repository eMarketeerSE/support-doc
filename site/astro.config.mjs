import { defineConfig } from 'astro/config'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { readAllPages } from './src/lib/summary'
import { rehypeSiteLinks } from './src/lib/rehype-site-links'

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: { build: { assetsInlineLimit: 0 } },
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeRaw, [rehypeSiteLinks, { pages: readAllPages() }]],
  },
})
