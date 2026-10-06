---
icon: circle-question
description: >-
  Korta svar på vanliga frågor om eMarketeer, bland annat om funktioner som
  eMarketeer inte har och vad du kan göra i stället.
---

# Vanliga frågor och felsökning

Korta svar på vanliga frågor, med länkar till de fullständiga guiderna. Klicka på en fråga för att se svaret.

## Kontakter

<details>

<summary>Tar eMarketeer bort kontakter automatiskt?</summary>

Nej. eMarketeer tar aldrig bort kontakter på egen hand, och inget Journey-steg eller någon automatisering kan ta bort dem. En kontakt tas bara bort när en användare tar bort den, till exempel med [verktyget för massåtgärder](knowledge-base/contacts-lists/bulk-actions-tool.md), eller när en integration som din organisation har byggt tar bort den via [eMarketeers API](documentation/apis-developer/api-endpoints-overview.md). Borttagna kontakter kan inte återställas inifrån eMarketeer. Kontakta supporten om du har tagit bort kontakter av misstag.

Om en kontakt verkar saknas finns den oftast kvar, men inte där du letar:

* Sök efter kontaktens e-postadress under **Contacts**.
* Kontrollera om kontakten har tagits bort från en kontaktlista, till exempel av ett [Contact List](documentation/journeys/journey-step-contact-list.md)-steg i en Journey eller av en massåtgärd. Att ta bort en kontakt från en lista tar inte bort själva kontakten.
* Om du letar i ett kontaktfilter, kontrollera om kontakten fortfarande matchar filtrets villkor.

Om kontakten finns men inte fick ditt e-postmeddelande, se [Identifiera varför ett e-postmeddelande inte togs emot](knowledge-base/email-deliverability/identify-email-not-recieved.md).

</details>

<details>

<summary>Kan jag hitta kontakter med en ogiltig e-postadress?</summary>

Nej. Det finns inget filter för kontakter med en [ogiltig e-postadress](glossary.md#ogiltig-e-postadress). Exportera dina kontakter och kontrollera adresserna i ett externt verktyg, till exempel ett kalkylark, för att hitta dem.

</details>

## Leads

<details>

<summary>Kan jag lägga till en kontakt på Lead Board manuellt?</summary>

Ja. Öppna kontaktkortet, gå till fliken **Lead** och gör kontakten till en lead. Du väljer vilken leadström leaden ska läggas till i. Se [Lead Board](knowledge-base/lead-board-scoring/the-lead-board.md).

</details>

<details>

<summary>Kan jag flytta en lead till ett annat säljteams Lead Board?</summary>

Inte direkt. En Lead Board visar leads från de [leadströmmar](knowledge-base/lead-board-scoring/lead-streams.md) som levererar till dess säljteam. Byt leadström i stället för att skicka en lead till ett annat team.

Ett exempel: en kontakt fyller i ditt engelska formulär och matchar en leadström för ditt engelska säljteam, men kontakten är tydligt fransk. Ta bort leaden från dess nuvarande leadström på fliken **Lead** på kontaktkortet. Lägg sedan till kontakten i den leadström som levererar till ditt franska säljteam. Leaden visas då på det teamets Lead Board.

</details>

## Journeys

<details>

<summary>Kan jag testa en Journey?</summary>

Nej. Journey-byggaren har inget testläge. Om du vill prova en Journey på en enskild kontakt slår du på **Make Journey available on Contact Card** i [Journey-inställningarna](documentation/journeys/creating-your-first-journey.md#gör-journey-tillgänglig-på-kontaktkortet). Då kan du starta din Journey för en kontakt från kontaktkortet, utan att kontakten behöver matcha villkoren för startpunkten.

Stegen körs på riktigt, så använd en testkontakt med din egen e-postadress.

</details>

## E-post

<details>

<summary>Hur ställer jag in höjden på en bild i ett e-postmeddelande?</summary>

Det går inte att ställa in direkt. Varje bildblock i e-postredigeraren visar en rekommenderad bredd, och höjden följer av den bredden och bildens proportioner. Beskär bildens sidor om du vill göra den högre, så att bilden får de proportioner du vill ha vid den rekommenderade bredden. Se [Ladda upp en bild](knowledge-base/getting-started/basics-creating-email.md#ladda-upp-en-bild).

</details>

<details>

<summary>Kan jag bifoga en fil i ett e-postmeddelande?</summary>

Nej. eMarketeer stöder inte bilagor i e-post. Ladda i stället upp filen under **Files** i eMarketeer och länka till den från e-postmeddelandet med alternativet **Link to file** i länkmenyn. Se [Lägg till en knapp med en länk](knowledge-base/getting-started/basics-creating-email.md#lägg-till-en-knapp-med-en-länk).

</details>
