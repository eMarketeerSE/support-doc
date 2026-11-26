import path from 'node:path'
import { filter, map } from 'lodash-es'
import { SITE_URL } from './site-files'
import { SPACE_PREFIX, Space, type SitePage } from './summary'

export const mdPath = (page: SitePage): string => {
  if (page.url === SPACE_PREFIX[page.space]) {
    const stem = path.posix.basename(page.file, '.md').toLowerCase()
    return `${page.url === '/' ? '' : page.url}/${stem}.md`
  }
  return `${page.url}.md`
}

export const renderLlmsTxt = (pages: SitePage[]): string => {
  const sections = [
    { heading: 'Support docs', space: Space.English },
    { heading: 'Changelog', space: Space.Changelog },
    { heading: 'Legal', space: Space.Legal },
  ]
  const blocks = map(sections, ({ heading, space }) => {
    const lines = map(
      filter(pages, { space }),
      (page) => `- [${page.title}](${SITE_URL}${mdPath(page)})${page.description === '' ? '' : `: ${page.description}`}`,
    )
    return [`## ${heading}`, '', ...lines].join('\n')
  })
  return ['# eMarketeer Support', ...blocks].join('\n\n') + '\n'
}
