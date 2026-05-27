# DMARC setup

Publish a DMARC record in your DNS so receiving servers know how to handle mail that fails authentication for your domain.

DMARC (Domain-based Message Authentication, Reporting & Conformance) builds on SPF and DKIM and tells mail receivers how to treat unauthenticated email claiming to come from your domain. It also lets you receive reports on authentication results. A correctly configured DMARC record protects your domain from spoofing and phishing and improves deliverability.

If DMARC is missing from your DNS, receiving servers may not properly evaluate mail that claims to be from your domain, which raises the risk of spoofing and can hurt deliverability.

## To troubleshoot

1. Open **Email Domain settings** in your eMarketeer account. Administrator access is required.
2. Click **Authorize** on the domain you are checking.
3. The domain setup dialog lists every required DNS record, including the DMARC policy settings you should publish.
4. In your DNS provider's control panel, verify that a DMARC TXT record exists — typically at `_dmarc.yourdomain.com` — and matches the value eMarketeer recommends.
   * A DMARC record is a DNS TXT entry that tells mail servers how to handle messages that fail authentication.
   * Common policy options:
     * `p=none` — monitor only
     * `p=quarantine` — send failed mail to spam/junk
     * `p=reject` — block failed mail entirely
5. Save the changes and wait for them to propagate. This can take up to 48 hours.



{% hint style="info" %}
If you do not manage DNS yourself, use the email feature in the dialog to send the required DNS information to whoever does.
{% endhint %}

For the full email domain setup, see the [custom email domain guide](https://support.emarketeer.com/documentation/custom-email-domain/).

If you need assistance, contact [support@emarketeer.com](mailto:support@emarketeer.com).
