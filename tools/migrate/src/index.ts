import { Command } from 'commander'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { crawl } from './crawler.js'
import { createFetcher } from './fetcher.js'
import { extract } from './extractor.js'
import { createConverter } from './converter.js'
import { downloadImages } from './images.js'
import { routeUrl } from './router.js'
import { generateSummary, ArticleEntry } from './summary.js'
import { writeReport, ReportEntry } from './report.js'

interface CliOptions {
  start: string
  out: string
  maxPages: string
  concurrency: string
  dryRun?: boolean
}

const main = async (): Promise<void> => {
  const program = new Command()
  program
    .requiredOption('--start <url>', 'starting URL for crawl')
    .requiredOption('--out <path>', 'repo root (absolute)')
    .option('--max-pages <n>', 'max pages to crawl', '500')
    .option('--concurrency <n>', 'concurrent fetches', '2')
    .option('--dry-run', 'crawl and print URL list, write nothing')

  program.parse()
  const opts = program.opts<CliOptions>()

  const repoRoot = path.resolve(opts.out)
  const assetsDir = path.join(repoRoot, 'assets')
  const maxPages = Number.parseInt(opts.maxPages, 10)
  const concurrency = Number.parseInt(opts.concurrency, 10)

  const fetcher = createFetcher(1000)
  const converter = createConverter()

  console.log(`crawl: starting from ${opts.start} (max ${maxPages} pages)`)
  const urls = await crawl({
    startUrl: opts.start,
    maxPages,
    concurrency,
    fetcher,
  })
  console.log(`crawl: discovered ${urls.length} pages`)

  if (opts.dryRun) {
    console.log('--- URL list ---')
    urls.forEach((u) => console.log(u))
    return
  }

  const articles: ArticleEntry[] = []
  const entries: ReportEntry[] = []

  for (const url of urls) {
    const entry: ReportEntry = {
      sourceUrl: url,
      targetPath: null,
      imagesDownloaded: 0,
      imagesFailed: [],
    }
    try {
      const html = await fetcher(url)
      const extracted = extract(url, html)
      if (!extracted) {
        entry.error = 'no content container matched'
        entries.push(entry)
        continue
      }

      const { folder, slug } = routeUrl(url, extracted.title)
      const folderPath = path.join(repoRoot, folder)
      await fs.mkdir(folderPath, { recursive: true })

      const imageResult = await downloadImages(
        extracted.contentHtml,
        url,
        slug,
        assetsDir,
      )

      const markdown = converter.turndown(imageResult.contentHtml)
      const body = `# ${extracted.title}\n\n${markdown}\n`
      const targetFile = path.join(folderPath, `${slug}.md`)
      await fs.writeFile(targetFile, body, 'utf8')

      articles.push({ folder, slug, title: extracted.title })
      entry.targetPath = `${folder}/${slug}.md`
      entry.imagesDownloaded = imageResult.imagesDownloaded.length
      entry.imagesFailed = imageResult.imagesFailed
    } catch (err) {
      entry.error = (err as Error).message
    }
    entries.push(entry)
  }

  await generateSummary(repoRoot, articles)
  await writeReport(repoRoot, entries)

  console.log(`migrate: wrote ${articles.length} articles, see migration-report.md`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
