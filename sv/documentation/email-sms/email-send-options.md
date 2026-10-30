---
description: >-
  Steg 2 i ett e-postutskick, Send Options, styr vem som får mejlet och vem som
  utesluts. Läs vad varje mottagarkälla, exkludering och samtyckesval gör.
---

# Utskicksalternativ för e-post

Send Options är steg 2 när du skickar e-post. Där ser du vem mejlet går till, och du kan filtrera bort kontakter innan du skickar.

De flesta enkla utskick fungerar med standardinställningarna. Använd alternativen här när du skickar till flera mottagarkällor, skickar en påminnelse eller behöver styra samtycket.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/email-send-options-send-options-page.png" alt="Steget Send Options med numrerade markeringar på mottagarkällorna, Add recipients, panelerna Exclusions och Consent samt knappen Preview email"></div>

## Mottagarkällor

Varje mottagarkälla du lägger till får en egen rad (1). Raden visar antalet kontakter i källan och dess typ:

* **Send to** skickar mejlet till kontakterna i källan.
* **Block** ser till att ingen av kontakterna i källan får mejlet, även om de också finns i en annan mottagarkälla. Det är användbart när du skickar påminnelser. Se [Så skickar du påminnelsemejl](../../knowledge-base/email-content/configuring-reminder-email.md).

Klicka på papperskorgsikonen på en rad för att ta bort mottagarkällan från utskicket.

Klicka på **Add recipients** (2) under listan för att lägga till fler mottagarkällor.

## Exkluderingar

Använd exkluderingarna (3) för att filtrera bort kontakter innan du skickar. På nästa sida, checklistan, kan du granska vilka kontakter som exkluderas. Se [Förstå checklistan för e-post](../../knowledge-base/reports/checklist-explained.md).

* **Exclude duplicate e-mail addresses:** om utskicket innehåller flera kontakter med samma e-postadress får bara en av dem mejlet. Samma kontakt i flera mottagarkällor räknas alltid som en kontakt.
* **Exclude inactive recipients:** utesluter kontakter som inte har interagerat med dina mejl på över ett år. Se [Exkludera inaktiva mottagare](exclude-inactive-recipients.md).
* **Exclude recipients who previously got this e-mail:** om den här e-postkomponenten har skickats tidigare blockeras de kontakter som fick ett tidigare utskick.

Ett exempel: du skickar mejlet till en lista med 100 kontakter. Dagen efter läggs 5 nya adresser till i listan. Skicka mejlet till hela listan med 105 kontakter och markera rutan, så blockeras de 100 kontakter som redan har fått mejlet.

## Samtycke

Samtyckesinställningen (4) avgör om utskicket tar hänsyn till kontakternas marknadsföringssamtycke. **Marketing sendout** utesluter kontakter som har återkallat sitt samtycke till marknadsföring. **Transactional** skickar mejlet oavsett marknadsföringssamtycke. Se [Transaktionella utskick](transactional-sendouts.md).

{% hint style="warning" %}
Välj alltid **Marketing sendout**, om inte mejlet är något annat än marknadsföring. Felaktig användning av **Transactional** skadar ditt avsändarrykte.
{% endhint %}

## Förhandsgranska mejlet

Klicka på **Preview email** (5) för att förhandsgranska mejlet för varje tillagd mottagare. Det är ett bra sätt att kontrollera att personaliseringen fungerar innan du skickar.
