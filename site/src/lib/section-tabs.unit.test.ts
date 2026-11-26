import assert from 'node:assert'
import { describe, it } from 'node:test'
import { getSectionTabs } from './section-tabs'
import { Space } from './summary'

describe('getSectionTabs', () => {
  it('should mark Support docs as the current page on the English start page', () => {
    assert.deepStrictEqual(getSectionTabs(Space.English, '/'), [
      { label: 'Support docs', href: '/', current: 'page' },
      { label: 'Changelog', href: '/changelog', current: null },
      { label: 'Legal', href: '/legal', current: null },
    ])
  })

  it('should mark Support docs as current inside an English article', () => {
    assert.strictEqual(getSectionTabs(Space.English, '/guides/intro')[0].current, 'true')
  })

  it('should point Support docs at the Swedish start page on Swedish pages', () => {
    assert.deepStrictEqual(getSectionTabs(Space.Swedish, '/docs/docs_se/guider/intro')[0], {
      label: 'Support docs',
      href: '/docs/docs_se',
      current: 'true',
    })
  })

  it('should mark Support docs as the current page on the Swedish start page', () => {
    assert.strictEqual(getSectionTabs(Space.Swedish, '/docs/docs_se')[0].current, 'page')
  })

  it('should point Support docs at the English start page on changelog pages', () => {
    const tabs = getSectionTabs(Space.Changelog, '/changelog/2025')
    assert.strictEqual(tabs[0].href, '/')
    assert.strictEqual(tabs[0].current, null)
    assert.strictEqual(tabs[1].current, 'true')
  })

  it('should mark Legal as the current page on the legal start page', () => {
    assert.strictEqual(getSectionTabs(Space.Legal, '/legal')[2].current, 'page')
  })
})
