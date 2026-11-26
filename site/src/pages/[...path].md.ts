import { getCollection } from 'astro:content'
import { map } from 'lodash-es'
import { mdPath } from '../lib/llms'

export const getStaticPaths = async () =>
  map(await getCollection('pages'), (entry) => ({
    params: { path: mdPath(entry.data).slice(1, -'.md'.length) },
    props: { markdown: entry.data.markdown },
  }))

export const GET = ({ props }: { props: { markdown: string } }) =>
  new Response(props.markdown, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
