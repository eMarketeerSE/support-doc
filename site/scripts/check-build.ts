import { existsSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { flatMap, keys, union } from 'lodash-es'
import { readRedirects } from '../src/lib/redirects.ts'

const SNAPSHOT_FILE = fileURLToPath(new URL('../sitemap-snapshot.txt', import.meta.url))

export const checkBuild = (dist: string, snapshot: string[], redirects: Record<string, string>): string[] => {
  const missingFiles = flatMap(['sitemap.xml', 'robots.txt'], (name) =>
    existsSync(join(dist, name)) ? [] : [`dist/${name} is missing`],
  )
  const urlProblems = flatMap(union(snapshot, keys(redirects)), (url) => {
    const file = join(dist, url === '/' ? 'index.html' : `${url}.html`)
    if (!existsSync(file)) {
      return [`${url} has no page and no redirect in the build`]
    }
    const isRedirectFile = readFileSync(file, 'utf8').includes('http-equiv="refresh"')
    if (url in redirects && !isRedirectFile) {
      return [`${url} is a redirect source but the build has a page there`]
    }
    if (!(url in redirects) && isRedirectFile) {
      return [`${url} is a redirect file but is not in the redirects list`]
    }
    return []
  })
  return [...missingFiles, ...urlProblems]
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const snapshot = readFileSync(SNAPSHOT_FILE, 'utf8').split('\n').filter((line) => line !== '')
  const problems = checkBuild(resolve(process.argv[2]), snapshot, readRedirects())
  problems.forEach((problem) => console.log(problem))
  process.exit(problems.length > 0 ? 1 : 0)
}
