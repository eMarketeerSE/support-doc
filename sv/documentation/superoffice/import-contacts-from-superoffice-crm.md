# Importera kontakter från SuperOffice CRM

När du importerar kontakter från en Selection eller ett projekt i SuperOffice CRM kan du välja att inkludera eller utesluta kontakter som saknar samtycke till e-marknadsföring.

I SuperOffice CRM har varje Person en "huvudströmbrytare" för e-marknadsföring på intresseflikfliken. Vi kallar denna "samtyckesbrytaren för e-marknadsföring".

Om kontakten saknar laglig grund för e-postutskick i marknadsföring är brytaren av (grå). Om kontakten har en laglig grund som tillåter e-marknadsföring är brytaren på (grön).

![SuperOffice samtyckesbrytare för e-marknadsföring på ett Person-kort](../../../assets/import-contacts-from-superoffice-crm/Ska_CC_88rmavbild-2019-11-01-kl.-11.54.25.png)

## Välj vilka kontakter som ska importeras

När du importerar kontakter från SuperOffice CRM till eMarketeer kan du hoppa över eller inkludera kontakter vars e-marknadsföringsbrytare är av.

- Om kryssrutan är markerad importeras endast kontakter med e-marknadsföringsbrytaren på.
- Om kryssrutan inte är markerad importeras alla kontakter i Selection eller projektet.

## Hur kontakter identifieras

Importerade kontakter identifieras i eMarketeer via sin primära e-postadress, inte det Person ID som SuperOffice använder internt. Om e-postadressen inte redan finns i eMarketeer skapas ett nytt kontaktkort med den e-postadressen som identifierare.

> TODO: verify "contact card ill be created" was a typo for "will be created" in the source; rewrite assumes "will".
