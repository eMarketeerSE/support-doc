import { defineCollection } from 'astro:content'
import { readFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import matter from 'gray-matter'
import { keyBy, mapValues } from 'lodash-es'
import { Space, findTwinUrl, readAllPages, readNav } from './lib/summary'

const REPO_ROOT = fileURLToPath(new URL('../../', import.meta.url))

const pages = defineCollection({
  loader: {
    name: 'support-pages',
    load: async ({ store, renderMarkdown }) => {
      store.clear()
      const allPages = readAllPages()
      const navBySpace = mapValues(keyBy(Object.values(Space)), (space) => readNav(space))
      for (const page of allPages) {
        const body = matter(await readFile(`${REPO_ROOT}${page.file}`, 'utf8')).content
        const fileURL = pathToFileURL(`${REPO_ROOT}${page.file}`)
        store.set({ id: page.url, data: { ...page, twinUrl: findTwinUrl(page, allPages), nav: navBySpace[page.space] }, body, rendered: await renderMarkdown(body, { fileURL }) })
      }
    },
  },
})

export const collections = { pages }
