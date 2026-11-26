import { App } from 'aws-cdk-lib'
import { buildDevStacks } from '../lib/build-dev-stacks.js'
import { buildProdStacks } from '../lib/build-prod-stacks.js'

const app = new App()
const stage = app.node.tryGetContext('stage')

if (stage === 'dev') {
  buildDevStacks(app)
} else if (stage === 'prod') {
  buildProdStacks(app)
} else {
  throw new Error('Pass --context stage=dev or --context stage=prod')
}
