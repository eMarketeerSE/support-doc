---
description: Hur du ansluter din webbplats till eMarketeer med Web Tracker och formulärbasscriptet.
---

# Webbplatsintegrering

Anslut din webbplats till eMarketeer för att spåra besökares beteende och aktivera formulär på valfri sida.

eMarketeer tillhandahåller två script för webbplatsintegrering. Installera båda för att få den fullständiga bilden: vilka sidor en kontakt besöker och vilka formulär de fyller i.

## Web Tracker

Web Tracker registrerar sidbesök på din webbplats. När en besökare identifieras — genom att klicka på en länk i ett e-post eller skicka in ett formulär — visas deras sidbesök på kontaktens tidslinje i eMarketeer.

Spåraren fyller också Marknadsföringsresultat med sessionsdata, trafikkällor och UTM-attribution.

Se [Installera Web Tracker-scriptet på din webbplats](../../documentation/web-tracker/installing-the-web-tracker-script-on-your-website.md) för installationsinstruktioner.

## Formulärbasscript

Formulärbasscriptet måste finnas på varje sida där du vill bädda in ett eMarketeer-formulär. Utan det laddas inte formulär.

Lägg till följande kodstycke en gång på din webbplats — i `<head>`-elementet eller via en tag manager:

```html
<script type="application/javascript" src="https://app.emarketeer.com/public/scripts/forms.js"></script>
```

Scriptet samlar inte in några data på egen hand. Det aktiverar bara formulär så att de kan visas på sidan.

## Hur de fungerar tillsammans

När båda scripten är installerade identifieras kontakten när de skickar in ett formulär. eMarketeer kopplar sedan den kontakten till alla sidbesök som registrerats sedan samtycke gavs — inklusive besök som gjordes innan formuläret skickades in.
