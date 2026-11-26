# Infra

AWS CDK stacks for the support site. A developer deploys them by hand. CI does not deploy infra.

## Stages

| Stage | Account | Stacks | Domain |
|---|---|---|---|
| dev | 377460527677 | `support-doc-dev-certificate` (us-east-1), `support-doc-dev` (eu-west-1) | support.dev-emarketeer.io |
| prod | 666865941116 | `support-doc-prod` (eu-west-1), `support-doc-prod-monitoring` (us-east-1) | support.emarketeer.com |

CDK does not manage DNS for prod.

## Commands

Run these in `infra/`.

- `yarn test` runs the unit tests.
- `yarn cdk diff --context stage=<stage> --profile <stage>-admin` shows the changes.
- `yarn cdk deploy <stack> --context stage=<stage> --profile <stage>-admin --require-approval never` deploys one stack.

## Monitoring stack

The stack `support-doc-prod-monitoring` exists only when you pass `--context alertUrl=<incident.io URL>`. A command without it cannot change the stack.

Deploy it at the DNS cutover:

```
yarn cdk deploy support-doc-prod-monitoring --context stage=prod --context alertUrl=<incident.io URL> --profile prod-admin --require-approval never
```

After the first deploy, check that the subscription is confirmed:

```
aws sns list-subscriptions-by-topic --topic-arn <arn> --region us-east-1 --profile prod-admin
```

The output must show a `SubscriptionArn`, not `PendingConfirmation`. Then test the page:

```
aws cloudwatch set-alarm-state --alarm-name support-doc-prod-crit-site-down --state-value ALARM --state-reason test --region us-east-1 --profile prod-admin
```

Never commit the alert URL.

## GitHub environment variables

The stack outputs feed the variables of the GitHub environment for each stage:

| Variable | Source |
|---|---|
| `AWS_ROLE_ARN` | `DeployRoleArn` output |
| `S3_BUCKET` | `BucketName` output |
| `CLOUDFRONT_DISTRIBUTION_ID` | `DistributionId` output |
| `SITE_URL` | On dev, the `SiteUrl` output. On prod until the cutover, `https://` + the `cloudfront.net` domain, because GitBook still serves `SiteUrl`. Get the domain from the CloudFront console or `aws cloudfront get-distribution --id <DistributionId> --query Distribution.DomainName`. The stack has no output for it. |
| `SUPPORT_SITE_SLACK_WEBHOOK` (secret) | The #support-site webhook. Set it per environment. |

For the deploy workflow, see [site/README.md](../site/README.md).
