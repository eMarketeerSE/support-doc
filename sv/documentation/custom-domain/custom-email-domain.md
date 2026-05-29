---
description: >-
  Steg-för-steg-instruktioner för att autentisera din e-postdomän i eMarketeer genom att lägga till DNS-poster för SPF, DKIM och DMARC.
---

# Använda din egen e-postdomän med eMarketeer

Den här artikeln går igenom hur du autentiserar din egen e-postdomän i eMarketeer i tre steg.

Att skicka e-post från din egen domän krävs för att skicka e-post genom eMarketeer. Det ger dig också bästa leveransbarhet, trovärdighet och respons från dina mottagare. För att autentisera lägger du till DNS-poster som bevisar att e-posten är auktoriserad av ditt företag och inte är bedräglig. eMarketeer stödjer validering med SPF, DKIM och DMARC.

När en domän är autentiserad kan du använda den som Från-adress i dina meddelanden. Domänen används också som return-path, vilket är i linje med DMARC.

Om detta låter för tekniskt, följ stegen nedan. eMarketeer kan också generera ett färdigskrivet e-postmeddelande som du kan vidarebefordra till din IT-avdelning.

### 1. Gå till inställningarna för e-postdomäner

Gå till dina [inställningar för e-postdomän](https://app.emarketeer.com/corporate/gui/account/customize/domain/new.php). Du måste vara inloggad i eMarketeer som administratör för att länken ska fungera. Du kan också nå inställningarna genom att gå till "Account settings" > "Email domains" i eMarketeer.

### 2. Lägg till en domän

Klicka på "Add a domain" och skriv den domän du vill använda, till exempel `yourcompany.com`. Klicka på "Add". Du behöver inte lägga till `www` före domännamnet.

<div data-with-frame="true" data-align="left"><img src="../../../assets/custom-email-domain/Skarmavbild-2024-03-21-kl.-09.58.27.png" alt="Dialog för att lägga till en domän"></div>

### 3. Uppdatera dina DNS-poster

eMarketeer visar en lista över poster som måste läggas till i din DNS. När posterna är tillagda klickar du på "Authenticate".

<div data-with-frame="true" data-align="left"><img src="../../../assets/custom-email-domain/Skarmavbild-2024-03-21-kl.-09.58.42.png" alt="DNS-poster att lägga till för den nya domänen"></div>

### Fråga din IT-avdelning

Om du inte har åtkomst till din DNS klickar du på länken "Generate email" längst ner i dialogen. Ett färdigskrivet e-postmeddelande med posterna öppnas, redo att skickas till den som hanterar domäner på ditt företag — vanligtvis någon på IT.

När posterna har lagts till korrekt markeras de gröna efter att du klickat på "Authenticate". DNS-ändringar sprids ofta snabbt, men kan ta upp till 48 timmar. Efter autentisering kan du skicka e-post från din domän.

<div data-with-frame="true" data-align="left"><img src="../../../assets/custom-email-domain/SCR-20240321-jgsz.png" alt="Autentiserad domän med grönmarkerade DNS-poster"></div>

### Obligatoriska och valfria fält

De obligatoriska fälten är DKIM och SPF. Utan dessa misslyckas meddelanden i kontroller av spamfilter.

De valfria fälten är DMARC och Email From. Dessa skyddar dina meddelanden ytterligare och säkerställer att DMARC går igenom. Email From använder din egen domän som return-path för meddelandet (men adressen tas fortfarande emot av eMarketeer).
