import path from 'node:path'
import { dropRightWhile, dropWhile, flatMap, fromPairs, has, includes, last, map, orderBy } from 'lodash-es'

type Tag = { name: string; attributes: Record<string, string>; line: number }
type Block = { lines: string[]; end: number }
type Child = { tag: Tag; lines: string[] }

const TAG = /^\{%\s*([\w-]+)(.*?)\s*%\}$/
const ATTRIBUTE = /([\w-]+)="([^"]*)"/g
const ANY_TAG = /\{%\s*([\w-]+)/
const FENCE = /^\s*(`{3,}(?!.*`)|~{3,})/
const ASK_BUTTON = /<button\b[^>]*\bdata-action="ask"[^>]*>.*?<\/button>/g
const YOUTUBE = /(?:youtube\.com\/watch\?(?:[^#]*&)?v=|youtu\.be\/)([\w-]+)/
const CHILD_TAGS = ['step', 'tab', 'update']
const HINT_STYLES = ['info', 'success', 'warning', 'danger']
const REQUIRED_ATTRIBUTE: Record<string, string> = {
  'content-ref': 'url',
  hint: 'style',
  tab: 'title',
  update: 'date',
  embed: 'url',
  file: 'src',
}

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
  const required = REQUIRED_ATTRIBUTE[name]
  if (required && !has(attributes, required)) {
    throw new Error(`${file} line ${index + 1}: missing ${required} on GitBook tag {% ${name} %}`)
  }
  return { name, attributes, line: index + 1 }
}

const nextFence = (line: string, fence: string | null): string | null => {
  const marker = FENCE.exec(line)?.[1]
  if (fence === null) {
    return marker ?? null
  }
  const closes = marker !== undefined && marker[0] === fence[0] && marker.length >= fence.length && line.trim() === marker
  return closes ? null : fence
}

const trimBlank = (lines: string[]): string[] =>
  dropRightWhile(dropWhile(lines, (line) => line.trim() === ''), (line) => line.trim() === '')

const wrap = (open: string, body: string[], close: string): string[] => [open, '', ...trimBlank(body), '', close]

const tagError = (file: string, line: number, problem: string, name: string): Error =>
  new Error(`${file} line ${line}: ${problem} GitBook tag {% ${name} %}`)

const endOfOptionalEndTag = (lines: string[], index: number, file: string, name: string): number =>
  parseTag(lines[index + 1] ?? '', index + 1, file)?.name === `end${name}` ? index + 1 : index

const convertChildren = (lines: string[], start: number, file: string, parent: Tag, childName: string): { children: Child[]; end: number } => {
  const children: Child[] = []
  let index = start
  while (index < lines.length) {
    const tag = parseTag(lines[index], index, file)
    if (tag?.name === `end${parent.name}`) {
      return { children, end: index }
    }
    if (tag?.name === childName) {
      const block = convertBlock(lines, index + 1, file, tag)
      children.push({ tag, lines: block.lines })
      index = block.end + 1
    } else if (tag) {
      throw tagError(file, tag.line, 'unexpected', tag.name)
    } else if (lines[index].trim() !== '') {
      throw new Error(`${file} line ${index + 1}: unexpected content inside GitBook tag {% ${parent.name} %}`)
    } else {
      index += 1
    }
  }
  throw tagError(file, parent.line, 'unclosed', parent.name)
}

const convertTag = (lines: string[], index: number, file: string, tag: Tag): Block => {
  switch (tag.name) {
    case 'content-ref': {
      const block = convertBlock(lines, index + 1, file, tag)
      return { lines: [`<a class="card" href="${tag.attributes.url}"></a>`], end: block.end }
    }
    case 'hint': {
      if (!includes(HINT_STYLES, tag.attributes.style)) {
        throw new Error(`${file} line ${tag.line}: unknown hint style "${tag.attributes.style}"`)
      }
      const block = convertBlock(lines, index + 1, file, tag)
      return { lines: wrap(`<aside class="hint hint-${tag.attributes.style}">`, block.lines, '</aside>'), end: block.end }
    }
    case 'columns': {
      const block = convertBlock(lines, index + 1, file, tag)
      return { lines: wrap('<div class="columns">', block.lines, '</div>'), end: block.end }
    }
    case 'column': {
      const block = convertBlock(lines, index + 1, file, tag)
      return { lines: wrap('<div>', block.lines, '</div>'), end: block.end }
    }
    case 'stepper': {
      const { children, end } = convertChildren(lines, index + 1, file, tag, 'step')
      const steps = flatMap(children, (child) => ['', ...wrap('<li class="step">', child.lines, '</li>')])
      return { lines: wrap('<ol class="steps" role="list">', steps, '</ol>'), end }
    }
    case 'tabs': {
      const { children, end } = convertChildren(lines, index + 1, file, tag, 'tab')
      const tabs = flatMap(children, (child) => ['', `#### ${child.tag.attributes.title}`, '', ...trimBlank(child.lines)])
      return { lines: trimBlank(tabs), end }
    }
    case 'updates': {
      const { children, end } = convertChildren(lines, index + 1, file, tag, 'update')
      const newestFirst = orderBy(children, (child) => child.tag.attributes.date, 'desc')
      const updates = flatMap(newestFirst, (child) => [
        '',
        `<p class="update-date"><time datetime="${child.tag.attributes.date}">${child.tag.attributes.date}</time></p>`,
        '',
        ...trimBlank(child.lines),
      ])
      return { lines: trimBlank(updates), end }
    }
    case 'embed': {
      const url = tag.attributes.url
      const youtubeId = YOUTUBE.exec(url)?.[1]
      const embed = youtubeId
        ? `<iframe class="video" src="https://www.youtube-nocookie.com/embed/${youtubeId}" title="YouTube video" allowfullscreen loading="lazy"></iframe>`
        : `<a class="card" href="${url}"></a>`
      return { lines: [embed], end: endOfOptionalEndTag(lines, index, file, 'embed') }
    }
    case 'file': {
      const src = tag.attributes.src
      return { lines: [`<a class="file" href="${src}" download>${path.posix.basename(src)}</a>`], end: endOfOptionalEndTag(lines, index, file, 'file') }
    }
    default:
      throw tagError(file, tag.line, includes(CHILD_TAGS, tag.name) || tag.name.startsWith('end') ? 'unexpected' : 'unknown', tag.name)
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
      throw tagError(file, index + 1, 'unknown', stray[1])
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
    throw tagError(file, open.line, 'unclosed', open.name)
  }
  return { lines: output, end: lines.length }
}

export const convertGitbook = (markdown: string, file: string): string =>
  convertBlock(markdown.split('\n'), 0, file, null).lines.join('\n')
