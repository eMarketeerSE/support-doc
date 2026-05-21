import axios from 'axios'
import { createHash } from 'node:crypto'
import { promises as fs } from 'node:fs'
import path from 'node:path'

const CACHE_DIR = path.join(process.cwd(), '.cache')

const urlToCachePath = (url: string): string => {
  const hash = createHash('sha256').update(url).digest('hex').slice(0, 16)
  return path.join(CACHE_DIR, `${hash}.html`)
}

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => { setTimeout(resolve, ms) })

const fetchWithRetry = async (url: string, attempt = 1): Promise<string> => {
  try {
    const response = await axios.get<string>(url, {
      timeout: 30000,
      responseType: 'text',
      headers: {
        'User-Agent': 'emarketeer-doc-migration/0.1 (+contact: magnus.baudin@emarketeer.com)',
      },
    })
    return response.data
  } catch (err) {
    const status = (err as { response?: { status?: number } }).response?.status ?? 0
    if (attempt < 4 && (status === 0 || status >= 500)) {
      const backoff = 1000 * 2 ** (attempt - 1)
      console.warn(`fetcher: ${url} attempt ${attempt} failed (${status}), retry in ${backoff}ms`)
      await sleep(backoff)
      return fetchWithRetry(url, attempt + 1)
    }
    throw err
  }
}

export const createFetcher = (throttleMs = 1000) => {
  let lastRequest = 0

  return async (url: string): Promise<string> => {
    await fs.mkdir(CACHE_DIR, { recursive: true })
    const cachePath = urlToCachePath(url)

    try {
      return await fs.readFile(cachePath, 'utf8')
    } catch {
      // Cache miss — fetch
    }

    const now = Date.now()
    const wait = Math.max(0, throttleMs - (now - lastRequest))
    if (wait > 0) {
      await sleep(wait)
    }
    lastRequest = Date.now()

    console.log(`fetch: ${url}`)
    const html = await fetchWithRetry(url)
    await fs.writeFile(cachePath, html, 'utf8')
    return html
  }
}
