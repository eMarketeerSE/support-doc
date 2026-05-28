# SPF setup

This article explains what to check when eMarketeer detects an SPF issue for one of your domains, and how to set it up correctly.

SPF (Sender Policy Framework) is an email authentication protocol that lets domain owners specify which mail servers are authorized to send email on behalf of their domain. It works by publishing a TXT record in DNS that lists the authorized sending hosts or services.

When SPF is missing or incorrect, receiving mail servers cannot verify that an email came from an authorized source — which can lead to mail being marked as spam or rejected. Proper SPF setup improves deliverability and protects your domain from unauthorized use.

### Why it matters

- Helps receiving mail servers confirm that mail comes from allowed senders.
- Reduces the chance of your domain being used for spoofed emails.
- Can improve inbox placement and overall deliverability.
- When SPF fails or is missing, many receiving servers downgrade or reject the mail.

### How to troubleshoot and set it up

1. Go to **Email Domain settings** in your eMarketeer account (admin access required).
2. Click **Authorize** for the domain you're checking.
3. The domain setup dialog shows all required DNS records, including the SPF record to publish.
4. In your DNS provider's control panel, verify that an SPF TXT record exists for your domain and matches the value shown in eMarketeer.
   - An SPF record typically starts with `v=spf1` and includes all servers and services authorized to send mail for your domain.
   - Generic example: `v=spf1 include:spf.emarketeer.com ~all`
5. Save the DNS changes and wait for propagation (up to 48 hours).
6. Use an SPF checking tool if you want to confirm it is published and correct.

If you don't manage DNS yourself, you can use the email feature in the dialog to send all required DNS info to the person who does.

For the full email domain setup, [see this guide](../../documentation/custom-domain/custom-email-domain.md).

If you need help, contact [support@emarketeer.com](mailto:support@emarketeer.com).
