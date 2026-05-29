# Dynamics - Add Lead to Marketing List

Steget **Add Lead to Marketing List** lägger till en person i en specifik Marketing List i Microsoft Dynamics 365 Sales. Det riktar sig specifikt mot Lead-poster.

<div data-with-frame="true" align="left"><img src="../../../assets/dynamics-add-lead-to-marketing-list/add_lead_marketing_list-1024x407.png" alt="Konfiguration av steget Add Lead to Marketing List i Dynamics"></div>

## Stegkonfiguration

När du lägger till detta steg i en Journey behöver du bara konfigurera ett fält:

- **Marketing List (obligatoriskt):** välj den Dynamics Marketing List du vill lägga till Leaden i.

## Strikt Lead-matchning

Eftersom detta steg är utformat för Leads använder eMarketeer en strikt sökprocess:

- eMarketeer söker i Dynamics uteslutande efter en matchande Lead.
- Om en Lead hittas läggs den till i den valda Marketing List.
- Om ingen Lead hittas hoppas steget över och personen läggs inte till i listan. eMarketeer försöker inte att hitta eller lägga till en Contact-post.
