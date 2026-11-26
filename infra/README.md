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

Repeat `--context alertUrl` on every later deploy of this stack. Without it, CDK removes the incident.io subscription, and the alarm pages nobody.

Never commit the alert URL.

## GitHub environment variables

The stack outputs feed the variables of the GitHub environment for each stage:

| Variable | Source |
|---|---|
| `AWS_ROLE_ARN` | `DeployRoleArn` output |
| `S3_BUCKET` | `BucketName` output |
| `CLOUDFRONT_DISTRIBUTION_ID` | `DistributionId` output |
| `SITE_URL` | `https://` + the distribution's `cloudfront.net` domain on prod until the cutover, else the `SiteUrl` output |

On prod, do not use the `SiteUrl` output for `SITE_URL` before the cutover. GitBook still serves that domain.

For the deploy workflow, see [site/README.md](../site/README.md).
