---
description: >-
  Read on web skapar en personlig länk i webbläsaren för varje e-postmottagare.
  Använd den för att låta kontakter visa e-posten online — ibland kallad
  "visa i webbläsare"-länk.
---

# Read on web

Read on web är en personlig URL som öppnar en kontakts version av e-postmeddelandet i en webbläsare. Du infogar den vanligtvis som en textlänk nära toppen av e-posten, och varje mottagare får sin egen unika adress.

## Så här fungerar det

URL:en genereras per mottagare och per e-postkomponent. Den visar alltid den senaste versionen av den specifika kontaktens e-post — inklusive allt personaliserat innehåll och kontaktens egen avregistreringslänk.

Om samma kontakt tar emot e-posten mer än en gång ändras inte deras read on web-URL. Den fortsätter att peka på den senaste versionen av deras e-post.

Länken förblir giltig så länge:

* kontakten finns i kontaktdatabasen,
* kontaktens data fortfarande finns i komponentrapporten, och
* e-postkomponenten inte har raderats.

Om du tar bort kontakten från eMarketeer eller raderar e-postkomponenten slutar länken att fungera.

## URL-struktur

Read on web-URL:en använder två merge tags:

```
<% user field="url" %>a/plink/row/<% scramble %>.html
```

* `<% user field="url" %>` — bas-URL:en för eMarketeer-hostat innehåll. Det är kontots anpassade domän, eller `https://app.emarketeer.com/` om ingen anpassad domän är konfigurerad.
* `<% scramble %>` — en unik token som identifierar både mottagaren och e-postkomponenten.

Du behöver inte konstruera den här URL:en manuellt. Använd dialogrutan Insert Link för att lägga till den.

## Så här infogar du en read on web-länk

{% hint style="info" %}
Många innehållsblock innehåller en read on web-länk som standard. Header-block i synnerhet har vanligtvis en redan infogad — kontrollera innan du lägger till en ny manuellt.
{% endhint %}

1. Markera den text du vill länka i e-posteditorn.
2. Öppna **Insert Link**.
3. Välj **System link → Read on web**.

eMarketeer infogar hela URL-mallen. Merge tags löses upp till mottagarens personliga länk när e-posten skickas.

## Dela eller arkivera ett e-postmeddelande online

Eftersom varje read on web-URL är en live-sida som är offentligt tillgänglig används den ibland kreativt som ett sätt att länka till ett e-postmeddelande utanför utskicket — till exempel genom att publicera länken på en webbplats, referera till den i dokumentation eller för att hålla ett arkiv över tidigare utskick.

Det här är inte ett inbyggt verktyg för delning. Tänk på att sidan visar den personaliserade versionen för den specifika kontakten, inklusive deras avregistreringslänk, och att sidan slutar fungera om kontakten eller e-postkomponenten tas bort.
