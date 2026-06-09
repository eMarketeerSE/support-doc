---
description: >-
  Hur du använder skip logic, visa/dölj-villkor och slutförandetriggers för att
  skapa adaptiva formulär i eMarketeer.
---

# Förgreningslogik i formulär

Med förgreningslogik kan du skapa formulär som anpassar sig efter varje respondents svar. I stället för att visa alla frågor för alla respondenter leder du dem längs olika vägar — hoppar över irrelevanta avsnitt, visar följdfrågor eller skickar dem direkt till tacksidan.

Formuläreditorn stöder tre typer av förgreningslogik:

* **Skip logic** — hoppa till en specifik fråga när ett villkor är uppfyllt.
* **Visa/dölj-logik** — visa eller dölj en fråga, panel eller sida baserat på ett svar.
* **Slutföringslogik** — avsluta formuläret tidigt och visa tacksidan när ett villkor är uppfyllt.

Alla förgreningsregler kan konfigureras via avsnittet **Conditions** i Property Grid, eller granskas och hanteras samlat i fliken **Logic**. När du skriver villkor för hand i stället för att använda den visuella editorn, se [Uttryckssyntax i formulär](form-expression-syntax.md) för en komplett referens över operatorer och funktioner.

## Skip logic

Skip logic hoppar respondenten framåt till en specifik fråga när ett uttryck evalueras till sant. Använd det när du vill hoppa över ett block med frågor baserat på vad någon svarat tidigare.

Skip logic konfigureras med **triggers** på enquêtenivå.

### Konfigurera skip logic

1. I Property Grid klickar du på **Survey** längst upp för att öppna enkätinställningarna.
2. Byt till kategorin **Conditions**.
3. Under **Triggers** klickar du på ikonen **+** för att lägga till en ny trigger.
4. Välj **Skip to question** i rullgardinsmenyn för triggertyp.
5. Klicka på pennikonen för att expandera triggerinställningarna.
6. Ange det uttryck som ska utlösa hoppet. Skriv det direkt i fältet **Expression**, eller klicka på trollstavsikonen för att bygga uttrycket med den visuella editorn. Klicka på **Apply** när du är klar.
7. I rullgardinsmenyn **Question to skip to** väljer du destinationsfrågan.

## Visa/dölj-logik

Visa/dölj-logik (kallas också visningslogik) visar eller döljer en fråga, panel eller sida baserat på ett villkor. Det är den mest flexibla formen av förgreningslogik och fungerar väl för enskilda följdfrågor, relaterade frågegrupper i en panel eller hela sidor.

Du kan ange visa/dölj-villkor för valfri fråga, panel eller sida via dess **Conditions**-inställningar i Property Grid.

### Konfigurera visa/dölj-logik

1. Markera den fråga, panel eller sida du vill visa eller dölja villkorsstyrt.
2. I Property Grid byter du till kategorin **Conditions**.
3. Leta upp fältet **Make the question/panel/page visible if**.
4. Klicka på trollstavsikonen för att öppna den visuella uttryckseditorn.
5. Välj den fråga vars svar ska styra synligheten.
6. Välj en villkorsoperator: **Empty**, **Not empty**, **Equals**, **Does not equal**, **Any of**, **Greater than**, **Less than**, **Greater than or equal to** eller **Less than or equal to**.
7. Ange eller välj det svarsvärde som ska utlösa villkoret.
8. Klicka på **Apply**.

Elementet förblir dolt tills villkoret är uppfyllt. Om respondenten går tillbaka och ändrar sitt svar så att villkoret inte längre är sant döljs elementet igen.

{% hint style="info" %}
En fråga som är dold av visningslogik kan inte vara obligatorisk samtidigt. Om en obligatorisk fråga är dold ignoreras det obligatoriska kravet.
{% endhint %}

## Slutföringslogik

Slutföringslogik avslutar formuläret tidigt och tar respondenten till tacksidan när ett specifikt villkor är uppfyllt. Använd det när vissa svar innebär att respondenten inte har mer att fylla i.

Precis som skip logic konfigureras detta med triggers på enkätnivå.

### Konfigurera slutföringslogik

1. I Property Grid klickar du på **Survey** längst upp för att öppna enkätinställningarna.
2. Byt till kategorin **Conditions**.
3. Under **Triggers** klickar du på ikonen **+** för att lägga till en ny trigger.
4. Välj **Complete survey** i rullgardinsmenyn för triggertyp.
5. Klicka på pennikonen för att expandera triggerinställningarna.
6. Ange det uttryck som ska slutföra enkäten. Skriv det direkt i fältet **Expression**, eller klicka på trollstavsikonen för att bygga uttrycket med den visuella editorn. Klicka på **Apply** när du är klar.

## Hantera alla förgreningsregler i fliken Logic

Fliken **Logic** ger dig en samlad vy över alla villkorsregler i ditt formulär. Alla regler som definierats i enskilda Conditions-avsnitt — skip-triggers, visa/dölj-villkor och slutförandetriggers — visas här.

Använd fliken Logic för att:

* Granska alla förgreningsregler på ett ställe.
* Redigera eller ta bort enskilda regler utan att navigera till varje element.
* Lägga till nya regler direkt utan att öppna en specifik frågas inställningar.

Öppna fliken Logic genom att klicka på **Logic** i editorns övre flikrad.
