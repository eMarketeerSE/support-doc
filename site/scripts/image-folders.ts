import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { filter, forEach, keys, map, trimStart } from 'lodash-es'
import { ASSET_URL_PREFIX } from '../src/lib/links.ts'
import { REPO_ROOT } from '../src/lib/summary.ts'

export const listImageFolders = (root: string): { source: string; target: string }[] =>
  map(
    filter(keys(ASSET_URL_PREFIX), (folder) => existsSync(path.join(root, folder))),
    (folder) => ({ source: path.join(root, folder), target: trimStart(ASSET_URL_PREFIX[folder], '/') }),
  )

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  forEach(listImageFolders(REPO_ROOT), ({ source, target }) => console.log(`${source} ${target}`))
}
