---
description: >-
  Steg-för-steg-instruktioner för att lägga till en e-postdomän i ditt
  eMarketeer-konto.
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: false
  actions:
    visible: true
---

# Lägg till e-postdomän

{% hint style="info" %}
En autentiserad e-postdomän krävs för att skicka e-post från eMarketeer. Utan den är utskick av e-post inte tillgängligt på ditt konto.
{% endhint %}

Den här guiden tar dig igenom autentiseringen av din domän så att du kan skicka e-post från din egen adress med bästa möjliga leveransbarhet.

När du är klar, hör av dig till oss så aktiverar vi den nya e-posttjänsten för ditt konto.

{% stepper %}
{% step %}
### Gå till Email Domains

I eMarketeer klickar du på kugghjulsikonen uppe till höger och väljer **Account Settings**. Öppna **Email Domains** och klicka på **Add A Domain**.
{% endstep %}

{% step %}
### Ange din domän

Ange den domän du vill autentisera (till exempel `yourdomain.com`) i fältet **Domain** i dialogen Add Domain och klicka på **Add**.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/authorize-email-domain-add-domain-dialog.png" alt="Dialogen Add Domain med ifyllt Domain-fält och knapparna Cancel och Add"></div>
{% endstep %}

{% step %}
### Lägg till DNS-poster

Den nya domänen visas i listan med statusen Pending. Klicka på **Authenticate** vid domänen för att öppna dialogen Authenticate Domain. Den listar de DNS-poster som ska läggas till: DKIM och SPF (obligatoriska), DMARC och MAIL FROM. Lägg till dem i din DNS. Om du inte har åtkomst till företagets DNS — ofta är det IT-avdelningen som äger den — klickar du på **Click here to generate an email** längst ned i dialogen för att skicka posterna till ansvarig person.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/authorize-email-domain-domain-authenticate-records.png" alt="Dialogen Authenticate Domain med DNS-posterna DKIM, SPF, DMARC och MAIL FROM"></div>

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/Ska_CC_88rmavbild-2019-12-11-kl.-14.30.42.png" alt="länk för att skicka DNS-poster till IT-avdelningen"></div>
{% endstep %}

{% step %}
### Klicka på Authenticate

När posterna är på plats öppnar du domänens dialog Authenticate Domain igen och klickar på **Authenticate**.
{% endstep %}

{% step %}
### Bekräfta autentiseringen

Om posterna är korrekta ändras domänens status till Authenticated. Om något är fel markeras posten som misslyckas med ett rött kryss i kolumnen Status. Om eMarketeer inte kan verifiera posterna inom 72 timmar visas domänen som Failed: klicka på **Restart Validation** för att försöka igen.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/authorize-email-domain-domain-authenticate-failing.png" alt="Dialogen Authenticate Domain med röda kryss vid DKIM- och SPF-posterna som misslyckas"></div>

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/authorize-email-domain-email-domains-list.png" alt="Listan Email Domains med domäner markerade Authenticated, Pending och Failed"></div>
{% endstep %}
{% endstepper %}

DNS-ändringar sprids oftast snabbt, men räkna med upp till 48 timmar.

När domänen är autentiserad kan du skicka från eMarketeer med din domän som From-adress med bästa möjliga leveransbarhet. Du kan upprepa processen för så många domäner du behöver. Om du har frågor mejlar du [support@emarketeer.com](mailto:support@emarketeer.com).
