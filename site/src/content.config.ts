import { defineCollection } from 'astro:content'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const REPO_ROOT = fileURLToPath(new URL('../../', import.meta.url))
const SPIKE_FILES = ['overview.md', 'knowledge-base/getting-started/basics-creating-email.md']

const pages = defineCollection({
  loader: {
    name: 'support-pages',
    load: async ({ store, renderMarkdown }) => {
      for (const file of SPIKE_FILES) {
        const body = await readFile(`${REPO_ROOT}${file}`, 'utf8')
        store.set({ id: file, data: { file }, body, rendered: await renderMarkdown(body) })
      }
    },
  },
})

export const collections = { pages }
