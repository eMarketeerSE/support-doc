import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { filter, forEach, size, split } from 'lodash-es'
import { readRedirects } from '../src/lib/redirects.ts'
import { checkBuild } from './check-build.ts'

const SNAPSHOT_FILE = fileURLToPath(new URL('../sitemap-snapshot.txt', import.meta.url))

const snapshot = filter(split(readFileSync(SNAPSHOT_FILE, 'utf8'), '\n'), (line) => line !== '')
const problems = checkBuild(resolve(process.argv[2]), snapshot, readRedirects())
forEach(problems, (problem) => console.log(problem))
process.exitCode = size(problems) > 0 ? 1 : 0
