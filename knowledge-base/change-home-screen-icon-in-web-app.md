# Change home screen icon in Web App

This article is only applicable to older web app templates.  
Updated versions of the app have built-in image browser for web app icons and favicons in the settings block as shown in the image below.![](../assets/change-home-screen-icon-in-web-app/pn_22-05-11_09-47-04.png)  
Web App Icon fields

When using the Web App in eMarketeer and you save the app to your mobile home screen, the icon used is the eMarketeer default icon as shown below.

![](../assets/change-home-screen-icon-in-web-app/IMG_0431.png)

In order to change this icon to your custom icon, follow these steps.

## Create a custom icon

First create a square image at least 254 pixels wide and tall but no more than 1024. This is the icon you want to use on your home screen. Save the image as png, jpg or png format.

## Upload the image to eMarketeer and get the url

Next, go to files in eMarketeer and upload the image to a folder of your choice. Click to preview the image and save the relative url (not including the domain name). (Copy the URL part shown in the image below)

![](../assets/change-home-screen-icon-in-web-app/Ska_CC_88rmavbild-2017-08-07-kl.-10.26.23.png)

## Paste the new URL into the web app header

Now, go into your Web App in developer mode and change the icon urls.

1.  Enable developer mode (if you don’t see this, ask your admin to enable this privilege)
2.  Click “Colors, Fonts & Head” in the left menu bar
3.  Click the “Head” tab.
4.  On line 9-12, edit the urls and paste your new url on all four rows.
5.  Click “Save”

![](../assets/change-home-screen-icon-in-web-app/Ska_CC_88rmavbild-2017-08-07-kl.-10.11.51.png)

Now your app will use the new icon when saving it to your home screen.
