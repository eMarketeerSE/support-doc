import { map } from 'lodash-es'
import type { SitePage } from './summary'

export const SITE_URL = 'https://support.emarketeer.com'

export const renderSitemap = (pages: SitePage[]): string =>
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...map(pages, (page) => `  <url><loc>${SITE_URL}${page.url}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n')

export const renderRobots = (stage: string): string =>
  stage === 'prod'
    ? `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`
    : 'User-agent: *\nDisallow: /\n'
