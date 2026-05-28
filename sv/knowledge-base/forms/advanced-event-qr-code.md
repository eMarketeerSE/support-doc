---
description: >-
  Hur du genererar en kontaktspecifik QR-kod som skickar en e-postadress till
  ett formulär och möjliggör automatisk event-närvaro-registrering vid scanning.
---

# Formulärspecifik QR-kodgenerering för att skanna närvaro på event (avancerat)

Den här guiden visar hur du bygger en QR-kod som, när den skannas, skickar kontaktens e-post till ett specifikt eMarketeer-formulär för att registrera närvaro på ett event.

Standardgeneratorn för QR-koder kan skapa en QR-kod från valfritt kontaktfält. Den här avancerade varianten pekar koden mot en URL för formulärmottagare, så att skanning av koden automatiskt registrerar kontakten. Lite kunskap om HTML och URL:er hjälper innan du börjar.

* * *

### Det här behöver du för att börja

Du behöver ett formulär på ditt konto där deltagande kontakter ska registreras. Du kommer att hämta två värden ur formulärets integrationskod för webbplats för att bygga QR-URL:en.

URL:en för QR-kodgenerering ser ut så här:

`https://app.emarketeer.com/library/qrcode/php/qr_img.php?s=6&d=https://app.emarketeer.com/ext/form/receiver.php?m=M_VALUE%26NAME_VALUE=<% contact field="email" %>`

Platshållarna `M_VALUE` och `NAME_VALUE` är det du ersätter med värden från ditt formulär.

### Hämta M-värdet och NAME-värdet från formuläret

Öppna rapportsidan för det formulär där närvaron ska registreras och öppna sedan formulärets integrationskod för webbplats.

<div data-with-frame="true"><img src="../../../assets/advanced-event-qr-code/formintegrationcodeguide.png" alt="Steg-för-steg-illustration av hur du hittar formulärets integrationskod"></div>

Guide till formulärets integrationskod

1. Klicka på **Publish Form** i vänstermenyn för att öppna publiceringsalternativen.
2. Klicka på **Website Integration** på publiceringssidan.
3. Under `<FORM>`, skriv valfri domän i domänfältet och tryck på Enter. Till exempel `emarketeer.com`.
4. Klicka på knappen **Get Code**.

Hitta sedan de två värdena i integrationskoden. M-värdet identifierar formuläret. NAME-värdet identifierar den specifika frågan — i det här fallet den fråga som lagrar kontaktens e-postadress. Leta efter:

- `<input type="hidden" name="m" value="M-Value">`
- `<input type="email" name="NAME-Value">`

<div data-with-frame="true"><img src="../../../assets/advanced-event-qr-code/mandnamevalueforform.png" alt="Formulärets integrationskod med m-värdet och name-värdet markerade"></div>

M-värdet och NAME-värdet

Exempelvärden:
- M-värde: `353750ae84ccbd4692021cd1e93a90145287fee`
- NAME-värde: `query_2027106_16_3`

### Bygg QR-kodens URL

Ersätt platshållarna i QR-kodens URL med värdena från ditt formulär. Utgå från den här mallen:

`https://app.emarketeer.com/library/qrcode/php/qr_img.php?s=6&d=https://app.emarketeer.com/ext/form/receiver.php?m=M_VALUE%26NAME_VALUE=<% contact field="email" %>`

Den färdiga URL:en ser ut så här:

`https://app.emarketeer.com/library/qrcode/php/qr_img.php?s=6&d=https://app.emarketeer.com/ext/form/receiver.php?m=353750ae84ccbd4692021cd1e93a90145287fee%26query_2027106_16_3=<% contact field="email" %>`

### Använd QR-kodens URL

Klistra in URL:en i en bildkomponent i ett mejl eller en appkomponent som om det vore en vanlig bild-URL. När mejlet eller appen distribueras får varje kontakt en unik QR-kod som innehåller dennes e-postadress. Skanning av koden registrerar dem till formuläret.

För att använda URL:en på en appkomponents QR-kodsida behöver du Developer-behörighet på ditt användarkonto. Aktivera Developer Mode på appens redigeringssida, öppna QR-kodblocket, växla till HTML-fliken och ersätt standard-URL:en för QR-koden i HTML-koden med din nya.
