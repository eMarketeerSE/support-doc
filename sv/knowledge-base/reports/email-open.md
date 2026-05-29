# När registreras en e-post som öppnad?

En e-post registreras som öppnad när bilder laddas i mottagarens e-postklient, eller när mottagaren klickar på en länk i meddelandet.

<div data-with-frame="true" data-align="left"><img src="../../../assets/email-open/2021-04-27_11-57-42.png" alt="E-postrapportens graf med antalet öppnade e-postmeddelanden markerat"></div>

E-postrapportens graf, antalet öppnade e-postmeddelanden markerat.

## Varför öppningar spåras på det här sättet

Du kanske antar att en "öppning" är en händelse som mottagarens e-postklient rapporterar tillbaka till avsändaren, men så fungerar inte e-post. Det finns ingen inbyggd mekanism som talar om för avsändaren när ett meddelande har öppnats. Om du skickar e-post direkt till en kollega har du inget sätt att veta om de har läst den.

eMarketeer, liksom de flesta ESP, kringgår detta genom att inkludera en spårningspixel — en mycket liten transparent bild med ett unikt namn — i varje e-post. När den bilden begärs från servern vet eMarketeer att kontakten som är kopplad till det unika namnet har öppnat meddelandet.

Metoden fungerar eftersom de flesta e-postklienter laddar bilder automatiskt när meddelandet öppnas. Vissa klienter blockerar bilder som standard om avsändaren inte finns i mottagarens adressbok. Om en kontakt öppnar en e-post med bilder blockerade kan eMarketeer inte registrera en öppning förrän de väljer att visa bilder eller klickar på en länk i e-posten.

Ett klick kan inte finnas utan en öppning, så en e-post som registrerar ett klick registreras automatiskt också som öppnad.
