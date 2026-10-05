---
description: Hur SuperOffice-stegen i en Journey hittar kontakten i SuperOffice, och hur du skapar kontakter som saknas.
---

# Kontaktmatchning i SuperOffice

När ett Journey-steg utför en uppgift i SuperOffice måste eMarketeer först hitta kontakten i SuperOffice. Den här artikeln förklarar hur kontakter matchas och hur du kan skapa de kontakter som saknas.

Det gäller stegen i gruppen CRM i panelen "Add Journey step": Create Activity, Create Sale, Add / Remove from project, Add / Remove from selection och Add / Remove interest. Se [SuperOffice Journey Steps](superoffice-journey-steps.md).

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/superoffice-journey-steps-crm-group.png" alt="Gruppen CRM i panelen Add Journey step med Create Activity, Create Sale, Add / Remove from project, Add / Remove from selection och Add / Remove interest"></div>

## Kontaktmatchning

När en uppgift utförs i SuperOffice kontrollerar eMarketeer först om kontakten finns där. Det görs genom att matcha kontaktens external-id och e-postadress.

Om ingen matchande kontakt hittas hoppas Journey-steget över som standard.

## Skapa saknade kontakter i SuperOffice

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/creating-your-first-journey-superoffice-settings-panel.png" alt="Panelen SuperOffice settings med alternativen Create the contacts / company och Skip contacts we can't find in SO"></div>

När du lägger till ett Journey-steg som involverar SuperOffice visas en inställningspanel i det vänstra sidofältet.

Som standard hoppas kontakter som inte hittas i SuperOffice över. Du kan också konfigurera steget så att det automatiskt skapar de saknade kontakterna i SuperOffice.

För att skapa kontakterna i SuperOffice måste du också ange en ansvarig säljare och en kategori för de nya kontakterna och företagen.

När kontakter och företag skapas automatiskt försöker eMarketeer hitta ett befintligt företag som passar den nya kontakten, eller skapar kontakten utan företag om det är tillåtet.

Inställningen för att skapa kontakter gäller alla SuperOffice-steg i din Journey.

<details>

<summary>Logik för kontaktmatchning</summary>

```mermaid
flowchart TD
    A[Does contact have external-id?] -->|Yes| G[Create action]
    A -->|No| B[Does contact exist in SO by email?]
    B -->|Yes| G
    B -->|No| C["Search for company in SO\n1. Email domain\n2. Company name"]
    C -->|found| F[Create contact]
    C -->|not found| D[Do we have company name?]
    D -->|Yes| E["Create company\n(company name, or domain name if empty)"]
    D -->|No| H[Can we create orphan contacts?]
    H -->|Yes| F
    H -->|No| E
    E --> F
    F --> G
```

</details>

**Tips:** När du aktiverar automatiskt skapande av kontakter är det bra praxis att även lägga till de nya kontakterna i ett urval i SuperOffice. På så sätt hittar du dem enkelt senare.
