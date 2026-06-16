---
description: >-
  En snabb karta över alla endpoints i eMarketeers REST-API:er — kontakter,
  prenumerationer, engagement, consent, taggar och meddelanden — så att du
  snabbt hittar rätt anrop.
---

# Översikt över API-endpoints

Den här sidan listar alla endpoints i eMarketeers API, grupperade per modul, med en rad om vad varje anrop gör. Det är en karta, inte en fullständig referens. För request- och response-scheman, och för att testa anrop i webbläsaren, använd den interaktiva portalen på [api-doc.emarketeer.com](https://api-doc.emarketeer.com/).

API:et är uppdelat i moduler, var och en med sin egen OpenAPI-definition: **Contact**, **Subscription**, **Engagement**, **Consent**, **Tag** och **Messages**. Varje modul är ett REST-API som skickar och tar emot JSON.

{% hint style="info" %}
Alla anrop autentiseras med en API-nyckel som skickas i request-headern `x-api-key`. Din nyckel finns i eMarketeer under **Settings** → **Plugins and integration**.
{% endhint %}

## Contact

Skapa, hitta och radera kontakter, hantera kontaktlistor och läsa anpassade kontaktfält.

* Bas-URL: `https://connect.emarketeer.com/contacts-api`
* Bläddra och testa: [Contact-definitionen](https://api-doc.emarketeer.com/?urls.primaryName=Contact)

### Kontakter

* `POST /v1/contacts` — Skapa eller uppdatera upp till 100 kontakter åt gången, matchade på e-postadress.
* `GET /v1/contacts` — Hitta kontakter via sparat filter, e-post eller skapad-/ändrad-datum.
* `POST /v1/contacts/delete` — Radera kontakter via e-postadress (upp till 100 åt gången).

### Kontaktlistor

* `GET /v1/lists/` — Hämta alla kontaktlistor.
* `POST /v1/lists/` — Skapa en kontaktlista.
* `DELETE /v1/lists/` — Radera kontaktlistor.
* `GET /v1/lists/{contactListId}` — Hämta kontakterna i en kontaktlista.
* `POST /v1/lists/{contactListId}` — Lägg till kontakter i en kontaktlista (upp till 1000 åt gången).
* `DELETE /v1/lists/{contactListId}` — Ta bort kontakter från en kontaktlista.

### Anpassade kontaktfält

* `GET /v1/contacts/customFields` — Lista alla anpassade kontaktfält på kontot.

## Subscription

Hantera en kontakts prenumerationer och lista de kampanjer som går att prenumerera på.

* Bas-URL: `https://prod-apigw.emarketeer.com`
* Bläddra och testa: [Subscription-definitionen](https://api-doc.emarketeer.com/?urls.primaryName=Subscription)

### Prenumerationer

* `GET /subscriptions/v1/subscriptions` — Hämta en prenumeration via e-post och prenumerationsnamn.
* `POST /subscriptions/v1/subscriptions` — Lägg till en prenumeration.
* `DELETE /subscriptions/v1/subscriptions` — Radera en prenumeration.

### Kampanjer

* `GET /subscriptions/v1/campaigns` — Lista kampanjer, nyast först, med valfri mappfiltrering och paginering.

## Engagement

Läs en kontakts engagement med kampanjkomponenter, och skicka in externa engagement-signaler till eMarketeer.

* Bas-URL: `https://connect.emarketeer.com/engagements-api/v1`
* Bläddra och testa: [Engagement-definitionen](https://api-doc.emarketeer.com/?urls.primaryName=Engagement)

### Signals

* `POST /signals` — Skicka en signal: ett externt engagement för en kontakt, till exempel en formulärinsändning eller en webbinteraktion från ett annat system.

### Engagement per komponent

* `GET /engagements/contact/{contactId}` — Hämta alla engagement för en kontakt.
* `GET /engagements/email/{componentId}` — Engagement för en e-postkomponent.
* `GET /engagements/sms/{componentId}` — Engagement för en SMS-komponent.
* `GET /engagements/form/{componentId}` — Engagement för en formulärkomponent.
* `GET /engagements/landingPage/{componentId}` — Engagement för en landningssidekomponent.
* `GET /engagements/website` — Engagement för en webbplats, via webbplatsnamn.
* `GET /engagements/linkedinLeadGenForm` — Engagement för ett LinkedIn Lead Gen Form.

## Consent

Läs och registrera kontakters consent, och slå upp stamdata för consent (purposes, legal bases, sources).

* Bas-URL: `https://prod-apigw.emarketeer.com`
* Bläddra och testa: [Consent-definitionen](https://api-doc.emarketeer.com/?urls.primaryName=Consent)

### Consent

* `GET /consent-public/v1/consents` — Hämta consent för en nyckel, eller alla consents för den aktuella användaren om ingen nyckel anges.
* `GET /consent-public/v1/consents/filter` — Hämta consents som matchar ett filter.
* `GET /consent-public/v1/consents/history` — Hämta consent-historiken för en nyckel.
* `POST /consent-public/v1/consents` — Skapa en consent-post.

### Stamdata för consent

* `GET /consent-public/v1/purposes` — Lista alla purposes.
* `GET /consent-public/v1/legalBases` — Lista alla legal bases.
* `GET /consent-public/v1/sources` — Lista alla sources.

## Tag

Visa, skapa, uppdatera och radera taggar, och tilldela taggar till kontakter i bulk.

* Bas-URL: `https://connect.emarketeer.com/tags-api/v1`
* Bläddra och testa: [Tag-definitionen](https://api-doc.emarketeer.com/?urls.primaryName=Tag)

### Taggar

* `GET /tags` — Hämta alla taggar, med paginering.
* `POST /tags` — Skapa en tagg med namn, färg och kategori.
* `GET /tags/{tagId}` — Hämta en tagg via dess ID.
* `PUT /tags/{tagId}` — Ersätt alla fält i en tagg.
* `DELETE /tags/{tagId}` — Radera en tagg.
* `GET /tags/name/{tagName}` — Hämta en tagg via dess namn.

### Kontakttaggar

* `POST /tags/add-contacts-tags` — Lägg till flera taggar på flera kontakter i ett anrop.
* `POST /tags/remove-contacts-tags` — Ta bort flera taggar från flera kontakter i ett anrop.

## Messages

Skicka e-post och SMS till kontakter.

* Bas-URL: `https://connect.emarketeer.com/messages-api`
* Bläddra och testa: [Messages-definitionen](https://api-doc.emarketeer.com/?urls.primaryName=Messages)

### E-post

* `POST /v1/email/send` — Skicka e-post till en eller flera kontakter.

### SMS

* `POST /v1/sms/send` — Skicka SMS till en eller flera kontakter.

## Nästa steg

För fullständiga request- och response-scheman, och för att testa anrop live, öppna [API-portalen](https://api-doc.emarketeer.com/). För att skicka engagement-händelser från ett annat system, se [Custom Signals API](custom-signals-api.md).
