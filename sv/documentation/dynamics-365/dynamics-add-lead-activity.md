# Dynamics - Add Lead activity

Steget **Add Lead Activity** skapar en Task eller ett Phone Call på en Lead-post i Microsoft Dynamics 365 Sales. Till skillnad från det generiska steget Add Activity faller detta inte tillbaka till en Contact om ingen Lead hittas.

<div data-with-frame="true"><img src="../../../assets/dynamics-add-lead-activity/add_lead_activity-1024x907.png" alt="Konfiguration av steget Add Lead Activity i Dynamics"></div>

## Stegkonfiguration

När du lägger till detta steg i en Journey, konfigurera följande fält:

- **Subject (obligatoriskt):** titeln på aktiviteten i Dynamics, till exempel "Follow-up Call" eller "Send Pricing Guide".
- **Description:** ytterligare detaljer eller anteckningar för personen som ska utföra uppgiften.
- **Activity Type:** logga aktiviteten antingen som en Task eller ett Phone Call.
- **Owner (obligatoriskt):** den Dynamics-användare som tilldelas aktiviteten.
- **Schedule:** en valfri fördröjning innan aktiviteten startar, till exempel "Schedule to start in 2 days".

## Strikt Lead-matchning

Eftersom detta steg är utformat för Leads använder eMarketeer en strikt sökprocess:

- eMarketeer söker i Dynamics uteslutande efter en matchande Lead.
- Om en Lead hittas skapas aktiviteten och kopplas till den Lead-posten.
- Om ingen Lead hittas hoppas steget över och ingen aktivitet skapas. eMarketeer försöker inte att hitta eller uppdatera en Contact-post.
