---
description: >-
  En steg-för-steg-guide för att skapa ett SMS i eMarketeer och förbereda det
  för utskick.
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
tags:
  - sms
---

# Skapa din första SMS

{% hint style="warning" %}
För att skapa ett nytt SMS måste du skapa en kampanj först.
{% endhint %}

Den här guiden tar dig genom hur du skapar en SMS i eMarketeer — för att lansera en app, informera om ett event eller någon annan användning.

Att skicka SMS är bara några få steg när meddelandet är uppsatt. När du är klar med guiden har du ett meddelande redo att skickas.

{% stepper %}
{% step %}
### Lägg till SMS:et från kampanjsidan

Klicka på **Add SMS** på kampanjsidan.

* Om du behöver skapa kampanjen först, se [Så här skapar du en ny kampanj](create-new-campaign.md).

<div data-with-frame="true" data-align="left"><img src="../../../assets/basics-creating-sms/cs1.png" alt="Knappen Add SMS på kampanjsidan"></div>
{% endstep %}

{% step %}
### Fyll i inställningar, välj en mall och skapa SMS:et

<div data-with-frame="true" data-align="left"><img src="../../../assets/basics-creating-sms/cs2.png" alt="SMS-inställningar med namnfält och mallval"></div>

**Inställningar**

* **Name your SMS:** Ge SMS:et ett unikt namn så att du hittar det senare. Beskriv syftet i kampanjen — till exempel "Inbjudan" för en eventinbjudan. Bara du ser namnet; det visas inte för dina kontakter.

**Mall**

Välj en mall från någon av flikarna som utgångspunkt. Den här guiden använder **Mobile App Delivery**. Egna mallar som sparats på ditt konto visas under **My Templates**.

**Skapa SMS-komponent**

När inställningar och mall är klara klickar du på **Create SMS** för att skapa komponenten.
{% endstep %}

{% step %}
### SMS-redigeraren

När du klickat på **Create SMS** öppnas redigeraren. Du ser en textruta där du redigerar meddelandet och ett Sender ID-alternativ nedanför.

Sender ID är namnet på avsändaren som visas på mottagarens telefon. Standard är `eMarketeer`. Du kan begära ett eget Sender ID — se [den här artikeln](../../../documentation/email-sms/sender-id.md).

Nedanför hittar du SMS-testfunktionen, som låter dig skicka SMS:et till dig själv för att se hur det ser ut när det kommer fram. Länkar i test-SMS fungerar inte — skicka SMS:et på vanligt sätt om du behöver testa länkar.

<div data-with-frame="true" data-align="left"><img src="../../../assets/basics-creating-sms/cs_edit_view.png" alt="SMS-redigeraren med meddelandefält, Sender ID och testskick"></div>
{% endstep %}

{% step %}
### Redigera SMS-innehållet

Redigera meddelandetexten i textrutan. Knapparna ovanför textrutan låter dig lägga till länkar och personaliserad text som mottagarens namn.

Länkar till andra eMarketeer-komponenter personaliseras per kontakt. Om du till exempel skickar en länk till en mobilappskomponent för ett event kan den innehålla en unik QR-kod eller bricka som kontakten använder för att identifiera sig på eventet.

Klicka på **Save Message** efter varje ändring för att spara ditt arbete.
{% endstep %}

{% step %}
### Skicka ditt SMS

Att skicka en SMS fungerar i stort sett som att skicka en e-post och har många av samma alternativ. Se [Så här skickar du en e-post](basics-send-email.md) för en fullständig genomgång.

Telefonnummer måste innehålla landskod och följa [standardformat](../../../documentation/email-sms/mobile-number-validation.md) innan du skickar. Till exempel: `+46701231231`.
{% endstep %}
{% endstepper %}
