---
description: >-
  How eMarketeer matches incoming contact data to existing contacts, which
  contact it uses when several share an email address, and how contacts link to
  your CRM.
---

# How eMarketeer matches contacts

This article explains how eMarketeer decides whether incoming data belongs to a contact that already exists, and which contact it uses when several share an email address.

Most of the ways contacts are created also update existing contacts. To see all of them, read [How contacts are created](how-contacts-are-created.md).

## How incoming data is matched

| Source | Matches on | If no contact matches |
| --- | --- | --- |
| Form with a **Contact field: Email** | Email address | Creates a contact |
| Excel or text file import | Email address or External ID, depending on **Match by** | Creates a contact |
| Import from SuperOffice or Dynamics 365 | Email address | Creates a contact |
| Quick Send | Email address | Creates a contact |
| Contacts API | Email address | Creates a contact |
| Signals | Email address | Creates a contact |
| CRM panel | External ID | Lets you create one |

You can't add a contact manually with **Add Contact** if a contact with that email address already exists.

## When several contacts share an email address

eMarketeer allows more than one contact to share an email address. For example, a form creates one contact. Later, an import with **Match by** set to **External ID** creates a second contact with the same email address, because that import matches only on the External ID.

When this happens, many actions still need to work on a single contact — opening a contact in a CRM panel, a Quick Send, a form answer, and so on. eMarketeer always picks the same one, the **default contact**. The tables below show which contact an action uses, and which actions instead touch every contact sharing the address.

### Which contact an action uses

| Situation | Contact used |
| --- | --- |
| You view a person in the CRM panel | The contact whose External ID matches that CRM person |
| You Quick Send to the address | The CRM-linked contact; if none, the oldest |
| A contact clicks a personal link in a campaign email | That exact contact |
| A form is submitted and the browser is tracked as one of the contacts | The tracked contact |
| A form is submitted through a personal link, using the link's email address | The link's contact |
| A colleague submits the form from a forwarded email, using their own address | The colleague's contact, not the original recipient |
| No context applies, such as a plain form link that identifies the contact by email address | The CRM-linked contact; if none, the oldest |

The answer from a form, and a signal event such as a Facebook Lead Form or LinkedIn Lead Gen Form, are saved on the single contact this table picks.

### How the default contact is chosen

When no earlier context points to a specific contact, eMarketeer uses the first of these rules that applies:

1. **A contact the context already points to.** For example, a personal link in an email, a contact you opened from the company card in a panel, the CRM person shown in the SuperOffice or Dynamics 365 panel, or, in a form, the visitor the browser is tracked as.
2. **A contact linked to a CRM person.** Its **External ID** is a SuperOffice Contact ID or a Dynamics ID, or the contact is linked to a Dynamics 365 lead. If several contacts qualify, eMarketeer uses the oldest.
3. **The oldest contact** with that email address.

### Example

Two contacts share the email address anna@acme.com:

| Contact | Created | External ID |
| --- | --- | --- |
| Contact A | By a form, last year | None |
| Contact B | By an import with **Match by** set to **External ID**, last week | SuperOffice Contact ID |

eMarketeer uses contact B, because it is linked to a person in SuperOffice, even though contact A is older.

### What touches every contact with the address

| Action | Effect |
| --- | --- |
| Unsubscribe, bounce | Applied to every contact with the address |
| Import that matches on the email address | Field values updated on every contact |
| Form submission or signal | Field values updated on every contact; the answer or event itself is saved only on the single contact above |
| Contacts API call that identifies a contact by email address | Applied to every contact with the address; the API doesn't use the default contact |

{% hint style="info" %}
An import set to not update existing contacts changes none of them. It adds only the default contact to the import's list and tags, so the list has one contact per email address.
{% endhint %}

## Matching with your CRM

A contact is linked to a person in your CRM through the **External ID** field. With SuperOffice, it holds the person's Contact ID. With Dynamics 365, it holds the Dynamics contact ID.

An import from SuperOffice or Dynamics 365 matches on email address, not on External ID:

* Every eMarketeer contact with the CRM person's email address is updated, and the CRM ID is written to it. For a Dynamics 365 lead, the lead ID is saved too.
* A contact that only had an email address is updated and becomes linked to the CRM. No duplicate is created.
* If no contact has that address, a new contact is created.
* CRM persons without an email address are skipped and counted as empty.
* If two CRM persons share an email address, only one of them is imported.

For how SuperOffice uses the link in automations and Journeys, see [How contacts are matched between eMarketeer and SuperOffice](../../documentation/superoffice/superoffice-contact-matching.md).
