---
description: >-
  En steg-för-steg-guide för att skapa ett formulär i eMarketeer, från
  grundinställningar till tacksida och valfritt bekräftelsemejl.
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
tags:
  - legacy
---

# Skapa ditt första formulär (Legacy)

{% hint style="danger" %}
Den här guiden gäller Legacy-versionen av Forms, som kommer att avvecklas. Vissa kunder har inte tillgång till den här komponenten.
{% endhint %}

{% hint style="warning" %}
För att skapa ett nytt Legacy-formulär måste du skapa en kampanj först.
{% endhint %}

Den här guiden tar dig genom hur du skapar ett formulär i eMarketeer — för eventanmälan, nyhetsbrevsregistrering eller någon annan användning.

När du är klar har du ett fungerande formulär med en tacksida och ett valfritt bekräftelsemejl.

{% stepper %}
{% step %}
### Lägg till formuläret från kampanjsidan

Klicka på **Add Form** från kampanjen där du vill skapa formuläret.

* Om du behöver skapa kampanjen först, se [Så här skapar du en ny kampanj](create-new-campaign.md).

<div data-with-frame="true"><img src="../../../assets/basics-creating-form/cf1.png" alt="Knappen Add Form på kampanjsidan"></div>
{% endstep %}

{% step %}
### Fyll i inställningar, välj en mall och skapa formuläret

<div data-with-frame="true"><img src="../../../assets/basics-creating-form/cf2.png" alt="Dialog för formulärinställningar och val av mall"></div>

**Inställningar**

* **Name your form:** Ge formuläret ett unikt namn så att du hittar det senare. Beskriv syftet i kampanjen — till exempel "Anmälan" för ett anmälningsformulär. Bara du ser namnet; det visas inte för besökarna.

**Mall**

Välj en mall från någon av flikarna som utgångspunkt för designen. Den här guiden använder **Sign-up Basic** från fliken **Sign-Up Forms**. Egna mallar som sparats på ditt konto visas under **My Templates**.

**Skapa formulärkomponent**

När inställningar och mall är klara klickar du på **Create Form** för att skapa komponenten.
{% endstep %}

{% step %}
### Formulärredigeraren

När du klickat på **Create Form** öppnas redigeraren. Menyn till vänster låter dig lägga till formulärobjekt, nå verktyg och ändra inställningar. Resten av sidan visar formulärets innehåll, importerat från mallen.

Innehållet består av innehållsblock som kallas formulärobjekt, som du redigerar var för sig i följande steg.

<div data-with-frame="true"><img src="../../../assets/basics-creating-form/cf_edit_view.png" alt="Formulärredigeraren med formulärobjekt och vänstermeny"></div>
{% endstep %}

{% step %}
### Ändra introduktionstexten

Det första formulärobjektet i de flesta mallar är ett Rich Text-block där du kan introducera formuläret eller lägga till relevant information som datum, tider och platser.

För att redigera ett formulärobjekt klickar du antingen på dess **Edit**-knapp eller dubbelklickar på själva blocket. En popup öppnas där du kan ändra text, frågor eller svar.

<div data-with-frame="true"><img src="../../../assets/basics-creating-form/cf_edit_richtext.png" alt="Popup för redigering av Rich Text-block"></div>
{% endstep %}

{% step %}
### Justera Registration-blocket

Registration-blocket är det viktigaste blocket i alla formulär som inte samlar anonyma svar. Det sparar besökarens kontaktinformation tillsammans med deras inlämning och matchar mot din eMarketeer-kontaktdatabas — uppdaterar ett befintligt kontaktkort eller skapar en ny kontakt om ingen finns.

<div data-with-frame="true"><img src="../../../assets/basics-creating-form/cf_registration.png" alt="Registration-blockets alternativ med fältväljare för kontaktuppgifter"></div>

Vad du kan fråga efter i Registration-blocket är kopplat till fälten på ett kontaktkort. Du väljer vilka fält som ska efterfrågas och vilka som är obligatoriska. Registration-blocket frågar alltid efter besökarens e-postadress, eftersom det är ett obligatoriskt fält på ett kontaktkort.
{% endstep %}

{% step %}
### De vanligaste formulärobjekten

Det här steget går igenom de grundläggande frågetyperna så att du kommer igång.

* **Radio button:** En fråga med flera fördefinierade svar där besökaren väljer _ett_.
* **Checkbox:** En fråga med flera fördefinierade svar där besökaren kan välja _flera_.
* **Textbox:** En fråga där besökaren kan skriva valfritt textsvar. Använd för längre svar.
* **Multi Text:** Ett formulärobjekt med flera korta textfrågor. Använd för korta svar.
* **Consent:** En kryssruta med text du själv väljer. Att markera den uppdaterar Consent-inställningen på besökarens kontaktkort — användbart när du behöver uttryckligt samtycke för att lagra kontaktinformation.

Du hittar dessa frågetyper i menyn Add Form Item uppe till vänster i formulärredigeraren.
{% endstep %}

{% step %}
### Ställ in tacksidan

Efter att en besökare skickat in formuläret omdirigeras de till tacksidan som bekräftar att deras svar sparats. Standardtacksidan innehåller ett enda textblock som du kan redigera så det passar ditt formulär. Öppna inställningarna för tacksidan genom att klicka på **Thank You Page** i vänstermenyn.

<div data-with-frame="true"><img src="../../../assets/basics-creating-form/cf_thank_you_page.png" alt="Inställningar för tacksida med alternativ för hostad sida och anpassad URL"></div>

Du har två alternativ: en hostad tacksida eller en anpassad URL. Den hostade sidan är standard — ändra texten så är du klar. Använd en anpassad URL om du vill omdirigera besökare till en specifik sida, till exempel en på din egen webbplats.

För att redigera texten som visas på den hostade sidan klickar du på **Edit** som visas ovan.
{% endstep %}

{% step %}
### Använd en bekräftelsesida (valfritt)

Vi rekommenderar inte att du använder funktionen om du inte behöver den, men för längre enkäter kan du vilja låta besökare granska sina svar innan de skickar in. Bekräftelsesidan visar deras svar och ger dem två val: **Edit** för att ändra svaren eller **Finish** för att skicka in.

<div data-with-frame="true"><img src="../../../assets/basics-creating-form/cf_confirmation_page.png" alt="Inställningar för bekräftelsesida med alternativen Edit och Finish"></div>

När den är aktiv visas bekräftelsesidan efter att besökaren gått vidare från formuläret. Besökaren måste klicka på **Finish** för att bekräfta. De omdirigeras sedan till tacksidan och, om det är inställt, skickas ett bekräftelsemejl.
{% endstep %}

{% step %}
### Konfigurera ett bekräftelsemejl (valfritt)

Inställningarna för bekräftelsemejl låter dig skicka en kopia av varje inlämning till en angiven e-postadress, och skicka en kopia av svaren tillbaka till personen som lämnade in dem.

<div data-with-frame="true"><img src="../../../assets/basics-creating-form/cf_confirmation_email.png" alt="Inställningar för bekräftelsemejl med fält för avsändare och ämne"></div>

Alternativ:

* **Activate Confirmation Email:** Slå på funktionen för det här formuläret.
* **Send to responding contact:** Skicka en bekräftelse med svaren till kontakten.
* **Send to specific e-mail:** Skicka en kopia av varje inlämning till dig själv eller en kollega.
* **Add Edit Link in e-mail:** Låt kontakten gå tillbaka och redigera sina svar senare. Rekommenderas inte i de flesta fall.
* **Sender Name:** Avsändarnamnet som visas i mottagarens e-postklient.
* **Sender E-mail Address:** Avsändaradressen som visas i mottagarens e-postklient.
* **Email Subject:** Ämnesraden som visas i mottagarens e-postklient.
{% endstep %}

{% step %}
### Publicera ditt formulär

När formuläret är klart har du några alternativ för att dela det.

<div data-with-frame="true"><img src="../../../assets/basics-creating-form/cf_publish_page.png" alt="Publiceringssida med alternativ för Direct URL, Website Integration och E-mail"></div>

Publiceringssidan för ett formulär

* **Direct URL:** En direktlänk till formuläret. Dela den med kollegor, publicera på sociala medier eller länka från din webbplats. När du klickar på alternativet visas länken i en popup — kopiera den därifrån. Besök inte länken och kopiera från webbläsarens adressfält: varje besökare får en unik URL avsedd bara för dem.
* **Website Integration:** HTML-kod och skript för att bädda in formuläret på din egen webbplats. Vår support kan inte alltid hjälpa till med problem här eftersom det implementeras utanför eMarketeer. Hoppa över det här alternativet om du inte är van vid den här typen av integration.
* **E-mail:** Länka till formuläret från ett mejl. Se länkningsavsnittet i [Skapa din första e-post](basics-creating-email.md).
{% endstep %}
{% endstepper %}
