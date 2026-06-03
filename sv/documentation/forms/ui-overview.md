---
description: En referensguide till formuläreditorns gränssnitt — flikar, Toolbox, frågetyper och konfigurationsalternativ.
---

# Formuläreditor: UI-översikt

Formuläreditorn har sex flikar: Designer, Preview, Themes, Logic, JSON Editor och Translation. Den här artikeln beskriver vad varje flik gör och vilka frågetyper som finns tillgängliga.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/FormTabs.png" alt="Formuläreditorn med de sex flikarna: Designer, Preview, Themes, Logic, JSON Editor och Translation."></div>

## Designer-fliken

Designer-fliken är där du bygger ditt formulär. Den har tre huvuddelar: Toolbox till vänster, designytan i mitten och Property Grid till höger.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/FormDesignerTab.png" alt="Designer-fliken med Toolbox till vänster, designytan i mitten och Property Grid till höger."></div>

### Toolbox

Toolbox listar alla frågetyper och strukturelement du kan lägga till i ditt formulär. Dra ett objekt från Toolbox till designytan, eller klicka på det för att lägga till det längst ned på den aktuella sidan.

### Frågetyper

<details>

<summary>Enkelsvarsfrågor</summary>

**Radio button group**
Visar en lista med alternativ. Respondenten väljer ett.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/RadioButtonGroup.png" alt="En radio button group-fråga i designytan."></div>

**Dropdown**
En listruta med ett enda val. Användbar när alternativlistan är lång eller när du vill spara utrymme på skärmen.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/dropdown question.png" alt="En dropdown-fråga i designytan."></div>

**Yes/No (Boolean)**
En växlare som returnerar sant eller falskt. Visas som en switch, ett par radioknappar eller en kryssruta beroende på temainställningarna.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/Boolean.png" alt="En Yes/No (Boolean)-fråga i designytan."></div>

</details>

<details>

<summary>Flersvarsfrågor</summary>

**Checkboxes**
Visar en lista med alternativ. Respondenten kan välja mer än ett.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/Checkboxes.png" alt="En checkboxes-fråga i designytan."></div>

**Multi-select dropdown**
En listruta som tillåter flera val.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/Multi-select-dropdown.png" alt="En multi-select dropdown-fråga i designytan."></div>

</details>

<details>

<summary>Betyg och rangordning</summary>

**Rating scale**
En numerisk skala som respondenten använder för att betygsätta något. Du kan ersätta de numeriska etiketterna med stjärnor eller emoji-ikoner.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/RatingQuestions.png" alt="En rating scale-fråga i designytan."></div>

**Ranking**
En lista med dra-och-släpp-funktionalitet där respondenten ordnar alternativ i önskad prioritetsordning.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/Ranking.gif" alt="En ranking-fråga i designytan som visar dra-och-släpp-omordning."></div>

</details>

<details>

<summary>Textinmatning</summary>

**Single-line input**
Ett enkelradigt textfält. Accepterar även siffror och datum.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/SingleLineInput.png" alt="En single-line input-fråga i designytan."></div>

**Long text**
Ett ändringsbart textfält med flera rader för längre svar.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/LongText.png" alt="En long text-fråga i designytan."></div>

**Multiple text boxes**
Flera enkelradiga fält grupperade tillsammans. Användbart när du behöver ett antal korta svar under en fråga.

</details>

<details>

<summary>Image picker</summary>

Visar en serie bilder. Respondenten klickar på en (eller flera, om det är konfigurerat) för att välja den. Varje alternativ har ett kopplat värde.

</details>

<details>

<summary>Matrisfrågor</summary>

**Single-select matrix**
Ett rutnät med rader och kolumner. Varje rad är ett påstående eller ett objekt; respondenten väljer ett kolumnalternativ per rad med radioknappar.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/SingleSelectMatrix.png" alt="En single-select matrix-fråga i designytan."></div>

</details>

<details>

<summary>Presentationselement</summary>

**HTML**
Ett block med formaterad text som du skriver direkt i editorn. Använd det för instruktioner, rubriker mellan frågegrupper eller annat icke-interaktivt innehåll.

**Image**
Bäddar in en statisk bild eller video i formuläret. Respondenten kan inte interagera med den.

**Expression**
Visar ett beräknat värde — en summa, ett medelvärde eller en sammansättning av andra svar. Användbart på den sista sidan för att sammanfatta vad respondenten har skickat in.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/Expression.gif" alt="En expression-fråga i designytan som visar ett beräknat värde som uppdateras i realtid."></div>

</details>

<details>

<summary>Strukturelement</summary>

**Panel**
En behållare som grupperar frågor visuellt. Paneler kan göras hopfällbara och kan ha en egen rubrik och beskrivning.

**Dynamic panel**
En upprepande panelmall. Respondenten kan lägga till eller ta bort panelinstanser, vilket gör det användbart för poster med variabel längd, till exempel flera kontakter eller orderrader.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/DynamicPanel.png" alt="Ett dynamic panel-element i designytan med flera panelinstanser."></div>

</details>

<details>

<summary>Contact fields</summary>

Använd Contact fields när du vill att formulärsvar ska uppdatera respondentens kontaktpost i eMarketeer. Varje Contact field är ett enkelradigt inmatningsfält kopplat till ett specifikt fält på kontaktkortet.

Data som skickas in via ett Contact field sparas både som formulärsvarsdata och som kontaktpostdata. Det skriver över eventuellt befintligt värde på kontaktkortet.

Ett formulär som innehåller ett **Contact field: Email** skapar en ny kontakt eller matchar mot en befintlig när formuläret skickas in.

Contact fields förifyller data från kontaktdatabasen om respondenten är känd — till exempel när hen öppnar formuläret via en personlig länk.

<details>

<summary>Tillgängliga kontaktfält</summary>

- Email
- First Name
- Last Name
- Salutation
- Company
- Title
- Phone number
- Mobile phone
- Address 1
- Address 2
- City
- State
- Zip code
- Country
- Note

</details>

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/Contact-Fields.png" alt="Frågetypen Contact fields i designytan."></div>

</details>

<details>

<summary>Custom Contact Field</summary>

Fungerar på samma sätt som Contact fields, men är kopplat till ditt kontos anpassade kontaktfält i stället för standardfälten på kontaktkortet.

</details>

### Lägga till en fråga

För att lägga till en fråga drar du den från Toolbox till designytan. Du kan också klicka på knappen **Add Question** längst ned på en sida för att infoga ett enkelradigt inmatningsfält. Klicka på ellips-ikonen bredvid knappen för att välja en annan typ innan du infogar.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/Add-Questions-button.png" alt="Knappen Add Question och ellipsis-typväljaren längst ned på en sida."></div>

### Redigering direkt i designytan

När du klickar på en fråga i designytan visas inline-redigeringskontroller direkt på frågan. Du kan redigera frågetexten, sortera om alternativ, duplicera frågan, ta bort den eller markera den som obligatorisk — utan att öppna Property Grid.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/InPlaceEditing.png" alt="En fråga i designytan med inline-redigeringskontroller synliga."></div>

### Property Grid

Property Grid på höger sida av editorn visar konfigurationsalternativ för den valda frågan, sidan eller formuläret. Alternativen är grupperade i kategorier.

Om du vill ange ett standardsvar för en fråga markerar du den, öppnar kategorin **Data** i Property Grid och klickar på **Set Default Answer**.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/DefaultAnswer.png" alt="Property Grid med kategorin Data öppen och alternativet Set Default Answer synligt."></div>

### Sidhantering

Ett formulär kan ha flera sidor. Lägg till en sida genom att markera formuläret, öppna kategorin **Survey** i Property Grid, gå till **Pages** och klicka på **Add new page**. Du kan också dra en fråga till skelett-sidan längst ned i designytan — det skapar automatiskt en ny sida.

### Ändra frågetyp

Om du vill ändra en fråga till en annan typ använder du typväljaren i frågans verktygsfält i designytan. Vissa typbyten medför att data försvinner — till exempel raderas alternativlistan om du konverterar en Dropdown till ett Single-line input. Ångra är tillgängligt om du vill återgå till den tidigare typen.

## Preview-fliken

Preview-fliken visar formuläret som respondenten ser det. Fyll i det och skicka in för att se hur svarsdata registreras. Efter inskickning visas resultaten i en tabell eller som rå JSON. Klicka på **Preview Survey Again** för att starta om.

Använd enhetsväljaren för att förhandsgranska på olika skärmstorlekar och orienteringsknappen för att växla mellan stående och liggande format.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/PreviewTab.png" alt="Preview-fliken med enhetsväljaren och orienteringsknappen synliga."></div>

## Themes-fliken

Med Themes-fliken kan du ändra formulärets utseende — färger, typsnitt, storlekar, hörnavrundning, skuggor och andra visuella egenskaper.

Du kan exportera ett anpassat tema som en JSON-fil och importera det till ett annat formulär för att återanvända samma stil.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/ThemesTab.png" alt="Themes-fliken med stilkontrollerna synliga."></div>

## Logic-fliken

Logic-fliken är där du definierar villkorliga regler som styr formulärets beteende — till exempel att visa en fråga bara när ett tidigare svar uppfyller vissa kriterier.

### Lägga till en regel

Klicka på **Add New Rule**. Varje regel har ett villkor (om) och en eller flera åtgärder (då).

**Villkor** — välj en fråga och en logisk operation (är lika med, är tom, innehåller och så vidare). Kombinera flera villkor med AND eller OR. Använd **Manual Entry** för att skriva ett uttryck direkt.

**Åtgärder** — vad som händer när villkoret är sant. Tillgängliga åtgärder:

- Visa eller dölj en sida eller fråga
- Aktivera eller inaktivera en sida eller fråga
- Markera en fråga som obligatorisk
- Slutför formuläret
- Ange en frågas svar
- Kopiera ett svar från en fråga till en annan
- Hoppa till en specifik fråga
- Kör ett anpassat uttryck
- Ange innehållet på bekräftelsesidan

Om du vill redigera en regel klickar du på den för att expandera den, gör dina ändringar och klickar på **Done**. Använd Question Filter och Action Type Filter för att begränsa listan när ett formulär har många regler.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/AddRule.png" alt="Logic-fliken med en expanderad regel som visar villkors- och åtgärdseditorerna."></div>

## JSON Editor-fliken

JSON Editor-fliken visar formulärets råa JSON-konfiguration. Du kan redigera den direkt, men för de flesta ändringar är Designer-fliken och Property Grid enklare att använda.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/JSONTab.png" alt="JSON Editor-fliken med ett exempel på en formulärkonfiguration."></div>

## Translation-fliken

Translation-fliken listar alla översättningsbara strängar i ditt formulär. Använd den för att ange text på flera språk så att respondenter kan välja mellan dem.

**Lägga till ett språk** — öppna Language Settings och klicka på **Add** för att välja ett språk från listan.

**Filtrering** — använd Page Filter för att visa strängar från en specifik sida. Aktivera **Used Strings** för att bara visa strängar som har översatts.

**Import och export** — använd verktygsfältsknapparna för att importera eller exportera översättningar som en CSV-fil.

<div data-with-frame="true" align="left"><img src="../../../assets/ui-overview/TranslationsTab.png" alt="Translation-fliken med panelen för språkinställningar och strängtabellen synliga."></div>
