# SuperOffice-automatiseringar (PRO)

Den här artikeln beskriver de SuperOffice-automatiseringar som finns i eMarketeer och hur de visas i leadrapporten.

Leadrapporten samlar kontakter som triggar SuperOffice-automatiseringar så att ditt säljteam kan agera på dem. Automatiseringarna i sig täcker försäljning, uppgifter, notifieringar, intressen, projekt och urval.

## Leadrapporter

Alla kontakter som triggar någon av följande automatiseringar läggs till i leadrapporten:

- Create Sale
- Create Task
- Create Notification
- Set/unset interest(s)

Om kontakten är känd för SuperOffice — den har ett External ID eller en matchande e-postadress — läggs den till i avsnittet "Assigned leads". Om kontakten är okänd för SuperOffice (inget External ID och ingen matchande e-postadress) läggs den till i avsnittet "Leads without owners".

Leadrapporten är åtkomlig inifrån SuperOffice — klicka på leads-knappen så öppnas en webbpanel. Om din leads-knapp och webbpanel saknas, [så här](../../documentation/superoffice/actions-performed-during-set-up.md) får du dem.

### Leads without owners

I den här rapporten väljer du vilket lead du vill importera till SuperOffice. Du kan lägga till den okända kontakten i ett befintligt företag, slå ihop den med ett befintligt företag eller skapa ett nytt företag och tilldela en ägare.

När kontakten har lagts till i SuperOffice flyttas den från Leads List till Assigned leads.

Om ett lead tas bort från någon av listorna tas kontakten bort från listan — inte från kampanjen, komponenten eller någon annan del av systemet.

Leads without owners stannar kvar i leadrapporten i 60 dagar, varefter de förfaller från listan. Leads och kontakter finns kvar i eMarketeer.

#### Mest intressanta lead just nu

Det lead som har högst ackumulerat försäljningsvärde har en egen plats i rapporten.

#### Aktuell ålder på leads

Visar ålder och aktivitetstyp på leads i rapporten. Detta ger en snabb överblick över säljteamets svarstid på leads. Klicka på aktivitetstyperna i diagrammets förklaring för att lyfta fram specifika typer i diagrammet.

#### Leads list

En lista över leads och information om vilken automatisering varje okänd kontakt triggade.

### Assigned leads

Den här listan visar automatiseringar för försäljning, uppgift och notifiering på kontakter som redan är kända i SuperOffice (matchade på kontakt-ID eller e-postadress). Assigned leads stannar kvar i listan i 60 dagar, varefter de förfaller. Leads och kontakter finns kvar i eMarketeer.

### Leads over time

Graferna och statistiken visar alla leads som skapats över tid och fördelningen av leadtyper sedan integrationen mellan SuperOffice och eMarketeer aktiverades.

## Automatiseringar

### Create new sale

Ett försäljningsobjekt skapas i SuperOffice och tilldelas personen. eMarketeer sätter egenskaperna source, rating och description. Du kan valfritt lägga till personen i ett urval eller projekt när försäljningen skapas.

Om den triggande kontakten är okänd för SuperOffice pausas automatiseringen och läggs till i leadrapporten.

### Create a task

Skapar en uppgift (aktivitet) i SuperOffice av en typ som du anger när du skapar automatiseringen. Du kan lägga till en beskrivning. Uppgifter markeras alltid som ej slutförda.

Om den triggande kontakten är okänd för SuperOffice pausas automatiseringen och läggs till i leadrapporten.

### Notify sales rep

Skapar en aktivitet i SuperOffice av en typ som du anger när du skapar automatiseringen. Du kan lägga till en beskrivning. Notify sales rep-aktiviteter markeras alltid som slutförda.

Om den triggande kontakten är okänd för SuperOffice pausas automatiseringen och läggs till i leadrapporten.

### Set interest

Markera de intressen du vill sätta. Om eMarketeer-kontakten har ett SuperOffice-ID ändras SuperOffice-intresset.

Om den triggande kontakten är okänd för SuperOffice pausas automatiseringen, men leadet visas inte i leadrapporten.

Kontakten måste trigga en Sale-, Task- eller Notification-automatisering innan du kan ta ägarskap över kontakten.

### Unset interest

Markera de intressen du vill ta bort. Om eMarketeer-kontakten har ett SuperOffice-ID ändras SuperOffice-intresset.

Om den triggande kontakten är okänd för SuperOffice pausas automatiseringen, men leadet visas inte i leadrapporten.

Kontakten måste trigga en Sale-, Task- eller Notification-automatisering innan du kan ta ägarskap över kontakten.

### Add to project

Lägger till den triggande kontakten i ett projekt som anges när automatiseringen skapas. Om personen är okänd för SuperOffice misslyckas automatiseringen.

### Remove from project

Tar bort den triggande kontakten från ett projekt som anges när automatiseringen skapas. Om personen är okänd för SuperOffice misslyckas automatiseringen.

### Add to selection

Lägger till den triggande kontakten i ett statiskt urval som anges när automatiseringen skapas. Statiska urval kan innehålla dubbletter.

Om personen är okänd för SuperOffice misslyckas automatiseringen.

### Remove from selection

Tar bort den triggande kontakten från ett statiskt urval som anges när automatiseringen skapas.

Om personen är okänd för SuperOffice misslyckas automatiseringen.
