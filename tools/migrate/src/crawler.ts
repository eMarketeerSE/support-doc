import * as cheerio from 'cheerio'
import pLimit from 'p-limit'
import { URL } from 'node:url'

export interface CrawlOptions {
  startUrl: string
  maxPages: number
  concurrency: number
  fetcher: (url: string) => Promise<string>
}

const SKIP_PATTERNS = [
  /\/wp-admin\//,
  /\/wp-content\//,
  /\/wp-json\//,
  /\?replytocom=/,
  /\/feed\/?$/,
  /\/page\/\d+\/?$/,
  /\/comments\/?$/,
  /\.(jpg|jpeg|png|gif|svg|pdf|zip|mp4)$/i,
]

const isInternal = (candidate: string, host: string): boolean => {
  try {
    const u = new URL(candidate)
    return u.host === host
  } catch {
    return false
  }
}

const normalizeUrl = (raw: string, base: string): string | null => {
  try {
    const u = new URL(raw, base)
    u.hash = ''
    u.search = ''
    return u.toString()
  } catch {
    return null
  }
}

const shouldSkip = (url: string): boolean =>
  SKIP_PATTERNS.some((pattern) => pattern.test(url))

export const crawl = async (options: CrawlOptions): Promise<string[]> => {
  const { startUrl, maxPages, concurrency, fetcher } = options
  const startHost = new URL(startUrl).host

  const seen = new Set<string>([startUrl])
  const queue: string[] = [startUrl]
  const visited: string[] = []
  const limit = pLimit(concurrency)

  while (queue.length > 0 && visited.length < maxPages) {
    const batch = queue.splice(0, concurrency)
    const results = await Promise.all(
      batch.map((url) =>
        limit(async () => {
          try {
            const html = await fetcher(url)
            return { url, html }
          } catch (err) {
            console.error(`crawl: failed ${url}: ${(err as Error).message}`)
            return null
          }
        }),
      ),
    )

    for (const result of results) {
      if (!result) {
        continue
      }
      visited.push(result.url)
      const $ = cheerio.load(result.html)
      $('a[href]').each((_, el) => {
        const href = $(el).attr('href')
        if (!href) {
          return
        }
        const normalized = normalizeUrl(href, result.url)
        if (
          normalized
          && !seen.has(normalized)
          && isInternal(normalized, startHost)
          && !shouldSkip(normalized)
        ) {
          seen.add(normalized)
          queue.push(normalized)
        }
      })
    }
  }

  return visited
}
