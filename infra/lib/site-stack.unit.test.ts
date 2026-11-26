import assert from 'node:assert'
import { readFileSync } from 'node:fs'
import { find, flatMap, map, sortBy } from 'lodash-es'
import { before, describe, it } from 'node:test'
import { App } from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { buildDevStacks } from './build-dev-stacks.js'

const CSP = "script-src 'self' 'wasm-unsafe-eval'; worker-src 'self' blob:; object-src 'none'; base-uri 'self'"

describe('SiteStack', () => {
  let site: Template
  let certificate: Template

  before(() => {
    const stacks = buildDevStacks(new App())
    site = Template.fromStack(stacks.siteStack)
    certificate = Template.fromStack(stacks.certificateStack)
  })

  it('should set the CSP and no frame options on every response', () => {
    const policies = Object.values(site.findResources('AWS::CloudFront::ResponseHeadersPolicy'))
    assert.strictEqual(policies.length, 1)
    const config = policies[0].Properties.ResponseHeadersPolicyConfig
    assert.strictEqual(config.SecurityHeadersConfig.ContentSecurityPolicy.ContentSecurityPolicy, CSP)
    assert.strictEqual('FrameOptions' in config.SecurityHeadersConfig, false)
    assert.strictEqual(config.CustomHeadersConfig.Items[0].Header, 'X-Robots-Tag')
    assert.strictEqual(config.CustomHeadersConfig.Items[0].Value, 'noindex, nofollow')
  })

  it('should trust only the dev environment of support-doc', () => {
    const role = find(Object.values(site.findResources('AWS::IAM::Role')), {
      Properties: { RoleName: 'support-doc-dev-github-deploy' },
    })
    const statement = role!.Properties.AssumeRolePolicyDocument.Statement[0]
    assert.strictEqual(
      statement.Condition.StringEquals['token.actions.githubusercontent.com:sub'],
      'repo:eMarketeerSE/support-doc:environment:dev',
    )
    assert.strictEqual(statement.Condition.StringEquals['token.actions.githubusercontent.com:aud'], 'sts.amazonaws.com')
  })

  it('should not create a GitHub OIDC provider', () => {
    site.resourceCountIs('Custom::AWSCDKOpenIdConnectProvider', 0)
    site.resourceCountIs('AWS::IAM::OIDCProvider', 0)
  })

  it('should serve /404.html with status 404 for a 403 and a 404', () => {
    const distributions = Object.values(site.findResources('AWS::CloudFront::Distribution'))
    const responses = distributions[0].Properties.DistributionConfig.CustomErrorResponses
    assert.deepStrictEqual(
      map(responses, (response) => [response.ErrorCode, response.ResponseCode, response.ResponsePagePath]),
      [[403, 404, '/404.html'], [404, 404, '/404.html']],
    )
  })

  it('should attach the viewer-request function to the default behavior', () => {
    const distributions = Object.values(site.findResources('AWS::CloudFront::Distribution'))
    const associations = distributions[0].Properties.DistributionConfig.DefaultCacheBehavior.FunctionAssociations
    assert.strictEqual(associations.length, 1)
    assert.strictEqual(associations[0].EventType, 'viewer-request')
    const functions = Object.values(site.findResources('AWS::CloudFront::Function'))
    assert.strictEqual(functions.length, 1)
    const source = readFileSync(new URL('../cloudfront/viewer-request.js', import.meta.url), 'utf8')
    assert.strictEqual(functions[0].Properties.FunctionCode, source)
  })

  it('should give the deploy role only list, put, delete and invalidation', () => {
    const role = find(Object.values(site.findResources('AWS::IAM::Role')), {
      Properties: { RoleName: 'support-doc-dev-github-deploy' },
    })
    assert.strictEqual(role!.Properties.Policies, undefined)
    assert.strictEqual(role!.Properties.ManagedPolicyArns, undefined)
    const policies = Object.values(site.findResources('AWS::IAM::Policy'))
    const statements = sortBy(flatMap(policies, 'Properties.PolicyDocument.Statement'), 'Action')
    assert.deepStrictEqual(map(statements, 'Action'), [
      ['cloudfront:CreateInvalidation', 'cloudfront:GetInvalidation'],
      's3:ListBucket',
      ['s3:PutObject', 's3:DeleteObject'],
    ])
    const resources = JSON.stringify(map(statements, 'Resource'))
    assert.match(statements[0].Resource['Fn::Join'][1].join(''), /^arn:.*:cloudfront:/)
    assert.match(resources, /SiteBucket/)
    assert.doesNotMatch(resources, /"\*"/)
    assert.strictEqual(statements[2].Resource['Fn::Join'][1][1], '/*')
    assert.strictEqual(statements[1].Resource['Fn::GetAtt'][1], 'Arn')
  })

  it('should serve support.dev-emarketeer.io with A and AAAA alias records', () => {
    const distributions = Object.values(site.findResources('AWS::CloudFront::Distribution'))
    assert.deepStrictEqual(distributions[0].Properties.DistributionConfig.Aliases, ['support.dev-emarketeer.io'])
    const records = Object.values(site.findResources('AWS::Route53::RecordSet'))
    assert.deepStrictEqual(sortBy(map(records, 'Properties.Type')), ['A', 'AAAA'])
    assert.deepStrictEqual(map(records, 'Properties.HostedZoneId'), ['Z10I9YQ2H3JPDH', 'Z10I9YQ2H3JPDH'])
    assert.deepStrictEqual(map(records, 'Properties.Name'), ['support.dev-emarketeer.io.', 'support.dev-emarketeer.io.'])
  })

  it('should output the bucket, distribution, role and url', () => {
    const outputs = site.toJSON().Outputs
    assert.deepStrictEqual(sortBy(Object.keys(outputs)), ['BucketName', 'DeployRoleArn', 'DistributionId', 'SiteUrl'])
    assert.strictEqual(outputs.SiteUrl.Value, 'https://support.dev-emarketeer.io')
  })

  it('should request a DNS-validated certificate for exactly the dev domain', () => {
    const certificates = Object.values(certificate.findResources('AWS::CertificateManager::Certificate'))
    assert.strictEqual(certificates.length, 1)
    assert.strictEqual(certificates[0].Properties.DomainName, 'support.dev-emarketeer.io')
    assert.strictEqual(certificates[0].Properties.SubjectAlternativeNames, undefined)
    assert.strictEqual(certificates[0].Properties.ValidationMethod, 'DNS')
  })

  it('should shadow the dev wildcard record with a TXT record at the exact domain', () => {
    const records = Object.values(certificate.findResources('AWS::Route53::RecordSet'))
    assert.strictEqual(records.length, 1)
    assert.strictEqual(records[0].Properties.Type, 'TXT')
    assert.strictEqual(records[0].Properties.Name, 'support.dev-emarketeer.io.')
    assert.strictEqual(records[0].Properties.HostedZoneId, 'Z10I9YQ2H3JPDH')
  })
})
