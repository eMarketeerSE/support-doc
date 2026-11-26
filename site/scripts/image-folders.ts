import { existsSync } from 'node:fs'
import path from 'node:path'
import { filter, keys, map, trimStart } from 'lodash-es'
import { ASSET_URL_PREFIX } from '../src/lib/links.ts'

export const listImageFolders = (root: string): { source: string; target: string }[] =>
  map(
    filter(keys(ASSET_URL_PREFIX), (folder) => existsSync(path.join(root, folder))),
    (folder) => ({ source: path.join(root, folder), target: trimStart(ASSET_URL_PREFIX[folder], '/') }),
  )
