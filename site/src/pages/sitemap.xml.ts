import { getCollection } from 'astro:content'
import { map } from 'lodash-es'
import { renderSitemap } from '../lib/site-files'

export const GET = async () =>
  new Response(renderSitemap(map(await getCollection('pages'), 'data')), { headers: { 'Content-Type': 'application/xml' } })
