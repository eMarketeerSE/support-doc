import path from 'node:path'
import { filter, includes, join, map } from 'lodash-es'
import { SITE_URL } from './site-files'
import { SPACE_PREFIX, Space, type SitePage } from './summary'

export const EMMA_ARTICLE_LINE = /^- \[(.+?)\]\(https?:\/\/[^/)]+(\/[^)]*?)\.md\)(?::\s*(.*))?$/

export const EMMA_SECTIONS = [
  { heading: '## Support docs', space: Space.English },
  { heading: '## Changelog', space: Space.Changelog },
  { heading: '## Legal', space: Space.Legal },
]

export const mdPath = (page: SitePage): string => {
  if (page.url === SPACE_PREFIX[page.space]) {
    const stem = path.posix.basename(page.file, '.md').toLowerCase()
    return `${page.url === '/' ? '' : page.url}/${stem}.md`
  }
  return `${page.url}.md`
}

export const renderLlmsTxt = (pages: SitePage[]): string => {
  const sections = map(EMMA_SECTIONS, ({ heading, space }) => {
    const lines = map(filter(pages, { space }), (page) => {
      if (includes(page.description, '\n')) {
        throw new Error(`${page.file}: description has a line break`)
      }
      return `- [${page.title}](${SITE_URL}${mdPath(page)})${page.description === '' ? '' : `: ${page.description}`}`
    })
    return join([heading, '', ...lines], '\n')
  })
  return `${join(['# eMarketeer Support', ...sections], '\n\n')}\n`
}
