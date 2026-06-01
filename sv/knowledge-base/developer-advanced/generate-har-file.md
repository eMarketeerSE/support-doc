---
description: >-
  Hur du spelar in en HAR-fil i Chrome som fångar alla nätverksanrop medan du
  återskapar ett problem i eMarketeer.
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
---

# Skapa en HAR-fil för supporten

En HAR-fil registrerar varje nätverksdetalj i din webbläsare medan du återskapar ett problem i eMarketeer, vilket hjälper supporten att diagnostisera problemet.

Om supporten ber om en HAR-fil öppnar du eMarketeer på platsen där problemet uppstår, startar inspelningen, återskapar problemet och sparar sedan och skickar filen.

## För Chrome

{% stepper %}
{% step %}
### Öppna problemsidan

Öppna Chrome och gå till sidan där problemet uppstår.
{% endstep %}

{% step %}
### Öppna Developer Tools

Klicka på ⋮-menyn och välj More Tools > Developer Tools.
{% endstep %}

{% step %}
### Öppna Network-fliken

I panelen som öppnas väljer du fliken Network. Håll panelen öppen medan du återskapar problemet.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/SCR-20240522-jbvs.png" alt="Chrome DevTools med Network-fliken öppen"></div>
{% endstep %}

{% step %}
### Rensa loggarna

Rensa loggarna innan du återskapar problemet genom att klicka på rensa-knappen.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/SCR-20240522-jcfi.png" alt="knappen för att rensa nätverksloggar i DevTools"></div>
{% endstep %}

{% step %}
### Markera inspelningsknappen

Leta efter den runda inspelningsknappen längst upp till vänster på fliken. Se till att den är röd. Om den är grå klickar du på den en gång för att starta inspelningen.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/SCR-20240522-jcqt.png" alt="röd inspelningsknapp aktiv på Network-fliken"></div>
{% endstep %}

{% step %}
### Aktivera Preserve log

Om den inte redan spelar in, kryssa i rutan Preserve log.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/SCR-20240522-jupc.png" alt="kryssrutan Preserve log på Network-fliken"></div>
{% endstep %}

{% step %}
### Återskapa problemet

Återskapa problemet medan nätverksanrop spelas in.
{% endstep %}

{% step %}
### Exportera HAR-filen

Klicka på nedladdningsknappen, Export HAR, och spara filen till din dator som HAR with Content.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/SCR-20240522-jdas.png" alt="alternativet Export HAR i nedladdningsmenyn"></div>
{% endstep %}

{% step %}
### Skicka filen till supporten

Ladda upp HAR-filen till ditt ärende hos eMarketeer Support för vidare utredning.
{% endstep %}
{% endstepper %}
