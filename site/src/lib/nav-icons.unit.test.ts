import assert from 'node:assert'
import { describe, it } from 'node:test'
import { readNavIcon } from './nav-icons'

describe('readNavIcon', () => {
  it('should return inline svg markup for a known GitBook icon name', () => {
    const svg = readNavIcon('bolt', 'knowledge-base/getting-started/campaign-basics.md')
    assert.ok(svg.startsWith('<svg'))
    assert.ok(svg.includes('aria-hidden="true"'))
    assert.ok(svg.includes('stroke="currentColor"'))
    assert.ok(svg.includes('M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11'))
  })

  it('should throw with the file when the icon name is not in the map', () => {
    assert.throws(() => readNavIcon('rocket', 'guides.md'), { message: 'guides.md: no nav icon for "rocket"' })
  })
})
