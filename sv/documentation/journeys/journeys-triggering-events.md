---
description: >-
  En referens som listar de kontakthändelser som får eMarketeer att utvärdera om en Journeys startpunkt är uppfylld.
---

# Utlösande händelser för Journeys

Startpunkter i en Journey utvärderas endast när specifika händelser inträffar för en kontakt. Att veta vilka händelser som utlöser utvärderingen hjälper dig att starta en Journey vid rätt tillfälle.

## Händelser som utvärderar Journey-startpunkter

När någon av händelserna nedan inträffar för en kontakt kontrollerar eMarketeer om en Journey ska starta för den kontakten.

### All engagemang

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

## Vad det här betyder för startpunkter

För att en startpunkt ska utlösas omedelbart måste den antingen vara en av händelserna ovan eller kombineras med ett kriterium som baseras på någon av dessa händelser. Annars väntar din Journey tills någon av dessa händelser inträffar för kontakten, även om kontakten redan matchar Journey-villkoret.

## Exempel: en startpunkt baserad på kontaktlista

En vanlig missuppfattning: om du baserar en startpunkt på en kontaktlista kommer din Journey att starta för varje kontakt i listan när din Journey aktiveras.

Så är inte fallet. Eftersom ingen utlösande händelse har inträffat ligger din Journey vilande. Den väntar på att någon utlösande händelse ska inträffa för varje enskild kontakt i listan. Händelsen behöver inte vara "Tillagd i kontaktlista" – vilken händelse som helst som utvärderar startpunkter fungerar.

Resultatet blir att kontakter inte startar din Journey vid samma tidpunkt. För att undvika det fyller du på kontaktlistan först efter att din Journey har aktiverats.
