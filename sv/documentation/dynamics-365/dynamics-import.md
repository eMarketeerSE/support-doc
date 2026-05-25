# Dynamics - Import

Importera kontakter direkt från dina Marketing Lists i Microsoft Dynamics 365 Sales. Du kan göra detta som en fristående import för att bygga upp din eMarketeer-databas, eller direkt innan du skickar en kampanj.

## Integrationens omfattning

- **Stödda listor:** integrationen stödjer för närvarande import från Contact Marketing Lists i Dynamics 365 Sales. Import från Lead Marketing Lists planeras till en framtida uppdatering.
- **Importerade fält:** eMarketeer importerar följande grundläggande fält från Dynamics:
  - First Name
  - Last Name
  - Email Address
  - Company Name
  - Mobile Phone Number

## Metod 1: standardimport

Använd denna metod för att hämta in ett Dynamics-segment till eMarketeer för allmän databasuppbyggnad eller för att gruppera kontakter i en specifik eMarketeer-lista.

1. I eMarketeer, gå till sektionen **Contacts**.
2. Klicka på **Import contacts**.
3. Välj **Microsoft Dynamics** som importkälla.
4. I sökrutan, börja skriva namnet på den Dynamics Marketing List du vill importera.
5. Välj rätt lista från rullgardinsmenyn med matchande resultat.
6. Valfritt: välj om de importerade kontakterna ska läggas till i en specifik eMarketeer-kontaktlista.
7. Klicka på **Import** för att hämta in kontakterna till eMarketeer.

## Metod 2: importera direkt när du skickar ett e-postmeddelande

Detta är den snabbaste metoden. Den låter dig importera ett Dynamics-segment och skicka en kampanj i ett steg, utan att skapa en fristående eMarketeer-kontaktlista.

1. När du konfigurerar ett utskick i eMarketeer-gränssnittet, välj alternativet att välja mottagare.
2. Välj alternativet att importera från **Microsoft Dynamics**.
3. Sök efter och välj din Dynamics Marketing List, på samma sätt som vid standardimporten.
4. eMarketeer importerar kontakterna och köar kampanjen för att skickas till det segmentet omedelbart.
