# DMARC setup

**DMARC** (Domain-based Message Authentication, Reporting & Conformance) is an email authentication protocol that builds on SPF and DKIM and tells mail receivers how to handle unauthenticated email from your domain. It also allows you to receive reports on authentication results. Proper DMARC setup helps protect your domain from spoofing and phishing and improves email deliverability.

When DMARC is missing from your DNS, receiving servers may not properly evaluate whether mail claiming to be from your domain is legitimately authenticated by SPF and/or DKIM, which can increase the risk of spoofed email and affect deliverability.

To troubleshoot:

1.  Go to **Email Domain settings** in your eMarketeer account (admin access required).
    
2.  Click **Authorize** for the domain you’re checking.
    
3.  The domain setup dialog shows all required DNS records — including any DMARC policy settings you should publish.
    
4.  In your DNS provider’s control panel, **verify that a DMARC TXT record exists** (typically under \_dmarc.yourdomain.com) and matches what eMarketeer recommends.
    
    -   A DMARC record is a DNS TXT entry that tells mail servers how to handle messages failing authentication checks.
        
    -   Common policy options are:
        
        -   p=none – monitor only
            
        -   p=quarantine – send failed mail to spam/junk
            
        -   p=reject – block failed mail entirely 
            
5.  Save changes and wait for them to propagate (may take up to 48 hours).
    

**Helpful tip:**

If you don’t manage DNS yourself, you can use the email feature in the dialog to send all required DNS info to someone who does.

For the full email domain setup, [please refer to this guide](https://support.emarketeer.com/documentation/custom-email-domain/).

If you need assistance, please contact [support@emarketeer.com](mailto:support@emarketeer.com)
