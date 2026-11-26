import path from 'node:path'
import { dropRightWhile, dropWhile, flatMap, fromPairs, includes, isEmpty, last, map } from 'lodash-es'

type Tag = { name: string; attributes: Record<string, string>; line: number }
type Block = { lines: string[]; end: number }
type Child = { tag: Tag; lines: string[] }

const TAG = /^\{%\s*([\w-]+)((?:(?!%\}).)*?)\s*%\}$/
const ATTRIBUTE = /([\w-]+)="([^"]*)"/g
const ANY_TAG = /\{%\s*([\w-]+)/
const FENCE = /^\s*(`{3,}(?!.*`)|~{3,})/
const ASK_BUTTON = /<button\b[^>]*\bdata-action="ask"[^>]*>.*?<\/button>/g
const HINT_STYLES = ['info', 'success', 'warning', 'danger']
const DATE = /^\d{4}-\d{2}-\d{2}$/

const parseTag = (line: string, index: number, file: string): Tag | null => {
  const match = TAG.exec(line.trim())
  if (!match) {
    return null
  }
  const name = match[1]
  if (line !== line.trimStart()) {
    throw new Error(`${file} line ${index + 1}: indented GitBook tag {% ${name} %} is not supported`)
  }
  const attributes = fromPairs(map([...match[2].matchAll(ATTRIBUTE)], (attribute) => [attribute[1], attribute[2]]))
  return { name, attributes, line: index + 1 }
}

export const nextFence = (line: string, fence: string | null): string | null => {
  const marker = FENCE.exec(line)?.[1]
  if (fence === null) {
    return marker ?? null
  }
  const closes = marker !== undefined && marker[0] === fence[0] && marker.length >= fence.length && line.trim() === marker
  return closes ? null : fence
}

export const trimBlank = (lines: string[]): string[] =>
  dropRightWhile(dropWhile(lines, (line) => line.trim() === ''), (line) => line.trim() === '')

const wrap = (open: string, body: string[], close: string): string[] => [open, '', ...trimBlank(body), '', close]

const convertChildren = (lines: string[], start: number, file: string, parent: Tag, childName: string): { children: Child[]; end: number } => {
  const children: Child[] = []
  let index = start
  while (index < lines.length) {
    const tag = parseTag(lines[index], index, file)
    if (tag?.name === `end${parent.name}` && isEmpty(children)) {
      throw new Error(`${file} line ${parent.line}: empty GitBook tag {% ${parent.name} %}`)
    }
    if (tag?.name === `end${parent.name}`) {
      return { children, end: index }
    }
    if (tag?.name === childName) {
      const block = convertBlock(lines, index + 1, file, tag)
      children.push({ tag, lines: block.lines })
      index = block.end + 1
    } else if (tag) {
      throw new Error(`${file} line ${tag.line}: unexpected GitBook tag {% ${tag.name} %}`)
    } else if (lines[index].trim() !== '') {
      throw new Error(`${file} line ${index + 1}: unexpected content inside GitBook tag {% ${parent.name} %}`)
    } else {
      index += 1
    }
  }
  throw new Error(`${file} line ${parent.line}: unclosed GitBook tag {% ${parent.name} %}`)
}

const convertTag = (lines: string[], index: number, file: string, tag: Tag): Block => {
  switch (tag.name) {
    case 'content-ref': {
      const url = tag.attributes.url
      if (!url) {
        throw new Error(`${file} line ${tag.line}: missing url on GitBook tag {% content-ref %}`)
      }
      const block = convertBlock(lines, index + 1, file, tag)
      const text = block.lines.join('\n').trim()
      const name = path.posix.basename(url)
      if (text !== '' && text !== name && text !== url && text !== `[${name}](${url})`) {
        throw new Error(`${file} line ${tag.line}: content-ref text "${text}" is not the link target`)
      }
      return { lines: [`<a class="card" href="${url}"></a>`], end: block.end }
    }
    case 'hint': {
      const style = tag.attributes.style
      if (!style) {
        throw new Error(`${file} line ${tag.line}: missing style on GitBook tag {% hint %}`)
      }
      if (!includes(HINT_STYLES, style)) {
        throw new Error(`${file} line ${tag.line}: unknown hint style "${style}"`)
      }
      const block = convertBlock(lines, index + 1, file, tag)
      return { lines: wrap(`<aside class="hint hint-${style}">`, block.lines, '</aside>'), end: block.end }
    }
    case 'columns': {
      const { children, end } = convertChildren(lines, index + 1, file, tag, 'column')
      const columns = flatMap(children, (child) => ['', ...wrap('<div>', child.lines, '</div>')])
      return { lines: wrap('<div class="columns">', columns, '</div>'), end }
    }
    case 'stepper': {
      const { children, end } = convertChildren(lines, index + 1, file, tag, 'step')
      const steps = flatMap(children, (child) => ['', ...wrap('<li class="step">', child.lines, '</li>')])
      return { lines: wrap('<ol class="steps" role="list">', steps, '</ol>'), end }
    }
    case 'updates': {
      const { children, end } = convertChildren(lines, index + 1, file, tag, 'update')
      for (const child of children) {
        const date = child.tag.attributes.date
        if (!date) {
          throw new Error(`${file} line ${child.tag.line}: missing date on GitBook tag {% update %}`)
        }
        if (!DATE.test(date)) {
          throw new Error(`${file} line ${child.tag.line}: date "${date}" is not YYYY-MM-DD`)
        }
      }
      const updates = flatMap(children, (child) => [
        '',
        `<p class="update-date"><time datetime="${child.tag.attributes.date}">${child.tag.attributes.date}</time></p>`,
        '',
        ...trimBlank(child.lines),
      ])
      return { lines: trimBlank(updates), end }
    }
    case 'embed': {
      const url = tag.attributes.url
      if (!url) {
        throw new Error(`${file} line ${tag.line}: missing url on GitBook tag {% embed %}`)
      }
      const end = parseTag(lines[index + 1] ?? '', index + 1, file)?.name === 'endembed' ? index + 1 : index
      const parsed = URL.canParse(url) ? new URL(url) : null
      if (parsed?.hostname !== 'www.youtube.com') {
        return { lines: [`<a class="card" href="${url}"></a>`], end }
      }
      const videoId = parsed.searchParams.get('v') ?? ''
      if (!/^[\w-]+$/.test(videoId)) {
        throw new Error(`${file} line ${tag.line}: cannot read the YouTube video id from ${url}`)
      }
      return {
        lines: [`<iframe class="video" src="https://www.youtube-nocookie.com/embed/${videoId}" title="YouTube video" allowfullscreen loading="lazy"></iframe>`],
        end,
      }
    }
    case 'file': {
      const src = tag.attributes.src
      if (!src) {
        throw new Error(`${file} line ${tag.line}: missing src on GitBook tag {% file %}`)
      }
      const end = parseTag(lines[index + 1] ?? '', index + 1, file)?.name === 'endfile' ? index + 1 : index
      return { lines: [`<a class="file" href="${src}" download>${path.posix.basename(src)}</a>`], end }
    }
    default: {
      const misplaced = tag.name === 'step' || tag.name === 'update' || tag.name === 'column' || tag.name.startsWith('end')
      throw new Error(`${file} line ${tag.line}: ${misplaced ? 'unexpected' : 'unknown'} GitBook tag {% ${tag.name} %}`)
    }
  }
}

const convertBlock = (lines: string[], start: number, file: string, open: Tag | null): Block => {
  const output: string[] = []
  let fence: string | null = null
  let afterTag = false
  let index = start
  while (index < lines.length) {
    const line = lines[index]
    const tag = fence === null ? parseTag(line, index, file) : null
    if (tag && open && tag.name === `end${open.name}`) {
      return { lines: output, end: index }
    }
    if (tag) {
      const block = convertTag(lines, index, file, tag)
      if (output.length > 0 && last(output)?.trim() !== '') {
        output.push('')
      }
      output.push(...block.lines)
      afterTag = true
      index = block.end + 1
      continue
    }
    const stray = fence === null ? ANY_TAG.exec(line) : null
    if (stray) {
      throw new Error(`${file} line ${index + 1}: text before or after GitBook tag {% ${stray[1]} %} is not allowed`)
    }
    const text = fence === null ? line.replace(ASK_BUTTON, '') : line
    if (afterTag && text.trim() !== '') {
      output.push('')
    }
    output.push(text)
    afterTag = false
    fence = nextFence(line, fence)
    index += 1
  }
  if (open) {
    throw new Error(`${file} line ${open.line}: unclosed GitBook tag {% ${open.name} %}`)
  }
  return { lines: output, end: lines.length }
}

export const convertGitbook = (markdown: string, file: string): string =>
  convertBlock(markdown.split('\n'), 0, file, null).lines.join('\n')
