import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { has } from 'lodash-es'

const TABLER_ICON_FOR: Record<string, string> = {
  'hand-wave': 'hand-stop',
  bolt: 'bolt',
  gear: 'settings',
  bullhorn: 'speakerphone',
  'arrow-progress': 'route',
  'address-book': 'address-book',
  'bullseye-arrow': 'target-arrow',
  gauge: 'gauge',
  'brackets-curly': 'braces',
  'rectangle-terminal': 'terminal-2',
  server: 'server',
  bookmark: 'bookmark',
  'circle-question': 'help-circle',
  link: 'link',
  robot: 'robot',
}

const SVG_CONTENT = /<svg[^>]*>([\s\S]*)<\/svg>/

export const readNavIcon = (name: string, file: string): string => {
  if (!has(TABLER_ICON_FOR, name)) {
    throw new Error(`${file}: no nav icon for "${name}"`)
  }
  const source = readFileSync(
    fileURLToPath(new URL(`../../node_modules/@tabler/icons/icons/outline/${TABLER_ICON_FOR[name]}.svg`, import.meta.url)),
    'utf8',
  )
  const content = SVG_CONTENT.exec(source)![1].replace(/<path stroke="none"[^>]*\/>/, '').trim()
  return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${content}</svg>`
}
