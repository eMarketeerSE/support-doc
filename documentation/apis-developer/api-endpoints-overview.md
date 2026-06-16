---
description: >-
  A quick map of every endpoint across the eMarketeer REST APIs — contacts,
  subscriptions, engagement, consent, tags, and messages — so you can find the
  right call fast.
---

# API endpoints overview

This page lists every endpoint in the eMarketeer API, grouped by module, with a one-line summary of what each call does. It is a map, not a full reference. For request and response schemas and to test calls in the browser, use the interactive portal at [api-doc.emarketeer.com](https://api-doc.emarketeer.com/).

The API is split into modules, each with its own OpenAPI definition: **Contact**, **Subscription**, **Engagement**, **Consent**, **Tag**, and **Messages**. Every module is a REST API that sends and receives JSON.

{% hint style="info" %}
All calls authenticate with an API key sent in the `x-api-key` request header. Your key is available in eMarketeer under **Settings** → **Plugins and integration**.
{% endhint %}

## Contact

Create, find, and delete contacts, manage contact lists, and read contact custom fields.

* Base URL: `https://connect.emarketeer.com/contacts-api`
* Browse and test: [Contact definition](https://api-doc.emarketeer.com/?urls.primaryName=Contact)

### Contacts

* `POST /v1/contacts` — Create or update up to 100 contacts at a time, matched on email address.
* `GET /v1/contacts` — Find contacts by saved filter, email, or creation/modification date.
* `POST /v1/contacts/delete` — Delete contacts by email address (up to 100 at a time).

### Contact lists

* `GET /v1/lists/` — Get all contact lists.
* `POST /v1/lists/` — Create a contact list.
* `DELETE /v1/lists/` — Delete contact lists.
* `GET /v1/lists/{contactListId}` — Get the contacts in a contact list.
* `POST /v1/lists/{contactListId}` — Add contacts to a contact list (up to 1000 at a time).
* `DELETE /v1/lists/{contactListId}` — Remove contacts from a contact list.

### Contact custom fields

* `GET /v1/contacts/customFields` — List all contact custom fields on the account.

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

* Base URL: `https://connect.emarketeer.com/messages-api`
* Browse and test: [Messages definition](https://api-doc.emarketeer.com/?urls.primaryName=Messages)

### Email

* `POST /v1/email/send` — Send an email to one or more contacts.

### SMS

* `POST /v1/sms/send` — Send an SMS to one or more contacts.

## What to do next

For the full request and response schemas, and to try calls live, open the [API portal](https://api-doc.emarketeer.com/). To push engagement events from another system, see the [Custom Signals API](custom-signals-api.md).
