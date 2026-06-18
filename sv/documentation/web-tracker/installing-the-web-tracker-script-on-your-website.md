---
description: >-
  Installera eMarketeer Web Tracker på din webbplats så att du kan se vilka
  sidor dina kontakter besöker.
---

# Installera Web Tracker-skriptet på din webbplats

Den här guiden går igenom både den rekommenderade mallen för Google Tag Manager och en manuell installation. Du behöver inte vara teknisk — följ stegen i ordning. När du är klar, [installera även formulärets basskript på din webbplats](../forms/publish-a-form.md).

## Hämta ditt Tracker ID och skript

Innan du börjar behöver du ditt unika Tracker ID och skript.

1. Logga in på ditt eMarketeer-konto.
2. Gå till [Tracker Settings](https://app.emarketeer.com/corporate/gui/account/integrations/tracker.php). Du måste vara administratör för att komma åt den här sidan.
3. Kopiera ditt Tracker ID och skript. Du behöver dem under installationen.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/Screenshot-2026-01-13-132700-1024x128.png" alt="Sidan Tracker Settings som visar Tracker ID och skript"></div>

## Alternativ 1: Enkel installation (rekommenderas)

Använd detta alternativ om din webbplats kör Google Tag Manager (GTM) tillsammans med en samtyckesbanderoll för cookies.

Vi tillhandahåller en färdig mallfil som du kan importera direkt till GTM.

{% stepper %}
{% step %}
### Ladda ner mallfilen

{% file src="../../../.gitbook/assets/emarketeer-tracker.tpl" %}
{% endfile %}

Mallen är kompatibel med fler än tio av de vanligaste samtyckesplattformarna för cookies, inklusive CookieBot och CookieYes.
{% endstep %}
{% step %}
### Öppna Google Tag Manager

Logga in på [Google Tag Manager](https://tagmanager.google.com) och välj din webbplats container.
{% endstep %}
{% step %}
### Lägg till eMarketeer-taggmallen

1. I vänstermenyn, gå till Templates, sedan Tag Templates, sedan New.
2. Klicka på Import, välj `.tpl`-filen du laddade ner och klicka på Save.
{% endstep %}
{% step %}
### Skapa taggen med mallen

1. Gå till Tags, sedan New.
2. Klicka på Tag Configuration och välj "eMarketeers Tracker Helper" (mallen du just lade till).
3. Ange ditt Tracker ID när du ombeds.
4. Godkänn eventuella efterfrågade behörigheter.
{% endstep %}
{% step %}
### Publicera din container

Publicera din container i GTM.
{% endstep %}
{% endstepper %}

Trackern är nu igång och respekterar din samtyckesbanderoll.

## Alternativ 2: Manuell installation

Om du vill installera eMarketeers Web Tracker på något annat sätt, använd basskriptet nedan.

```html
<script type="application/javascript" src="https://app.emarketeer.com/public/scripts/t.js"></script>
<script>
   emtv2.init('YOUR TRACKER ID');
   emtv2.start(); //Only run when you get or already have consent.
   emtv2.stop(); //Run this if the visitor opts out.
</script>
```

Du kan implementera detta skript i vilket system som helst: en tag manager, din webbplats egna skript eller din samtyckesplattform. Kör det på varje sida du vill spåra.

Din uppgift är att anropa `start()` så snart du har samtycke. Om du inte har samtycke, anropa det inte. Om besökaren tidigare gav samtycke och sedan väljer bort spårning, anropa `stop()`.

## Behöver du hjälp?

Om du fastnar, kontakta oss på [support@emarketeer.com](mailto:support@emarketeer.com) så hjälper vi dig att slutföra installationen.
