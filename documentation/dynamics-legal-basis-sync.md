# Dynamics - Legal basis & Subscription sync

When you integrate eMarketeer with Microsoft Dynamics 365 Sales, keeping your contact preferences and legal compliance up to date is completely automated. This guide explains how eMarketeer bridges its marketing compliance tools with Microsoft Dynamics 365 Sales, ensuring your sales and marketing teams always share a single source of truth.

### 1\. How Legal Basis (Consent) Syncs

eMarketeer uses a nuanced Legal Basis list (e.g., Consent, Legitimate Interest, Required by Law, Withdrawn), whereas Dynamics 365 uses a standard “Bulk Email” toggle (Allow / Do Not Allow).

Our integration automatically translates these statuses back and forth so both systems are always aligned:

-   **Withdrawn** in eMarketeer syncs to **Do not allow** in Microsoft Dynamics 365 Sales.
    
-   **Consent** in eMarketeer syncs to **Allow** in Microsoft Dynamics 365 Sales.
    
-   **Any other positive basis** (e.g., Legitimate Interest) in eMarketeer syncs to **Allow** in Microsoft Dynamics 365 Sales.
    

_Note: If a user sets the Dynamics Bulk Email toggle to “Do not allow”, eMarketeer will update the contact’s Legal Basis to “Withdrawn”. If it is changed to “Allow”, eMarketeer sets it to “Consent”._

### 2\. How Subscriptions Sync

Dynamics natively does not have a marketing subscription center, so the eMarketeer integration builds one for you to handle specific categories (like Newsletters, Event Invitations, or Promotions). [Read more about eMarketeer subscriptions here](https://support.emarketeer.com/documentation/subscriptions/).

-   **Where they live in Dynamics:** You will find a contact’s Subscriptions located directly on the **Details tab** of their Contact record, displayed as simple “Yes/No” toggles.
    
-   **Creating Subscriptions:** Subscription categories can **only be created in eMarketeer**. Once created, the integration automatically adds that new category to your Dynamics table.
    
-   **Bi-directional Updates:** If a contact updates their preferences via an eMarketeer form, or if a sales rep manually flips a toggle to “Yes” or “No” in Dynamics, the change syncs to the other system.
    
-   **Default Settings:** Any _new_ contact created in eMarketeer will have all available subscriptions enabled (“Yes”) by default. _(Note: Even with subscriptions enabled, no emails can be sent without a positive Legal Basis)._
    

### 3\. When Does the Data Sync?

The integration uses a multi-tiered sync engine to ensure data parity without overloading either system.

-   **The Initial Setup (One-time):** When you first connect Dynamics, a ~10-minute automated job runs to set up the custom subscription tables, forms, and views. If you have heavily customized or renamed default forms/views in Dynamics, this setup might pause. eMarketeer Support can see this status and override it to help you complete the setup.
    
-   **Near Real-Time Sync (Webhooks):** Whenever a new contact with an email address is created, or an existing contact’s email is updated, the sync pushes those changes between systems, usually within seconds.
    
-   **The Background Sweep (Every 30 Minutes):** Every half hour, the system checks the last synced state and catches up on any routine preference or consent changes made in either system that were not already caught by webhooks.
    
-   **The Pre-Send Safety Check:** Right before eMarketeer sends out an email campaign, it runs a **force sync on all targeted contacts**. This guarantees that if a contact opted out in Dynamics just minutes before a send, they will be safely excluded from the mailing list.
