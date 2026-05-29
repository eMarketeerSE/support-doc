# Dynamics - Add Contact to Marketing List

Steget Add Contact to Marketing List lägger automatiskt till en person i en specifik Marketing List i din Microsoft Dynamics CRM. Denna åtgärd riktar sig specifikt mot **Contact**-poster.

<div data-with-frame="true" align="left"><img src="../../../assets/dynamics-add-contact-to-marketing-list/Add_contact_to_marketing_list-1024x406.png" alt="Konfiguration av steget Add Contact to Marketing List i Dynamics"></div>

### Stegkonfiguration

När du lägger till detta steg i en Journey behöver du bara konfigurera ett fält:

- **Marketing List (obligatoriskt):** Välj den Dynamics Marketing List från rullgardinsmenyn där du vill lägga till Contacten.

### Strikt Contact-matchning

Eftersom detta steg är utformat specifikt för Contacts använder eMarketeer en strikt sökprocess:

- eMarketeer söker i Dynamics uteslutande efter en matchande Contact.
- Om en Contact hittas läggs den till i den valda Marketing List.
- **Om ingen Contact hittas:** Steget hoppas över och personen läggs inte till i listan. eMarketeer försöker **inte** att hitta eller lägga till en Lead-post.
