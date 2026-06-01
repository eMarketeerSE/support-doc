# On premise: NetServer-URL och användarkonto

Den här artikeln går igenom förutsättningarna för SuperOffice on-premise-integrationen: att exponera NetServer för eMarketeer, hitta rätt WSDL-URL och skapa en användare för integrationen.

## Krav

För att integrationen ska fungera måste följande gälla:

* NetServer är installerad på din server och nåbar från eMarketeer över HTTP (port 80, 8080 eller 443).
* Den exponerade NetServer-versionen är `/services84`.
* Det finns en SuperOffice-användare för integrationen, antingen en licensierad användare med Sales- eller Complete-licens eller en "Other user".
* SuperOffice REST API tillåter operationerna GET, POST, PATCH och DELETE.

## REST- och SOAP-API

Integrationen bygger på SuperOffice REST API. Endpointen `/services84` måste fortfarande vara tillgänglig eftersom den används för autentisering.

## Ge eMarketeer åtkomst till din server

Om din NetServer inte är publikt exponerad måste du säkerställa att eMarketeer kan nå den. Säkerhetsåtgärder innebär vanligen att begränsa åtkomst via brandvägg.

### Brandvägg

All trafik kommer från en enda eMarketeer-server, så du kan sätta brandväggsregler därefter.

| IP-adress     | Värdnamn | Portar        |
| ------------- | -------- | ------------- |
| 54.155.30.167 | n/a      | 80, 8080, 443 |

IP-adressen svarar inte på ping.

## Hämta WSDL-URL från IIS

eMarketeer behöver en URL som pekar mot katalogen där NetServers webbtjänstfunktioner finns. För att hitta den:

1. Öppna IIS på din server.
2. Öppna trädet **Sites** i vänsterpanelen och leta upp den webbplats som innehåller din NetServer.
3. Bland underkatalogerna, hitta en som heter **Services84** (det exakta namnet beror på version).
4. Katalogen innehåller `.svc`-filer. Klicka på **Content view** för att bekräfta.
5. Högerklicka på **Contact.svc** och välj **Browse** för att öppna den i din webbläsare.
6. Webbläsaren visar den fullständiga sökvägen till katalogen.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/IIS.png" alt="IIS NetServer-tjänstekatalog"></div>

Sökvägen (exklusive filnamnet) är den WSDL-URL du ska använda i eMarketeer.

Exempel: `https://www.yourcompany.se/SuperOffice/Remote/Services84/`

Om domänen i din URL är `localhost` ska du ersätta den med rätt publikt domännamn.

Spara denna URL till nästa steg.

## Skapa integrationsanvändaren

eMarketeer behöver logga in på NetServer som en SuperOffice-användare. Du har två alternativ:

* Skapa en "Other"-användare.
* Använda en licensierad användare.

Det rekommenderade alternativet är en "Other"-användare eftersom den inte förbrukar någon användarlicens. Observera att "Other"-användare endast kan skapas från desktop-administratören, inte från webb-administratören.

För att skapa en "Other"-användare, öppna SuperOffice Admin och gå till användarhantering. På fliken **Other**, skapa en ny användare med användarnamn och lösenord.

Du kan också använda en licensierad användare. Skapa en ny SuperOffice-användare (inte en Windows-användare) och sätt dess användarnivå till 0 (noll).

Spara användarnamnet och lösenordet.

## Vad du gör härnäst

Med URL:en och inloggningsuppgifterna klara kan du [aktivera integrationen](on-premise-enabling-the-integration.md).
