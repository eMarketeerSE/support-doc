import { readFileSync } from 'node:fs'
import { flatMap, includes, keys, map, reject, startsWith, uniq } from 'lodash-es'
import { isRedirectPage } from './check-build.ts'

export enum Expect {
  Page = 'page',
  RedirectPage = 'redirect page',
  SlashRedirect = 'slash redirect',
  File = 'file',
  NotFound = 'not found',
  Headers = 'headers',
  Markdown = 'markdown',
  PageOrRedirect = 'page or redirect page',
}

export type SiteCheck = { path: string; expect: Expect }
export type SiteResponse = { status: number; location: string | null; body: string; headers: Record<string, string> }

export const MISSING_PATH = '/docs/docs_se/check-site-missing-page'
export const CSP = "script-src 'self' 'wasm-unsafe-eval'; worker-src 'self' blob:; object-src 'none'; base-uri 'self'"

const SITE_MARKER = 'data-site="support-doc"'
const NOT_FOUND_TITLE = '<title>Page not found'
const IMAGE_SRC = /<img\b[^>]*?\ssrc="(\/(?!\/)[^"]*)"/g

export const listImagePaths = (htmlFiles: string[]): string[] =>
  uniq(flatMap(htmlFiles, (file) => map([...readFileSync(file, 'utf8').matchAll(IMAGE_SRC)], 1)))

export const listSiteChecks = (
  snapshot: string[],
  redirects: Record<string, string>,
  imagePaths: string[],
  llmsPaths: string[],
): SiteCheck[] => {
  const redirectSources = keys(redirects)
  const slashUrls = reject(snapshot, (url) => url === '/')
  return [
    ...map(redirectSources, (path) => ({ path, expect: Expect.RedirectPage })),
    ...map(reject(snapshot, (url) => includes(redirectSources, url)), (path) => ({ path, expect: Expect.Page })),
    ...map(slashUrls, (url) => ({ path: `${url}/`, expect: Expect.SlashRedirect })),
    ...map(imagePaths, (path) => ({ path, expect: Expect.File })),
    ...map(llmsPaths, (path) => ({ path: `${path}.md`, expect: Expect.Markdown })),
    ...map(llmsPaths, (path) => ({ path, expect: Expect.PageOrRedirect })),
    { path: MISSING_PATH, expect: Expect.NotFound },
    { path: '/', expect: Expect.Headers },
  ]
}

export const judgeResponse = (check: SiteCheck, response: SiteResponse): string | null => {
  const hasMarker = includes(response.body, SITE_MARKER)
  if (check.expect === Expect.Page) {
    if (response.status !== 200) {
      return `${check.path} (${check.expect}): status ${response.status}, expected 200`
    }
    return hasMarker ? null : `${check.path} (${check.expect}): body has no ${SITE_MARKER}`
  }
  if (check.expect === Expect.RedirectPage) {
    if (response.status !== 200) {
      return `${check.path} (${check.expect}): status ${response.status}, expected 200`
    }
    return isRedirectPage(response.body) ? null : `${check.path} (${check.expect}): body is not an Astro redirect page`
  }
  if (check.expect === Expect.SlashRedirect) {
    if (response.status !== 301) {
      return `${check.path} (${check.expect}): status ${response.status}, expected 301`
    }
    const expected = check.path.slice(0, -1)
    return response.location === expected ? null : `${check.path} (${check.expect}): location is ${response.location}, expected ${expected}`
  }
  if (check.expect === Expect.File) {
    return response.status === 200 ? null : `${check.path} (${check.expect}): status ${response.status}, expected 200`
  }
  if (check.expect === Expect.NotFound) {
    if (response.status !== 404) {
      return `${check.path} (${check.expect}): status ${response.status}, expected 404`
    }
    return response.body.includes(NOT_FOUND_TITLE) ? null : `${check.path} (${check.expect}): body is not the 404 page (no ${NOT_FOUND_TITLE})`
  }
  if (check.expect === Expect.Headers) {
    if (response.headers['content-security-policy'] !== CSP) {
      return `${check.path} (${check.expect}): content-security-policy is ${response.headers['content-security-policy']}, expected ${CSP}`
    }
    return 'x-frame-options' in response.headers ? `${check.path} (${check.expect}): x-frame-options header is set` : null
  }
  if (check.expect === Expect.Markdown) {
    if (response.status !== 200) {
      return `${check.path} (${check.expect}): status ${response.status}, expected 200`
    }
    const contentType = response.headers['content-type']
    return startsWith(contentType, 'text/markdown') ? null : `${check.path} (${check.expect}): content-type is ${contentType}, expected text/markdown`
  }
  if (check.expect === Expect.PageOrRedirect) {
    if (response.status !== 200) {
      return `${check.path} (${check.expect}): status ${response.status}, expected 200`
    }
    return hasMarker || isRedirectPage(response.body) ? null : `${check.path} (${check.expect}): body is neither a page nor an Astro redirect page`
  }
  const unhandled: never = check.expect
  throw new Error(`Unknown check ${unhandled} for ${check.path}`)
}
