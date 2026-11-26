import { App } from 'aws-cdk-lib'
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager'
import { SiteStack } from './site-stack.js'

const ACCOUNT = '666865941116'
const DOMAIN = 'support.emarketeer.com'
const CERTIFICATE_ARN = 'arn:aws:acm:us-east-1:666865941116:certificate/f860845c-0d61-4d06-bb9b-0ee95672fd27'

export const buildProdStacks = (app: App): { siteStack: SiteStack } => {
  const siteStack = new SiteStack(app, 'support-doc-prod', {
    env: { account: ACCOUNT, region: 'eu-west-1' },
    stage: 'prod',
    domain: DOMAIN,
    certificate: Certificate.fromCertificateArn(app, 'ProdCertificate', CERTIFICATE_ARN),
  })
  return { siteStack }
}
