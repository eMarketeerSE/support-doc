import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'
import { readFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import matter from 'gray-matter'
import { keyBy, mapValues } from 'lodash-es'
import { convertGitbook } from './lib/convert-gitbook'
import { REPO_ROOT, Space, findTwinUrl, readAllPages, readNav, type NavItem } from './lib/summary'

const navItemSchema: z.ZodType<NavItem> = z.lazy(() =>
  z.object({ title: z.string(), url: z.string(), children: z.array(navItemSchema) }),
)

const pages = defineCollection({
  schema: z.object({
    url: z.string(),
    file: z.string(),
    title: z.string(),
    description: z.string(),
    space: z.enum(Space),
    twinUrl: z.string(),
    nav: z.array(z.object({ heading: z.string().nullable(), items: z.array(navItemSchema) })),
  }),
  loader: {
    name: 'support-pages',
    load: async ({ store, renderMarkdown }) => {
      store.clear()
      const allPages = readAllPages()
      const navBySpace = mapValues(keyBy(Object.values(Space)), (space) => readNav(space))
      for (const page of allPages) {
        const converted = matter(convertGitbook(await readFile(`${REPO_ROOT}${page.file}`, 'utf8'), page.file)).content
        const fileURL = pathToFileURL(`${REPO_ROOT}${page.file}`)
        store.set({ id: page.url, data: { ...page, twinUrl: findTwinUrl(page, allPages), nav: navBySpace[page.space] }, body: converted, rendered: await renderMarkdown(converted, { fileURL }) })
      }
    },
  },
})

export const collections = { pages }
