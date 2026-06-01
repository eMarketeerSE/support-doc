---
description: >-
  Hur du bäddar in ett eMarketeer-formulär på din webbplats med Form Base Script
  och konfigurerar dess beteende efter inlämning.
---

# Bädda in formulär på din webbplats

Den här artikeln visar hur du bäddar in ett eMarketeer-formulär på din webbplats och hur du anpassar dess beteende.

När ett formulär är inbäddat uppdateras det automatiskt på din webbplats varje gång du gör ändringar i eMarketeer.

## Installera basskriptet

Innan du bäddar in ditt första formulär installerar du formulärets basskript. Lägg till det på varje sida som ska visa ett eMarketeer-formulär, eller på alla sidor på webbplatsen. Du behöver bara göra det en gång per webbplats.

```
<script type="application/javascript" src="https://app.emarketeer.com/public/scripts/forms.js"></script>
```

Det enklaste är att läsa in det i sidhuvudet på varje sida, eller via Google Tag Manager.

Att placera skriptet på webbplatsen påverkar inte din integritetspolicy.

## Bädda in ett formulär på webbplatsen

Hämta kodavsnittet från eMarketeer för att bädda in ett formulär:

1. Öppna ditt formulär i eMarketeer.
2. Klicka på **Publish** för att visa kodavsnittet.
3. Klistra in koden på den plats på webbplatsen där formuläret ska visas.

Du kan placera koden i ett HTML-block eller motsvarande, beroende på vilket CMS du använder.

## Översättningar

Om ditt formulär finns i flera språkversioner anger du visningsspråk genom att lägga till `locale` i ditt skript.

```
<script>em_cta.render("SCRIPT-ID",{ fullPage: true, locale: "en" });</script>
```

## Förifyll fält

Lägg till följande kod för att förifylla synliga eller dolda frågefält:

```
<script>
   em_cta.render("SCRIPT-ID",{ fullPage: true, locale: "en" });
   em_cta.setValue('question1', 'My value');
   em_cta.setValue('toggle1', 'true');
   em_cta.setValue('checkboxes1', ['Item 1', 'Item 2'])
</script>
```

## Styla formuläret

Formulärets temabyggare täcker vanliga element men tillåter inte full anpassning. För mer kontroll har du två alternativ.

### Injicera styling

Som standard renderas formuläret i en ShadowDOM, så webbplatsens CSS kan inte påverka det. Du kan injicera styling antingen genom att referera till ett stylesheet eller genom att skicka in selektorer direkt:

```
em_cta.injectInlineStyle(':host, :host * { color: red !important; font-family: "Comic Sans MS", "Comic Sans", cursive !important; } .sd-btn { background-color: black !important; } .sd-element--with-frame { border-radius: 30px; }')

em_cta.injectExternalStyle('https://yourdomain.com/example.css')
```

### Inaktivera ShadowDOM

Du kan stänga av ShadowDOM så att formuläret inte renderas i sin egen DOM. Det ökar risken för stilkonflikter med din webbplats, men gör att du kan styla formuläret med din befintliga CSS. Lägg till `useShadowDom: false` i ditt skript för att göra det:

```
<script>em_cta.render("SCRIPT-ID",{ fullPage: true, locale: "en", useShadowDom: false});</script>
```

### Kör egna skript vid inskickning

Använd kodavsnittet nedan för att köra din egen kod när en besökare skickar in formuläret.

```
<script>
 em_cta.getSurvey().then(survey => {
   survey.onComplete.add(() => {
     console.log('Survey completed');
   })
 })
</script>
```

## Formulär och webbspårning

Om du har [eMarketeer Web Tracker](../web-tracker/) installerad på din webbplats och samtycke har getts, identifierar inskickning av ett formulär även kontakten för framtida spårning och sparar dess historiska besökshistorik.
