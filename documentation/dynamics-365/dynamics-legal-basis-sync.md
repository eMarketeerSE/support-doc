# Dynamics - Legal basis & Subscription sync

The eMarketeer integration for Microsoft Dynamics 365 Sales keeps contact preferences and legal compliance up to date automatically. This article explains how eMarketeer bridges its marketing compliance tools with Dynamics so sales and marketing share a single source of truth.

## 1. How Legal Basis (consent) syncs

eMarketeer uses a nuanced Legal Basis list — for example Consent, Legitimate Interest, Required by Law, Withdrawn. Dynamics 365 uses a standard "Bulk Email" toggle with Allow or Do not allow.

The integration translates between these statuses so both systems stay aligned:

- **Withdrawn** in eMarketeer syncs to **Do not allow** in Dynamics 365 Sales.
- **Consent** in eMarketeer syncs to **Allow** in Dynamics 365 Sales.
- Any other positive basis (such as Legitimate Interest) in eMarketeer syncs to **Allow** in Dynamics 365 Sales.

If a user sets the Dynamics Bulk Email toggle to "Do not allow", eMarketeer updates the contact's Legal Basis to "Withdrawn". If it changes to "Allow", eMarketeer sets it to "Consent".

## 2. How subscriptions sync

Dynamics does not have a native marketing subscription center, so the eMarketeer integration builds one to handle specific categories such as Newsletters, Event Invitations, or Promotions. [Read more about eMarketeer subscriptions](../../knowledge-base/account-admin/subscriptions.md).

- **Where they live in Dynamics:** subscriptions appear on the Details tab of a Contact record as Yes/No toggles.
- **Creating subscriptions:** subscription categories can only be created in eMarketeer. Once created, the integration adds the new category to your Dynamics table automatically.
- **Bi-directional updates:** if a contact updates their preferences via an eMarketeer form, or if a sales rep flips a toggle to Yes or No in Dynamics, the change syncs to the other system.
- **Default settings:** any new contact created in eMarketeer has all available subscriptions enabled (Yes) by default. Even with subscriptions enabled, no emails can be sent without a positive Legal Basis.

## 3. When the data syncs

The integration uses a multi-tiered sync engine to ensure data parity without overloading either system.

- **Initial setup (one-time):** when you first connect Dynamics, an automated job runs for around 10 minutes to set up the custom subscription tables, forms, and views. If you have heavily customized or renamed default forms and views in Dynamics, the setup might pause. eMarketeer Support can see this status and override it to help you complete the setup.
- **Near real-time sync (webhooks):** when a new contact with an email address is created, or an existing contact's email is updated, the sync pushes those changes between systems, usually within seconds.
- **Background sweep (every 30 minutes):** every half hour, the system checks the last synced state and catches up on routine preference or consent changes that webhooks did not pick up.
- **Pre-send safety check:** right before eMarketeer sends a campaign, it runs a force sync on all targeted contacts. If a contact opted out in Dynamics just minutes before the send, they are safely excluded from the mailing list.
