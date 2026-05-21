import * as cheerio from 'cheerio'

export interface ExtractedPage {
  url: string
  title: string
  contentHtml: string
}

const CONTENT_SELECTORS = ['div.entry-content']

const TITLE_SELECTORS = [
  'div.kb-single h2.singlepg-font',
  'h2.singlepg-font',
]

const STRIP_SELECTORS = [
  '#rate-topic-content',
  '.rate-buttons',
  'section.manual_related_articles',
  '.manual-views',
  'script',
  'style',
  'noscript',
]

const TITLE_SUFFIX = ' - Emarketeer Support Center'

const findFirst = (
  $: cheerio.CheerioAPI,
  selectors: string[],
): any | null => {
  for (const sel of selectors) {
    const el = $(sel).first()
    if (el.length > 0) {
      return el
    }
  }
  return null
}

const titleFromHeadTag = ($: cheerio.CheerioAPI): string => {
  const raw = $('head > title').text().trim()
  if (raw.endsWith(TITLE_SUFFIX)) {
    return raw.slice(0, -TITLE_SUFFIX.length).trim()
  }
  return raw
}

export const extract = (url: string, html: string): ExtractedPage | null => {
  const $ = cheerio.load(html)

  const contentEl = findFirst($, CONTENT_SELECTORS)
  if (!contentEl) {
    return null
  }

  STRIP_SELECTORS.forEach((sel) => contentEl.find(sel).remove())

  const titleEl = findFirst($, TITLE_SELECTORS)
  let title = titleEl ? titleEl.text().trim() : ''
  if (!title) {
    title = titleFromHeadTag($)
  }
  if (!title) {
    title = url
  }

  return {
    url,
    title,
    contentHtml: contentEl.html() ?? '',
  }
}
