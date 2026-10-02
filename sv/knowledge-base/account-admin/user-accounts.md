---
description: >-
  Hur du aktiverar Multi-Factor Authentication på ditt eMarketeer-konto med
  hjälp av en autentiseringsapp.
---

# Användarguide: Aktivera Multi-Factor-inloggning

Konfigurera Multi-Factor Authentication (MFA) för din eMarketeer-inloggning i tre steg med en authenticator-app. För bakgrund om MFA, se [den här artikeln](../../documentation/accounts-auth/multi-factor-authentication.md).

### Ladda ner en authenticator-app

Innan du börjar, installera en authenticator-app på din mobila enhet om du inte redan har en. Vi rekommenderar Google Authenticator eller Twilio Authy. Använd länkarna nedan eller sök i din app store.

{% columns %}
{% column %}
#### Google Authenticator

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/Ska_CC_88rmavbild-2020-11-18-kl.-15.07.34.png" alt="Ikon för Google Authenticator"></div>

[<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/5a902dbf7f96951c82922875-1.png" alt="Hämta på Google Play"></div>](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)

[<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/5a902db97f96951c82922874.png" alt="Ladda ner från App Store"></div>](https://apps.apple.com/se/app/google-authenticator/id388497605)
{% endcolumn %}

{% column %}
#### Twilio Authy 2-Factor Authentication

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/Ska_CC_88rmavbild-2020-11-18-kl.-15.05.54.png" alt="Ikon för Twilio Authy"></div>

[<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/5a902dbf7f96951c82922875-1.png" alt="Hämta på Google Play"></div>](https://play.google.com/store/apps/details?id=com.authy.authy)

[<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/5a902db97f96951c82922874.png" alt="Ladda ner från App Store"></div>](https://apps.apple.com/us/app/twilio-authy/id494168017)
{% endcolumn %}
{% endcolumns %}

## Konfigurera MFA

Följ stegen nedan efter att du eller din admin har aktiverat MFA på ditt konto. Du kan också aktivera det själv i eMarketeer: klicka på din avatar uppe till höger, välj **My Profile**, öppna fliken **Security** och slå på **Multi-factor authentication**.

{% stepper %}
{% step %}
### Gå till inloggningssidan för eMarketeer

Ange ditt användarnamn och lösenord. Om ditt konto kräver MFA visar skärmen **Select account** en knapp **Activate MFA**. Klicka på den.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/user-accounts-mfa-activate.png" alt="Skärmen Select account som visar att kontot kräver Multi Factor Authentication, med knappen Activate MFA"></div>
{% endstep %}

{% step %}
### Konfigurera appen

En QR-kod visas. Öppna din authenticator-app på telefonen och tryck på "Scan QR code". Skanna QR-koden på datorskärmen. Appen visar en sexsiffrig kod — ange den på datorskärmen och klicka på "Continue".

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/user-accounts-mfa-secure-account-qr.png" alt="Skärmen Secure your account med en QR-kod och ett fält för engångskoden"></div>
{% endstep %}

{% step %}
### Spara återställningskoden

Du är nu autentiserad, men innan du fortsätter får du en återställningskod. Använd den koden för att logga in om du inte har din telefon med authenticator-appen. Spara den på ett säkert ställe. Markera kryssrutan för att bekräfta att du har sparat den och klicka sedan på "Continue".

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/user-accounts-mfa-recovery-code.png" alt="Skärmen Save your recovery code med återställningskoden, Copy code och kryssrutan för bekräftelse"></div>
{% endstep %}
{% endstepper %}

## Nästa gång du loggar in

Första gången du loggar in efter att du har konfigurerat MFA får du välja en metod för att verifiera din identitet. Välj **Google Authenticator or similar**. Du gör det här valet bara en gång. Därefter går eMarketeer direkt till rutan för koden.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/user-accounts-mfa-select-method.png" alt="Select a method to verify your identity med Google Authenticator or similar och Recovery code"></div>

Därefter ser du en uppmaning "Verify your identity". Öppna din authenticator-app, läs av den sexsiffriga koden och ange den i fältet **Enter your one-time code**. Markera **Remember this device for 30 days** om du inte vill använda appen vid varje inloggning, och klicka sedan på **Continue**.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/user-accounts-mfa-verify-identity.png" alt="Uppmaningen Verify your identity med fältet för engångskoden, Remember this device for 30 days och Continue"></div>

Om du inte har telefonen med dig klickar du på **Try another method** och loggar in med din återställningskod.

Om du får problem med inloggningen, kontakta supporten via chattrutan på inloggningssidan.
