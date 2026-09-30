---
description: >-
  En felsökningsguide som täcker de vanligaste orsakerna till att en kontakt
  inte fick ett e-postmeddelande och vad du kan göra i varje fall.
---

# Identifiera varför ett e-postmeddelande inte togs emot

Den här artikeln förklarar hur du identifierar de vanligaste anledningarna till att en kontakt inte tog emot ett e-postmeddelande och vad du kan göra åt varje orsak.

Tänk på att vissa orsaker ligger utanför din kontroll som avsändare, särskilt de som är kopplade till mottagarens e-posttjänst.

## Vanliga orsaker

1. E-postmeddelandet avvisades innan det skickades.
2. E-postmeddelandet studsade efter att det skickats.
3. Den slutliga leveransen stoppades av kontaktens e-posttjänst.
4. E-postmeddelandet adresserades eller skickades aldrig.

## Identifiera orsaken

### Avvisades e-postmeddelandet eller studsade det?

Du hittar det på e-postkomponentens Report-sida. Klicka på antalet Rejected eller Bounced i diagrammet Email process för att öppna en sidopanel med de kontakterna, och kontrollera om kontakten finns i den.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/identify-email-not-recieved-email-report-rejected-bounced.png" alt="Diagrammet Email process i e-postrapporten med antalen Rejected och Bounced markerade."></div>

Antalen Rejected och Bounced i diagrammet Email process

Ett avvisat e-postmeddelande betyder att e-posttjänsten hittade ett problem med avsändaradressen eller mottagaradressen vid den sista kontrollen innan utskick. En mottagare avvisas oftast på grund av ett känt problem med just den mottagaradressen eller domänen, till exempel en domän som inte existerar. Om alla mottagare räknas som avvisade är problemet sannolikt att avsändaradressen eller svarsadressen för e-postkomponenten är ogiltig.

Om en kontakt har studsat, klicka på deras namn i sidopanelen för att öppna kontaktkortet. I rutan Delivery för e-postmeddelandet kan du läsa det studsmeddelande som returnerats av mottagarens e-posttjänst. Exemplet nedan visar ett e-postmeddelande som studsats av en organisations strikta policy som inte tillåter den här typen av meddelande.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/identify-email-not-recieved-contact-bounce-message.png" alt="Rutan Delivery på en kontakts flik Timeline med studsmeddelandet från mottagarens e-posttjänst."></div>

Felmeddelande för studs på en kontakts kontaktkort

### Den slutliga leveransen stoppades av kontaktens e-posttjänst

Om kontakten finns i listan som öppnas när du klickar på Delivered i rapporten har mottagarens e-posttjänst accepterat meddelandet utan leveransproblem. Samma sak gäller om rutan Delivery för e-postmeddelandet på kontaktkortets flik Timeline visar Delivered (eller Opened). När e-postmeddelandet väl är levererat till mottagarens e-posttjänst beror eventuella skäl till att meddelandet inte når inkorgen på en åtgärd som tjänsten vidtagit efter eMarketeers lyckade leverans.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/identify-email-not-recieved-contact-email-delivered.png" alt="Rutan Delivery på en kontakts flik Timeline som visar Delivered, ännu inte öppnat."></div>

E-postinformation på kontaktkortet som visar leverans

### E-postmeddelandet adresserades eller skickades aldrig

Detta betyder oftast att kontakten togs bort från mottagarlistan i checklistesteget i utskicksprocessen. Du kan läsa mer om det steget i [den här artikeln](../reports/checklist-explained.md).

Om e-postmeddelandet aldrig adresserades till kontakten hittar du vanligen orsaken på deras kontaktkort. Börja med fliken Overview på kontaktkortet. Om en röd banner med texten "Email address is bouncing" visas, eller om panelen Reachability visar "Email - Hard bounced", är kontaktens e-postadress markerad som ej levererbar utifrån ett tidigare studsmeddelande som eMarketeer fick från deras e-posttjänst.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/identify-email-not-recieved-contact-bounced-status.png" alt="Fliken Overview på ett kontaktkort med den röda bannern Email address is bouncing markerad."></div>

Studsstatus på ett kontaktkort

En annan möjlighet är att kontaktens e-postadress är felaktig eller innehåller tecken som inte stöds i e-post. Kontrollera e-postadressfältet på kontaktkortet för att bekräfta.

Det kan också vara så att kontakten avregistrerat sig från framtida utskick och dragit tillbaka sitt samtycke för marknadsutskick, eller avregistrerat sig från den specifika prenumerationslista som användes för utskicket. Samtycket för marknadsutskick syns i panelen Reachability på fliken Overview och på fliken Legal Basis. Prenumerationsstatus för varje lista syns på fliken Details på kontaktkortet.
