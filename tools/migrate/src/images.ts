import axios from 'axios'
import * as cheerio from 'cheerio'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { URL } from 'node:url'

export interface ImageRewriteResult {
  contentHtml: string
  imagesDownloaded: string[]
  imagesFailed: string[]
}

const filenameFromUrl = (url: string): string => {
  const u = new URL(url)
  const base = path.basename(u.pathname) || 'image'
  return base.replace(/[^a-zA-Z0-9._-]/g, '_')
}

const downloadBinary = async (url: string, dest: string): Promise<void> => {
  const response = await axios.get<ArrayBuffer>(url, {
    responseType: 'arraybuffer',
    timeout: 30000,
  })
  await fs.writeFile(dest, Buffer.from(response.data))
}

export const downloadImages = async (
  contentHtml: string,
  pageUrl: string,
  articleSlug: string,
  assetsDir: string,
): Promise<ImageRewriteResult> => {
  const $ = cheerio.load(contentHtml, null, false)
  const imgEls = $('img').toArray()

  const articleAssetsDir = path.join(assetsDir, articleSlug)
  await fs.mkdir(articleAssetsDir, { recursive: true })

  const downloaded: string[] = []
  const failed: string[] = []

  for (const el of imgEls) {
    const src = $(el).attr('src')
    if (!src) {
      continue
    }
    let absolute: string
    try {
      absolute = new URL(src, pageUrl).toString()
    } catch {
      failed.push(src)
      continue
    }

    const filename = filenameFromUrl(absolute)
    const localPath = path.join(articleAssetsDir, filename)

    try {
      await fs.access(localPath)
    } catch {
      try {
        await downloadBinary(absolute, localPath)
      } catch (err) {
        console.error(`image: failed ${absolute}: ${(err as Error).message}`)
        failed.push(absolute)
        continue
      }
    }

    const relPath = `../assets/${articleSlug}/${filename}`
    $(el).attr('src', relPath)
    downloaded.push(absolute)
  }

  return {
    contentHtml: $.html(),
    imagesDownloaded: downloaded,
    imagesFailed: failed,
  }
}
