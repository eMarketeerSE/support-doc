import { getCollection } from 'astro:content'
import { map, sortBy } from 'lodash-es'
import { renderLlmsTxt } from '../lib/llms'

export const GET = async () =>
  new Response(renderLlmsTxt(map(sortBy(await getCollection('pages'), 'data.order'), 'data')), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
