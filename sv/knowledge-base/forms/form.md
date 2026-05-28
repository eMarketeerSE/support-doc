---
description: >-
  Hur du bäddar in ett eMarketeer-formulär på din webbplats genom att installera Form Base Script och klistra in det genererade kodavsnittet.
---

# Bädda in formulär på din webbplats

Bädda in ett eMarketeer-formulär på din webbplats genom att installera Form Base Script och klistra in formulärets snippet där du vill att det ska visas.

När ett formulär är inbäddat uppdateras eventuella framtida ändringar du gör i eMarketeer automatiskt på din sajt.

## Installera Base Script

Lägg till följande skript på varje sida på din webbplats, eller åtminstone på de sidor som ska visa eMarketeer-formulär. Du behöver bara göra det här en gång.

<script type="application/javascript" src="https://app.emarketeer.com/public/scripts/forms.js"></script>

Enklaste vägen är att läsa in skriptet i headern på din sajt på alla sidor, eller distribuera det via Google Tag Manager.

När skriptet är på plats kan du bädda in valfritt eMarketeer-formulär du skapat.

Notera: Att lägga till det här skriptet påverkar inte din integritetspolicy.

## Bädda in ett formulär på din webbplats

För att bädda in ett formulär, hämta dess kodsnippet från eMarketeer.

1. Öppna formuläret i eMarketeer.
2. Klicka på Publish för att visa kodsnippeten.
3. Klistra in koden där du vill att formuläret ska visas på din webbplats.

Använd ett HTML-block eller det som ditt CMS tillhandahåller för rå markup.

## Översättningar

Om ditt formulär har flera språkversioner, ange språket genom att lägga till `locale` i skriptet.

<script>em\_cta.render("SCRIPT-ID",{ fullPage: true, locale: "en" });</script>

## Förifyll fält

För att fylla i synliga eller dolda frågefält med egen data, lägg till följande kod.

<script>
   em\_cta.render("SCRIPT-ID",{ fullPage: true, locale: "en" });
   em\_cta.setValue('question1', 'My value');
   em\_cta.setValue('toggle1', 'true');
   em\_cta.setValue('checkboxes1', \['Item 1', 'Item 2'\])
</script>

## Styla formuläret

Temabyggaren för formulär täcker vanliga stiländringar, men inte varje detalj. För full kontroll har du två alternativ.

#### Injicera styling

Som standard renderas formuläret i en ShadowDOM, så din sajts CSS kan inte rikta sig mot det. Injicera styling antingen genom att referera till ett stilark (`em_cta.injectExternalStyle`) eller genom att skicka in selektorer direkt (`em_cta.injectInlineStyle`):

em\_cta.injectInlineStyle(':host, :host \* { color: red !important; font-family: "Comic Sans MS", "Comic Sans", cursive !important; } .sd-btn { background-color: black !important; } .sd-element--with-frame { border-radius: 30px; }')

em\_cta.injectExternalStyle('https://yourdomain.com/example.css')

#### Inaktivera ShadowDOM

Du kan stänga av ShadowDOM så att formuläret inte renderas i sin egen separata DOM. Det ökar risken för krockar med din sajts stilar, men låter din CSS rikta sig direkt mot formuläret. Lägg till `useShadowDom: false` i skriptet:

<script>em\_cta.render("SCRIPT-ID",{ fullPage: true, locale: "en", useShadowDom: false});</script>

#### Trigga egna skript vid formulärinskick

För att köra din egen kod när en besökare svarar på formuläret, använd det här utdraget.

<script>
 em\_cta.getSurvey().then(survey => {
   survey.onComplete.add(() => {
     console.log('Survey completed');
   })
 })
</script>

## Formulär och webbspårning

Om [eMarketeer Web Tracker](../../documentation/web-tracker/the-web-tracker.md) är installerad på din sajt och samtycke har getts, identifierar inskickning av ett formulär kontakten för framtida spårning och registrerar historisk besökshistorik.
