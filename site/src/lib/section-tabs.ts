import { Space, SPACE_PREFIX } from './summary'

export type SectionTab = { label: string; href: string; current: 'page' | 'true' | null }

export const getSectionTabs = (space: Space, pageUrl: string): SectionTab[] => {
  const docsSpace = space === Space.Swedish ? Space.Swedish : Space.English
  const tabs = [
    { label: 'Support docs', tabSpace: docsSpace, active: space === Space.English || space === Space.Swedish },
    { label: 'Changelog', tabSpace: Space.Changelog, active: space === Space.Changelog },
    { label: 'Legal', tabSpace: Space.Legal, active: space === Space.Legal },
  ]

  return tabs.map(({ label, tabSpace, active }) => {
    const href = SPACE_PREFIX[tabSpace]
    return { label, href, current: active ? (pageUrl === SPACE_PREFIX[space] ? 'page' : 'true') : null }
  })
}
