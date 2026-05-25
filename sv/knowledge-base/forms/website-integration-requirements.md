# Formulär: krav för webbintegration

Du kan bädda in ett eMarketeer-formulär på din egen webbplats genom att klistra in den genererade HTML-koden i sidans källkod. Den här artikeln listar miljökraven sidan måste uppfylla för att formuläret ska fungera.

HTML-koden som eMarketeer genererar är rensad från design och validering så att du kan tillämpa dina egna stilar och valideringsskript. Formuläret skickas in via JavaScript av två skäl:

1. Det är enkelt att lägga till din egen validering inuti den befintliga funktionen.
2. Spam-botar som fyller i formulär med skräp filtreras bort, eftersom de oftast inte kan köra JavaScript.

### Miljökrav

Klistra in koden i din webbplats källkod. Säkerställ att följande krav är uppfyllda.

#### Nästlade formulär

Säkerställ att inga andra `<form>`-taggar krockar med inbäddningen. Nästlade form-taggar fungerar inte.

#### Endast Unicode

Säkerställ att sidan använder en Unicode-teckenuppsättning. Detta gör att postad data lagras korrekt i eMarketeer oavsett inmatningsspråk. Du kan göra detta på några sätt.

#### På webbservernivå

Konfigurera webbservern att använda Unicode för alla sidor som standard.

#### På klientnivå

Säkerställ att HTML-koden på sidan innehåller den här meta-taggen:

```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
```

#### Serverskript

Om du använder serverskript, sätt teckenuppsättningen per sida.

PHP:

```php
<?php header('Content-Type: text/html; charset=utf-8'); ?>
```

ASP:

```asp
<% Response.charset="utf-8" %>
```
