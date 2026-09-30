---
description: >-
  En steg-för-steg-guide till att skapa ett formulär i eMarketeer, från
  inställningar till tacksida och valfritt bekräftelsemeddelande.
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

# Skapa ditt första formulär

{% hint style="warning" %}
För att skapa ett formulär behöver du en kampanj först. Om du inte har någon redo, se [Så här skapar du en ny kampanj](create-new-campaign.md).
{% endhint %}

Den här guiden tar dig igenom att skapa ett formulär i eMarketeer — för en eventregistrering, nyhetsbrevsprenumeration eller annat ändamål.

När du är klar har du ett fungerande formulär med en tacksida och ett valfritt bekräftelsemeddelande.

{% stepper %}
{% step %}
### Lägg till formuläret från kampanjsidan

Klicka på **Add Component** i kampanjen där du vill skapa formuläret och välj sedan **Form**.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-creating-form-new-add-component-form.png" alt="Menyn Add Component med alternativet Form markerat"></div>
{% endstep %}

{% step %}
### Fyll i inställningar, välj mall, skapa formuläret

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-creating-form-new-add-form-dialog.png" alt="Dialogrutan Add Form med fältet Component name, mallen Event registration och knappen Create markerade"></div>

**Inställningar**

* **Component name:** Ge formuläret ett unikt namn så att du hittar det senare. Beskriv syftet i kampanjen — till exempel "Registrering" för ett registreringsformulär. Bara du ser det här namnet; det visas inte för besökare.

**Mall**

Välj en mall från någon av flikarna som utgångspunkt för designen. Den här guiden använder **Event Registration** från fliken **Templates**. Egna mallar sparade på ditt konto visas under **My Templates**.

**Skapa formulärkomponent**

När inställningar och mall är valda klickar du på **Create** för att skapa komponenten.
{% endstep %}

{% step %}
### Formuläreditorn

När du klickar på **Create** öppnas editorn med fliken Designer aktiv. Menyn på vänster sida (Toolbox) låter dig lägga till formulärfält genom att dra dem till designytan — det centrala området där du strukturerar formulärlayouten och lägger till sidor. Mallen **Event Registration** öppnas med tre sidor: **Personal information**, **Guests** och **Last things**.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-creating-form-new-form-designer-overview.png" alt="Formuläreditorn med Toolbox till vänster och designytan i mitten"></div>

En fullständig referens för alla flikar och alternativ finns i [Formuläreditor: UI-översikt](../../documentation/forms/ui-overview.md).
{% endstep %}

{% step %}
### Ändra titel och beskrivning

Många mallar öppnas med en Survey title och Survey description längst upp. Klicka på någon av texterna i designytan för att redigera den, eller justera dem under General Survey settings.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-creating-form-new-form-title-description.png" alt="Redigering av formulärtitel och beskrivning i designytan"></div>
{% endstep %}

{% step %}
### Justera formulärfälten

Kontaktfält är de viktigaste fälten i ett formulär som samlar in identifierade svar. De sparar besökarens kontaktinformation och matchar den mot din eMarketeer-kontaktdatabas — uppdaterar ett befintligt kontaktkort eller skapar ett nytt om inget finns.

{% hint style="info" %}
Använd **Contact Field** i stället för **Single-Line Input**-fält för att spara inlämnade data som kontaktdata. Det säkerställer att en kontakt kan kopplas till formulärinlämningen.
{% endhint %}

Justera fälten på sidan **Personal information**. Mallen Event Registration innehåller First Name, Last Name, Email, Company och Mobile som standard. Lägg till fler kontaktfält från Toolbox eller knappen **Add question** längst ned på varje sida.

Gör ett fält obligatoriskt genom att markera kryssrutan **Required** i fältets verktygsfält. Ta bort ett fält genom att hovra över det och klicka på papperskorgsikonen i samma verktygsfält. Du kan också radera hela sidor — om du använder mallen Event Registration kanske du vill ta bort sidan **Guests**.

Många eMarketeer-formulärmallar använder platshållartexter i stället för frågenycklar — titlarna är dolda som standard via fältinställningarna, så etiketten visas inuti fältet i stället för ovanför det.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-creating-form-new-form-adjust-fields.png" alt="Redigering av fältet First Name på sidan Personal information, med fältets inställningspanel öppen"></div>

Om synliga titlar föredras kan det aktiveras i formulärfältets **Layout**-egenskaper, under rullgardinsmenyn **Question title alignment** för enskilda frågor — eller i bulk genom att uppdatera sidans **Question Settings**.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-creating-form-new-form-page-question-settings.png" alt="Panelen Question Settings på en formulärsida med alternativet Question title alignment markerat"></div>

Spara dina ändringar genom att klicka på diskettikonen ovanför designytan.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-creating-form-new-form-save-button.png" alt="Sparaknappen (diskettikonen) ovanför designytan"></div>
{% endstep %}

{% step %}
### De vanligaste formulärfälten

Det här steget går igenom de grundläggande frågetyperna för att komma igång.

* **Radio Button Group:** En fråga med flera fördefinierade svar där besökaren väljer _ett_.
* **Checkboxes:** En fråga med flera fördefinierade svar där besökaren kan välja _flera_.
* **Long Text:** En fråga där besökaren kan skriva ett valfritt textsvar. Använd det här för längre svar.
* **Consent:** En kryssruta med text du väljer. Att markera den uppdaterar samtyckesinställningen på besökarens kontaktkort — användbart när du behöver uttryckligt samtycke för att lagra kontaktinformation.

Du hittar de här frågetyperna i Toolbox i menyn till vänster. En fullständig lista över tillgängliga frågetyper finns i [Formuläreditor: UI-översikt](../../documentation/forms/ui-overview.md#question-types).
{% endstep %}

{% step %}
### Ställ in tacksidan

När en besökare skickar in formuläret visas tacksidan för att bekräfta att svaret sparades. Standardtacksidan innehåller ett enda textblock som du kan redigera för att passa ditt formulär.

Öppna tacksidans inställningar genom att klicka på **Survey Settings** (bredvid Spara-knappen) ovanför designytan och sedan klicka på **Thank You Page** (korsade flaggor-ikonen) i Property Grid på höger sida.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-creating-form-new-form-thank-you-page.png" alt="Inställningarna för tacksidan i Property Grid"></div>

Ändra texten på tacksidan genom att redigera fältet **Thank You page markup**. Vill du omdirigera besökare till en extern URL efter inlämning använder du alternativet **Redirect to an external link after submission**.

{% hint style="info" %}
Tacksidan visas ändå kort innan omdirigeringen sker, om inte **Show the "Thank You" page** är avbockat.
{% endhint %}
{% endstep %}

{% step %}
### Konfigurera ett bekräftelsemeddelande (valfritt)

Med bekräftelsemeddelandets inställningar kan du skicka en kopia av varje inlämning till en angiven e-postadress och skicka en kopia av svaren tillbaka till den som skickade in formuläret.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-creating-form-new-form-confirmation-email.png" alt="Dialogrutan för bekräftelsemeddelande med avsändarfält och e-postbrödtext"></div>

1. Klicka på knappen **Confirmation** och aktivera sedan funktionen med reglaget i det övre högra hörnet.
2. Fyll i avsändarinformationen (obligatoriskt):
   * **From name:** Avsändarnamnet som visas i mottagarens e-postklient.
   * **From email:** Avsändaradressen — välj ett prefix och välj en domän i rullgardinsmenyn.
   * **Subject line:** Ämnesraden som visas i mottagarens e-postklient.
3. Vill du skicka en kopia till dig själv eller en kollega efter varje inlämning fyller du i **Send a copy to emails**. Separera flera adresser med kommatecken.
4. Redigera e-postbrödtexten vid behov:
   * Dubbelklicka för att redigera ett block. Dra och släpp för att flytta block.
   * Klicka på **Open blocks** i det övre högra hörnet för att lägga till fler innehållsblock.
   * Blocket **Form Answers** visar de svar som respondenten skickade in.
{% endstep %}

{% step %}
### Publicera ditt formulär

När formuläret är klart klickar du på **Publish** i editorns övre menyrad.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-creating-form-new-form-publish.png" alt="Sidan Publish Form med delningsbar URL och inbäddningsskript"></div>

* **Hosted URL:** En delningsbar länk till formuläret. Formuläret visas som det ser ut i fliken Preview. Dela det direkt via sociala medier, i ett chattmeddelande eller som en länk på din webbplats.
* **Bädda in på din webbplats:** Placerar formuläret på en webbsida med ett skriptavsnitt. Se [Bädda in formulär på din webbplats](../../documentation/forms/publish-a-form.md) för en fullständig guide.
* **E-post:** Länka till formuläret från ett e-postmeddelande. Se [Så publicerar du ett formulär](../forms/how-to-publish-a-form.md#länka-till-ett-formulär-från-ett-e-postmeddelande) för mer information.
{% endstep %}
{% endstepper %}
