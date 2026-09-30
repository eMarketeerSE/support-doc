---
description: >-
  En genomgång av kampanjgränssnittet, med fokus på kampanjens flikar,
  komponentvyn, knappen Add Component och kortmenyn för komponenter.
---

# Kampanjgränssnittet förklarat

Den här artikeln beskriver kampanjgränssnittet, med fokus på vyn Components.

Överst på kampanjsidan finns kampanjens namn, beskrivning och taggar, följt av flikar för kampanjens olika vyer. Lägg till nya komponenter med **Add Component** i vyn Components.

Komponenter utgör innehållet i din kampanj. Det finns fyra komponenttyper: [Emails](../getting-started/basics-creating-email.md), [Forms](../getting-started/basics-creating-form-new.md), [SMS](../getting-started/basics-creating-sms.md) och [Landing pages](../developer-advanced/creating-first-webpage.md), plus en underkomponent, Mobile apps.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/campaign-interface-explained-campaign-components-view.png" alt="Kampanjsidan med fliken Components öppen och fyra komponentkort"></div>

## 1. Kampanjvyer

Under kampanjens namn och beskrivning ligger flera flikar. Varje flik är en separat vy av kampanjen:

* **Components** — Standardvyn. Organisera och visa kampanjens komponenter.
* **Contacts** — Listar kontakter som lagts till i kampanjen, antingen importerade direkt eller automatiskt tillagda genom interaktion. Antalet kontakter visas ovanför listan. [Läs mer](campaign-contacts.md).
* **Campaign Fields** — Definiera fält som är unika för kampanjen och som kan flätas in i komponentinnehåll som variabler. Att redigera ett fältvärde ersätter variabeln i varje komponent som använder det. [Läs mer om kampanjfält](how-to-use-campaign-fields-in-emarketeer.md).
* **Automation** — Lägg till automatiserade åtgärder i kampanjen. Automationer triggas av att en kontakt interagerar med en komponent, så kampanjen måste innehålla minst en komponent.
* **Event History** — Visar händelser för utskickade e-post eller SMS. Granska när en komponent skickades, samt granska eller avbryt kommande schemalagda utskick.
* **Dashboard** — Bygg kampanjspecifika rapporter med rapportwidgets. Se [campaign reports](../reports/how-to-use-emarketeer-campaign-reports.md).

## 2. Vyspecifikt område

Området under flikarna visar gränssnittet för den aktiva vyn. Skärmbilden ovan visar vyn Components.

Klicka på **Add Component** för att lägga till e-post, formulär, SMS, landningssida eller mobilapp i kampanjen.

## 3. Vyn Components

I vyn Components visas komponenter antingen som kort eller som en lista. Växla mellan dem med ikonerna Grid view och List view uppe till höger. Den här guiden använder standardvyn Grid view.

Använd sorteringsmenyn bredvid vyikonerna för att ordna komponenterna efter Custom order, Newest, Name A–Z eller Most results. Med Custom order vald kan du ordna om korten med drag och släpp. Dubbelklicka på ett korts miniatyr för att öppna komponenteditorn.

Längst ned på varje kort visas komponentens resultatantal (till exempel Sent eller Answers) och ikoner för komponentens huvudsektioner:

* **Edit** (penna) — Öppnar komponenteditorn där du ändrar komponentens innehåll.
* **Send** (pappersflygplan) — Öppnar sidan Send options. Skicka eller schemalägg en komponent. Tillgängligt endast för e-post och SMS.
* **Publish** (jordglob) — Öppnar sidan Publish options. Visar komponentens direkt-URL och andra publiceringsalternativ. Tillgängligt endast för formulär och landningssidor.
* **Reports** (urklipp) — Öppnar komponentrapporten. Varje komponenttyp har sin egen rapport med olika mätvärden.

Ikonen uppe till vänster på kortet visar komponenttypen. Ikonen med tre punkter uppe till höger öppnar menyn More actions.

### Menyn More actions

Den här menyn upprepar Edit, Send eller Publish och Reports, och lägger till Shared Reports. För formulär finns även Open/Close Form. Menyn ger också alternativ för att hantera komponenten:

* **Change name** — Byter namn på komponenten. Namnet är endast synligt för eMarketeer-användare, inte för kontakter.
* **Copy** — Skapar en kopia i kampanjen med namnet "Copy of \[komponentnamn]". Kopian har en ren rapport men är i övrigt identisk med originalet.
* **Move** — Flyttar komponenten till en annan kampanj. En komponent kan inte finnas utanför en kampanj, så du flyttar den till en annan kampanj, aldrig till en mapp. Interna länkar till komponenter i ursprungskampanjen kan sluta fungera i den nya.
* **Create Template** — Skapar en kopia av komponenten som en mall, tillgänglig under My Templates när du lägger till en ny komponent. My Templates listar alla sparade mallar på ditt konto.
* **Delete** — Tar bort komponenten från kampanjen. När en komponent tas bort försvinner dess rapport och kopplad statistik. Kontaktinteraktioner med komponenten tas bort från kontaktens Engagement-tidslinje.
