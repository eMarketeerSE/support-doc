import { App } from 'aws-cdk-lib'
import { buildDevStacks } from '../lib/build-dev-stacks.js'

const app = new App()
if (app.node.tryGetContext('stage') !== 'dev') {
  throw new Error('Pass --context stage=dev')
}

buildDevStacks(app)
