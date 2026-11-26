import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { filter, has, keys, size, some } from 'lodash-es'
import { readAllPages, readGroupRoots, type SitePage } from './summary'

const REDIRECTS_FILE = fileURLToPath(new URL('../../redirects.json', import.meta.url))

export const readRedirects = (): Record<string, string> => JSON.parse(readFileSync(REDIRECTS_FILE, 'utf8'))

export const mergeGroupRoots = (
  redirects: Record<string, string>,
  groupRoots: Record<string, string>,
  pages: SitePage[],
): Record<string, string> => {
  const collisions = filter(
    keys(groupRoots),
    (root) => has(redirects, root) || some(pages, { url: root }),
  )
  if (size(collisions) > 0) {
    throw new Error(
      `A SUMMARY.md group root collides with a page or a line in site/redirects.json: ${collisions.join(', ')}`,
    )
  }
  return { ...redirects, ...groupRoots }
}

export const readAllRedirects = (): Record<string, string> =>
  mergeGroupRoots(readRedirects(), readGroupRoots(), readAllPages())
