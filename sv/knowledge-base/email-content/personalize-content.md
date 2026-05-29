---
description: >-
  Hur du använder kontaktfältsdata för att visa personaliserat innehåll för
  varje enskild mottagare i e-post, SMS, formulär och webbsidor.
---

# Personalisera innehåll

Personaliserat innehåll visas olika för varje kontakt baserat på data som lagras på kontaktkortet.

Det vanligaste exemplet är en personaliserad e-posthälsning som tilltalar kontakten med namn. Personalisering fungerar i e-postmeddelanden, SMS, formulär och webbsidor.

<div data-with-frame="true" data-align="left"><img src="../../../assets/personalize-content/2021-05-19_10-30-58.png" alt="En e-posthälsning som lyder "Hi Sebastian," personaliserad med kontaktens förnamn"></div>

En personaliserad hälsning i ett e-postmeddelande.

## Så fungerar personaliserat innehåll

När en kontakt är identifierad i en eMarketeer-komponent kan den komponenten hämta data från kontaktkortet. E-postmeddelanden och SMS identifierar alltid kontakten, eftersom de riktas till specifika kontakter vid utskickstillfället. Formulär och webbsidor kan också personalisera när kontakten är identifierad — till exempel via en personlig länk.

[<div data-with-frame="true" data-align="left"><img src="../../../assets/personalize-content/2021-05-19_10-40-28-1024x546.png" alt="Kontaktkort som visar fält ifyllda för en exempelkontakt"></div>

eMarketeer-kontaktkort med data.

Ta kontakten Sebastian Olsson som exempel. All data som lagras i ett kontaktkortsfält kan användas i en komponents text, URL eller HTML-innehåll. Med First name tillgängligt kan du hälsa kontakten informellt — "Hi Sebastian." Med Last name och Salutation tillgängliga kan du använda en formell hälsning — "Dear Mr. Olsson."

Ett e-postmeddelande skickas sällan till en enda mottagare, så det viktiga är att varje mottagare har samma fält ifyllda för ett konsekvent budskap. När en kontakt saknar data kan ett reservvärde användas.

## Lagra kontaktdata för personalisering

De vanligaste sätten att samla kontaktdata är CRM-synk, Excel-import och formulär.

### Importera via Excel

Att importera via Excel låter dig sätta data på varje kontakt genom att förbereda arket före uppladdning. I det här exemplet importeras First name, Last name, Email, Company och Personal Code för två kontakter.

<div data-with-frame="true" data-align="left"><img src="../../../assets/personalize-content/2021-05-19_11-10-16.png" alt="Excel-ark med fem kolumner förberedda för import"></div>

Excel-fil redo för import.

Du kan importera en Excel-fil som en del av att skicka ett e-postmeddelande eller SMS, eller i förväg till en kampanj eller kontaktlista. Vilken väg du än väljer är steget med kolumnmatchning avgörande — varje kolumn måste matcha ett kontaktkortsfält.

I det här exemplet är Personal Code ett anpassat fält. Anpassade fält är icke-standardiserade kontaktkortsfält. Lägg till anpassade fält i Account Settings, Customize eMarketeer, Customize Contact Card (administratörsroll krävs).

[<div data-with-frame="true" data-align="left"><img src="../../../assets/personalize-content/2021-05-19_11-33-09.png" alt="Skärm för kolumnmatchning under Excel-import som visar källkolumner matchade mot kontaktkortsfält"></div>

Importera kontakter med Excel, matcha data med tillgängliga fält.

## Använda kontaktdata i en komponent

Lägg till personaliserad data i vilket textfält som helst med alternativet Personalize i verktygsfältet.

<div data-with-frame="true" data-align="left"><img src="../../../assets/personalize-content/2021-05-19_14-39-08.png" alt="Personalize-ikonen i redigerarens verktygsfält"></div>

Personalize-ikonen i verktygsfältet.

Menyn listar alla tillgängliga kontaktkortsfält, företagskontofält och [kampanjfält](../campaigns/how-to-use-campaign-fields-in-emarketeer.md).

[<div data-with-frame="true" data-align="left"><img src="../../../assets/personalize-content/2021-05-19_14-44-42.png" alt="Personalize-menyn öppen med listan över tillgängliga fält"></div>

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

<div data-with-frame="true" data-align="left"><img src="../../../assets/personalize-content/2021-05-19_15-08-07.png" alt="Avsändarinfo-fält för e-post med personaliseringsplatshållare infogade"></div>

Avsändarinfo-fält för e-post kan personaliseras.

### Textinnehåll

[<div data-with-frame="true" data-align="left"><img src="../../../assets/personalize-content/2021-05-19_15-09-54.png" alt="Textinnehåll som visar en personaliseringsplatshållare inline"></div>

Personalisering i textinnehåll.

### Länkar och URL:er

<div data-with-frame="true" data-align="left"><img src="../../../assets/personalize-content/2021-05-19_15-11-34.png" alt="En länk-URL med en personlig kod inbäddad som en personaliseringsplatshållare"></div>

En länk-URL med en personlig kod. Bild-URL:er fungerar på samma sätt.

### HTML

[<div data-with-frame="true" data-align="left"><img src="../../../assets/personalize-content/2021-05-19_15-17-02.png" alt="HTML-redigerare som visar ett villkorligt personaliseringsblock"></div>

Personalisering i HTML med en villkorlig sats. Blocket är synligt endast för kontakter med värdet "prospect" för fältet contact category.

### Andra platser

- I formulär — fält visas endast om kontakten är identifierad, exempelvis på tack-sidan, i ett bekräftelse-mejl eller via en personlig länk.
- I vissa automationer — exempelvis lead-beskrivningstexten för SuperOffice-automationer.
- I SMS.
