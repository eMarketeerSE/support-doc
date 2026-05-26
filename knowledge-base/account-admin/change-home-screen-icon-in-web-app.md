# Change home screen icon in Web App

Replace the default eMarketeer icon with your own when saving a Web App to a mobile home screen.

This article applies to older web app templates only. Updated versions of the app have a built-in image browser for web app icons and favicons in the settings block, as shown below.

![web app icon and favicon fields in the settings block](../../.gitbook/assets/pn_22-05-11_09-47-04.png)

Web App icon fields

When you save the Web App to your mobile home screen, the default icon used is the eMarketeer logo shown below.

![default eMarketeer icon on a mobile home screen](../../.gitbook/assets/IMG_0431.png)

To use a custom icon, follow the steps below.

## Create a custom icon

Create a square image at least 254 pixels wide and tall, and no more than 1024. Save the image as PNG or JPG.

> TODO: verify — original lists "png, jpg or png format" which is a typo; confirm the supported formats.

## Upload the image to eMarketeer and get the URL

Go to Files in eMarketeer and upload the image to a folder of your choice. Click to preview the image and copy the relative URL (without the domain name), as shown below.

![image preview with the relative URL to copy](../../.gitbook/assets/Ska_CC_88rmavbild-2017-08-07-kl.-10.26.23.png)

## Paste the new URL into the web app header

Open your Web App in developer mode and change the icon URLs.

1. Enable developer mode. If you don't see this option, ask your admin to grant the privilege.
2. Click Colors, Fonts & Head in the left menu.
3. Click the Head tab.
4. On lines 9-12, paste your new URL on all four rows.
5. Click Save.

![icon URLs pasted on lines 9-12 of the web app head](../../.gitbook/assets/Ska_CC_88rmavbild-2017-08-07-kl.-10.11.51.png)

Your app now uses the new icon when saved to a home screen.
