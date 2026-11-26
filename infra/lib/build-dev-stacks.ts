import { App } from 'aws-cdk-lib'
import { CertificateStack } from './certificate-stack.js'
import { SiteStack } from './site-stack.js'

const ACCOUNT = '377460527677'
const DOMAIN = 'support.dev-emarketeer.io'
const ZONE = { hostedZoneId: 'Z10I9YQ2H3JPDH', zoneName: 'dev-emarketeer.io' }

export const buildDevStacks = (app: App = new App()): { certificateStack: CertificateStack; siteStack: SiteStack } => {
  const certificateStack = new CertificateStack(app, 'support-doc-dev-certificate', {
    env: { account: ACCOUNT, region: 'us-east-1' },
    crossRegionReferences: true,
    domain: DOMAIN,
    zone: ZONE,
  })
  const siteStack = new SiteStack(app, 'support-doc-dev', {
    env: { account: ACCOUNT, region: 'eu-west-1' },
    crossRegionReferences: true,
    stage: 'dev',
    domain: DOMAIN,
    zone: ZONE,
    certificate: certificateStack.certificate,
  })
  return { certificateStack, siteStack }
}
