---
description: Koppla Claude till ditt eMarketeer-konto på ungefär två minuter.
---

# Koppla Claude till eMarketeer

Koppla Claude till ditt eMarketeer-konto på ungefär två minuter.

Du kopplar en gång på claude.ai. Claudes skrivbordsapp använder samma kopplingar, så det fungerar där också.

## Innan du börjar

- Du loggar in i eMarketeer med din e-postadress och ditt lösenord. Inloggning med Microsoft eller SuperOffice fungerar inte med kopplingen ännu.
- Din Claude-plan tillåter anpassade kopplingar. På en företagsplan kan en administratör behöva lägga till kopplingen för din organisation först. Sedan behöver du bara ansluta.
- Du har kopplingens adress:

```
https://mcp.emarketeer.com/mcp
```

## Anslut

1. Öppna **Settings** i Claude och välj **Connectors**.
2. Välj **Add custom connector**.
3. Skriv **eMarketeer** som namn och klistra in kopplingens adress.
4. Välj **Add**.
5. Välj **Connect** bredvid eMarketeer. eMarketeers inloggningssida öppnas.
6. Logga in med din e-postadress och ditt lösenord för eMarketeer. Om du använder MFA, slutför den.
7. Ge Claude åtkomst till ditt eMarketeer-konto.

## Kontrollera att det fungerar

Starta en ny chatt och fråga:

> Vilka eMarketeer-konton har jag åtkomst till?

Claude listar kontona du tillhör. Om Claude inte använder eMarketeer, öppna verktygsmenyn i chatten och se till att eMarketeer är påslaget.

## Om du har flera konton

Ange kontot i din fråga, till exempel: "För kontot Acme Nordic, hur gick våra e-postutskick förra månaden?"

## Koppla från

1. Öppna **Settings** i Claude och välj **Connectors**.
2. Välj eMarketeer och välj **Disconnect**, eller ta bort kopplingen.

Claude kan inte längre använda ditt eMarketeer-konto.

## Vad du gör sedan

- Prova [exempelfrågorna](README.md#exempel).
- Fungerar något inte? Se [AI-assistenter: felsökning](troubleshooting.md).
