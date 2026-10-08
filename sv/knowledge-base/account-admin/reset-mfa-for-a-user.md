---
description: >-
  Så återställer en administratör multifaktorautentisering (MFA) för en
  användare, till exempel när användaren har bytt till en ny telefon. Användare
  som inte är administratörer behöver be en administratör på kontot.
---

# Återställ MFA för en användare (administratör)

Den här guiden visar hur en administratör återställer multifaktorautentisering (MFA) för en användare på kontot.

En återställning behövs när en användare inte längre kan logga in med sin authenticator-app. Den vanligaste orsaken är att användaren har bytt till en ny telefon. Efter återställningen kan användaren konfigurera MFA igen på den nya telefonen.

## Återställ MFA

1. Klicka på kugghjulsikonen uppe till höger, välj **Account Settings** och öppna **Users & Teams**.
2. Leta upp användaren på fliken **User Accounts** och klicka på redigeringsikonen (pennan) längst till höger på användarens rad.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/reset-mfa-for-a-user-edit-icon.png" alt="Listan User Accounts med redigeringsikonen på en användares rad markerad"></div>

3. Klicka på **Reset MFA for** följt av användarens förnamn i dialogen **Edit User**.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/reset-mfa-for-a-user-reset-mfa-button.png" alt="Dialogen Edit User med Reset MFA for Emma markerad"></div>

Återställningen sker direkt. Ett meddelande bekräftar att MFA-inställningarna har återställts för användaren.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/reset-mfa-for-a-user-success-message.png" alt="Bekräftelsemeddelande om att MFA-inställningarna har återställts för användaren"></div>

## Vad händer sedan

Nästa gång användaren loggar in konfigurerar den MFA igen med sin authenticator-app på den nya telefonen. Skicka stegen i [Användarguide: Aktivera Multi-Factor-inloggning](user-accounts.md) till användaren.

## Om du inte är administratör

Bara en administratör på ditt konto kan återställa MFA. Om du har bytt telefon eller förlorat åtkomsten till din authenticator-app ber du en administratör på ditt konto att återställa din MFA.

Om du sparade din återställningskod när du konfigurerade MFA kan du använda den för att logga in under tiden. Se [Nästa gång du loggar in](user-accounts.md#nästa-gång-du-loggar-in).
