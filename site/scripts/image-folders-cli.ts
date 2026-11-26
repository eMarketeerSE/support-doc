import { forEach, isEmpty } from 'lodash-es'
import { REPO_ROOT } from '../src/lib/summary.ts'
import { listImageFolders } from './image-folders.ts'

const folders = listImageFolders(REPO_ROOT)
if (isEmpty(folders)) {
  console.error(`No image folders found under ${REPO_ROOT}`)
  process.exit(1)
}
forEach(folders, ({ source, target }) => console.log(`${source} ${target}`))
