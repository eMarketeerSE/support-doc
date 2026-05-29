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

This guide walks you through authenticating your domain so you can send email from your own address with the best possible deliverability.

Once you finish, let us know and we will activate the new email service for your account.

{% stepper %}
{% step %}
### Open Email domains

In eMarketeer, go to **Account** → **Email domains** and click **Add a domain**.
{% endstep %}

{% step %}
### Enter your domain

Enter the domain you want to authorize (for example, `yourdomain.com`) and click to add.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/Ska_CC_88rmavbild-2019-12-11-kl.-14.31.57.png" alt="Add a domain dialog with domain name field"></div>
{% endstep %}

{% step %}
### Add DNS records

eMarketeer shows a list of DNS records. Add them to your DNS. If you do not have access to your company's DNS — often the IT department owns it — click the link in the authorize dialog to send the records to the person in charge.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/Ska_CC_88rmavbild-2019-12-11-kl.-14.30.16.png" alt="DNS records list shown in the authorize dialog"></div>

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/Ska_CC_88rmavbild-2019-12-11-kl.-14.30.42.png" alt="link to send DNS records to the IT department"></div>
{% endstep %}

{% step %}
### Click Authorize

Once the records are in place, return to the authorize dialog and click **Authorize**.
{% endstep %}

{% step %}
### Confirm authentication

If the records are correct, the dialog validates and accepts the authentication. If something is wrong, the failing record is marked in red.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/Ska_CC_88rmavbild-2019-12-11-kl.-14.31.00.png" alt="failing DNS record highlighted in red"></div>

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/Ska_CC_88rmavbild-2019-12-11-kl.-14.06.02.png" alt="successful domain authentication confirmation"></div>
{% endstep %}
{% endstepper %}

{% hint style="info" %}
DNS changes usually propagate quickly, but allow up to 48 hours.
{% endhint %}

Once the domain is authenticated, you can send from eMarketeer using your domain as the From address with the best possible deliverability. You can repeat this process for as many domains as you need. If you run into questions, email [support@emarketeer.com](mailto:support@emarketeer.com).
