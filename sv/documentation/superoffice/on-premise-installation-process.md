---
description: >-
  Krav och övergripande steg för att integrera en on-premise-installation av
  SuperOffice med eMarketeer.
---

# On premise: installationsprocess

## Krav

För att integrera en on-premise-installation av SuperOffice behöver du följande:

- En SuperOffice-installation version 7.5 eller nyare.
- En SuperOffice-användare dedikerad till integrationen.
- NetServer som körs på Internet Information Services (IIS).
- NetServer exponerad mot eMarketeer över internet.

## Åtgärder som utförs vid uppsättning

När eMarketeer har åtkomst till SuperOffice och integrationen är aktiverad installerar eMarketeer nya objekt i SuperOffice, till exempel webbpaneler, fält och typer. [Läs mer om dessa åtgärder](actions-performed-during-set-up.md).

## Starta integrationen

Det huvudsakliga manuella steget är att göra NetServer åtkomlig för eMarketeer. Beroende på vilken säkerhetslösning du har valt innebär detta vanligen att öppna brandväggsregler för kommunikationen mellan eMarketeer och NetServer.
