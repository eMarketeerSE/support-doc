import { Stack, StackProps } from 'aws-cdk-lib'
import { Certificate, CertificateValidation, ICertificate } from 'aws-cdk-lib/aws-certificatemanager'
import { HostedZone, HostedZoneAttributes, TxtRecord } from 'aws-cdk-lib/aws-route53'
import { Construct } from 'constructs'

interface CertificateStackProps extends StackProps {
  domain: string
  zone: HostedZoneAttributes
}

export class CertificateStack extends Stack {
  public readonly certificate: ICertificate

  public constructor(scope: Construct, id: string, props: CertificateStackProps) {
    super(scope, id, props)

    const zone = HostedZone.fromHostedZoneAttributes(this, 'Zone', props.zone)
    new TxtRecord(this, 'WildcardShadow', { zone, recordName: props.domain, values: ['support-doc'] })
    this.certificate = new Certificate(this, 'Certificate', {
      domainName: props.domain,
      validation: CertificateValidation.fromDns(zone),
    })
  }
}
