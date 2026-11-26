import assert from 'node:assert'
import { fileURLToPath } from 'node:url'
import { describe, it } from 'node:test'
import { endsWith, find, map } from 'lodash-es'
import { listImageFolders } from './image-folders.ts'

const ROOT = fileURLToPath(new URL('../src/lib/fixtures/repo/', import.meta.url))

describe('listImageFolders', () => {
  it('should map the Swedish folder to docs/docs_se/.gitbook/assets/', () => {
    assert.deepStrictEqual(
      find(listImageFolders(ROOT), (folder) => endsWith(folder.source, '/sv/.gitbook/assets/')),
      { source: `${ROOT}sv/.gitbook/assets/`, target: 'docs/docs_se/.gitbook/assets/' },
    )
  })

  it('should skip a folder that does not exist', () => {
    assert.deepStrictEqual(
      map(listImageFolders(ROOT), 'target'),
      ['.gitbook/assets/', 'docs/docs_se/.gitbook/assets/'],
    )
  })
})
