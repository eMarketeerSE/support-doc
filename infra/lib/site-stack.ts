import { fileURLToPath } from 'node:url'
import { CfnOutput, Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib'
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager'
import {
  AllowedMethods,
  Distribution,
  Function as CloudFrontFunction,
  FunctionCode,
  FunctionEventType,
  FunctionRuntime,
  HeadersReferrerPolicy,
  HttpVersion,
  PriceClass,
  ResponseHeadersPolicy,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront'
import { S3BucketOrigin } from 'aws-cdk-lib/aws-cloudfront-origins'
import { Conditions, FederatedPrincipal, OpenIdConnectProvider, PolicyStatement, Role } from 'aws-cdk-lib/aws-iam'
import { AaaaRecord, ARecord, HostedZone, HostedZoneAttributes, RecordTarget } from 'aws-cdk-lib/aws-route53'
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets'
import { BlockPublicAccess, Bucket } from 'aws-cdk-lib/aws-s3'
import { Construct } from 'constructs'

interface SiteStackProps extends StackProps {
  stage: 'dev' | 'prod'
  domain: string
  zone?: HostedZoneAttributes
  certificate: ICertificate
}

const GITHUB_OIDC_HOST = 'token.actions.githubusercontent.com'
const GITHUB_REPO = 'eMarketeerSE/support-doc'
const CONTENT_SECURITY_POLICY =
  "script-src 'self' 'wasm-unsafe-eval'; worker-src 'self' blob:; object-src 'none'; base-uri 'self'"
const VIEWER_REQUEST_PATH = fileURLToPath(new URL('../cloudfront/viewer-request.js', import.meta.url))

export class SiteStack extends Stack {
  public constructor(scope: Construct, id: string, props: SiteStackProps) {
    super(scope, id, props)

    const bucket = new Bucket(this, 'SiteBucket', {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
      removalPolicy: RemovalPolicy.RETAIN,
    })

    const viewerRequest = new CloudFrontFunction(this, 'ViewerRequest', {
      code: FunctionCode.fromFile({ filePath: VIEWER_REQUEST_PATH }),
      runtime: FunctionRuntime.JS_2_0,
      comment: 'Clean URLs and trailing-slash redirect',
    })

    const responseHeaders = new ResponseHeadersPolicy(this, 'ResponseHeaders', {
      securityHeadersBehavior: {
        strictTransportSecurity: {
          accessControlMaxAge: Duration.days(365),
          includeSubdomains: false,
          preload: false,
          override: true,
        },
        contentTypeOptions: { override: true },
        referrerPolicy: {
          referrerPolicy: HeadersReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
          override: true,
        },
        contentSecurityPolicy: { contentSecurityPolicy: CONTENT_SECURITY_POLICY, override: true },
      },
      customHeadersBehavior:
        props.stage === 'dev'
          ? { customHeaders: [{ header: 'X-Robots-Tag', value: 'noindex, nofollow', override: true }] }
          : undefined,
    })

    const distribution = new Distribution(this, 'Distribution', {
      defaultBehavior: {
        origin: S3BucketOrigin.withOriginAccessControl(bucket),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: AllowedMethods.ALLOW_GET_HEAD,
        compress: true,
        functionAssociations: [{ function: viewerRequest, eventType: FunctionEventType.VIEWER_REQUEST }],
        responseHeadersPolicy: responseHeaders,
      },
      defaultRootObject: 'index.html',
      domainNames: [props.domain],
      certificate: props.certificate,
      httpVersion: HttpVersion.HTTP2_AND_3,
      priceClass: PriceClass.PRICE_CLASS_100,
      errorResponses: [
        { httpStatus: 403, responseHttpStatus: 404, responsePagePath: '/404.html', ttl: Duration.minutes(1) },
        { httpStatus: 404, responseHttpStatus: 404, responsePagePath: '/404.html', ttl: Duration.minutes(1) },
      ],
    })

    if (props.zone) {
      const zone = HostedZone.fromHostedZoneAttributes(this, 'Zone', props.zone)
      const target = RecordTarget.fromAlias(new CloudFrontTarget(distribution))
      new ARecord(this, 'AliasA', { zone, recordName: props.domain, target })
      new AaaaRecord(this, 'AliasAAAA', { zone, recordName: props.domain, target })
    }

    const provider = OpenIdConnectProvider.fromOpenIdConnectProviderArn(
      this,
      'GithubOidc',
      `arn:aws:iam::${this.account}:oidc-provider/${GITHUB_OIDC_HOST}`,
    )
    const conditions: Conditions = {
      StringEquals: {
        [`${GITHUB_OIDC_HOST}:aud`]: 'sts.amazonaws.com',
        [`${GITHUB_OIDC_HOST}:sub`]: `repo:${GITHUB_REPO}:environment:${props.stage}`,
      },
    }
    const deployRole = new Role(this, 'GithubDeployRole', {
      roleName: `support-doc-${props.stage}-github-deploy`,
      assumedBy: new FederatedPrincipal(provider.openIdConnectProviderArn, conditions, 'sts:AssumeRoleWithWebIdentity'),
      maxSessionDuration: Duration.hours(1),
    })
    deployRole.addToPolicy(new PolicyStatement({ actions: ['s3:ListBucket'], resources: [bucket.bucketArn] }))
    deployRole.addToPolicy(
      new PolicyStatement({ actions: ['s3:PutObject', 's3:DeleteObject'], resources: [bucket.arnForObjects('*')] }),
    )
    deployRole.addToPolicy(
      new PolicyStatement({
        actions: ['cloudfront:CreateInvalidation', 'cloudfront:GetInvalidation'],
        resources: [
          this.formatArn({
            service: 'cloudfront',
            region: '',
            resource: 'distribution',
            resourceName: distribution.distributionId,
          }),
        ],
      }),
    )

    new CfnOutput(this, 'BucketName', { value: bucket.bucketName })
    new CfnOutput(this, 'DistributionId', { value: distribution.distributionId })
    new CfnOutput(this, 'DeployRoleArn', { value: deployRole.roleArn })
    new CfnOutput(this, 'SiteUrl', { value: `https://${props.domain}` })
  }
}
