# Essential updates for upcoming email changes

Google and Yahoo announced stricter rules for receiving emails, scheduled to take effect in February 2024.

This article explains what you need to do so your sendouts continue to land in the inbox after those rules take effect. It is aimed at customers who send from a custom domain.

## New sender requirements

Gmail and Yahoo Mail announced a set of new requirements for email senders, aimed at improving inbox security and reducing spam. These changes come into effect starting February 2024.

## What you need to do to stay compliant

To ensure delivery and compliance with the new requirements, we recommend the following.

### 1. Enable email authentication

**Custom domain users.** If you use your corporate domain for eMarketeer sendouts, you need to add two DNS entries to meet DMARC compliance standards.

For example, if your domain is "domain.com", add the following entries:

```
feedback.domain.com
MX
10 feedback-smtp.eu-west-1.amazonses.com

feedback.domain.com
TXT
"v=spf1 include:amazonses.com ~all"
```

eMarketeer will require these DNS entries to enable email sending from custom domains in our next release, scheduled for early February.

**via-em.com domain users.** If you do not use your own domain for eMarketeer emails, no action is needed.

### 2. Monitor spam rates

Monitor your spam rates regularly to ensure they stay within acceptable limits. Google and Yahoo will apply strict spam filtering measures for senders with high spam rates.

You can monitor this on the [email report](../knowledge-base/reports/email-report-explained.md) in eMarketeer.

### 3. Enable one-click unsubscribe

You can continue using the existing unsubscribe links at the bottom of your emails.

In addition, we will add one-click links in the header of the email (not visible) that will be picked up by the email client and enable one-click unsubscribe directly from the client. No action is needed from you.

## Additional resources

For more detail on the new requirements:

- [Google Gmail Security](https://googleblog.blogspot.com/2011/02/advanced-sign-in-security-for-your.html)
- [Yahoo Mail Postmaster](https://blog.postmaster.yahooinc.com/post/730172167494483968/more-secure-less-spam)

By following these measures, you can keep your emails deliverable and maintain a positive reputation with major email providers.
