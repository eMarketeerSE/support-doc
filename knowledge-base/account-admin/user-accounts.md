---
description: >-
  How to set up Multi-Factor Authentication on your eMarketeer account using an
  authenticator app.
---

# User guide: Enable Multi Factor Login

Set up Multi-Factor Authentication (MFA) for your eMarketeer login in three steps using an authenticator app. For background on MFA, see [this article](../../documentation/accounts-auth/multi-factor-authentication.md).

### Download an authenticator app

Before you start, install an authenticator app on your mobile device if you don't have one. We recommend Google Authenticator or Twilio Authy. Use the links below or search your app store.

{% columns %}
{% column %}
#### Google Authenticator

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/user-accounts-google-authenticator-icon.png" alt="Google Authenticator" width="120"></div>

<a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"><img src="../../.gitbook/assets/5a902dbf7f96951c82922875-1.png" alt="Get it on Google Play" width="180"></a> <a href="https://apps.apple.com/se/app/google-authenticator/id388497605"><img src="../../.gitbook/assets/5a902db97f96951c82922874.png" alt="Download on the App Store" width="180"></a>
{% endcolumn %}

{% column %}
#### Twilio Authy 2-Factor Authentication

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/user-accounts-twilio-authy-icon.png" alt="Twilio Authy" width="120"></div>

<a href="https://play.google.com/store/apps/details?id=com.authy.authy"><img src="../../.gitbook/assets/5a902dbf7f96951c82922875-1.png" alt="Get it on Google Play" width="180"></a> <a href="https://apps.apple.com/us/app/twilio-authy/id494168017"><img src="../../.gitbook/assets/5a902db97f96951c82922874.png" alt="Download on the App Store" width="180"></a>
{% endcolumn %}
{% endcolumns %}

## Set up MFA

Follow these steps after you or your admin has enabled MFA on your account. You can also enable it yourself in eMarketeer: click your avatar at the top right, choose **My Profile**, open the **Security** tab and switch on **Multi-factor authentication**.

{% stepper %}
{% step %}
### Go to the eMarketeer login page

Enter your username and password. If your account requires MFA, the **Select account** screen shows an **Activate MFA** button. Click it.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/user-accounts-mfa-activate.png" alt="Select account screen saying the account requires Multi Factor Authentication, with the Activate MFA button"></div>
{% endstep %}

{% step %}
### Set up the app

A QR code appears. Open your authenticator app on your phone and tap "Scan QR code". Scan the QR code on your computer screen. The app shows a six-digit code — enter it on the computer screen and click "Continue".

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/user-accounts-mfa-secure-account-qr.png" alt="Secure your account screen with a QR code and a field for the one-time code"></div>
{% endstep %}

{% step %}
### Save the recovery code

You're now authenticated, but before you continue you're shown a recovery code. Use this code to sign in if you don't have your phone with the authenticator app. Save it somewhere secure. Tick the checkbox to confirm you've saved it, then click "Continue".

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/user-accounts-mfa-recovery-code.png" alt="Save your recovery code screen with the recovery code, Copy code and the confirmation checkbox"></div>
{% endstep %}
{% endstepper %}

## Next time you log in

The next time you sign in, you see a "Verify your identity" prompt. Open your authenticator app, read the six-digit code, and enter it in the **Enter your one-time code** field. Tick **Remember this device for 30 days** if you don't want to use the app on every sign-in, then click **Continue**.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/user-accounts-mfa-verify-identity.png" alt="Verify your identity prompt with the one-time code field, Remember this device for 30 days and Continue"></div>

If you don't have your phone with you, click **Try another method**. Choose **Recovery code** and sign in with your recovery code.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/user-accounts-mfa-select-method.png" alt="Select a method to verify your identity, with Google Authenticator or similar and Recovery code"></div>

Switched to a new phone? Ask an administrator on your account to reset your MFA. See [Reset MFA for a user (administrator)](reset-mfa-for-a-user.md).

If you have any trouble signing in, contact support through the chat box on the login page.
