---
description: Koppla Claude till ditt eMarketeer-konto på ungefär två minuter.
---

# Koppla Claude till eMarketeer

Koppla Claude till ditt eMarketeer-konto på ungefär två minuter.

Du kopplar en gång på claude.ai. Claudes skrivbordsapp använder samma kopplingar, så det fungerar där också.

## Innan du börjar

- Du loggar in i eMarketeer med din e-postadress och ditt lösenord. Inloggning med Microsoft eller SuperOffice fungerar inte med kopplingen.
- Din Claude-plan tillåter anpassade kopplingar.
- Du har kopplingens adress:

```
https://mcp.emarketeer.com/mcp
```

Om ditt företag hanterar Claude åt dig följer du Anslut via din organisation nedan. Det gäller dig om Claude säger "Organization owner must add this for the team". Annars följer du Anslut på egen hand.

## Anslut på egen hand

1. Öppna **Customize** i Claude och välj **Connectors**.
2. Välj **+ Add** och sedan **Add custom connector**.
3. Skriv **eMarketeer** som namn och klistra in kopplingens adress som **MCP server URL**. Välj **Continue**.
4. Om Claude visar inloggningsalternativ väljer du **Register automatically**.
5. Välj **Add**.
6. Under **Yours** väljer du eMarketeer och sedan **Connect**. eMarketeers inloggningssida öppnas.
7. Logga in med din e-postadress och ditt lösenord för eMarketeer. Om du använder MFA verifierar du inloggningen enligt instruktionerna.
8. Ge Claude åtkomst till ditt eMarketeer-konto.

## Anslut via din organisation

En ägare av ditt företags Claude-organisation lägger till kopplingen en gång. Alla andra ansluter sedan till den.

Om du är ägaren:

1. Öppna **Organization settings** i Claude och välj **Connectors**.
2. Välj **+ Add** och lägg till en anpassad webbkoppling.
3. Skriv **eMarketeer** som namn och klistra in kopplingens adress. Välj **Continue**.
4. Om Claude visar inloggningsalternativ väljer du **Register automatically**.
5. Välj **Add**.

För att ansluta, som ägare eller annan medlem:

1. Öppna **Customize** i Claude och välj **Connectors**.
2. Välj **Yours** och sedan eMarketeer.
3. Välj **Connect**. eMarketeers inloggningssida öppnas.
4. Logga in med din e-postadress och ditt lösenord för eMarketeer. Om du använder MFA verifierar du inloggningen enligt instruktionerna.
5. Ge Claude åtkomst till ditt eMarketeer-konto.

Lägg inte till en egen kopia av kopplingen. Claude tillåter inte samma adress två gånger i en organisation.

## Kontrollera att det fungerar

Starta en ny chatt och fråga:

> Vilka eMarketeer-konton har jag åtkomst till?

Claude listar kontona du tillhör. Om Claude inte använder eMarketeer väljer du **+** i meddelanderutan, sedan **Connectors**, och ser till att eMarketeer är påslaget.

## Om du har flera konton

Ange kontot i din fråga, till exempel: "För kontot Acme Nordic, hur gick våra e-postutskick förra månaden?"

## Koppla från

1. Öppna **Customize** i Claude och välj **Connectors**.
2. Välj **Yours** och sedan eMarketeer.
3. Välj **Disconnect**.

Claude kan inte längre använda ditt eMarketeer-konto.

## Vad du gör sedan

- Prova [exempelfrågorna](README.md#exempel).
- Fungerar något inte? Se [AI-assistenter: felsökning](troubleshooting.md).
