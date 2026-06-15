---
description: >-
  Vanliga fel när du sätter upp SuperOffice-integrationen, och hur du löser dem.
---

# Felsökning av SuperOffice-integrationsuppsättning

## När integrationen inte slutförs

- **SuperOffice-användaren som används för integrationen har inte en "Sales"- eller "Complete"-licens, eller saknar åtkomst till denna modul.** En "Sales"- eller "Complete"-version av SuperOffice krävs för integrationen.
- **Integrationen misslyckas med ett fel som rör paneler.** Logga in i SuperOffice admin och kontrollera webbpanelerna. Säkerställ att du inte har "borttagna" paneler med samma URL som de eMarketeer försöker skapa. När du tar bort en webbpanel i SuperOffice raderas den inte i praktiken, utan döljs bara. Klicka i kryssrutan för att visa borttagna paneler. Om du hittar dubbletter, redigera dem så att de använder icke-eMarketeer-URL:er och byt panelens namn. Kör sedan integrationen igen.
- **Fält och paneler som skapas av integrationen kanske inte fungerar omedelbart.** För att säkerställa att allt fungerar:
  - Flusha SuperOffice så att panelerna visas i klienterna omedelbart. Se instruktionerna nedan.
  - Säkerställ att de skapade fälten är publicerade och tillgängliga för de användargrupper du vill.

## Flusha cachen i SuperOffice

Om du förväntar dig att se ändringar i SuperOffice, till exempel nya webbpaneler, och de inte dyker upp, kan du behöva flusha cachen.

Så här flushar du cachen från din webbläsare:

1. Logga in i SuperOffice CRM i din webbläsare.
2. I URL:en, ta bort allt efter `?` och skriv `flush`. Tryck sedan på Enter.

Exempel: `https://online.superoffice.com/custXXXX/default.aspx?flush`
