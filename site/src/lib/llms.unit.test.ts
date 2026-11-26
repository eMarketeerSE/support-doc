import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { filter, startsWith } from 'lodash-es'
import { mdPath, renderLlmsTxt } from './llms'
import { Space, type SitePage } from './summary'

const EMMA_LINE = /^- \[(.+?)\]\(https?:\/\/[^/)]+(\/[^)]*?)\.md\)(?::\s*(.*))?$/

const pages: SitePage[] = [
  { url: '/', file: 'overview.md', title: 'Welcome', description: 'The home page.', space: Space.English },
  { url: '/guides/intro', file: 'guides/intro.md', title: 'Intro', description: '', space: Space.English },
  { url: '/docs/docs_se', file: 'sv/overview.md', title: 'Valkommen', description: 'Hem.', space: Space.Swedish },
  { url: '/changelog', file: 'changelog/README.md', title: 'Changelog', description: 'Release notes.', space: Space.Changelog },
  { url: '/legal', file: 'legal/legal.md', title: 'Legal', description: 'Terms.', space: Space.Legal },
]

describe('mdPath', () => {
  it('should map the English root to /overview.md', () => {
    assert.equal(mdPath(pages[0]), '/overview.md')
  })

  it('should map the Swedish root under its prefix', () => {
    assert.equal(mdPath(pages[2]), '/docs/docs_se/overview.md')
  })

  it('should lower-case the file stem of the changelog root', () => {
    assert.equal(mdPath(pages[3]), '/changelog/readme.md')
  })

  it('should map the legal root to /legal/legal.md', () => {
    assert.equal(mdPath(pages[4]), '/legal/legal.md')
  })

  it('should append .md to a nested page url', () => {
    assert.equal(mdPath(pages[1]), '/guides/intro.md')
  })
})

describe('renderLlmsTxt', () => {
  const output = renderLlmsTxt(pages)

  it('should list English, changelog and legal pages and skip Swedish', () => {
    assert.equal(
      output,
      [
        '# eMarketeer Support',
        '',
        '## Support docs',
        '',
        '- [Welcome](https://support.emarketeer.com/overview.md): The home page.',
        '- [Intro](https://support.emarketeer.com/guides/intro.md)',
        '',
        '## Changelog',
        '',
        '- [Changelog](https://support.emarketeer.com/changelog/readme.md): Release notes.',
        '',
        '## Legal',
        '',
        '- [Legal](https://support.emarketeer.com/legal/legal.md): Terms.',
        '',
      ].join('\n'),
    )
  })

  it('should write every list line in the format eMMa reads', () => {
    const lines = filter(output.split('\n'), (line) => startsWith(line, '- ['))
    assert.equal(lines.length, 4)
    for (const line of lines) {
      assert.match(line, EMMA_LINE)
    }
  })
})
