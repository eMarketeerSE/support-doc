---
description: >-
  En referens som listar de kontakthändelser som får eMarketeer att utvärdera om en Journeys startpunkt är uppfylld.
---

# Utlösande händelser för Journeys

En Journeys startpunkt utvärderas inte kontinuerligt. Den utvärderas bara när en specifik händelse inträffar för en kontakt. Den här sidan listar alla händelser som utlöser en utvärdering.

## Utlösande händelser

När någon av händelserna nedan inträffar för en kontakt kontrollerar eMarketeer om kontakten matchar en Journeys startpunkt och ska gå in i Journey.

### Engagemang

- Engagemang via e-post
- Engagemang via formulär
- Engagemang via SMS
- Engagemang via landningssida
- Engagemang via webbmonitor
- Engagemang via SuperOffice
- Engagemang via Facebook
- Engagemang via LinkedIn
- Engagemang via anpassade signaler

### Kontaktkort

- Uppdatering av kontaktkort
- Uppdatering av rättslig grund
- Tillagd i en kontaktlista

### Lead Board

- Ändring av lead-status

### Manuell utlösare

En Journey kan startas manuellt för en enskild kontakt från kontaktkortet, förutsatt att Journey har inställningen **Make Journey available on Contact card** aktiverad. Detta räknas som en utlösande händelse och tvingar Journey att starta för kontakten direkt.

Till skillnad från andra utlösande händelser behöver kontakten inte matcha Journeyns startpunktsfilter. Den manuella utlösaren kringgår filtret helt, så Journey startar oavsett om kontakten annars skulle ha kvalificerat sig.

Se [Gör Journey tillgänglig på kontaktkortet](creating-your-first-journey.md#gör-journey-tillgänglig-på-kontaktkortet) för hur du aktiverar det här.

## Så fungerar utvärderingen

eMarketeer utvärderar startpunkter bara när en utlösande händelse inträffar — inte enligt ett schema och inte när en Journey aktiveras. En kontakt som redan matchar startpunktens villkor när du aktiverar Journey går inte in i den förrän en utlösande händelse inträffar för dem.

## Exempel: startpunkt baserad på kontaktlista

Om din startpunkt filtrerar på en kontaktlista kommer kontakter som redan finns i listan när du aktiverar Journey inte att gå in direkt. eMarketeer väntar på att en utlösande händelse ska inträffa för varje kontakt individuellt. Det behöver inte vara "Tillagd i kontaktlista" — vilken händelse i listan ovan som helst fungerar.

För att kontakter ska komma in i Journey så snart som möjligt fyller du på listan efter att du har aktiverat Journey, inte innan.
