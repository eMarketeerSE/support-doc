# Essential Updates for Upcoming Email Changes – eMarketeer Support

**Google and Yahoo email services has announced that they will apply more strict rules for receiving emails, scheduled to take effect in February 2024.**

By reviewing this document you can make changes to make sure you comply and can continue hitting the inbox on their recipients.

### Safeguarding Inbox Security: New Sender Requirements

Gmail and Yahoo Mail have announced a set of new requirements for email senders aimed at enhancing user inbox security and reducing spam. These changes will come into effect starting February 2024.

### What You Need to Do to Stay Compliant

To ensure seamless delivery and compliance with the new requirements, we recommend the following measures:

**1\. Enable Email Authentication:**  
Custom Domain Users:  
If you utilize your corporate domain for the eMarketeer send outs, you’ll need to add two DNS entries to meet DMARC compliance standards.  
For example, if your domain is “domain.com,” you’ll need to add the following entries:

feedback.domain.com
MX
10 feedback-smtp.eu-west-1.amazonses.com

feedback.domain.com
TXT
"v=spf1 include:amazonses.com ~all"

eMarketeer will mandate the presence of these DNS entries to enable email sending from custom domains in our next release, scheduled for early February

**via-em.com domain users**  
If you do not use your own domain for eMarketeer emails, no action is needed.

### 2\. Monitor Spam Rates:

Regularly monitor your spam rates to ensure they remain within acceptable limits. Google and Yahoo will implement strict spam filtering measures for senders with high spam rates.

This can be monitored on the [email report](https://support.emarketeer.com/knowledgebase/email-report-explained/) in eMarketeer.

### 3\. Enable One-Click Unsubscribe

You can continue using the existing unsubscribe links in the bottom of your emails.  
In addition to this we will add one-click links in the header of the email (not visible) which will be picked up by the email client and enable one click unsubscribe directly from the client. You don’t need to take any action here.

### Additional Resources:

Please refer to the following resources for more detailed information on the new requirements:

[Google Gmail Security](https://googleblog.blogspot.com/2011/02/advanced-sign-in-security-for-your.html)

[Yahoo Mail Postmaster](https://blog.postmaster.yahooinc.com/post/730172167494483968/more-secure-less-spam)

Stay Informed and Protected

By implementing these measures, you can ensure your emails remain deliverable and maintain a positive reputation with major email providers.
