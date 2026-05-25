# Åtgärder som utförs vid uppsättning av SuperOffice-integrationen

När du integrerar eMarketeer med SuperOffice läggs flera objekt till i SuperOffice automatiskt, så att eMarketeer-funktioner syns inne i SuperOffice-klienten.

På SuperOffice 7.3 och nyare körs dessa åtgärder automatiskt. På äldre versioner måste de utföras manuellt.

Följande objekt läggs till:

- Webbpaneler
- Fält
- Typer
- Källor
- Projekt

## Databasfält

eMarketeer skapar nya databasfält i SuperOffice för att berika Sale och Activity som genereras av eMarketeer med extra information.

De skapade fälten hittar du i SuperOffice Admin i avsnittet "Fält" under flikarna "Sales" och "Follow-up".

Två fält som heter "eMarketeer:1" och "eMarketeer:2" skapas under "Sales" och "Follow-up" (4 fält totalt).

Alla fält skapas som "lång text" med längd 195.

## Webbpaneler

Dessa objekt finns i SuperOffice Admin under "Lists" → fliken "Items" → "GUI Web panel". Panelerna hämtar information från eMarketeer.

Lead Report
Namn: Lead Report
URL: https://app.emarketeer.com/ext/services/leadreport/?emid=YOUR-EMID
Window Name: Event Details
Visible in: Panel → Web Panel
Show: avmarkera allt
Available: markera allt

Sales info
Namn: eMarketeer detailed sales info.
URL: https://app.emarketeer.com/ext/services/so\_index.php?f=<ss45>&e=<ss46>
Window Name: t.ex. Sale Event Details
Visible in: Panel → Sales card
Show: avmarkera allt
Available: markera allt

Activity info (Follow-up)
Namn: eMarketeer detailed info.
URL: https://app.emarketeer.com/ext/services/so\_index.php?f=<ts45>&e=<ts46>
Window Name: t.ex. Event Details
Visible in: Dialog → Dialog for follow-ups
Show: avmarkera allt
Available: markera allt

Timeline Report
Namn: Timeline Report
URL: [url from eMarketeer] (Ersätt e-postadressen med SO-variabeln <amai>)
Window Name: t.ex. Timeline Report
Visible in: Panel → Contact Dialog (endast SuperOffice 7.5 och senare. För tidigare versioner, välj Navigator Panel.)
Show: avmarkera allt
Available: markera allt

## Follow-up-typer

Dessa typer skapas för att användas av Activity som genereras av eMarketeer:

- Web visit feed
- Email feed
- SMS/Text feed
- Form feed
- Landing page feed

## Sale-källa

En ny Sale-källa skapas som heter "eMarketeer".

## Projekt

Ett nytt projekt skapas som heter "Web Visits" och lagrar alla kontakter som besöker din webbplats.

## Felsökning

När fälten och panelerna har skapats är det inte säkert att de fungerar direkt. För att säkerställa att allt fungerar:

- Töm SuperOffice-cachen (flush) så att panelerna syns i klienterna direkt.
- Kontrollera att de skapade fälten är publicerade.

## Avinstallera eMarketeer

eMarketeer tar inte bort paneler eller fält när du inaktiverar integrationen. Du måste ta bort dem manuellt.
