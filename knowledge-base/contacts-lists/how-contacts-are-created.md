---
description: A complete reference of all the ways contacts can be created in eMarketeer — manually, through imports, web forms, the API, and engagement signals.
---

# How contacts are created

Contacts enter eMarketeer through several paths. Some are created manually by users, others are generated automatically when someone submits a form, engages with a signal source, or is pushed through the API.

## User-created contacts

### Contact import

The fastest way to bring a large number of contacts into eMarketeer is through an import.

**Excel**
Upload a spreadsheet with contact data. Column headers map to contact fields in eMarketeer. See [Import contacts from Excel](import-contacts-from-excel.md) for a step-by-step walkthrough.

**Text file**
Works the same way as an Excel import, but you upload a tab-delimited or comma-separated text file instead of a spreadsheet.

**CRM**
If you have SuperOffice or Microsoft Dynamics 365 integrated, you can search your CRM and import lists of contacts directly. This is useful for seeding eMarketeer with existing CRM data.

### Manually create a contact

Go to **Contacts** and click **Add Contact**. Enter an email address and eMarketeer will attempt to enrich the profile automatically. Remaining fields can be filled in manually.

### CRM web panel

The Contact Summary panel embedded in your CRM can create contacts on the eMarketeer side. If a CRM contact does not have a matching eMarketeer contact record, the panel gives you the option to create one.

### Quick-send email

If you Quick Send an email to an address that does not exist in eMarketeer, a new contact is created for that address at the time of sending.

## Web forms

A form that includes a **Contact field: Email** will create a new contact or match against an existing one when the form is submitted. Other Contact fields on the form update the matched contact record at the same time.

See [Form editor: UI overview](../../documentation/forms/ui-overview.md#contact-fields) for more on Contact fields.

## API

The `/v1/contacts` endpoint accepts a POST request to create a new contact programmatically. This is the standard method for syncing contacts from external systems or automating contact creation.

Full endpoint reference: [api-doc.emarketeer.com](https://api-doc.emarketeer.com/#/Contact/postContact)

## Signals

Signals are engagement events sent to eMarketeer from external sources. When a signal arrives for an email address that does not match an existing contact, eMarketeer creates a new contact automatically.

Signal sources that can generate contacts:

**[Facebook Lead Forms](../../documentation/lead-forms/facebook-lead-forms.md)**
Leads collected through Facebook Lead Ad forms are sent to eMarketeer and create or update contacts.

**[LinkedIn Lead Gen Forms](../../documentation/lead-forms/linkedin-lead-gen-forms.md)**
Leads collected through LinkedIn Lead Gen Forms work the same way.

**[SuperOffice Signals](../../documentation/superoffice/superoffice-signals.md)**
Engagement events from SuperOffice can be forwarded to eMarketeer as signals, creating contacts when no match is found.

**[Custom Signals API](../../documentation/apis-developer/custom-signals-api.md)**
You can push custom engagement events from any external system using the Signals API. Each event creates or matches a contact by email address.

## When several contacts share an email address

eMarketeer allows several contacts with the same email address. For example, a form can create one contact, and an import from your CRM can create another.

When eMarketeer needs one contact for an email address, it picks the same one everywhere. It uses the first rule that applies:

1. The contact that the link or panel already names. This is a personal link in an email, a contact you opened from the contact card, or the CRM person shown in the SuperOffice or Dynamics 365 panel.
2. A contact that is linked to a person in SuperOffice or Dynamics 365. This contact has an **External ID** that is a SuperOffice Contact ID or a Dynamics ID.
3. The oldest contact with that email address.

This applies in these places:

* The SuperOffice and Dynamics 365 panels.
* Quick Send.
* Form links that identify the contact by email address.
* Contacts created by lead ads.

### Example

Two contacts share the email address anna@acme.com:

| Contact | Created | External ID |
| --- | --- | --- |
| Contact A | By a form, yesterday | None |
| Contact B | By an import from SuperOffice, last year | SuperOffice Contact ID |

eMarketeer uses contact B, because it is linked to a person in SuperOffice.

### What still updates every contact

Unsubscribes, bounces and imports still update every contact with the email address.

### The CRM badge on the contact card

The contact card shows the CRM badge only when the External ID is a SuperOffice Contact ID or a Dynamics ID. A SuperOffice Contact ID is a whole number above 0. Other imported values, such as `007` or `12.5`, no longer show the badge.
