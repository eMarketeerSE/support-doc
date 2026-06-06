---
description: >-
  Den här guiden tar dig igenom hur du skapar en webbsida i eMarketeer, från
  mallval till redigering av innehållsblock och färdigställning av sidan.
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: false
  actions:
    visible: true
---

# Skapa din första webbsida

{% hint style="warning" %}
Du behöver en kampanj innan du kan lägga till en webbsida. Se [Skapa en ny kampanj](../getting-started/create-new-campaign.md) om du inte har skapat en ännu.
{% endhint %}

{% hint style="info" %}
Exemplet bygger en event-landningssida, men processen är densamma för alla typer av webbsidor. I slutet av guiden har du en webbsida redo att publicera.
{% endhint %}

{% stepper %}
{% step %}
### Lägg till en webbsida från kampanjsidan

Klicka på **Add Webpage** från kampanjsidan.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/cw1.png" alt="Knappen Add Webpage på kampanjsidan"></div>
{% endstep %}

{% step %}
### Fyll i inställningar och välj en mall

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/cw2.png" alt="Inställningar och mallval för webbsidan"></div>

**Inställningar**

* **Name your webpage:** Ett unikt namn så att du hittar sidan senare. Välj något som beskriver sidans roll i kampanjen. Besökarna ser inte detta namn.
* **Page title:** Titeln som besökarna ser i webbläsarens flik.

**Mall**

Välj en mall från en av flikarna som utgångspunkt för designen. Den här guiden använder **Simple Landing (R)** från fliken **Landing Pages**. Mallar som sparats på ditt konto visas under **My Templates**.

**Skapa webbsidekomponenten**

När inställningar och mall är valda klickar du på **Create Web Page** för att skapa komponenten.
{% endstep %}

{% step %}
### Webbsideredigeraren

När du klickar på **Create Web Page** öppnas redigeraren med mallens innehåll på plats. Vänstermenyn låter dig lägga till innehållsblock, öppna verktyg och justera inställningarna från föregående steg. Resten av sidan visar det nuvarande innehållet, uppbyggt av block som du redigerar ett i taget.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/cw_editor.png" alt="Webbsideredigeraren med innehållsblock och vänstermeny"></div>
{% endstep %}

{% step %}
### Redigera ett innehållsblock

Varje innehållsblock består av flera delar som du kan uppdatera. Klicka på blockets **Edit**-knapp för att öppna dess inställningar.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/cw_edit_content_block.png" alt="Edit-knappen på ett innehållsblock"></div>

En inställningspanel öppnas till höger med två flikar: **Content** och **Styles**. Content är där du ändrar blockets text, bilder och länkar. Styles är där du ändrar färger och typsnitt.

På fliken Content styr den övre delen hur blocket visas — lämna dessa standardvärden för nu. Den nedre delen är där du redigerar det faktiska innehållet.
{% endstep %}

{% step %}
### Ändra en rubrik

För att ändra en rubrik eller ett textstycke klickar du på dess titelrad och redigerar texten i textrutan. En tom textruta döljer den delen av blocket.

I exemplet nedan är textstycket och de två länkknapparna tomma, så de visas inte på sidan.

Klicka på **Save** efter varje ändring.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/cw_edit_text.png" alt="Redigering av rubriktexten i ett innehållsblock"></div>
{% endstep %}

{% step %}
### Ändra bilden i ett block

Öppna blocket för redigering, gå till Image-sektionen i den högra panelen och klicka på **Choose Image**.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/ce_upload_image_1.png" alt="Knappen Choose Image i bildsektionen"></div>

Gör så här för att ladda upp och använda en egen bild:

1. Klicka på **Upload File**.
2. Klicka på **Choose files** och välj bilden på din dator.
3. Ladda upp filen till ditt eMarketeer-konto.
4. Klicka på filen i webbläsarfönstret för att markera den.
5. Klicka på **Use Selected** för att lägga till den i innehållsblocket.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/ce_image_upload_2.png" alt="Stegen Upload File, Choose files och Use Selected"></div>

Om bilden inte matchar de rekommenderade måtten för blocket visas ett alternativ för automatisk skalning. Klicka på länken i meddelandet för att godkänna.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/ce_upload_image_3.png" alt="Meddelande om Auto Scale för att ändra storlek på bilden"></div>
{% endstep %}

{% step %}
### Lägg till en knapp med en länk

Använd knappar för att länka till en webbsida, en fil eller en annan eMarketeer-komponent. För en webblänk skriver du URL:en i länkinställningarna (inkludera `http://` eller `https://`) och skriver en knapptext. Gör så här för att länka till ett formulär:

1. Öppna innehållsinställningarna för Link 1 och klicka på **Browse**.
2. Klicka på **Link to eMarketeer Form**.
3. Välj kampanjen som innehåller ditt formulär och välj sedan formuläret.
4. Klicka på **Select**, sedan **Apply** och sedan **Save** för att lägga till länken och spara blocket.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/ce6.png" alt="Ange en knapplänk via Browse till ett eMarketeer-formulär"></div>
{% endstep %}

{% step %}
### Lägg till ett nytt innehållsblock

Klicka på **Add Content Block** i vänstermenyn och klicka sedan på **Add Block** bredvid den blocktyp du vill ha.

Om knappen är grå klickar du först på ett befintligt block för att tala om för redigeraren var det nya blocket ska placeras.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/ce-add-12.png" alt="Menyn Add Content Block med olika blocktyper"></div>
{% endstep %}

{% step %}
### Flytta ett innehållsblock

För att flytta ett block klickar du på och håller ned flytt-ikonen till vänster om blockets kontextfält och drar det sedan till den nya positionen.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/ce-move.png" alt="Flytt-ikonen som används för att dra ett innehållsblock"></div>
{% endstep %}

{% step %}
### Ta bort ett innehållsblock

För att ta bort ett block du inte behöver klickar du på ta bort-knappen på dess kontextfält.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/ce-delete.png" alt="Ta bort-knappen på ett innehållsblocks kontextfält"></div>
{% endstep %}

{% step %}
### Färdigställ webbsidan

Klicka på **Done Editing** för att lämna redigeraren.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/cw_done.png" alt="Knappen Done Editing"></div>
{% endstep %}
{% endstepper %}
