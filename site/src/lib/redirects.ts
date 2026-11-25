import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const REDIRECTS_FILE = fileURLToPath(new URL('../../redirects.json', import.meta.url))

export const readRedirects = (): Record<string, string> => JSON.parse(readFileSync(REDIRECTS_FILE, 'utf8'))
