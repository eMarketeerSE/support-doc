import { existsSync } from 'node:fs'
import path from 'node:path'
import { find, join, keys, map, split, startsWith } from 'lodash-es'
import { SPACE_PREFIX, Space, type SitePage } from './summary'

export const DOCS_SPACE_ID = '0ywqCs3au1x0DqPhEJTR'
export const CHANGELOG_SPACE_ID = 'R2AVUzAq8nYYHcGZOcNU'

export const ASSET_URL_PREFIX: Record<string, string> = {
  '.gitbook/assets/': '/.gitbook/assets/',
  'sv/.gitbook/assets/': `${SPACE_PREFIX[Space.Swedish]}/.gitbook/assets/`,
  'changelog/.gitbook/assets/': `${SPACE_PREFIX[Space.Changelog]}/.gitbook/assets/`,
  'legal/.gitbook/assets/': `${SPACE_PREFIX[Space.Legal]}/.gitbook/assets/`,
}
const SCHEME = /^[a-z][a-z0-9+.-]*:/i
const GITBOOK_HOST = /(^|\.)gitbook\.(com|io)$/
const GITBOOK_SPACE_PATH = /^\/(?:o\/[^/]+\/)?s\/([^/]+)(\/.*)?$/

const unmappable = (page: SitePage, href: string, reason: string): Error =>
  new Error(`${page.file}: cannot map link ${href}: ${reason}`)

export const isExternal = (href: string): boolean => SCHEME.test(href) || startsWith(href, '//')

const parseUrl = (href: string, page: SitePage): URL => {
  try {
    return new URL(href, 'https://placeholder.invalid')
  } catch {
    throw unmappable(page, href, 'not a valid URL')
  }
}

const decodePath = (target: string, href: string, page: SitePage): string => {
  try {
    return decodeURIComponent(target)
  } catch {
    throw unmappable(page, href, 'not a valid encoded path')
  }
}

export const resolveLink = (href: string, page: SitePage, pages: SitePage[], root: string): string => {
  if (startsWith(href, '#')) {
    return href
  }

  if (isExternal(href)) {
    const url = parseUrl(href, page)
    if (!GITBOOK_HOST.test(url.hostname)) {
      return href
    }
    const space = GITBOOK_SPACE_PATH.exec(url.pathname)
    if (url.hostname !== 'app.gitbook.com' || !space) {
      throw unmappable(page, href, `${url.hostname} is not a mapped GitBook link`)
    }
    const spacePath = (space[2] ?? '').replace(/\/$/, '')
    if (space[1] === CHANGELOG_SPACE_ID && spacePath === '') {
      return `/changelog${url.hash}`
    }
    if (space[1] === CHANGELOG_SPACE_ID && find(pages, { url: `/changelog${spacePath}` })) {
      return `/changelog${spacePath}${url.hash}`
    }
    if (space[1] === DOCS_SPACE_ID && spacePath === '') {
      return `/${url.hash}`
    }
    if (space[1] === DOCS_SPACE_ID && find(pages, { url: spacePath })) {
      return `${spacePath}${url.hash}`
    }
    throw unmappable(page, href, `no page for space ${space[1]} path ${spacePath || '/'}`)
  }

  const [target, ...fragmentParts] = href.split('#')
  const fragment = fragmentParts.length > 0 ? `#${fragmentParts.join('#')}` : ''
  const decoded = decodePath(target, href, page)
  const joined = path.posix.normalize(path.posix.join(path.posix.dirname(page.file), decoded))
  const isFolder = decoded.endsWith('/') || decoded === '.'
  const resolved = isFolder ? path.posix.join(joined, 'README.md') : joined

  if (resolved.endsWith('.md')) {
    const targetPage = find(pages, { file: resolved })
    if (!targetPage) {
      throw unmappable(page, href, `${resolved} is not listed in any SUMMARY.md`)
    }
    return `${targetPage.url}${fragment}`
  }

  const assetFolder = find(keys(ASSET_URL_PREFIX), (folder) => startsWith(resolved, folder))
  if (!assetFolder) {
    throw unmappable(page, href, `${resolved} is not a page or an asset`)
  }
  if (!existsSync(path.join(root, resolved))) {
    throw unmappable(page, href, `${resolved} does not exist`)
  }
  const encodedName = join(map(split(resolved.slice(assetFolder.length), '/'), encodeURIComponent), '/')
  return `${ASSET_URL_PREFIX[assetFolder]}${encodedName}${fragment}`
}
