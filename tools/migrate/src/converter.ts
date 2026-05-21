/// <reference lib="dom" />
import TurndownService from 'turndown'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error -- turndown-plugin-gfm has no type declarations
import { gfm } from 'turndown-plugin-gfm'

export const createConverter = (): TurndownService => {
  const td = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    fence: '```',
    bulletListMarker: '-',
    emDelimiter: '_',
    strongDelimiter: '**',
  })

  td.use(gfm)

  td.addRule('fencedCodeWithLang', {
    filter: (node) => (
      node.nodeName === 'PRE'
      && node.firstChild !== null
      && (node.firstChild as HTMLElement).nodeName === 'CODE'
    ),
    replacement: (_content, node) => {
      const codeNode = (node as HTMLElement).firstChild as HTMLElement | null
      if (!codeNode) {
        return ''
      }
      const className = codeNode.getAttribute('class') ?? ''
      const langMatch = className.match(/language-(\S+)/)
      const lang = langMatch ? langMatch[1] : ''
      const code = codeNode.textContent ?? ''
      return `\n\n\`\`\`${lang}\n${code.replace(/\n$/, '')}\n\`\`\`\n\n`
    },
  })

  return td
}
