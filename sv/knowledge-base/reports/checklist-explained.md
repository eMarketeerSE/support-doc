# Förstå checklistan för e-post

Checklistan för e-post visar hur många kontakter som kommer att nås av ett utskick, och hur många som inte gör det, uppdelat efter orsak.

Du ser den här sidan när du skickar en e-post. Granska den för att bekräfta att utskicket når rätt målgrupp och för att förstå eventuella undantag.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/email.checklist.25.png" alt="Skärmbild av innehållet i checklistan för e-post"></div>

Exempel på checklistan

## Kategorier i checklistan

Adresserad e-post av dig Det totala antalet kontakter som ingår i mottagarlistorna för det här utskicket.

Dubbletter Antalet dubbletter av e-postadresser som hittats. Vanligtvis bara relevant när du använder mer än en mottagarlista.

Avregistrerade Antalet avsedda mottagare som har avregistrerat sig från prenumerationslistan som används för att kategorisera den här e-posten. Endast relevant när du använder en sådan lista.

Återkallat samtycke Antalet kontakter som har återkallat sitt samtycke till att ta emot utskick från dig. Den specifika samtyckesinställningen är kontaktens Marketing Consent. [Den här artikeln](../gdpr-consent/how-does-consent-work.md) förklarar samtycke mer i detalj.

Ej levererbara e-postadresser Antalet kontakter vars e-postadresser tidigare har rapporterat att de inte kan ta emot e-post. [Den här guiden](../email-deliverability/undeliverable-contacts-email-checklist.md) visar hur du hittar ej levererbara kontakter i din kontaktdatabas.

Levererbara men inaktiva Antalet kontakter som kan ta emot e-post men som inte har läst dina meddelanden eller haft någon registrerad aktivitet under en längre period. Du väljer om du vill skicka till dessa kontakter i Steg 2 av e-postutskicket, via inställningen Exclude Inactive Recipients. [Den här artikeln](../../documentation/email-sms/exclude-inactive-recipients.md) förklarar Exclude Inactive Recipients.

E-post med blockerade domäner Om ditt konto blockerar specifika domäner för utskick räknas alla kontakter på dessa domäner i dina mottagarlistor här.

Blockerade kontakter Om en inställning på ditt utskick dynamiskt blockerar vissa kontakter räknas de här. Exempel är "Exclude contacts that have already been sent this email" eller att aktivt blockera en mottagarkälla, som när du skickar påminnelse-e-post enligt [den här guiden](../email-content/configuring-reminder-email.md).

Ogiltig avsändaradress Mottagare hamnar i den här kategorin när avsändaradressen för den här e-postkomponenten är ogiltig. Det kan bero på en ogiltig e-postdomän eller en felaktigt formaterad adress. Åtgärda det på e-postens redigeringssida genom att uppdatera avsändaradressen i menyn till vänster.

Saknar obligatorisk double opt-in Antalet kontakter i mottagarlistan som inte har slutfört double opt-in-processen, i fall där double opt-in krävs innan en kontakt kan ta emot e-post från ditt konto.

E-post som kommer att adresseras Antalet kontakter som kommer att adresseras av det här utskicket efter undantag.

E-post som inte kommer att adresseras Det totala antalet kontakter som inte kommer att adresseras av det här utskicket.
