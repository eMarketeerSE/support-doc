import { promises as fs } from 'node:fs'
import path from 'node:path'

export interface ReportEntry {
  sourceUrl: string
  targetPath: string | null
  imagesDownloaded: number
  imagesFailed: string[]
  error?: string
}

export const writeReport = async (
  repoRoot: string,
  entries: ReportEntry[],
): Promise<void> => {
  const lines: string[] = [
    '# Migration Report',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    `Total pages processed: ${entries.length}`,
    '',
    '## Results',
    '',
    '| Source URL | Target | Images OK | Images Failed | Error |',
    '| --- | --- | --- | --- | --- |',
  ]

  for (const e of entries) {
    const target = e.targetPath ?? '(skipped)'
    const failed = e.imagesFailed.length > 0 ? e.imagesFailed.join('<br>') : '—'
    const error = e.error ?? '—'
    lines.push(`| ${e.sourceUrl} | ${target} | ${e.imagesDownloaded} | ${failed} | ${error} |`)
  }

  const unsorted = entries.filter((e) => e.targetPath?.startsWith('unsorted/'))
  if (unsorted.length > 0) {
    lines.push('', '## Unsorted bucket (triage these)', '')
    for (const e of unsorted) {
      lines.push(`- \`${e.targetPath}\` — from ${e.sourceUrl}`)
    }
  }

  await fs.writeFile(path.join(repoRoot, 'migration-report.md'), `${lines.join('\n')}\n`, 'utf8')
}
