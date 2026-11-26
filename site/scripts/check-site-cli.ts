import { readdirSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chunk, endsWith, filter, flatMap, forEach, map, size, split } from 'lodash-es'
import { readRedirects } from '../src/lib/redirects.ts'
import { Expect, judgeResponse, listImagePaths, listSiteChecks, type SiteCheck, type SiteResponse } from './check-site.ts'

const SNAPSHOT_FILE = fileURLToPath(new URL('../sitemap-snapshot.txt', import.meta.url))
const BATCH_SIZE = 16
const REQUEST_TIMEOUT_MS = 15000

const listHtmlFiles = (dir: string): string[] =>
  flatMap(readdirSync(dir, { withFileTypes: true }), (entry) =>
    entry.isDirectory() ? listHtmlFiles(join(dir, entry.name)) : endsWith(entry.name, '.html') ? [join(dir, entry.name)] : [],
  )

const fetchResponse = async (baseUrl: string, check: SiteCheck): Promise<SiteResponse> => {
  const response = await fetch(new URL(check.path, baseUrl), {
    method: check.expect === Expect.File ? 'HEAD' : 'GET',
    redirect: 'manual',
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  })
  const location = response.headers.get('location')
  return {
    status: response.status,
    location: location === null ? null : new URL(location, baseUrl).pathname,
    body: await response.text(),
    headers: Object.fromEntries(response.headers.entries()),
  }
}

const fetchProblem = async (baseUrl: string, check: SiteCheck): Promise<string | null> => {
  let lastFailure = ''
  for (const attempt of [1, 2]) {
    try {
      const response = await fetchResponse(baseUrl, check)
      if (response.status < 500 || attempt === 2) {
        return judgeResponse(check, response)
      }
    } catch (error) {
      lastFailure = `${check.path} (${check.expect}): request failed: ${error instanceof Error ? error.message : String(error)}`
    }
  }
  return lastFailure
}

const baseUrl = process.argv[2]
const distDir = process.argv[3]
if (!URL.canParse(baseUrl ?? '') || !distDir) {
  console.log('Usage: check-site-cli.ts <baseUrl> <dist>')
  process.exit(1)
}
const snapshot = filter(split(readFileSync(SNAPSHOT_FILE, 'utf8'), '\n'), (line) => line !== '')
const imagePaths = listImagePaths(listHtmlFiles(resolve(distDir)))
const checks = listSiteChecks(snapshot, readRedirects(), imagePaths)
const problems: string[] = []
for (const batch of chunk(checks, BATCH_SIZE)) {
  const results = await Promise.all(map(batch, (check) => fetchProblem(baseUrl, check)))
  problems.push(...filter(results, (result): result is string => result !== null))
}
forEach(problems, (problem) => console.log(problem))
console.log(`${size(checks)} checks, ${size(problems)} problems`)
process.exitCode = size(problems) > 0 ? 1 : 0
