---
description: >-
  Hur du skickar svar till ett eMarketeer-formulär programmatiskt från din egen
  webbplats eller ett externt system.
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
    visible: true
  actions:
    visible: true
tags:
  - legacy
---

# Posta data till ett formulär

{% hint style="warning" %}
Den här artikeln gäller **Formulär (Legacy)**. För den nuvarande formuläreditorn, se [Formulär](./).
{% endhint %}

Den här guiden visar hur du postar svar till ett eMarketeer-formulär från din egen webbplats eller från ett annat system.

Den hostade versionen av ett formulär täcker många fall, men ibland behöver du bädda in formuläret på din webbplats eller trigga automationer från ett annat system. Ett formulär är ett flexibelt mål för att posta data utanför eMarketeer.

## Innan du börjar

Du måste alltid skapa formuläret i eMarketeer först. Formuläret definierar vilka frågor du vill ha svar på. När det väl finns kan du posta svar till det på flera sätt:

* Hämta den direkta URL:en och låt besökare svara på det hostade formuläret (täcks inte här).
* Lägg in det hostade formuläret som iframe på din webbplats (täcks inte här).
* Lägg HTML-koden för formuläret på din webbplats.
* Använd ett skript för att posta data till formuläret programmatiskt.

Varje formulär har två viktiga egenskaper:

* En URL att posta datan till.
* Inmatningsfält med ett namn och ett värde.

Om du POST:ar (eller GET:ar) svaren till den URL:en med rätt name/value-par sparas dina svar i eMarketeer.

## 1. Skapa formuläret

Skapa ett formulär i eMarketeer med en kontaktregistrering och eventuella andra frågor du behöver.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/how-to-post-data-to-a-form-form-editor-sample.png" alt="Ett nyhetsbrevsformulär med fälten för förnamn, efternamn och e-post i formuläreditorn."></div>

## 2. Hämta HTML-koden för formuläret

Öppna menyn **Edit Form** högst upp i formuläreditorn och klicka på **Publish Form...**.

Sidan Publish Form öppnas. Scrolla till **Website Integration**.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/how-to-post-data-to-a-form-publish-website-integration.png" alt="Sidan Publish Form med en pil som pekar på rubriken Website Integration."></div>

Klicka på **Get Code** under **FORM** för att visa formulärkoden. Om reCAPTCHA är aktivt på ditt konto anger du först domänen för din webbplats i fältet bredvid knappen.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/how-to-post-data-to-a-form-publish-form-domain-get-code.png" alt="Sektionen FORM med domänfältet markerat och en pil som pekar på knappen Get Code."></div>

Formulärkoden visas under knappen.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/how-to-post-data-to-a-form-publish-form-generated-code.png" alt="Den genererade formulärkoden med post-URL:en och det dolda fältet m överst."></div>

Du kan klistra in den här koden direkt på din webbplats. Den postar svaren till eMarketeer och visar sedan tacksidan.

Du kan styla om och ändra ordningen på koden hur mycket du vill — så länge du behåller action-URL:en och inmatningsnamnen intakta. Det finns också ett dolt inmatningsfält som heter "m" med ett värde som identifierar vilket formulär som ska postas till. Behåll det.

## cURL och andra metoder för att posta

När du har URL:en och inmatningsfälten fungerar varje metod som postar till den URL:en. I stället för att använda en webbläsare kan du använda cURL eller ett liknande verktyg för att posta programmatiskt. Behåll inmatningsnamnen intakta. GET är också giltigt — skicka parametrarna i query-strängen.

## Egen tacksida

Om du bäddar in formuläret på din webbplats kanske du vill skicka besökare till din egen tacksida i stället för den eMarketeer-hostade. För att ändra omdirigeringen redigerar du formuläret i eMarketeer och klickar på **Thank You Page** under **System Pages** i menyn till vänster. Välj **Use Custom URL**, ange URL:en att omdirigera till och klicka på **Update**.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/how-to-post-data-to-a-form-thank-you-page-custom-url.png" alt="Inställningarna för Thank You Page med Use Custom URL valt och en webbadress ifylld."></div>
