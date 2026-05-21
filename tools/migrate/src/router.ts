import slugifyLib from 'slugify'
import { URL } from 'node:url'

export interface RouteResult {
  folder: string
  slug: string
}

export const routeUrl = (url: string, title: string): RouteResult => {
  const u = new URL(url)
  const segments = u.pathname.split('/').filter(Boolean)

  let folder: string
  if (segments[0] === 'kb' && segments[1] === 'getting-started') {
    folder = 'getting-started'
  } else if (segments[0] === 'knowledgebase') {
    folder = 'knowledge-base'
  } else if (segments[0] === 'kb' || segments[0] === 'knowledgehome') {
    folder = 'knowledge-base'
  } else if (segments[0] === 'documentation' && segments[1] === 'legal') {
    folder = 'documentation/legal'
  } else if (segments[0] === 'documentation') {
    folder = 'documentation'
  } else if (segments[0] === 'change-log') {
    folder = 'change-log'
  } else {
    folder = 'unsorted'
  }

  const lastSegment = segments[segments.length - 1] ?? ''
  const slugSource = lastSegment || title || 'untitled'
  const slug = slugifyLib(slugSource, { lower: true, strict: true })

  return { folder, slug }
}
