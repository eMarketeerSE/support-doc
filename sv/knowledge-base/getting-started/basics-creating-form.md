# Skapa ditt första formulär (Legacy)

Den här guiden tar dig genom hur du skapar ett formulär i eMarketeer — för eventanmälan, nyhetsbrevsregistrering eller någon annan användning.

När du är klar har du ett fungerande formulär med en tacksida och ett valfritt bekräftelsemejl.

* * *

### 1. Lägg till formuläret från kampanjsidan

Klicka på **Add Form** från kampanjen där du vill skapa formuläret.

- Om du behöver skapa kampanjen först, se [Så här skapar du en ny kampanj](https://support.emarketeer.com/knowledgebase/create-new-campaign/).

![Knappen Add Form på kampanjsidan](../../../assets/basics-creating-form/cf1.png)

Knappen Add Form

### 2. Fyll i inställningar, välj en mall och skapa formuläret

![Dialog för formulärinställningar och val av mall](../../../assets/basics-creating-form/cf2.png)

Formulärinställningar

#### Inställningar

- **Name your form:** Ge formuläret ett unikt namn så att du hittar det senare. Beskriv syftet i kampanjen — till exempel "Anmälan" för ett anmälningsformulär. Bara du ser namnet; det visas inte för besökarna.

#### Mall

Välj en mall från någon av flikarna som utgångspunkt för designen. Den här guiden använder **Sign-up Basic** från fliken **Sign-Up Forms**. Egna mallar som sparats på ditt konto visas under **My Templates**.

#### Skapa formulärkomponent

När inställningar och mall är klara klickar du på **Create Form** för att skapa komponenten.

### 3. Formulärredigeraren

När du klickat på **Create Form** öppnas redigeraren. Menyn till vänster låter dig lägga till formulärobjekt, nå verktyg och ändra inställningar. Resten av sidan visar formulärets innehåll, importerat från mallen.

Innehållet består av innehållsblock som kallas formulärobjekt, som du redigerar var för sig i följande steg.

![Formulärredigeraren med formulärobjekt och vänstermeny](../../../assets/basics-creating-form/cf_edit_view.png)

Vy över formulärredigering

### 4. Ändra introduktionstexten

Det första formulärobjektet i de flesta mallar är ett Rich Text-block där du kan introducera formuläret eller lägga till relevant information som datum, tider och platser.

För att redigera ett formulärobjekt klickar du antingen på dess **Edit**-knapp eller dubbelklickar på själva blocket. En popup öppnas där du kan ändra text, frågor eller svar.

![Popup för redigering av Rich Text-block](../../../assets/basics-creating-form/cf_edit_richtext.png)

Redigera ett Rich Text-block

### 5. Justera Registration-blocket

Registration-blocket är det viktigaste blocket i alla formulär som inte samlar anonyma svar. Det sparar besökarens kontaktinformation tillsammans med deras inlämning och matchar mot din eMarketeer-kontaktdatabas — uppdaterar ett befintligt kontaktkort eller skapar en ny kontakt om ingen finns.

![Registration-blockets alternativ med fältväljare för kontaktuppgifter](../../../assets/basics-creating-form/cf_registration.png)

Alternativ för formulärobjektet Registration

Vad du kan fråga efter i Registration-blocket är kopplat till fälten på ett kontaktkort. Du väljer vilka fält som ska efterfrågas och vilka som är obligatoriska. Registration-blocket frågar alltid efter besökarens e-postadress, eftersom det är ett obligatoriskt fält på ett kontaktkort.

### 6. De vanligaste formulärobjekten

Den här artikeln går igenom de grundläggande frågetyperna så att du kommer igång.

- **Radio button:** En fråga med flera fördefinierade svar där besökaren väljer _ett_.
- **Checkbox:** En fråga med flera fördefinierade svar där besökaren kan välja _flera_.
- **Textbox:** En fråga där besökaren kan skriva valfri textsvar. Använd för längre svar.
- **Multi Text:** Ett formulärobjekt med flera korta textfrågor. Använd för korta svar.
- **Consent:** En kryssruta med text du själv väljer. Att markera den uppdaterar Consent-inställningen på besökarens kontaktkort — användbart när du behöver uttryckligt samtycke för att lagra kontaktinformation.

Du hittar dessa frågetyper i menyn Add Form Item uppe till vänster i formulärredigeraren.

### 7. Ställ in tacksidan

Efter att en besökare skickat in formuläret omdirigeras de till tacksidan som bekräftar att deras svar sparats. Standardtacksidan innehåller ett enda textblock som du kan redigera så det passar ditt formulär. Öppna inställningarna för tacksidan genom att klicka på **Thank You Page** i vänstermenyn.

![Inställningar för tacksida med alternativ för hostad sida och anpassad URL](../../../assets/basics-creating-form/cf_thank_you_page.png)

Alternativ för tacksidan

Du har två alternativ: en hostad tacksida eller en anpassad URL. Den hostade sidan är standard — ändra texten så är du klar. Använd en anpassad URL om du vill omdirigera besökare till en specifik sida, till exempel en på din egen webbplats.

För att redigera texten som visas på den hostade sidan klickar du på **Edit** som visas ovan.

### 8. Använd en bekräftelsesida (valfritt)

Vi rekommenderar inte att du använder funktionen om du inte behöver den, men för längre enkäter kan du vilja låta besökare granska sina svar innan de skickar in. Bekräftelsesidan visar deras svar och ger dem två val: **Edit** för att ändra svaren eller **Finish** för att skicka in.

![Inställningar för bekräftelsesida med alternativen Edit och Finish](../../../assets/basics-creating-form/cf_confirmation_page.png)

Alternativ för bekräftelsesidan

När den är aktiv visas bekräftelsesidan efter att besökaren gått vidare från formuläret. Besökaren måste klicka på **Finish** för att bekräfta. De omdirigeras sedan till tacksidan och, om det är inställt, skickas ett bekräftelsemejl.

### 9. Konfigurera ett bekräftelsemejl (valfritt)

Inställningarna för bekräftelsemejl låter dig skicka en kopia av varje inlämning till en angiven e-postadress, och skicka en kopia av svaren tillbaka till personen som lämnade in dem.

![Inställningar för bekräftelsemejl med fält för avsändare och ämne](../../../assets/basics-creating-form/cf_confirmation_email.png)

Alternativ för bekräftelsemejl

Alternativ:

- **Activate Confirmation Email:** Slå på funktionen för det här formuläret.
- **Send to responding contact:** Skicka en bekräftelse med svaren till kontakten.
- **Send to specific e-mail:** Skicka en kopia av varje inlämning till dig själv eller en kollega.
- **Add Edit Link in e-mail:** Låt kontakten gå tillbaka och redigera sina svar senare. Rekommenderas inte i de flesta fall.
- **Sender Name:** Avsändarnamnet som visas i mottagarens e-postklient.
- **Sender E-mail Address:** Avsändaradressen som visas i mottagarens e-postklient.
- **Email Subject:** Ämnesraden som visas i mottagarens e-postklient.

### 10. Publicera ditt formulär

När formuläret är klart har du några alternativ för att dela det.

![Publiceringssida med alternativ för Direct URL, Website Integration och E-mail](../../../assets/basics-creating-form/cf_publish_page.png)

Publiceringssidan för ett formulär

- **Direct URL:** En direktlänk till formuläret. Dela den med kollegor, publicera på sociala medier eller länka från din webbplats. När du klickar på alternativet visas länken i en popup — kopiera den därifrån. Besök inte länken och kopiera från webbläsarens adressfält: varje besökare får en unik URL avsedd bara för dem.
- **Website Integration:** HTML-kod och skript för att bädda in formuläret på din egen webbplats. Vår support kan inte alltid hjälpa till med problem här eftersom det implementeras utanför eMarketeer. Hoppa över det här alternativet om du inte är van vid den här typen av integration.
- **E-mail:** Länka till formuläret från ett mejl. Se länkningsavsnittet i [Skapa din första e-post](https://support.emarketeer.com/knowledgebase/basics-creating-email/).
