# Dynamics - Journey-steg

Med integrationen mellan eMarketeer och Microsoft Dynamics 365 Sales kan du skicka data, skapa poster och logga aktiviteter direkt till ditt Dynamics CRM från en Journey.

## Så synkroniseras poster

I eMarketeer är alla i din databas en Kontakt. Microsoft Dynamics delar upp personer i två separata entiteter: Lead och Contact.

För att brygga detta gap använder varje steg en inbyggd söklogik. När en Journey utlöser ett steg söker eMarketeer i Dynamics för att hitta rätt Lead eller Contact att uppdatera, vilket håller ditt CRM rent och fritt från dubbletter.

Stegen som är tillgängliga för dig är grupperade nedan.

## Skapa eller uppdatera poster

- **Create/Update Lead:** skickar en person från eMarketeer till Dynamics som en Lead. Om en Lead med en matchande e-postadress redan finns uppdaterar eMarketeer den. Ett "Always create a lead"-alternativ tvingar fram skapandet av en ny Lead även om personen redan finns som Contact i Dynamics. [Läs mer](https://support.emarketeer.com/documentation/dynamics/dynamics-features/microsoft-dynamics-integration-journey-steps/create-update-lead/)

## Lägg till aktiviteter (Tasks och Phone Calls)

För att logga en Task eller ett Phone Call i Dynamics, välj ett av tre lägen beroende på hur strikt din säljprocess behöver vara:

- **Add Activity (smart mode):** det mest flexibla alternativet. Eftersom en person kan vara en Lead eller en Contact i ditt CRM frågar detta steg efter din preferens. Om du föredrar att rikta dig mot en Lead letar eMarketeer efter en sådan först. Om den inte hittar en Lead faller den tillbaka till Contact-posten (och vice versa), så att säljaktiviteter aldrig går förlorade. [Läs mer](https://support.emarketeer.com/documentation/dynamics/dynamics-features/microsoft-dynamics-integration-journey-steps/dynamics-add-activity/)
- **Add Lead Activity (strict):** loggar en aktivitet explicit på en Lead-post. Om eMarketeer inte hittar en matchande Lead hoppas åtgärden över. Den faller inte tillbaka till en Contact. [Läs mer](https://support.emarketeer.com/documentation/dynamics/dynamics-features/dynamics-journey-steps/dynamics-add-lead-activity/)
- **Add Contact Activity (strict):** loggar en aktivitet explicit på en Contact-post. Om eMarketeer inte hittar en matchande Contact hoppas åtgärden över. Den faller inte tillbaka till en Lead. [Läs mer](https://support.emarketeer.com/documentation/dynamics/dynamics-features/dynamics-journey-steps/journey-add-contact-activity/)

## Marketing List-åtgärder

- **Add Lead to Marketing List:** söker efter personens Lead-post i Dynamics och lägger till dem i en Marketing List du väljer. [Läs mer](https://support.emarketeer.com/documentation/dynamics/dynamics-features/dynamics-journey-steps/dynamics-add-lead-to-marketing-list/)
- **Add Contact to Marketing List:** söker efter personens Contact-post i Dynamics och lägger till dem i en Marketing List du väljer. [Läs mer](https://support.emarketeer.com/documentation/dynamics/dynamics-features/dynamics-journey-steps/dynamics-add-contact-to-marketing-list/)
