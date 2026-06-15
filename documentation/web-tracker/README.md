---
description: >-
  The eMarketeer Web Tracker records visitor sources and the behavior of
  individual contacts on your website.
---

# The Web tracker

With the tracker installed you can:

- Populate the marketing overview dashboard
- Track identified contacts on your website
- Integrate with your website consent banner
- Track the origin of your contacts

Ready to install the script on your website? [See the installation instructions](installing-the-web-tracker-script-on-your-website.md). You get the best results when you also [install eMarketeer forms](../forms/publish-a-form.md) on your website for conversions.

## How the tracker works

With the eMarketeer tracker script on your website, you get data on where your visitors come from, from source down to campaign level. When a contact converts using an eMarketeer Form, you also get historic browsing data and future sessions for that contact. When a contact visits your site by clicking a link in an eMarketeer email, the visit is immediately identified and logged in eMarketeer.

You end up knowing which campaigns and sources drive the most conversions on your website, with retroactive web visit data from converted leads and full browsing history on your contacts.

The tracker works with the most common cookie consent services and only tracks visitors who give consent.

### What we track

When an identified contact enters your site, we store:

- Sessions and page URLs
- UTM parameters for campaign tracking
- Referring site
- Time on site
- Contact identity
- Consent for tracking

### How a contact is identified on the website

There are two ways to identify a contact on your website.

- Clicking a link in an eMarketeer email. If the link goes to your website where the tracker is installed, the contact is identified.
- Submitting an embedded [eMarketeer form](../forms/publish-a-form.md) on your website. When the form is submitted with contact details, an identifier is stored in the visitor's browser.

### Retrospective tracking

There are two important events on your website:

1. The visitor gives marketing consent for tracking, usually when entering the website for the first time.
2. The contact is identified from an email or a form submission.

Once identified, eMarketeer stores all the tracking data from the time consent was given.

**Example:**

A visitor first enters your website anonymously from a Google search and gives consent in your cookie banner. After a few pages, they leave the site. At this point the visit is stored in the browser's local storage and nothing is sent to eMarketeer. The visitor returns a few times and eventually submits a form on your website. When the form is submitted and the visitor is identified, all the visit data from when tracking consent was given is stored.

This means that when a form is submitted, you also get the original source and web visits that led up to the conversion. Use this to see which of your marketing efforts drives the most conversions.

## Web tracker technical explanation

The tracking script does not use cookies. Instead, it uses local storage in the visitor's browser. This makes it easier to stay GDPR compliant, for these reasons:

- Local storage is not cross-domain. Data tracked on your site cannot be read on other sites, which is what many cookie blockers and policies aim to prevent.
- Browsers increasingly block third-party cookies to prevent cross-domain tracking. The tracker is not affected by this.
- Local storage data is not sent to the server on every page request, unlike cookies.

## GDPR and privacy policy recommendations

Even though the eMarketeer web tracker does not use cookies, the purpose of the feature is to track visitors on your website where the contact can be identified. This requires consent from the visitor to comply with GDPR.

### Cookie banner

Consent should be handled by your cookie consent banner under the Marketing category. Before the visitor gives this consent, eMarketeer receives no information from the web tracker.

### Privacy policy updates

Below is a suggested amendment to your privacy policy when using the eMarketeer web tracker.

* * *

**_Website Tracking & Analytics_**
_We use a tracking system provided by eMarketeer to understand how visitors interact with our website and to improve our communication with customers. This section explains how this tracking works and your choices regarding it._

**_How We Track Website Visitors_**
_If you click a link in an email we send, we may identify your visit to our website and associate it with your existing contact profile in our system._

_If you visit our website anonymously, we may temporarily store visit history (such as pages viewed, UTM parameters, and referrer information) in your browser's local storage. This data remains anonymous unless you later submit a form._

_When you submit a form, your past visit history may be linked to your submission to help us improve our service and communication._

**_What Data Do We Store?_**
_We do not use cookies for this tracking. Instead, we use local storage, which saves information on your device without transmitting it to external servers unless you interact with our site._

_Stored data may include page visit history, referrer information, and email identifiers (if applicable)._

**_Your Privacy Choices_**
_Website tracking only starts after you accept our tracking consent banner._

_You can clear your tracking data at any time by removing local storage data from your browser settings._

_If you wish to opt out of email tracking, you can unsubscribe from our emails or adjust your preferences via the link in our email footer._

* * *
