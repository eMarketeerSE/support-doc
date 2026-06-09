---
icon: gear
description: >-
  En checklista med de viktigaste stegen för att få ditt eMarketeer-konto redo — från domänautentisering till integrationer.
---

# Kontoinställning

Att konfigurera ditt konto innebär ett antal engångssteg. En e-postdomän krävs innan du kan skicka; övriga steg är valfria men utökar vad plattformen kan göra för dig.

{% hint style="info" %}
Många av alternativen i den här checklistan är bara tillgängliga för användare med administratörsrollen.
{% endhint %}

{% stepper %}
{% step %}
### Fyll i företagsuppgifterna

Fyll i dina företagskontaktuppgifter och ladda upp din logotyp under **Konto → Företagsinställningar**. Den här informationen används i systemmeddelanden som skickas från eMarketeer.
{% endstep %}

{% step %}
### Bjud in användare

Lägg till alla i ditt team som behöver tillgång till eMarketeer. Varje person får sin egen inloggning och du styr deras behörigheter under inbjudningsprocessen.

[Så bjuder du in användare till ditt konto](../knowledge-base/account-admin/invite-user-account.md)

Fundera på om du vill aktivera multifaktorautentisering för hela kontot. Det lägger till ett andra verifieringssteg för alla användare vid inloggning, vilket minskar risken för obehörig åtkomst.

[Multifaktorautentisering](../documentation/accounts-auth/multi-factor-authentication.md)
{% endstep %}

{% step %}
### Lägg till en e-postdomän

Att autentisera din avsändardomän krävs innan du kan skicka e-post från eMarketeer. Det förbättrar också levererbarheten genom att bevisa för mottagande e-postservrar att eMarketeer är behörigt att skicka för din räkning.

Börja med det här steget tidigt — DNS-ändringar hanteras ofta av en IT-avdelning eller hostingpartner som kan behöva planera in arbetet. Övriga inställningar kan fortsätta under tiden.

[Lägg till e-postdomän](../knowledge-base/email-deliverability/authorize-email-domain.md)
{% endstep %}

{% step %}
### Lägg till en anpassad domän

En anpassad domän ersätter standardvärdsnamnet `app.emarketeer.com` i de länkar eMarketeer genererar — inklusive formulär-URL:er, landningssidors länkar och e-postspårningslänkar. Det håller ditt varumärke konsekvent och tar bort eMarketeers värdnamn från kontakternas synliga länkar.

[Anpassad domän](../knowledge-base/account-admin/domains.md)
{% endstep %}

{% step %}
### Lägg till webbplatsskript

Installera två skript på din webbplats för att koppla den till eMarketeer. **Formulärbassskriptet** krävs på alla sidor där du vill bädda in ett formulär. **Web Tracker** registrerar sidbesök och kopplar dem till identifierade kontakter — vilket ger dig insyn i vilka sidor en kontakt har besökt.

Konfigurera Web Tracker så tidigt som möjligt — när den väl är installerad börjar den samla in data direkt, och den historiken blir värdefull så snart du börjar skicka kampanjer.

[Webbplatsintegrering](website-integration.md)
{% endstep %}

{% step %}
### Konfigurera anpassade fält

Anpassade fält utökar kontaktkortet med data specifik för din verksamhet — till exempel bransch, kundnivå eller region. Använd dem för att segmentera databasen mer precist och för att personalisera e-post- och formulärinnehåll.
{% endstep %}

{% step %}
### Integrera ditt CRM

Att koppla eMarketeer till ditt CRM håller marknadsförings- och säljdata synkroniserade. Kontaktdata, samtycken och engagemangsignaler flödar automatiskt mellan de två systemen — vilket ger ditt säljteam aktuell marknadsföringsinformation utan manuella exporter.

Tillgängliga integrationer:

* [SuperOffice](../documentation/superoffice/superoffice.md)
* [Microsoft Dynamics 365](../documentation/dynamics-365/dynamics.md)
{% endstep %}

{% step %}
### Koppla sociala medier-annonsering

eMarketeer kan ta emot leadinlämningar direkt från annonskampanjer på sociala medier. Varje inlämning skapar eller uppdaterar en kontakt, sätter ett lead score och kan utlösa en Journey — ingen manuell CSV-import behövs.

Tillgängliga integrationer:

* [Facebook Lead Forms](../documentation/lead-forms/facebook-lead-forms.md)
* [LinkedIn Lead Gen Forms](../documentation/lead-forms/linkedin-lead-gen-forms.md)
{% endstep %}

{% step %}
### Skapa komponentmallar

Alla komponenter — e-post, formulär och webbsidor — kan sparas som mallar för framtida återanvändning. Om du vill ha mallar byggda utifrån din varumärkesdesign kan en eMarketeer-konsult hjälpa dig med det.

Kom igång med att skapa komponentmallar i våra guider för [Kampanjgrunder](../knowledge-base/getting-started/campaign-basics.md).
{% endstep %}
{% endstepper %}
