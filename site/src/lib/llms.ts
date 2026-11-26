import path from 'node:path'
import { filter, map } from 'lodash-es'
import { SITE_URL } from './site-files'
import { SPACE_PREFIX, Space, type SitePage } from './summary'

export const EMMA_ARTICLE_LINE = /^- \[(.+?)\]\(https?:\/\/[^/)]+(\/[^)]*?)\.md\)(?::\s*(.*))?$/

export const mdPath = (page: SitePage): string => {
  if (page.url === SPACE_PREFIX[page.space]) {
    const stem = path.posix.basename(page.file, '.md').toLowerCase()
    return `${page.url === '/' ? '' : page.url}/${stem}.md`
  }
  return `${page.url}.md`
}

export const renderLlmsTxt = (pages: SitePage[]): string => {
  const supportLines = map(
    filter(pages, { space: Space.English }),
    (page) => `- [${page.title}](${SITE_URL}${mdPath(page)})${page.description === '' ? '' : `: ${page.description}`}`,
  )
  const changelogLines = map(
    filter(pages, { space: Space.Changelog }),
    (page) => `- [${page.title}](${SITE_URL}${mdPath(page)})${page.description === '' ? '' : `: ${page.description}`}`,
  )
  const legalLines = map(
    filter(pages, { space: Space.Legal }),
    (page) => `- [${page.title}](${SITE_URL}${mdPath(page)})${page.description === '' ? '' : `: ${page.description}`}`,
  )
  return (
    [
      '# eMarketeer Support',
      ['## Support docs', '', ...supportLines].join('\n'),
      ['## Changelog', '', ...changelogLines].join('\n'),
      ['## Legal', '', ...legalLines].join('\n'),
    ].join('\n\n') + '\n'
  )
}
