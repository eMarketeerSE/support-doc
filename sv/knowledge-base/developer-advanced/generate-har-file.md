# Skapa en HAR-fil för supporten

En HAR-fil registrerar varje nätverksdetalj i din webbläsare medan du återskapar ett problem i eMarketeer, vilket hjälper supporten att diagnostisera problemet.

Om supporten ber om en HAR-fil öppnar du eMarketeer på platsen där problemet uppstår, startar inspelningen, återskapar problemet och sparar sedan och skickar filen.

#### För webbläsaren Chrome

1. Öppna Chrome och gå till sidan där problemet uppstår.

2. Klicka på ⋮-menyn och välj More Tools > Developer Tools.

3. I panelen som öppnas väljer du fliken Network. Håll panelen öppen medan du återskapar problemet.

![Chrome DevTools med Network-fliken öppen](../../../assets/generate-har-file/SCR-20240522-jbvs.png)

4. Rensa loggarna innan du återskapar problemet genom att klicka på rensa-knappen.

![knappen för att rensa nätverksloggar i DevTools](../../../assets/generate-har-file/SCR-20240522-jcfi.png)

5. Leta efter den runda inspelningsknappen längst upp till vänster på fliken. Se till att den är röd. Om den är grå klickar du på den en gång för att starta inspelningen.

![röd inspelningsknapp aktiv på Network-fliken](../../../assets/generate-har-file/SCR-20240522-jcqt.png)

6. Om den inte är det kryssar du i rutan Preserve log.

![kryssrutan Preserve log på Network-fliken](../../../assets/generate-har-file/SCR-20240522-jupc.png)

7. Återskapa problemet medan nätverksanrop spelas in.

8. Klicka på nedladdningsknappen, Export HAR, och spara filen till din dator som HAR with Content.

![alternativet Export HAR i nedladdningsmenyn](../../../assets/generate-har-file/SCR-20240522-jdas.png)

9. Ladda upp HAR-filen till ditt ärende hos eMarketeer Support för vidare utredning.
