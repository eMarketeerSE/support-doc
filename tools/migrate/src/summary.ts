import { promises as fs } from 'node:fs'
import path from 'node:path'

export interface ArticleEntry {
  folder: string
  slug: string
  title: string
}

const SECTION_ORDER = [
  { folder: 'getting-started', label: 'Getting Started' },
  { folder: 'knowledge-base', label: 'Knowledge Base' },
  { folder: 'documentation', label: 'Documentation' },
  { folder: 'documentation/legal', label: 'Legal' },
  { folder: 'change-log', label: 'Change Log' },
  { folder: 'unsorted', label: 'Unsorted (triage)' },
]

export const generateSummary = async (
  repoRoot: string,
  articles: ArticleEntry[],
): Promise<void> => {
  const lines: string[] = ['# Table of contents', '', '* [Welcome](README.md)', '']

  for (const section of SECTION_ORDER) {
    const inSection = articles.filter((a) => a.folder === section.folder)
    if (inSection.length === 0 && section.folder !== 'unsorted') {
      lines.push(`## ${section.label}`, '')
      lines.push(`* [Overview](${section.folder}/README.md)`, '')
      continue
    }
    if (inSection.length === 0) {
      continue
    }
    lines.push(`## ${section.label}`, '')
    if (section.folder !== 'unsorted') {
      lines.push(`* [Overview](${section.folder}/README.md)`)
    }
    for (const article of inSection) {
      lines.push(`* [${article.title}](${section.folder}/${article.slug}.md)`)
    }
    lines.push('')
  }

  await fs.writeFile(path.join(repoRoot, 'SUMMARY.md'), `${lines.join('\n')}\n`, 'utf8')
}
