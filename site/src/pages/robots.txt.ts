import { renderRobots } from '../lib/site-files'

export const GET = () => new Response(renderRobots(process.env.SITE_STAGE ?? 'dev'), { headers: { 'Content-Type': 'text/plain' } })
