---
description: How to connect your website to eMarketeer using the Web Tracker and the form base script.
---

# Website integration

Connect your website to eMarketeer to track visitor behaviour and enable forms on any page.

eMarketeer provides two scripts for website integration. Install both to get the complete picture: which pages a contact visits, and which forms they complete.

## Web Tracker

The Web Tracker records page visits on your website. Once a visitor is identified — by clicking a link in an email or submitting a form — their page visits appear on the contact timeline in eMarketeer.

The tracker also populates the marketing dashboard with session data, traffic sources, and UTM attribution.

See [Installing the Web Tracker script on your website](../documentation/web-tracker/installing-the-web-tracker-script-on-your-website.md) for setup instructions.

## Form base script

The form base script must be present on any page where you want to embed an eMarketeer form. Without it, forms will not load.

Add the following snippet once to your website — in the `<head>` element or via a tag manager:

```html
<script type="application/javascript" src="https://app.emarketeer.com/public/scripts/forms.js"></script>
```

The script does not collect any data on its own. It only enables forms to render on the page.

## How they work together

When both scripts are installed, submitting a form identifies the contact. eMarketeer then links that contact to all the page visits recorded since consent was given — including visits made before the form was submitted.
