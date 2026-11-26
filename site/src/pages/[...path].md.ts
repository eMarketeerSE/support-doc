import { getCollection } from 'astro:content'
import { chain, join, map, size } from 'lodash-es'
import { mdPath } from '../lib/llms'

export const getStaticPaths = async () => {
  const entries = await getCollection('pages')
  const clash = chain(entries).map('data').groupBy(mdPath).find((group) => size(group) > 1).value()
  if (clash) {
    throw new Error(`${join(map(clash, 'file'), ', ')}: these pages have the same .md path ${mdPath(clash[0])}`)
  }
  return map(entries, (entry) => ({
    params: { path: mdPath(entry.data).slice(1, -'.md'.length) },
    props: { markdown: entry.data.markdown },
  }))
}

export const GET = ({ props }: { props: { markdown: string } }) =>
  new Response(props.markdown, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
