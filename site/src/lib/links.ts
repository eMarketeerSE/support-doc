import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { find, keys, startsWith } from 'lodash-es'
import type { SitePage } from './summary'

export const DOCS_SPACE_ID = '0ywqCs3au1x0DqPhEJTR'
export const CHANGELOG_SPACE_ID = 'R2AVUzAq8nYYHcGZOcNU'
export const REPO_ROOT = fileURLToPath(new URL('../../../', import.meta.url))

const ASSET_URL_PREFIX: Record<string, string> = {
  '.gitbook/assets/': '/.gitbook/assets/',
  'sv/.gitbook/assets/': '/docs/docs_se/.gitbook/assets/',
  'changelog/.gitbook/assets/': '/changelog/.gitbook/assets/',
}
const SCHEME = /^[a-z][a-z0-9+.-]*:/i
const GITBOOK_HOST = /(^|\.)gitbook\.(com|io)$/
const GITBOOK_SPACE_PATH = /^\/(?:o\/[^/]+\/)?s\/([^/]+)(\/.*)?$/

const unmappable = (page: SitePage, href: string, reason: string): Error =>
  new Error(`${page.file}: cannot map link ${href}: ${reason}`)

export const isExternal = (href: string): boolean => SCHEME.test(href) || startsWith(href, '//')

export const resolveLink = (href: string, page: SitePage, pages: SitePage[]): string => {
  if (startsWith(href, '#')) {
    return href
  }

  if (isExternal(href)) {
    const url = new URL(href, 'https://placeholder.invalid')
    if (!GITBOOK_HOST.test(url.hostname)) {
      return href
    }
    const space = GITBOOK_SPACE_PATH.exec(url.pathname)
    if (url.hostname !== 'app.gitbook.com' || !space) {
      throw unmappable(page, href, `${url.hostname} is not a mapped GitBook link`)
    }
    const spacePath = (space[2] ?? '').replace(/\/$/, '')
    if (space[1] === CHANGELOG_SPACE_ID && spacePath === '') {
      return '/changelog'
    }
    if (space[1] === DOCS_SPACE_ID && find(pages, { url: spacePath })) {
      return `${spacePath}${url.hash}`
    }
    throw unmappable(page, href, `no page for space ${space[1]} path ${spacePath || '/'}`)
  }

  const [target, ...fragmentParts] = href.split('#')
  const fragment = fragmentParts.length > 0 ? `#${fragmentParts.join('#')}` : ''
  const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(page.file), decodeURIComponent(target)))

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
  if (!existsSync(path.join(REPO_ROOT, resolved))) {
    throw unmappable(page, href, `${resolved} does not exist`)
  }
  const encodedName = resolved.slice(assetFolder.length).split('/').map(encodeURIComponent).join('/')
  return `${ASSET_URL_PREFIX[assetFolder]}${encodedName}${fragment}`
}
