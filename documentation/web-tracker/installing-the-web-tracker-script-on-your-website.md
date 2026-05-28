# Installing the web tracker script on your website

Install the eMarketeer Web Tracker on your website so you can see which pages your contacts visit.

This guide walks through both the recommended Google Tag Manager template and a manual install. You do not need to be technical — follow the steps in order. When you are done, also [install the form base script on your site](../forms/publish-a-form.md).

## Get your Tracker ID and script

Before you start, you need your unique Tracker ID and script.

1. Log in to your eMarketeer account.
2. Go to [Tracker Settings](https://app.emarketeer.com/corporate/gui/account/integrations/tracker.php). You must be an admin to access this page.
3. Copy your Tracker ID and script. You will need them during installation.

<div data-with-frame="true"><img src="../../.gitbook/assets/Screenshot-2026-01-13-132700-1024x128.png" alt="Tracker Settings page showing the Tracker ID and script"></div>

## Option 1: Easy install (recommended)

Use this option if your site runs Google Tag Manager (GTM) together with a cookie banner such as CookieBot or CookieYes.

We provide a ready-made template file you can import directly into GTM.

1. Download the template file: [Get the template file here](https://support.emarketeer.com/wp-content/uploads/2026/03/emarketeer-tracker.tpl).
2. Open Google Tag Manager and select your website's container.
3. Add the eMarketeer tag template:
   * In the left menu, go to Templates, then Tag Templates, then New.
   * Click Import, select the `.tpl` file you downloaded, and Save.
4. Create the tag using the template:
   * Go to Tags, then New.
   * Click Tag Configuration and choose "eMarketeers Tracker Helper" (the template you just added).
   * Enter your Tracker ID when prompted.
   * Approve any requested permissions.
5. Publish your container in GTM.

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

> TODO: verify the manual install snippet was intended as a fenced HTML code block in the source.

## Need help?

If you get stuck, contact us at [support@emarketeer.com](mailto:support@emarketeer.com) and we will help you finish the setup.
