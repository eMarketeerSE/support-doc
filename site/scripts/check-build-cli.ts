import { resolve } from 'node:path'
import { forEach, size } from 'lodash-es'
import { readAllRedirects } from '../src/lib/redirects.ts'
import { readSnapshotUrls } from '../src/lib/snapshots.ts'
import { readAllPages } from '../src/lib/summary.ts'
import { checkBuild } from './check-build.ts'

const problems = checkBuild(resolve(process.argv[2]), readAllPages(), readSnapshotUrls(), readAllRedirects())
forEach(problems, (problem) => console.log(problem))
process.exitCode = size(problems) > 0 ? 1 : 0
