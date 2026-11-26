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
- `npx cdk diff --context stage=<stage> --profile <stage>-admin` shows the changes.
- `npx cdk deploy <stack> --context stage=<stage> --profile <stage>-admin --require-approval never` deploys one stack.

## Monitoring stack

Deploy `support-doc-prod-monitoring` at the DNS cutover. Add `--context alertUrl=<incident.io URL>` to the command.

Never commit the alert URL.

## GitHub environment variables

The stack outputs feed the variables of the GitHub environment for each stage:

| Variable | Source |
|---|---|
| `AWS_ROLE_ARN` | `DeployRoleArn` output |
| `S3_BUCKET` | `BucketName` output |
| `CLOUDFRONT_DISTRIBUTION_ID` | `DistributionId` output |

Until the cutover, `SITE_URL` for prod is the `cloudfront.net` host of the distribution. Do not use the `SiteUrl` output.

For the deploy workflow, see [site/README.md](../site/README.md).
