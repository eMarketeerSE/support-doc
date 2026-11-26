import { Space, SPACE_PREFIX } from './summary'

type SectionTab = { label: string; href: string; current: 'page' | 'true' | null }

export const getSectionTabs = (space: Space, pageUrl: string): SectionTab[] => {
  const docsSpace = space === Space.Swedish ? Space.Swedish : Space.English
  const isStartPage = pageUrl === SPACE_PREFIX[space]

  return [
    {
      label: 'Support docs',
      href: SPACE_PREFIX[docsSpace],
      current: space === Space.English || space === Space.Swedish ? (isStartPage ? 'page' : 'true') : null,
    },
    {
      label: 'Changelog',
      href: SPACE_PREFIX[Space.Changelog],
      current: space === Space.Changelog ? (isStartPage ? 'page' : 'true') : null,
    },
    {
      label: 'Legal',
      href: SPACE_PREFIX[Space.Legal],
      current: space === Space.Legal ? (isStartPage ? 'page' : 'true') : null,
    },
  ]
}
