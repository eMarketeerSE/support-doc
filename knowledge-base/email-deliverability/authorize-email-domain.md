---
description: >-
  Step-by-step instructions for adding an email domain to your eMarketeer
  account.
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: false
  actions:
    visible: true
tags:
  - email
  - account-settings
---

# Add Email domain

{% hint style="info" %}
An authorized email domain is required to send emails from eMarketeer. Without one, outgoing email is not available on your account.
{% endhint %}

This guide walks you through authenticating your domain so you can send email from your own address with the best possible deliverability.

Once you finish, let us know and we will activate the new email service for your account.

{% stepper %}
{% step %}
### Open Email Domains

In eMarketeer, click the gear icon in the top right and choose **Account Settings**. Open **Email Domains** and click **Add A Domain**.
{% endstep %}

{% step %}
### Enter your domain

Enter the domain you want to authorize (for example, `yourdomain.com`) in the **Domain** field of the Add Domain dialog and click **Add**.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/authorize-email-domain-add-domain-dialog.png" alt="Add Domain dialog with the Domain field filled in and the Cancel and Add buttons"></div>
{% endstep %}

{% step %}
### Add DNS records

The new domain appears in the list with the status Pending. Click **Authenticate** on the domain to open the Authenticate Domain dialog. It lists the DNS records to add: DKIM and SPF (mandatory), DMARC, and MAIL FROM. Add them to your DNS. If you do not have access to your company's DNS — often the IT department owns it — click **Click here to generate an email** at the bottom of the dialog to send the records to the person in charge.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/authorize-email-domain-domain-authenticate-records.png" alt="Authenticate Domain dialog listing the DKIM, SPF, DMARC and MAIL FROM records"></div>

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/Ska_CC_88rmavbild-2019-12-11-kl.-14.30.42.png" alt="link to send DNS records to the IT department"></div>
{% endstep %}

{% step %}
### Click Authenticate

Once the records are in place, open the domain's Authenticate Domain dialog again and click **Authenticate**.
{% endstep %}

{% step %}
### Confirm authentication

If the records are correct, the domain status changes to Authenticated. If something is wrong, the failing record is marked with a red cross in the Status column. If eMarketeer cannot verify the records within 72 hours, the domain shows Failed: click **Restart Validation** to try again.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/authorize-email-domain-domain-authenticate-failing.png" alt="Authenticate Domain dialog with red crosses on the failing DKIM and SPF records"></div>

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/authorize-email-domain-email-domains-list.png" alt="Email Domains list with domains marked Authenticated, Pending and Failed"></div>
{% endstep %}
{% endstepper %}

{% hint style="info" %}
DNS changes usually propagate quickly, but allow up to 48 hours.
{% endhint %}

Once the domain is authenticated, you can send from eMarketeer using your domain as the From address with the best possible deliverability. You can repeat this process for as many domains as you need. If you run into questions, email [support@emarketeer.com](mailto:support@emarketeer.com).
