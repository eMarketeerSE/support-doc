---
description: >-
  Install the eMarketeer Web Tracker on your website so you can see which pages
  your contacts visit.
---

# Installing the web tracker script on your website

This guide walks through both the recommended Google Tag Manager template and a manual install. You do not need to be technical — follow the steps in order. When you are done, also [install the form base script on your site](../forms/publish-a-form.md).

## Get your Tracker ID and script

Before you start, you need your unique Tracker ID and script.

1. Log in to your eMarketeer account.
2. Go to [Tracker Settings](https://app.emarketeer.com/corporate/gui/account/integrations/tracker.php). You must be an admin to access this page.
3. Copy your Tracker ID and script. You will need them during installation.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/Screenshot-2026-01-13-132700-1024x128.png" alt="Tracker Settings page showing the Tracker ID and script"></div>

## Option 1: Easy install (recommended)

Use this option if your site runs Google Tag Manager (GTM) together with a cookie consent banner.

We provide a ready-made template file you can import directly into GTM.

{% stepper %}
{% step %}
### Download the template file

{% file src="../../.gitbook/assets/emarketeer-tracker.tpl" %}
{% endfile %}

The template is compatible with more than ten of the most common cookie consent platforms, including CookieBot and CookieYes.
{% endstep %}
{% step %}
### Open Google Tag Manager

Log in to [Google Tag Manager](https://tagmanager.google.com) and select your website's container.
{% endstep %}
{% step %}
### Add the eMarketeer tag template

1. In the left menu, go to Templates, then Tag Templates, then New.
2. Click Import, select the `.tpl` file you downloaded, and Save.
{% endstep %}
{% step %}
### Create the tag using the template

1. Go to Tags, then New.
2. Click Tag Configuration and choose "eMarketeers Tracker Helper" (the template you just added).
3. Enter your Tracker ID when prompted.
4. Approve any requested permissions.
{% endstep %}
{% step %}
### Publish your container

Publish your container in GTM.
{% endstep %}
{% endstepper %}

The tracker is now running and respects your cookie banner.

## Option 2: Manual install

If you want to install the eMarketeer web tracker in some other way, use the Base Script below.

```html
<script type="application/javascript" src="https://app.emarketeer.com/public/scripts/t.js"></script>
<script>
   emtv2.init('YOUR TRACKER ID');
   emtv2.start(); //Only run when you get or already have consent.
   emtv2.stop(); //Run this if the visitor opts out.
</script>
```

You can implement this script in any system: a tag manager, your website's custom scripts, or your consent platform. Run it on every page you want to track.

Your job is to call `start()` whenever you have consent. If you do not have consent, do not call it. If the visitor previously gave consent and then opts out, call `stop()`.

## Need help?

If you get stuck, contact us at [support@emarketeer.com](mailto:support@emarketeer.com) and we will help you finish the setup.
