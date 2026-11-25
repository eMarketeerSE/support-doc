import { defineConfig } from 'astro/config'
import rehypeRaw from 'rehype-raw'

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  markdown: { rehypePlugins: [rehypeRaw] },
})
