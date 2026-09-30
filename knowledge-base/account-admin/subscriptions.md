---
description: >-
  In this guide: how to configure subscription categories, assign them to
  emails, and let contacts manage their email preferences through the
  subscription center.
---

# Subscriptions

Subscriptions give contacts control over which types of emails they receive, so they can opt out of specific categories rather than unsubscribing entirely. This typically reduces full opt-outs.

You organise your emails into categories — for example, Newsletters, Event invitations, or Special offers. When you send, eMarketeer automatically excludes contacts who have unsubscribed from that category. An email with no category assigned is only filtered for contacts who have fully withdrawn their marketing consent.

## Set up subscription categories

You need administrator access to create and manage subscription categories.

1. Click the gear icon at the top right and select **Account Settings**.
2.  Open **Compliance** in the left menu. Subscription categories are listed under **Subscriptions**.

    <div align="left" data-with-frame="true"><img src="../../.gitbook/assets/subscriptions-account-settings-compliance.png" alt="Account Settings page with an arrow pointing to Compliance in the left menu"></div>
3.  Click **Add subscription** to create a category. Keep names short and clear — contacts see them in the subscription center. Focus on broad communication types rather than very specific ones.

    <div align="left" data-with-frame="true"><img src="../../.gitbook/assets/subscriptions-compliance-subscriptions.png" alt="Compliance page with the Subscriptions table listing three categories and an Add subscription button"></div>

## Your contacts

All contacts — new and existing — start with every subscription category turned on. To change subscription settings for a group of contacts at once, use the bulk update action on a contact list.

## Create an email

When you add a new email, expand **Advanced settings** in the Add Email dialog to find the **Subscription category** dropdown. Select the category that best matches the email's content.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/subscriptions-add-email-subscription-category.png" alt="Add Email dialog with Advanced settings expanded and an arrow pointing to the Subscription category dropdown"></div>

If the email does not belong to any category — for example, a one-time notification — set it to **None**. Emails set to None are only filtered for contacts who have fully unsubscribed.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/subscriptions-editor-subscription-category.png" alt="Email editor left panel with an arrow pointing to the Subscription category field set to None"></div>

## Subscription center

The subscription center is a public page where contacts manage their email preferences. It lists all active categories, each with a toggle. Contacts can also check a box to fully opt out and withdraw all marketing consent.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/2018-05-22_09-05-44.png" alt="Subscription center page showing category toggles and a full opt-out checkbox"></div>

The standard unsubscribe link in email footers automatically links to the subscription center.

## Automations

You can change a contact's subscription status automatically using campaign automations. Open the **Automation** tab of a campaign and create an automation that triggers when a contact interacts with a component — for example, to remove them from a category after they click a specific link.

***

**Related:**

* [Exclude inactive recipients](../../documentation/email-sms/exclude-inactive-recipients.md)
* [Transactional sendouts](../../documentation/email-sms/transactional-sendouts.md)
* [Whitelisting email servers](../../documentation/email-sms/whitelisting-email-servers.md)
* [Automatic send pause](../../documentation/email-sms/automatic-send-pause.md)
