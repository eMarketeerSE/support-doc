---
description: En referensguide till formuläreditorns gränssnitt — flikar, Toolbox, frågetyper och konfigurationsalternativ.
---

# Formuläreditor: UI-översikt

Formuläreditorn har sex flikar: Designer, Preview, Themes, Logic, JSON Editor och Translation. Den här artikeln beskriver vad varje flik gör och vilka frågetyper som finns tillgängliga.

## Designer-fliken

Designer-fliken är där du bygger ditt formulär. Den har tre huvuddelar: Toolbox till vänster, designytan i mitten och Property Grid till höger.

{% hint style="info" %}
**Skärmbild behövs:** Designer-fliken med Toolbox (vänster), designytan (mitten) och Property Grid (höger).
{% endhint %}

### Toolbox

Toolbox listar alla frågetyper och strukturelement du kan lägga till i ditt formulär. Dra ett objekt från Toolbox till designytan, eller klicka på det för att lägga till det längst ned på den aktuella sidan.

### Frågetyper

#### Enkelsvarsfrågor

**Radio button group**
Visar en lista med alternativ. Respondenten väljer ett.

**Dropdown**
En listruta med ett enda val. Användbar när alternativlistan är lång eller när du vill spara utrymme på skärmen.

**Yes/No (Boolean)**
En växlare som returnerar sant eller falskt. Visas som en switch, ett par radioknappar eller en kryssruta beroende på temainställningarna.

#### Flersvarsfrågor

**Checkboxes**
Visar en lista med alternativ. Respondenten kan välja mer än ett.

**Multi-select dropdown**
En listruta som tillåter flera val.

#### Betyg och rangordning

**Rating scale**
En numerisk skala som respondenten använder för att betygsätta något. Du kan ersätta de numeriska etiketterna med stjärnor eller emoji-ikoner.

**Ranking**
En lista med dra-och-släpp-funktionalitet där respondenten ordnar alternativ i önskad prioritetsordning.

#### Textinmatning

**Single-line input**
Ett enkelradigt textfält. Accepterar även siffror och datum.

**Long text**
Ett ändringsbart textfält med flera rader för längre svar.

**Multiple text boxes**
Flera enkelradiga fält grupperade tillsammans. Användbart när du behöver ett antal korta svar under en fråga.

#### Image picker

Visar en serie bilder. Respondenten klickar på en (eller flera, om det är konfigurerat) för att välja den. Varje alternativ har ett kopplat värde.

#### Matrisfrågor

**Single-select matrix**
Ett rutnät med rader och kolumner. Varje rad är ett påstående eller ett objekt; respondenten väljer ett kolumnalternativ per rad med radioknappar.

#### Presentationselement

**HTML**
Ett block med formaterad text som du skriver direkt i editorn. Använd det för instruktioner, rubriker mellan frågegrupper eller annat icke-interaktivt innehåll.

**Image**
Bäddar in en statisk bild eller video i formuläret. Respondenten kan inte interagera med den.

**Expression**
Visar ett beräknat värde — en summa, ett medelvärde eller en sammansättning av andra svar. Användbart på den sista sidan för att sammanfatta vad respondenten har skickat in.

#### Strukturelement

**Panel**
En behållare som grupperar frågor visuellt. Paneler kan göras hopfällbara och kan ha en egen rubrik och beskrivning.

**Dynamic panel**
En upprepande panelmall. Respondenten kan lägga till eller ta bort panelinstanser, vilket gör det användbart för poster med variabel längd, till exempel flera kontakter eller orderrader.

### Lägga till en fråga

För att lägga till en fråga drar du den från Toolbox till designytan. Du kan också klicka på knappen **Add Question** längst ned på en sida för att infoga ett enkelradigt inmatningsfält. Klicka på ellips-ikonen bredvid knappen för att välja en annan typ innan du infogar.

{% hint style="info" %}
**Skärmbild behövs:** Knappen "Add Question" och ellipsis-typväljaren längst ned på en sida.
{% endhint %}

### Redigering direkt i designytan

När du klickar på en fråga i designytan visas inline-redigeringskontroller direkt på frågan. Du kan redigera frågetexten, sortera om alternativ, duplicera frågan, ta bort den eller markera den som obligatorisk — utan att öppna Property Grid.

{% hint style="info" %}
**Skärmbild behövs:** En fråga i designytan med inline-redigeringskontroller synliga.
{% endhint %}

### Property Grid

Property Grid på höger sida av editorn visar konfigurationsalternativ för den valda frågan, sidan eller formuläret. Alternativen är grupperade i kategorier.

Om du vill ange ett standardsvar för en fråga markerar du den, öppnar kategorin **Data** i Property Grid och klickar på **Set Default Answer**.

{% hint style="info" %}
**Skärmbild behövs:** Property Grid med en vald fråga som visar dess kategorier.
{% endhint %}

### Sidhantering

Ett formulär kan ha flera sidor. Lägg till en sida genom att markera formuläret, öppna kategorin **Survey** i Property Grid, gå till **Pages** och klicka på **Add new page**. Du kan också dra en fråga till skelett-sidan längst ned i designytan — det skapar automatiskt en ny sida.

### Ändra frågetyp

Om du vill ändra en fråga till en annan typ använder du typväljaren i frågans verktygsfält i designytan. Vissa typbyten medför att data försvinner — till exempel raderas alternativlistan om du konverterar en Dropdown till ett Single-line input. Ångra är tillgängligt om du vill återgå till den tidigare typen.

## Preview-fliken

Preview-fliken visar formuläret som respondenten ser det. Fyll i det och skicka in för att se hur svarsdata registreras. Efter inskickning visas resultaten i en tabell eller som rå JSON. Klicka på **Preview Survey Again** för att starta om.

Använd enhetsväljaren för att förhandsgranska på olika skärmstorlekar och orienteringsknappen för att växla mellan stående och liggande format.

{% hint style="info" %}
**Skärmbild behövs:** Preview-fliken med enhetsväljaren och orienteringsknappen synliga.
{% endhint %}

## Themes-fliken

Med Themes-fliken kan du ändra formulärets utseende — färger, typsnitt, storlekar, hörnavrundning, skuggor och andra visuella egenskaper.

Du kan exportera ett anpassat tema som en JSON-fil och importera det till ett annat formulär för att återanvända samma stil.

{% hint style="info" %}
**Skärmbild behövs:** Themes-fliken med stilkontrollerna synliga.
{% endhint %}

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

{% hint style="info" %}
**Skärmbild behövs:** Logic-fliken med en expanderad regel som visar villkors- och åtgärdseditorerna.
{% endhint %}

## JSON Editor-fliken

JSON Editor-fliken visar formulärets råa JSON-konfiguration. Du kan redigera den direkt, men för de flesta ändringar är Designer-fliken och Property Grid enklare att använda.

{% hint style="info" %}
**Skärmbild behövs:** JSON Editor-fliken med ett exempel på en formulärkonfiguration.
{% endhint %}

## Translation-fliken

Translation-fliken listar alla översättningsbara strängar i ditt formulär. Använd den för att ange text på flera språk så att respondenter kan välja mellan dem.

**Lägga till ett språk** — öppna Language Settings och klicka på **Add** för att välja ett språk från listan.

**Filtrering** — använd Page Filter för att visa strängar från en specifik sida. Aktivera **Used Strings** för att bara visa strängar som har översatts.

**Import och export** — använd verktygsfältsknapparna för att importera eller exportera översättningar som en CSV-fil.

{% hint style="info" %}
**Skärmbild behövs:** Translation-fliken med panelen för språkinställningar och strängtabellen synliga.
{% endhint %}
