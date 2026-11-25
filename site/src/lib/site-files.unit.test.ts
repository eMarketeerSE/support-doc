import assert from 'node:assert'
import { describe, it } from 'node:test'
import { map, size, uniq } from 'lodash-es'
import { renderRobots, renderSitemap } from './site-files'
import { readAllPages } from './summary'

describe('site files', () => {
  const pages = readAllPages()
  const sitemap = renderSitemap(pages)
  const locations = map(Array.from(sitemap.matchAll(/<loc>(.+?)<\/loc>/g)), 1)

  it('should list every page URL once in the sitemap', () => {
    assert.strictEqual(size(locations), size(pages))
    assert.strictEqual(size(uniq(locations)), size(locations))
  })

  it('should list the home page as the site root with a trailing slash', () => {
    assert.ok(locations.includes('https://support.emarketeer.com/'))
  })

  it('should allow everything and name the sitemap on prod', () => {
    assert.strictEqual(renderRobots('prod'), 'User-agent: *\nAllow: /\nSitemap: https://support.emarketeer.com/sitemap.xml\n')
  })

  it('should disallow everything on dev', () => {
    assert.strictEqual(renderRobots('dev'), 'User-agent: *\nDisallow: /\n')
  })

  it('should throw for a stage that is not dev or prod', () => {
    assert.throws(() => renderRobots('staging'), /SITE_STAGE must be dev or prod, got staging/)
    assert.throws(() => renderRobots(undefined), /SITE_STAGE/)
  })
})
