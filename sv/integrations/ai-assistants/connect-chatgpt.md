---
description: Koppla ChatGPT till ditt eMarketeer-konto på ungefär två minuter.
---

# Koppla ChatGPT till eMarketeer

Koppla ChatGPT till ditt eMarketeer-konto på ungefär två minuter.

ChatGPT kallar en sådan koppling för ett plugin. Du lägger till det en gång, och det fungerar i alla dina chattar.

## Innan du börjar

- Du loggar in i eMarketeer med din e-postadress och ditt lösenord. Inloggning med Microsoft eller SuperOffice fungerar inte med kopplingen.
- Din ChatGPT-plan tillåter anpassade MCP-servrar. I en företagsarbetsyta kan en administratör behöva tillåta dem först.
- Du har kopplingens adress:

```
https://mcp.emarketeer.com/mcp
```

## Anslut

1. Välj **Plugins** i sidofältet i ChatGPT.
2. Välj **Add** och sedan **Add custom MCP server**.
3. Skriv **eMarketeer** som **Name** och klistra in kopplingens adress som **Server URL**.
4. Låt **Authentication** stå på **OAuth**. ChatGPT hittar resten av inställningarna själv.
5. Kryssa i **I understand and want to continue** och välj sedan **Create as a plugin**.
6. Välj **Continue to eMarketeer**. eMarketeers inloggningssida öppnas.
7. Logga in med din e-postadress och ditt lösenord för eMarketeer. Om du använder MFA verifierar du inloggningen enligt instruktionerna.
8. På sidan **Authorize App** kontrollerar du att domänen är chatgpt.com och väljer **Accept**.

## Kontrollera att det fungerar

Starta en ny chatt och fråga:

> Vilka eMarketeer-konton har jag åtkomst till via eMarketeer-pluginet?

ChatGPT listar kontona du tillhör.

## Om du har flera konton

Ange kontot i din fråga, till exempel: "För kontot Acme Nordic, hur gick våra e-postutskick förra månaden?"

## Koppla från

1. Öppna **Settings** i ChatGPT och välj **Plugins**.
2. Välj eMarketeer och sedan **Uninstall**.

ChatGPT kan inte längre använda ditt eMarketeer-konto.

## Vad du gör sedan

- Prova [exempelfrågorna](README.md#exempel).
- Fungerar något inte? Se [AI-assistenter: felsökning](troubleshooting.md).
