# Så fungerar lead scoring i eMarketeer och steg-för-steg-guide

Lead scoring visar hur säljklara dina kontakter är genom att tilldela poäng baserat på persona-matchning och engagemang.

I den här artikeln lär du dig hur du skapar score-regler steg för steg, var du ser varje kontakts lead score och hur du filtrerar kontakter efter deras score.

## Introduktion: vad är lead scoring?

Med lead scoring ser du hur säljklara dina kontakter är och identifierar marketing qualified leads (MQL). Du tilldelar poäng baserat på hur väl en kontakt matchar din köpar-persona och hur engagerad personen är i din marknadsföring. Du bestämmer vilka kriterier som spelar roll och skapar score-regler kring dem. Ju högre score, desto mer säljklar är kontakten, och desto tryggare kan du lämna över till sälj.

## Lead scoring 1.0 i eMarketeer

Den här första versionen av lead scoring hjälper dig identifiera MQL och föra samman sälj och marknad. Fler funktioner – som automatiseringar – är planerade för kommande releaser.

Med lead scoring idag kan du:

- Skapa dina egna regler baserade på marknadsföringsengagemang, fält på kontaktkortet och kontaktlistor. Du väljer också när poäng går ut.
- Se varje kontakts lead score på alla kontaktlistor och på kontaktkortet.
- Filtrera kontakter efter score, till exempel alla kontakter över 50.
- Exportera kontakter som en textfil och dela dem med sälj.

## Viktiga begrepp

- **Lead score:** antalet poäng en kontakt har.
- **Score-regler:** kriterierna en kontakt måste uppfylla för att få eller förlora poäng.
- **Score-uppsättning:** en behållare för en eller flera score-regler. Använd score-uppsättningar för att gruppera regler – till exempel en uppsättning för engagemangsregler och en för köpar-persona-kriterier. Om du säljer flera produkter kan du ha en score-uppsättning per produkt.
- **Explicit scoring:** regler baserade på persona-attribut, som demografi eller företagsprofil.
- **Implicit scoring:** regler baserade på beteende, som klick.

## Så använder du lead scoring i eMarketeer

Innan du går in i eMarketeer, bestäm din lead scoring-modell. eMarketeer levereras med några standardregler för score som ger dig en startpunkt, men ingen modell passar alla verksamheter. Anpassa reglerna efter din säljprocess och bygg modellen tillsammans med ditt säljteam.

[Guide: så bygger du en lead scoring-modell och vanliga misstag att undvika](https://support.emarketeer.com/knowledgebase/how-to-set-up-your-lead-scoring-model-and-lead-scoring-mistakes/)

### Du kan score:a på följande i eMarketeer

Marknadsföringsengagemang:

- Vilket engagemang som helst
- E-post – öppnade eller klickade på en länk
- Formulär – besökte, skickade in eller svarade på ett specifikt sätt
- Landningssida – besökte eller klickade på en länk
- SMS – klickade
- Webbplats – besök. För att score:a webbesök, [lägg till spårningskoden på din webbplats](https://support.emarketeer.com/knowledgebase/web-monitor/).

Information på kontaktkortet:

- Vilket fält som helst på kontaktkortet. Du kan score:a på om fältet har ett värde eller matchar ett specifikt värde – till exempel jobbtitel är ifylld eller jobbtitel är lika med VD.

Kontaktlistor:

- Om kontakten finns i en specifik kontaktlista.

## Så skapar du score-regler i eMarketeer

### 1. Skapa score-regler steg för steg

1. Klicka på "contacts" i toppnavigeringen och sedan på "lead scoring" i vänstermenyn. Den här vyn visar alla dina score-uppsättningar och deras aktiva status.

![Vyn för lead scoring i eMarketeer.](../../../assets/how-lead-scoring-works-in-emarketeer/1.-lead-scoring-view-1024x591.png)

2. För att lägga till egna regler, klicka på "add score set." Namnge score-uppsättningen efter den typ av regler den innehåller – till exempel en uppsättning per produkt eller en uppsättning för engagemangsregler.

![Namnger en score-uppsättning.](../../../assets/how-lead-scoring-works-in-emarketeer/2.-Name-score-set.gif)

3. Klicka på "add a new rule" och ge den ett tydligt namn.

![Namnger en regel.](../../../assets/how-lead-scoring-works-in-emarketeer/3.-Name-rule.gif)

4. Regler byggs på samma sätt som filter i eMarketeer. Den första rullgardinen väljer kategori: engagemang, fält på kontaktkortet eller medlemskap i kontaktlista.

![Välja en regelkategori.](../../../assets/how-lead-scoring-works-in-emarketeer/4.-Choose-rule-category-1024x592.png)

För en webbinarieregistrering, välj engagemang -> formulär -> det specifika formuläret -> skickade in.

![Bygger en regel för en webbinarieformulär-inskickning.](../../../assets/how-lead-scoring-works-in-emarketeer/5.-Build-rule.gif)

Tänk sedan på förekomst – hur många gånger kontakten måste utföra handlingen för att få poängen. Tänk sedan på tidsram – till exempel endast de senaste 30 dagarna.

![Väljer förekomst för en regel.](../../../assets/how-lead-scoring-works-in-emarketeer/5.-Choose-occurrence-e1622552797474-1024x338.png)![Väljer en tidsram för en regel.](../../../assets/how-lead-scoring-works-in-emarketeer/6.-Choose-time-frame-e1622552817660-1024x376.png)

För att begränsa en regel ytterligare, lägg till ett kriterium till. Till exempel: kontakten anmälde sig till webbinariet OCH besökte en landningssida tre gånger. Klicka på "AND" och upprepa stegen för det andra kriteriet.

![Kombinerar kriterier med AND.](../../../assets/how-lead-scoring-works-in-emarketeer/7.-Combine-criteria.gif)

5. Klicka på "Apply."

6. Bestäm hur många poäng regeln är värd. Du kan också dra bort poäng istället för att lägga till. Använd negativa poäng för beteenden som sannolikt inte leder till en försäljning – till exempel "student" som jobbtitel, ett besök på din karriärsida eller ett land du inte kan leverera till.

![Lägger till poäng till en regel.](../../../assets/how-lead-scoring-works-in-emarketeer/8.-Add-points.gif)

7. När score-uppsättningen har alla regler du vill ha, sätt den till aktiv och klicka på spara. Score:n beräknas för varje kontakt. Efter att du lagt till eller redigerat en regel kan det dröja en stund innan poängen uppdateras – vanligtvis några minuter, beroende på databasens storlek.

![Aktiverar en score-uppsättning.](../../../assets/how-lead-scoring-works-in-emarketeer/9.-Activate-score-set.gif)

### 2. Se varje kontakts lead score och score-sammanfattning

Kontakter score:as när de uppfyller någon av dina regler. Du ser score:n på varje kontaktlista och på kontaktkortet. På kontaktkortet visar fliken "score summary" hur kontakten tjänat sina poäng. Grafen visar score:n över tid. Under grafen listar en uppdelning varje uppfylld regel och när poängen går ut.

![En kontaktprofil som visar en lista över lead score-regler kontakten uppfyllt tillsammans med kontaktens aktuella lead score.](../../../assets/how-lead-scoring-works-in-emarketeer/image-10.png)

### 3. Filtrera fram dina MQL och lämna över till sälj

För att hitta kontakter som nått en specifik score – säg 80 eller högre – använd filter. Gå till contacts -> filter och välj "score" i rullgardinen. Du kan sedan lista kontakter över eller under din säljtröskel.

![Filtrerar kontakter efter lead score.](../../../assets/how-lead-scoring-works-in-emarketeer/Filter-out-MQLs.gif)

Med ett urval har du två knappar till höger: massåtgärder och exportera kontakter. Använd massåtgärder för att uppdatera urvalet – till exempel lägga till kontakterna i en lista. Använd export för att ladda ner kontakterna som en textfil eller skicka dem till ett urval eller projekt i SuperOffice. För SuperOffice-export måste kontakterna redan vara kända i SuperOffice.

![Knappar för massåtgärder och export på en kontaktlista.](../../../assets/how-lead-scoring-works-in-emarketeer/Lead-scores-in-contact-lists-buttons.png)
