# Användarkonton

Den här artikeln förklarar hur konton och användare fungerar i eMarketeer, inklusive de tillgängliga rollerna och vad var och en kan göra.

Att förstå dessa begrepp hjälper dig att avgöra vem som behöver åtkomst och vilken roll som passar deras arbete.

## Kontotyper

eMarketeer använder två typer av konton:

- Konto — din eMarketeer-prenumeration som innehåller alla dina kontakter, e-postmeddelanden, filer och andra resurser. Tänk på det som ett hus som rymmer dina resurser men inte är en individ.
- Användarkonto — en individ som loggar in på kontot för att arbeta i systemet. Tänk på detta som en person som har nycklarna till huset.

> TODO: verify — the source called the first type "Tenant account." Per voice rules, "Account" is the correct term for the eMarketeer subscription.

## Användarbehörigheter

### Administratör

Administratörer har full åtkomst till alla delar av systemet, inklusive:

- Kontoinställningar
- Användarhantering (bjuda in och hantera användare)

### Marketing User

Marketing Users har åtkomst till de flesta funktioner i systemet, förutom:

- Kontoinställningar
- Användarhantering
- Medlemskap i säljteam

Den här rollen är avsedd för användare som arbetar med marknadsföringsinnehåll som e-post, sidor och formulär.

### Sales User

Sales Users har åtkomst till Sales Board och hanterar inkommande leads. De tilldelas vanligtvis ett eller flera säljteam som var och ett får skräddarsydda leads baserat på fokus eller ansvarsområden.

Den här rollen är utformad för användare som är involverade i säljaktiviteter och uppföljning av leads.

### Developer

Developer-rollen är en specialisering av Marketing User-rollen. Developers har åtkomst till den fullständiga HTML-koden i:

- E-post
- Appar
- Webbsidor
- JSON Editor i formulär

Den här rollen passar tekniskt avancerade användare som behöver full kontroll över källkoden.

### CRM Web Panel

Användare med den här rollen kan se eMarketeer-paneler direkt i sitt integrerade CRM-system. Den här rollen tilldelas vanligtvis CRM-användare som behöver snabb åtkomst till eMarketeer-data i sitt arbetsflöde.

## Bjuda in nya användare

En administratör kan bjuda in nya användare till kontot. När du bjuder in någon skickar eMarketeer ett inbjudningsmejl till den angivna adressen. Användaren blir aktiv först efter att hen accepterat inbjudan och slutfört registreringen.

### Flera konton på en användare

Om du bjuder in någon som redan har åtkomst till ett annat konto behåller den nya användaren samma inloggning och får åtkomst till båda kontona.

Efter inloggning väljer en användare med åtkomst till flera konton vilket konto som ska användas under sessionen. För att byta konto loggar användaren ut och in igen och väljer ett annat konto.

## Tillhörande kostnader per användare

Beroende på din prisplan kan det tillkomma en avgift för att skapa en ny användare. Avgiften visas på skärmen när du bjuder in användaren.

Om användaren redan betalas av ett annat konto debiteras inte den inbjudna användaren på ditt konto. Det beror på att ingen ny användare skapas — den befintliga användaren ges bara åtkomst till ytterligare ett konto.

## Inloggningssäkerhet

Alla användare loggar in på eMarketeer med sitt användarnamn (e-post) och lösenord. eMarketeer erbjuder även Multi-Factor Authentication (MFA) för ett extra lager av säkerhet. MFA är valfritt per användare, men en administratör kan framtvinga det för alla användare på kontot.

Läs mer om [Multi-Factor Authentication](multi-factor-authentication.md).
