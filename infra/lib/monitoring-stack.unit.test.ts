import assert from 'node:assert'
import { before, describe, it } from 'node:test'
import { App } from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { keys, map, values } from 'lodash-es'
import { buildProdStacks } from './build-prod-stacks.js'

describe('MonitoringStack', () => {
  let monitoring: Template

  before(() => {
    const { monitoringStack } = buildProdStacks(new App({ context: { alertUrl: 'https://example.invalid/hook' } }))
    monitoring = Template.fromStack(monitoringStack!)
  })

  it('should check the home page over HTTPS for the site marker', () => {
    const checks = values(monitoring.findResources('AWS::Route53::HealthCheck'))
    assert.strictEqual(checks.length, 1)
    assert.deepStrictEqual(checks[0].Properties.HealthCheckConfig, {
      Type: 'HTTPS_STR_MATCH',
      FullyQualifiedDomainName: 'support.emarketeer.com',
      Port: 443,
      ResourcePath: '/',
      SearchString: 'data-site="support-doc"',
      RequestInterval: 30,
      FailureThreshold: 3,
      EnableSNI: true,
    })
  })

  it('should alarm when the health check fails for 2 minutes or reports no data', () => {
    const alarms = values(monitoring.findResources('AWS::CloudWatch::Alarm'))
    assert.strictEqual(alarms.length, 1)
    const properties = alarms[0].Properties
    assert.strictEqual(properties.AlarmName, 'support-doc-prod-crit-site-down')
    assert.strictEqual(properties.Namespace, 'AWS/Route53')
    assert.strictEqual(properties.MetricName, 'HealthCheckStatus')
    assert.strictEqual(properties.Statistic, 'Minimum')
    assert.strictEqual(properties.Period, 60)
    assert.strictEqual(properties.Threshold, 1)
    assert.strictEqual(properties.ComparisonOperator, 'LessThanThreshold')
    assert.strictEqual(properties.EvaluationPeriods, 2)
    assert.strictEqual(properties.TreatMissingData, 'breaching')
    assert.strictEqual(properties.Dimensions[0].Name, 'HealthCheckId')
    assert.deepStrictEqual(properties.Dimensions[0].Value, {
      'Fn::GetAtt': [keys(monitoring.findResources('AWS::Route53::HealthCheck'))[0], 'HealthCheckId'],
    })
  })

  it('should describe impact, service, check, env, severity and runbook', () => {
    const alarms = values(monitoring.findResources('AWS::CloudWatch::Alarm'))
    assert.strictEqual(
      alarms[0].Properties.AlarmDescription,
      'Impact: https://support.emarketeer.com (the support site) does not serve the support site: it is down, returns an error, or DNS no longer points at CloudFront. ' +
        'Service: support-site ' +
        'Check: site-up ' +
        'Env: prod ' +
        'Severity: CRITICAL ' +
        'Runbook: 1. Check that support.emarketeer.com resolves to the CloudFront distribution of support-doc-prod. 2. Check the distribution and the S3 bucket of support-doc-prod (eu-west-1). 3. Check the last run of the deploy workflow on main in eMarketeerSE/support-doc. 4. If the bucket is empty or stale, re-run the deploy (prod) job of the latest push run on main.',
    )
  })

  it('should send alarm and OK actions to the support-doc-prod-alarms topic', () => {
    const topics = monitoring.findResources('AWS::SNS::Topic')
    const topicIds = keys(topics)
    assert.strictEqual(topicIds.length, 1)
    assert.strictEqual(values(topics)[0].Properties.TopicName, 'support-doc-prod-alarms')
    const properties = values(monitoring.findResources('AWS::CloudWatch::Alarm'))[0].Properties
    assert.deepStrictEqual(properties.AlarmActions, [{ Ref: topicIds[0] }])
    assert.deepStrictEqual(properties.OKActions, [{ Ref: topicIds[0] }])
  })

  it('should subscribe the alert url over HTTPS', () => {
    const subscriptions = values(monitoring.findResources('AWS::SNS::Subscription'))
    assert.strictEqual(subscriptions.length, 1)
    assert.strictEqual(subscriptions[0].Properties.Protocol, 'https')
    assert.strictEqual(subscriptions[0].Properties.Endpoint, 'https://example.invalid/hook')
  })

  it('should create no monitoring stack without an alert url', () => {
    const withoutContext = new App()
    const withEmptyUrl = new App({ context: { alertUrl: '' } })
    const results = [buildProdStacks(withoutContext), buildProdStacks(withEmptyUrl)]
    assert.strictEqual(results[0].monitoringStack, undefined)
    assert.strictEqual(results[1].monitoringStack, undefined)
    assert.strictEqual(results[0].siteStack.stackName, 'support-doc-prod')
    assert.strictEqual(results[1].siteStack.stackName, 'support-doc-prod')
    assert.strictEqual(map(withoutContext.node.children, 'node.id').includes('support-doc-prod-monitoring'), false)
    assert.strictEqual(map(withEmptyUrl.node.children, 'node.id').includes('support-doc-prod-monitoring'), false)
  })

  it('should deploy to us-east-1 in the support account', () => {
    const stack = buildProdStacks(new App({ context: { alertUrl: 'https://example.invalid/hook' } })).monitoringStack!
    assert.strictEqual(stack.stackName, 'support-doc-prod-monitoring')
    assert.strictEqual(stack.region, 'us-east-1')
    assert.strictEqual(stack.account, '666865941116')
  })
})
