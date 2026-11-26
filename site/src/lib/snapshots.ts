import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { filter, flatMap, split, uniq } from 'lodash-es'

const SNAPSHOT_FILES = [
  fileURLToPath(new URL('../../sitemap-snapshot.txt', import.meta.url)),
  fileURLToPath(new URL('../../gitbook-redirects-snapshot.txt', import.meta.url)),
]

export const readSnapshotUrls = (): string[] =>
  uniq(flatMap(SNAPSHOT_FILES, (file) => filter(split(readFileSync(file, 'utf8'), '\n'), (line) => line !== '')))
