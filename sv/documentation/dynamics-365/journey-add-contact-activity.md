# Dynamics - Add contact activity

Steget Add Contact Activity skapar en Task eller ett Phone Call på en Contact-post i ditt Microsoft Dynamics CRM.

Till skillnad från det generiska Add Activity-steget faller denna åtgärd inte tillbaka till en Lead när en Contact saknas. Använd det när aktiviteten måste vara kopplad till en Dynamics Contact specifikt.

[<div data-with-frame="true"><img src="../../../assets/journey-add-contact-activity/add_contact_activity-1024x912.png" alt="Journey-stegkonfiguration för Add Contact Activity"></div>](https://support.emarketeer.com/wp-content/uploads/2026/02/add_contact_activity.png)

## Stegkonfiguration

När du lägger till detta steg i din journey konfigurerar du följande fält:

- Subject (obligatoriskt): aktivitetens titel i Dynamics.
- Description: ytterligare detaljer eller anteckningar för personen som utför uppgiften.
- Activity Type: logga aktiviteten som en Task eller ett Phone Call.
- Owner (obligatoriskt): den Dynamics-användare som tilldelas aktiviteten.
- Schedule: ange valfritt en fördröjning för aktiviteten (till exempel "Schedule to start in 2 days").

## Strikt matchning av Contact

Eftersom detta steg är utformat för Contacts använder eMarketeer en strikt sökning:

- eMarketeer söker i Dynamics enbart efter en matchande Contact.
- Om en Contact hittas skapas aktiviteten och kopplas till den Contacten.
- Om ingen Contact hittas hoppas steget över och ingen aktivitet skapas. eMarketeer försöker inte hitta eller uppdatera en Lead.
