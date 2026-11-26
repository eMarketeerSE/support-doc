import { CfnOutput, Duration, Stack, StackProps } from 'aws-cdk-lib'
import { Alarm, ComparisonOperator, Metric, TreatMissingData } from 'aws-cdk-lib/aws-cloudwatch'
import { SnsAction } from 'aws-cdk-lib/aws-cloudwatch-actions'
import { CfnHealthCheck } from 'aws-cdk-lib/aws-route53'
import { SubscriptionProtocol, Topic } from 'aws-cdk-lib/aws-sns'
import { UrlSubscription } from 'aws-cdk-lib/aws-sns-subscriptions'
import { Construct } from 'constructs'

interface MonitoringStackProps extends StackProps {
  domain: string
  alertUrl?: string
}

export class MonitoringStack extends Stack {
  public constructor(scope: Construct, id: string, props: MonitoringStackProps) {
    super(scope, id, props)

    const healthCheck = new CfnHealthCheck(this, 'SiteHealthCheck', {
      healthCheckConfig: {
        type: 'HTTPS_STR_MATCH',
        fullyQualifiedDomainName: props.domain,
        port: 443,
        resourcePath: '/',
        searchString: 'data-site="support-doc"',
        requestInterval: 30,
        failureThreshold: 3,
        enableSni: true,
      },
      healthCheckTags: [{ key: 'Name', value: 'support-doc-prod' }],
    })

    const alarm = new Alarm(this, 'SiteDownAlarm', {
      alarmName: 'support-doc-prod-crit-site-down',
      alarmDescription: [
        `Impact: https://${props.domain} (the support site) is not serving pages; readers see an error.`,
        'Service: support-site',
        'Check: site-up',
        'Env: prod',
        'Severity: CRITICAL',
        'Runbook: check the CloudFront distribution and S3 bucket of the support-doc-prod stack (eu-west-1), then the last Deploy workflow run (.github/workflows/deploy.yml) on main in eMarketeerSE/support-doc; re-run the deploy (prod) job of the latest push run on main if the bucket is empty or stale.',
      ].join(' '),
      metric: new Metric({
        namespace: 'AWS/Route53',
        metricName: 'HealthCheckStatus',
        dimensionsMap: { HealthCheckId: healthCheck.attrHealthCheckId },
        statistic: 'Minimum',
        period: Duration.minutes(1),
      }),
      threshold: 1,
      comparisonOperator: ComparisonOperator.LESS_THAN_THRESHOLD,
      evaluationPeriods: 2,
      treatMissingData: TreatMissingData.BREACHING,
    })

    const topic = new Topic(this, 'SiteAlarms', { topicName: 'support-doc-prod-alarms' })
    alarm.addAlarmAction(new SnsAction(topic))
    alarm.addOkAction(new SnsAction(topic))

    if (props.alertUrl) {
      topic.addSubscription(new UrlSubscription(props.alertUrl, { protocol: SubscriptionProtocol.HTTPS }))
    }

    new CfnOutput(this, 'HealthCheckId', { value: healthCheck.attrHealthCheckId })
    new CfnOutput(this, 'AlarmName', { value: alarm.alarmName })
    new CfnOutput(this, 'TopicArn', { value: topic.topicArn })
  }
}
