# Dynamics - Create/Update Lead

Steget Create/Update Lead skickar kontakter från eMarketeer till din Microsoft Dynamics CRM som Leads. Det har inbyggd logik för att uppdatera befintliga poster och förhindra dubbletter.

<div data-with-frame="true"><img src="../../../assets/create-update-lead/create-update-lead-1024x695.png" alt="Konfiguration av steget Create/Update Lead med kryssrutan Always create a lead"></div>

### Stegkonfiguration

När du lägger till detta steg i en Journey, konfigurera följande fält:

- **Subject (obligatoriskt):** Sätter huvudtiteln för Lead-posten i Dynamics (till exempel "Webinar Attendee" eller "Contact Us Form").
- **Description:** Skickar ytterligare anteckningar, kampanjdetaljer eller kontext till ditt säljteam.

### Inställningen "Always create a lead"

Denna kryssruta styr hur eMarketeer söker i din CRM och hanterar befintliga poster.

**Om omarkerad (standard)**

Detta alternativ skyddar din CRM från att skapa Leads för personer som redan har avancerat i din säljcykel.

- eMarketeer kontrollerar först Dynamics för att se om personen redan finns som Contact.
- **Om de är en Contact:** Steget avbryts helt. Ingen Lead skapas.
- **Om de inte är en Contact:** eMarketeer uppdaterar en befintlig Lead. Om ingen Lead hittas skapas en ny.

**Om markerad**

Detta alternativ tvingar steget att bearbeta Leaden, oavsett om personen redan finns som Contact i din CRM.

- eMarketeer hoppar över den inledande Contact-kontrollen och försöker uppdatera en befintlig Lead.
- Om ingen befintlig Lead hittas skapas en ny Lead.
- **Smart linking:** Om en ny Lead skapas _och_ personen redan finns som Contact i Dynamics, länkar eMarketeer automatiskt den nya Leaden till deras befintliga Contact- och Account-poster.
