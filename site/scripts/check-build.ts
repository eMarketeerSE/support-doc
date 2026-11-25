import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { flatMap, keys, toPairs, union } from 'lodash-es'

const isRedirectPage = (html: string): boolean =>
  html.includes('<title>Redirecting to:') && html.includes('<meta http-equiv="refresh"')

export const checkBuild = (dist: string, snapshot: string[], redirects: Record<string, string>): string[] => {
  const missingFiles = flatMap(['sitemap.xml', 'robots.txt'], (name) =>
    existsSync(join(dist, name)) ? [] : [`dist/${name} is missing`],
  )
  const urlProblems = flatMap(union(snapshot, keys(redirects)), (url) => {
    const file = join(dist, url === '/' ? 'index.html' : `${url}.html`)
    if (!existsSync(file) && url in redirects) {
      return [`${url} is in site/redirects.json but the build has no redirect page there`]
    }
    if (!existsSync(file)) {
      return [`${url} was live and now has no page. If you renamed or removed it, add a line to site/redirects.json.`]
    }
    const isRedirectFile = isRedirectPage(readFileSync(file, 'utf8'))
    if (url in redirects && !isRedirectFile) {
      return [`${url} is a redirect source but the build has a page there`]
    }
    if (!(url in redirects) && isRedirectFile) {
      return [`${url} is a redirect file but is not in the redirects list`]
    }
    return []
  })
  const targetProblems = flatMap(toPairs(redirects), ([source, target]) => {
    const file = join(dist, target === '/' ? 'index.html' : `${target}.html`)
    const isPage = existsSync(file) && !isRedirectPage(readFileSync(file, 'utf8'))
    return isPage ? [] : [`${source} redirects to ${target}, which is not a page`]
  })
  return [...missingFiles, ...urlProblems, ...targetProblems]
}
