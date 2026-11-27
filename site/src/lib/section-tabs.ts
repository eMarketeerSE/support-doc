import { Space, SPACE_PREFIX } from './summary'

type SectionTab = { label: string; href: string; current: 'page' | 'true' | null }

export const getSectionTabs = (space: Space, pageUrl: string): SectionTab[] => {
  const docsSpace = space === Space.Swedish ? Space.Swedish : Space.English
  const current = pageUrl === SPACE_PREFIX[space] ? 'page' : 'true'

  return [
    { label: 'Support docs', href: SPACE_PREFIX[docsSpace], current: space === docsSpace ? current : null },
    { label: 'Changelog', href: SPACE_PREFIX[Space.Changelog], current: space === Space.Changelog ? current : null },
    { label: 'Legal', href: SPACE_PREFIX[Space.Legal], current: space === Space.Legal ? current : null },
  ]
}
