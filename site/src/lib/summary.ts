import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'
import { chain, find, flatMap, last, size, some } from 'lodash-es'

export enum Space {
  English = 'english',
  Swedish = 'swedish',
  Changelog = 'changelog',
  Legal = 'legal',
}

export type SitePage = { url: string; file: string; title: string; description: string; space: Space }
export type NavItem = { title: string; url: string; children: NavItem[] }
export type NavGroup = { heading: string | null; items: NavItem[] }

export const SPACE_PREFIX: Record<Space, string> = {
  [Space.English]: '/',
  [Space.Swedish]: '/docs/docs_se',
  [Space.Changelog]: '/changelog',
  [Space.Legal]: '/legal',
}

export const SPACE_SUMMARY: Record<Space, string> = {
  [Space.English]: 'SUMMARY.md',
  [Space.Swedish]: 'sv/SUMMARY.md',
  [Space.Changelog]: 'changelog/SUMMARY.md',
  [Space.Legal]: 'legal/SUMMARY.md',
}

export const REPO_ROOT = fileURLToPath(new URL('../../../', import.meta.url))
const HEADING = /^## (.+?)\s*$/
const LIST_MARKER = /^ *[*-]/
const ENTRY = /^( *)\* \[(.*)\]\(([^)\s]+)(?: "[^"]*")?\)\s*$/

export const slug = (text: string): string =>
  text
    .normalize('NFKD')
    .replace(/[^\x00-\x7F]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const parseSummary = (
  summary: string,
  space: Space,
  readDescription: (file: string) => string,
): { pages: SitePage[]; nav: NavGroup[] } => {
  const prefix = SPACE_PREFIX[space] === '/' ? '' : SPACE_PREFIX[space]
  const summaryDirectory = path.posix.dirname(SPACE_SUMMARY[space])
  const pages: SitePage[] = []
  const nav: NavGroup[] = [{ heading: null, items: [] }]
  let group: string | null = null
  let names: string[] = []
  let parents: NavItem[] = []

  for (const [index, line] of summary.split('\n').entries()) {
    const heading = HEADING.exec(line)
    if (heading) {
      group = slug(heading[1])
      names = []
      parents = []
      nav.push({ heading: heading[1], items: [] })
      continue
    }
    const entry = ENTRY.exec(line)
    if (!entry) {
      if (LIST_MARKER.test(line)) {
        throw new Error(`${SPACE_SUMMARY[space]} line ${index + 1}: cannot read entry: ${line}`)
      }
      continue
    }
    if (entry[1].length % 2 !== 0) {
      throw new Error(`${SPACE_SUMMARY[space]} line ${index + 1}: indent must be a multiple of 2: ${line}`)
    }
    const level = entry[1].length / 2
    const entryPath = entry[3]
    const stem = path.posix.basename(entryPath, '.md')
    const name = stem === 'README' ? path.posix.basename(path.posix.dirname(entryPath)) : stem
    names = [...names.slice(0, level), name]
    const url = size(pages) === 0 ? SPACE_PREFIX[space] : `${prefix}/${[group, ...names].filter(Boolean).join('/')}`
    const file = path.posix.normalize(path.posix.join(summaryDirectory, entryPath))

    if (some(pages, { url })) {
      throw new Error(`Duplicate url ${url} for ${file}`)
    }
    pages.push({ url, file, title: entry[2], description: readDescription(file), space })

    const item: NavItem = { title: entry[2], url, children: [] }
    parents = parents.slice(0, level)
    const parent = last(parents)
    if (parent) {
      parent.children.push(item)
    } else {
      last(nav)!.items.push(item)
    }
    parents.push(item)
  }

  return { pages, nav: nav.filter((navGroup) => navGroup.heading !== null || navGroup.items.length > 0) }
}

const readDescriptionFromFile = (file: string): string => {
  const absolute = path.join(REPO_ROOT, file)
  if (!existsSync(absolute)) {
    throw new Error(`SUMMARY.md lists ${file} but the file does not exist`)
  }
  return String(matter(readFileSync(absolute, 'utf8')).data.description ?? '')
}

const readSummaryOf = (space: Space) =>
  parseSummary(readFileSync(path.join(REPO_ROOT, SPACE_SUMMARY[space]), 'utf8'), space, readDescriptionFromFile)

export const readSpace = (space: Space): SitePage[] => readSummaryOf(space).pages

export const readNav = (space: Space): NavGroup[] => readSummaryOf(space).nav

export const readAllPages = (): SitePage[] => {
  const pages = flatMap([Space.English, Space.Swedish, Space.Changelog, Space.Legal], readSpace)
  const duplicates = chain(pages).groupBy('url').pickBy((group) => size(group) > 1).keys().value()
  if (size(duplicates) > 0) {
    throw new Error(`Duplicate url across spaces: ${duplicates.join(', ')}`)
  }
  return pages
}

export const findTwinUrl = (page: SitePage, pages: SitePage[]): string => {
  if (page.space === Space.English) {
    return find(pages, { file: `sv/${page.file}` })?.url ?? SPACE_PREFIX[Space.Swedish]
  }
  if (page.space === Space.Swedish) {
    return find(pages, { file: page.file.replace(/^sv\//, '') })?.url ?? SPACE_PREFIX[Space.English]
  }
  return SPACE_PREFIX[Space.Swedish]
}
