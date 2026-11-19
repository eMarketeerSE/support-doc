---
description: >-
  A quick map of every endpoint across the eMarketeer REST APIs — contacts,
  subscriptions, engagement, consent, tags, messages, and campaigns — so you
  can find the right call fast.
---

# API endpoints overview

This page lists every endpoint in the eMarketeer API, grouped by module, with a one-line summary of what each call does. It is a map, not a full reference. For request and response schemas and to test calls in the browser, use the interactive portal at [api-doc.emarketeer.com](https://api-doc.emarketeer.com/).

The API is split into modules, each with its own OpenAPI definition: **Contact**, **Subscription**, **Engagement**, **Consent**, **Tag**, **Messages**, and **Campaigns**. Every module is a REST API that sends and receives JSON.

{% hint style="info" %}
All calls authenticate with an API key sent in the `x-api-key` request header. You find your key in eMarketeer under **Account Settings** → **Integrations** → **API Key**. Generating a key requires administrator access.
{% endhint %}

## Contact

Create, find, and delete contacts, manage contact lists, and read contact custom fields.

* Base URL: `https://connect.emarketeer.com/contacts-api`
* Browse and test: [Contact v2 definition](https://api-doc.emarketeer.com/?urls.primaryName=Contact%20v2)
* Version 1: [Contact definition](https://api-doc.emarketeer.com/?urls.primaryName=Contact)

{% hint style="warning" %}
Version 1 of the Contacts API (`/v1/`) is deprecated and stops working on May 1, 2027. Move your integration to the v2 endpoints below before then.
{% endhint %}

Each v1 endpoint has a v2 endpoint with the same path, with `/v2/` instead of `/v1/`. Endpoints that return many items are paged: use `pageNumber` (starting at 0) and `pageSize` (up to 100, default 25).

### Contacts

* `POST /v2/contacts` — Create or update up to 100 contacts at a time, matched on email address.
* `GET /v2/contacts` — Find contacts by saved filter, email, or creation/modification date.
* `POST /v2/contacts/delete` — Delete contacts by email address (up to 100 at a time).
* `GET /v2/contacts/{contactId}/lists` — Get the contact lists a contact is a member of.

### Contact lists

* `GET /v2/lists` — Get all contact lists, including nested lists.
* `POST /v2/lists` — Create a contact list.
* `DELETE /v2/lists` — Delete contact lists (up to 25 at a time).
* `GET /v2/lists/{contactListId}` — Get the contacts in a contact list.
* `POST /v2/lists/{contactListId}` — Add contacts to a contact list (up to 1000 at a time).
* `DELETE /v2/lists/{contactListId}` — Remove contacts from a contact list (up to 1000 at a time).

### Contact custom fields

* `GET /v2/contacts/customFields` — List all contact custom fields on the account.

## Subscription

Manage a contact's subscriptions and list the campaigns available to subscribe to.

* Base URL: `https://prod-apigw.emarketeer.com`
* Browse and test: [Subscription definition](https://api-doc.emarketeer.com/?urls.primaryName=Subscription)

### Subscriptions

* `GET /subscriptions/v1/subscriptions` — Get a subscription by email and subscription name.
* `POST /subscriptions/v1/subscriptions` — Add a subscription.
* `DELETE /subscriptions/v1/subscriptions` — Delete a subscription.

### Campaigns

* `GET /subscriptions/v1/campaigns` — List campaigns, newest first, with optional folder filtering and pagination.

## Engagement

Read a contact's engagement with campaign components, and push external engagement signals into eMarketeer.

* Base URL: `https://connect.emarketeer.com/engagements-api/v1`
* Browse and test: [Engagement definition](https://api-doc.emarketeer.com/?urls.primaryName=Engagement)

### Signals

* `POST /signals` — Send a signal: an external engagement for a contact, such as a form submit or a web interaction from another system.

### Engagement by component

* `GET /engagements/contact/{contactId}` — Get all engagements for a contact.
* `GET /engagements/email/{componentId}` — Engagements for an email component.
* `GET /engagements/sms/{componentId}` — Engagements for an SMS component.
* `GET /engagements/form/{componentId}` — Engagements for a form component.
* `GET /engagements/landingPage/{componentId}` — Engagements for a landing page component.
* `GET /engagements/website` — Engagements for a website, by website name.
* `GET /engagements/linkedinLeadGenForm` — Engagements for a LinkedIn Lead Gen Form.

## Consent

Read and record contact consent, and look up the consent master data (purposes, legal bases, sources).

* Base URL: `https://prod-apigw.emarketeer.com`
* Browse and test: [Consent definition](https://api-doc.emarketeer.com/?urls.primaryName=Consent)

### Consent

* `GET /consent-public/v1/consents` — Get consent for a key, or all consents for the current user if no key is given.
* `GET /consent-public/v1/consents/filter` — Get consents matching a filter.
* `GET /consent-public/v1/consents/history` — Get the consent history for a key.
* `POST /consent-public/v1/consents` — Create a consent record.

### Consent master data

* `GET /consent-public/v1/purposes` — List all purposes.
* `GET /consent-public/v1/legalBases` — List all legal bases.
* `GET /consent-public/v1/sources` — List all sources.

## Tag

View, create, update, and delete tags, and assign tags to contacts in bulk.

* Base URL: `https://connect.emarketeer.com/tags-api/v1`
* Browse and test: [Tag definition](https://api-doc.emarketeer.com/?urls.primaryName=Tag)

### Tags

* `GET /tags` — Get all tags, with pagination.
* `POST /tags` — Create a tag with a name, color, and category.
* `GET /tags/{tagId}` — Get a tag by its ID.
* `PUT /tags/{tagId}` — Replace all fields of a tag.
* `DELETE /tags/{tagId}` — Delete a tag.
* `GET /tags/name/{tagName}` — Get a tag by its name.

### Contact tags

* `POST /tags/add-contacts-tags` — Add multiple tags to multiple contacts in one call.
* `POST /tags/remove-contacts-tags` — Remove multiple tags from multiple contacts in one call.

## Messages

Send emails and SMS to contacts.

Use the Messages API to send to individual contacts, at most 10 at a time. To send an email to a whole contact list, use the Campaigns API (see [Send](#send) below).

* Base URL: `https://connect.emarketeer.com/messages-api`
* Browse and test: [Messages definition](https://api-doc.emarketeer.com/?urls.primaryName=Messages)

### Email

* `POST /v1/email/send` — Send an email to up to 10 contacts.

### SMS

* `POST /v1/sms/send` — Send an SMS to up to 10 contacts.

## Campaigns

Copy, rename, and move campaign components, fill in the content of emails and landing pages, and send an email to a contact list.

* Base URL: `https://connect.emarketeer.com/campaigns-api/v1`
* Browse and test: [Campaigns definition](https://api-doc.emarketeer.com/?urls.primaryName=Campaigns)

### Components

* `POST /components/{componentType}/{componentId}/copy` — Copy an email, SMS, form, legacy form, or landing page into the same campaign.
* `PATCH /components/{componentType}/{componentId}` — Rename a component, move it to another campaign, or both.

### Content

* `GET /components/{componentType}/{componentId}/content` — List the content blocks of an email or landing page, with their paths and current values.
* `PATCH /components/{componentType}/{componentId}/content` — Fill in up to 50 content blocks of an email or landing page in one call.

### Send

* `POST /components/{componentType}/{componentId}/send` — Send an email to a contact list, now or at a scheduled time. It can leave out contacts who already got this email (`sendOnce`).

## What to do next

For the full request and response schemas, and to try calls live, open the [API portal](https://api-doc.emarketeer.com/). To push engagement events from another system, see the [Custom Signals API](custom-signals-api.md).
