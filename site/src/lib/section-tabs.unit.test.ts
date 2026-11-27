import assert from 'node:assert'
import { describe, it } from 'node:test'
import { getSectionTabs } from './section-tabs'
import { Space } from './summary'

describe('getSectionTabs', () => {
  it('should mark Support docs as current inside an English article', () => {
    assert.deepStrictEqual(getSectionTabs(Space.English, '/guides/intro'), [
      { label: 'Support docs', href: '/', current: 'true' },
      { label: 'Changelog', href: '/changelog', current: null },
      { label: 'Legal', href: '/legal', current: null },
    ])
  })

  it('should mark Support docs as the current page on the English start page', () => {
    assert.deepStrictEqual(getSectionTabs(Space.English, '/'), [
      { label: 'Support docs', href: '/', current: 'page' },
      { label: 'Changelog', href: '/changelog', current: null },
      { label: 'Legal', href: '/legal', current: null },
    ])
  })

  it('should point Support docs at the Swedish start page inside a Swedish article', () => {
    assert.deepStrictEqual(getSectionTabs(Space.Swedish, '/docs/docs_se/guider/intro'), [
      { label: 'Support docs', href: '/docs/docs_se', current: 'true' },
      { label: 'Changelog', href: '/changelog', current: null },
      { label: 'Legal', href: '/legal', current: null },
    ])
  })

  it('should mark Support docs as the current page on the Swedish start page', () => {
    assert.deepStrictEqual(getSectionTabs(Space.Swedish, '/docs/docs_se'), [
      { label: 'Support docs', href: '/docs/docs_se', current: 'page' },
      { label: 'Changelog', href: '/changelog', current: null },
      { label: 'Legal', href: '/legal', current: null },
    ])
  })

  it('should mark Changelog as current inside a changelog page', () => {
    assert.deepStrictEqual(getSectionTabs(Space.Changelog, '/changelog/2025'), [
      { label: 'Support docs', href: '/', current: null },
      { label: 'Changelog', href: '/changelog', current: 'true' },
      { label: 'Legal', href: '/legal', current: null },
    ])
  })

  it('should mark Changelog as the current page on the changelog start page', () => {
    assert.deepStrictEqual(getSectionTabs(Space.Changelog, '/changelog'), [
      { label: 'Support docs', href: '/', current: null },
      { label: 'Changelog', href: '/changelog', current: 'page' },
      { label: 'Legal', href: '/legal', current: null },
    ])
  })

  it('should mark Legal as current inside a legal page', () => {
    assert.deepStrictEqual(getSectionTabs(Space.Legal, '/legal/terms'), [
      { label: 'Support docs', href: '/', current: null },
      { label: 'Changelog', href: '/changelog', current: null },
      { label: 'Legal', href: '/legal', current: 'true' },
    ])
  })

  it('should mark Legal as the current page on the legal start page', () => {
    assert.deepStrictEqual(getSectionTabs(Space.Legal, '/legal'), [
      { label: 'Support docs', href: '/', current: null },
      { label: 'Changelog', href: '/changelog', current: null },
      { label: 'Legal', href: '/legal', current: 'page' },
    ])
  })
})
