# Installing the web tracker script on your website

This guide will help you install the **eMarketeers Web Tracker** on your website.  
Don’t worry if you’re not technical — just follow the steps carefully.

Once done, also [install the form base script on your site](https://support.emarketeer.com/documentation/publish-a-form/).

* * *

## Get Your Tracker ID and Script

Before you start, you need your unique **Tracker ID** and script.

1.  Log in to your eMarketeer account.
2.  Go to: [Tracker Settings](https://app.emarketeer.com/corporate/gui/account/integrations/tracker.php)  
    (You must be an **admin** to access this page.)
3.  Copy your **Tracker ID** and script — you will need them during installation.

[![](../assets/installing-the-web-tracker-script-on-your-website/Screenshot-2026-01-13-132700-1024x128.png)](https://support.emarketeer.com/wp-content/uploads/2025/03/Screenshot-2026-01-13-132700.png)

* * *

## Option 1: Easy Install (Recommended)

If you use **Google Tag Manager (GTM)** together with a cookie banner (ex. CookieBot, CookieYes +10 more).

👉 We have a **ready-made template file** you can import directly into GTM.

### Steps:

1.  **Download the template file**:
    -   [Get the template file here](https://support.emarketeer.com/wp-content/uploads/2026/03/emarketeer-tracker.tpl)
2.  **Open Google Tag Manager**.
    -   Go to your GTM account.
    -   Select your website’s container.
3.  **Add the eMarketeer Tag Template**:
    -   In the left menu, go to **Templates → Tag Templates → New**.
    -   Click **Import**, select the `.tpl` file you downloaded, and **Save**.
4.  **Create the tag using the template**:
    -   Go to **Tags → New**.
    -   Click **Tag Configuration** and choose **eMarketeers Tracker Helper** (the template you just added).
    -   Enter your **Tracker ID** when prompted.
    -   Approve any requested permissions.
5.  **Publish** your container in GTM.

That’s it. The tracker is now running, and it respects your cookie banner.

* * *

## Option 2: Manual Install

If you want to use any other method to install the eMarketeer web tracker, you will use our tracker Base Script (below).

<script type="application/javascript" src="https://app.emarketeer.com/public/scripts/t.js"></script>
<script>
   emtv2.init('YOUR TRACKER ID');
   emtv2.start(); //Only run when you get or already have consent.
   emtv2.stop(); //Run this if the visitor opts out.
</script>

The above script can be implemented in any system you like. A tag system, your website custom scripts or consent system.  
Make sure to run this script on all pages you want to track. Your task is to make sure start() is always called when you get/have consent. If you don’t have consent given, it should not be called. If the visitor has given consent (tracking enabled) and wants to opt out, you call the stop() function.

* * *

## Need Help?

If you get stuck, contact us at **[support@emarketeer.com](mailto:support@emarketeer.com)** and we’ll help you finish the setup.
