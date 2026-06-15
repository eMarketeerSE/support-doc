---
description: >-
  SuperOffice-automatiseringar utlöser åtgärder i SuperOffice när en kontakt
  interagerar med en eMarketeer-kampanj, till exempel genom att klicka på en
  länk eller skicka in ett formulär.
---

# SuperOffice-automatiseringar

Varje automatisering körs på den kontakt som utlöste den och skapar motsvarande objekt — affär, uppgift, notifiering, intresseuppdatering, projektmedlemskap eller urvalmedlemskap — direkt i SuperOffice.

## Konfigurera en automatisering

1. Öppna en kampanj i eMarketeer.
2. Gå till fliken **Automations**.
3. Klicka på **Create new automation**.
4. Välj typ av automatisering, konfigurera inställningarna och spara.

Automatiseringen körs varje gång en kontakt utlöser den kampanjhändelse den är kopplad till.

## Hur omatchade kontakter hanteras

Varje automatisering kräver att kontakten har ett externt ID som kopplar den till en SuperOffice-kontakt. Om inget externt ID finns kan eMarketeer inte utföra åtgärden. Automatiseringen pausas och kontakten läggs till i Manage Automations Queue.

Öppna kön genom att klicka på SuperOffice-logotypen i det övre vänstra hörnet i SuperOffice och sedan gå till fliken **Manage Automations Queue**. Därifrån kan en säljare matcha kontakten mot en befintlig SuperOffice-kontakt. Automatiseringen återupptas när matchningen är gjord.

{% hint style="info" %}
SuperOffice-automatiseringar är inte samma sak som SuperOffice Journey-steg. Journey-steg använder annan matchningslogik. Den här artikeln handlar bara om automatiseringar på kampanjnivå.
{% endhint %}

## Typer av automatiseringar

För alla typer: om kontakten saknar externt ID pausas automatiseringen och kontakten läggs till i Manage Automations Queue (se ovan).

### Create new sale

Skapar en affärspost i SuperOffice och tilldelar den till kontakten. eMarketeer anger källa, betyg och beskrivning. Du kan även lägga till kontakten i ett urval eller projekt när affären skapas.

### Create a task

Skapar en uppgift (aktivitet) i SuperOffice av den typ du anger. Du kan lägga till en beskrivning. Uppgifter markeras alltid som ej slutförda.

### Notify sales rep

Skapar en aktivitet i SuperOffice av den typ du anger. Du kan lägga till en beskrivning. Notify sales rep-aktiviteter markeras alltid som slutförda.

### Set interest

Markera de intressen du vill ange. Om kontakten har ett externt ID uppdateras intresset i SuperOffice.

### Unset interest

Avmarkera de intressen du vill ta bort. Om kontakten har ett externt ID uppdateras intresset i SuperOffice.

### Add to project

Lägger till kontakten i ett projekt du anger när du skapar automatiseringen.

### Remove from project

Tar bort kontakten från ett projekt du anger när du skapar automatiseringen.

### Add to selection

Lägger till kontakten i ett statiskt urval du anger när du skapar automatiseringen. Statiska urval kan innehålla dubbletter.

### Remove from selection

Tar bort kontakten från ett statiskt urval du anger när du skapar automatiseringen.
