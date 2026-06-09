---
icon: gear
description: >-
  A checklist of the key steps to get your eMarketeer account ready — from domain authentication to integrations.
---

# Account setup

Getting your account ready involves a handful of one-time steps. Adding an email domain is required before you can send; the rest are optional but expand what the platform can do for you.

{% stepper %}
{% step %}
### Complete the corporate details

Fill out your corporate contact information and upload your logo under **Account → Corporate settings**. This information is used in system emails sent from eMarketeer.
{% endstep %}

{% step %}
### Invite users

Add everyone on your team who needs access to eMarketeer. Each person gets their own login, and you control their permissions during the invite.

[How to invite users to your account](../knowledge-base/account-admin/invite-user-account.md)
{% endstep %}

{% step %}
### Add an email domain

Authenticating your sending domain is required before you can send emails from eMarketeer. It also improves deliverability by proving to receiving mail servers that eMarketeer is authorized to send on your behalf.

[Add email domain](../knowledge-base/email-deliverability/authorize-email-domain.md)
{% endstep %}

{% step %}
### Add a custom domain

A custom domain replaces the default `app.emarketeer.com` hostname in the links eMarketeer generates — including form URLs, landing page links, and email tracking links. This keeps your brand consistent and removes the eMarketeer hostname from links visible to your contacts.

[Custom domain](../knowledge-base/account-admin/domains.md)
{% endstep %}

{% step %}
### Set up custom fields

Custom fields extend the contact record with data specific to your business — for example, industry, customer tier, or region. Use them to segment your database more precisely and to personalize email and form content.
{% endstep %}

{% step %}
### Integrate your CRM

Connecting eMarketeer to your CRM keeps marketing and sales data in sync. Contact data, consent records, and engagement signals flow between the two systems automatically — giving your sales team up-to-date marketing intelligence without manual exports.

Supported integrations:

* [SuperOffice](../documentation/superoffice/superoffice.md)
* [Microsoft Dynamics 365](../documentation/dynamics-365/dynamics.md)
{% endstep %}

{% step %}
### Connect social media advertising

eMarketeer can receive lead submissions directly from social media ad campaigns. Each submission creates or updates a contact, sets a lead score, and can trigger a Journey — no manual CSV import needed.

Supported integrations:

* [Facebook Lead Forms](../documentation/lead-forms/facebook-lead-forms.md)
* [LinkedIn Lead Gen Forms](../documentation/lead-forms/linkedin-lead-gen-forms.md)
{% endstep %}

{% step %}
### Add website scripts

Install two scripts on your website to connect it to eMarketeer. The **form base script** is required on any page where you want to embed a form. The **Web Tracker** records page visits and links them to identified contacts, giving you visibility into which pages a contact has browsed.

[Website integration](website-integration.md)
{% endstep %}

{% step %}
### Create component templates

All components — emails, forms, and webpages — can be saved as templates for future reuse. If you want templates built to match your brand design, an eMarketeer consultant can help you set these up.
{% endstep %}
{% endstepper %}
