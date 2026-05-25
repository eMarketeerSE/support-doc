# Personalisera innehåll

Personaliserat innehåll visas olika för varje kontakt baserat på data som lagras på kontaktkortet.

Det vanligaste exemplet är en personaliserad e-posthälsning som tilltalar kontakten med namn. Personalisering fungerar i e-postmeddelanden, SMS, formulär och webbsidor.

[![En e-posthälsning som lyder "Hi Sebastian," personaliserad med kontaktens förnamn](../../../assets/personalize-content/2021-05-19_10-30-58.png)](https://support.emarketeer.com/wp-content/uploads/2021/05/2021-05-19_10-30-58.png)

En personaliserad hälsning i ett e-postmeddelande.

## Så fungerar personaliserat innehåll

När en kontakt är identifierad i en eMarketeer-komponent kan den komponenten hämta data från kontaktkortet. E-postmeddelanden och SMS identifierar alltid kontakten, eftersom de riktas till specifika kontakter vid utskickstillfället. Formulär och webbsidor kan också personalisera när kontakten är identifierad — till exempel via en personlig länk.

[![Kontaktkort som visar fält ifyllda för en exempelkontakt](../../../assets/personalize-content/2021-05-19_10-40-28-1024x546.png)](https://support.emarketeer.com/wp-content/uploads/2021/05/2021-05-19_10-40-28.png)

eMarketeer-kontaktkort med data.

Ta kontakten Sebastian Olsson som exempel. All data som lagras i ett kontaktkortsfält kan användas i en komponents text, URL eller HTML-innehåll. Med First name tillgängligt kan du hälsa kontakten informellt — "Hi Sebastian." Med Last name och Salutation tillgängliga kan du använda en formell hälsning — "Dear Mr. Olsson."

Ett e-postmeddelande skickas sällan till en enda mottagare, så det viktiga är att varje mottagare har samma fält ifyllda för ett konsekvent budskap. När en kontakt saknar data kan ett reservvärde användas.

## Lagra kontaktdata för personalisering

De vanligaste sätten att samla kontaktdata är CRM-synk, Excel-import och formulär.

### Importera via Excel

Att importera via Excel låter dig sätta data på varje kontakt genom att förbereda arket före uppladdning. I det här exemplet importeras First name, Last name, Email, Company och Personal Code för två kontakter.

[![Excel-ark med fem kolumner förberedda för import](../../../assets/personalize-content/2021-05-19_11-10-16.png)](https://support.emarketeer.com/wp-content/uploads/2021/05/2021-05-19_11-10-16.png)

Excel-fil redo för import.

Du kan importera en Excel-fil som en del av att skicka ett e-postmeddelande eller SMS, eller i förväg till en kampanj eller kontaktlista. Vilken väg du än väljer är steget med kolumnmatchning avgörande — varje kolumn måste matcha ett kontaktkortsfält.

I det här exemplet är Personal Code ett anpassat fält. Anpassade fält är icke-standardiserade kontaktkortsfält. Lägg till anpassade fält i Account Settings, Customize eMarketeer, Customize Contact Card (administratörsroll krävs).

[![Skärm för kolumnmatchning under Excel-import som visar källkolumner matchade mot kontaktkortsfält](../../../assets/personalize-content/2021-05-19_11-33-09.png)](https://support.emarketeer.com/wp-content/uploads/2021/05/2021-05-19_11-33-09.png)

Importera kontakter med Excel, matcha data med tillgängliga fält.

## Använda kontaktdata i en komponent

Lägg till personaliserad data i vilket textfält som helst med alternativet Personalize i verktygsfältet.

[![Personalize-ikonen i redigerarens verktygsfält](../../../assets/personalize-content/2021-05-19_14-39-08.png)](https://support.emarketeer.com/wp-content/uploads/2021/05/2021-05-19_14-39-08.png)

Personalize-ikonen i verktygsfältet.

Menyn listar alla tillgängliga kontaktkortsfält, företagskontofält och [kampanjfält](https://support.emarketeer.com/knowledgebase/how-to-use-campaign-fields-in-emarketeer/).

[![Personalize-menyn öppen med listan över tillgängliga fält](../../../assets/personalize-content/2021-05-19_14-44-42.png)](https://support.emarketeer.com/wp-content/uploads/2021/05/2021-05-19_14-44-42.png)

Personalize-menyn, som visar alla tillgängliga fält.

Att klicka på ett fält infogar ett kodavsnitt vid markören. Avsnittet för First name ser ut så här:

```
<% contact field="firstname" fallback="" %>
```

Reservvärdet hanterar kontakter som saknar fältet. Redigera texten mellan citationstecknen i `fallback=""`.

Att lägga till `Hello <% contact field="firstname" fallback="valued customer" %>` i ditt e-postmeddelande renderas som:

- Hello Sebastian — om kontaktens förnamn är Sebastian.
- Hello valued customer — om förnamnet inte är tillgängligt.

### Syntax för anpassade fält

Standardfält använder syntaxen ovan. Anpassade fält behöver ett extra attribut `type="custom"`:

```
<% contact field="personal_code" fallback="" type="custom" %>
```

När du skriver avsnitt för hand är det ett vanligt misstag att glömma det här attributet — det krävs inte för standardfält.

## Var du kan lägga till personalisering

### Avsändarinfo för e-post

[![Avsändarinfo-fält för e-post med personaliseringsplatshållare infogade](../../../assets/personalize-content/2021-05-19_15-08-07.png)](https://support.emarketeer.com/wp-content/uploads/2021/05/2021-05-19_15-08-07.png)

Avsändarinfo-fält för e-post kan personaliseras.

### Textinnehåll

[![Textinnehåll som visar en personaliseringsplatshållare inline](../../../assets/personalize-content/2021-05-19_15-09-54.png)](https://support.emarketeer.com/wp-content/uploads/2021/05/2021-05-19_15-09-54.png)

Personalisering i textinnehåll.

### Länkar och URL:er

[![En länk-URL med en personlig kod inbäddad som en personaliseringsplatshållare](../../../assets/personalize-content/2021-05-19_15-11-34.png)](https://support.emarketeer.com/wp-content/uploads/2021/05/2021-05-19_15-11-34.png)

En länk-URL med en personlig kod. Bild-URL:er fungerar på samma sätt.

### HTML

[![HTML-redigerare som visar ett villkorligt personaliseringsblock](../../../assets/personalize-content/2021-05-19_15-17-02.png)](https://support.emarketeer.com/wp-content/uploads/2021/05/2021-05-19_15-17-02.png)

Personalisering i HTML med en villkorlig sats. Blocket är synligt endast för kontakter med värdet "prospect" för fältet contact category.

### Andra platser

- I formulär — fält visas endast om kontakten är identifierad, exempelvis på tack-sidan, i ett bekräftelse-mejl eller via en personlig länk.
- I vissa automationer — exempelvis lead-beskrivningstexten för SuperOffice-automationer.
- I SMS.
