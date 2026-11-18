---
description: >-
  Alla Dataverse-behörigheter som eMarketeer-integrationen behöver, med den
  rekommenderade minst-privilegierade säkerhetsrollen och en fullständig
  genomgång per funktion.
---

# Dynamics - Obligatoriska behörigheter

Den här artikeln listar alla behörigheter som eMarketeer-integrationen behöver i din Microsoft Dynamics 365 / Dataverse-miljö: vilka tabeller den använder, vilken typ av åtkomst den behöver till varje tabell, och de exakta säkerhetsbehörigheterna bakom den åtkomsten. Den riktar sig till Dynamics-administratörer och säkerhetsgranskare som vill tilldela integrationen en minst-privilegierad säkerhetsroll i stället för rollen System Administrator.

## Så ansluter integrationen

eMarketeer ansluter till din miljö via en applikationsanvändare och standard-API:et Dataverse Web API (`api/data/v9.2`). Autentisering sker via server-till-server OAuth (client credentials) mot Microsoft Entra ID, med scope till din Dataverse-miljös URL. Inga Microsoft Graph-behörigheter används eller begärs. Det enda scope integrationen begär är `https://<yourenvironment>.crm.dynamics.com/.default`.

Vid den första anslutningen gör integrationen ett anrop till Dynamics globala identifieringstjänst (`globaldisco.crm.dynamics.com`) med den anslutande administratörens inloggade token, för att hitta miljön som ska anslutas. Därefter används bara applikationsanvändaren.

Integrationen läser och skriver poster oavsett vem som äger dem, så behörigheterna måste tilldelas med **Organization scope**. Ett smalare scope (enbart egna poster eller en affärsenhet) döljer poster som ägs av andra användare och bryter synkar och exporter.

## Vad integrationen inte gör

- Den tar aldrig bort dina kontakter, Leads, konton, aktiviteter eller marknadsföringslistor.
- Det enda fält den ändrar på dina kontakter utanför en explicit export är `donotbulkemail` (e-postsamtycke), som beskrivs i användningsfallet [Samtyckessynk](#6-samtyckessynk).
- Den skapar inga poster i din miljö utöver de som beskrivs i användningsfallen nedan.

## Alla behörigheter i översikt

Tabellen nedan är den fullständiga uppsättningen: integrationens säkerhetsroll behöver dessa behörigheter och inga andra. Rader markerade med *enbart anslut/koppla från* används bara vid installation, uppgradering eller borttagning av integrationen, och du kan [ta bort dem efter anslutning](#ta-bort-installationsbehörigheterna-efter-anslutning-valfritt).

| Tabell / komponent | Åtkomst som krävs | Behörigheter |
|---|---|---|
| Contact (`contact`) | Read, Create, Write, Append, Append To | `prvReadContact`, `prvCreateContact`, `prvWriteContact`, `prvAppendContact`, `prvAppendToContact`, `prvAssignContact` (för att sätta postägare) |
| Lead (`lead`) | Read, Create, Write, Append, Append To | `prvReadLead`, `prvCreateLead`, `prvWriteLead`, `prvAppendLead`, `prvAppendToLead` |
| Account (`account`) | Read, Create, Append To, Assign | `prvReadAccount`, `prvCreateAccount`, `prvAppendToAccount`, `prvAssignAccount` (för att sätta postägare) |
| Marketing List (`list`) | Read, Write, Append To | `prvReadList`, `prvWriteList`, `prvAppendToList` |
| Aktiviteter (Task, Phone Call) | Create, Append, Assign | `prvCreateActivity`, `prvAppendActivity`, `prvAssignActivity` (för att sätta aktivitetens ägare när personifiering inte är tilldelad) |
| User (`systemuser`) | Read, Append To | `prvReadUser`, `prvAppendToUser` |
| Security Role (`role`) | Read | `prvReadRole` |
| Auditing (`audit`) | Läs granskningslogg | `prvReadRecordAuditHistory`, `prvReadAuditSummary` (motsvarar kryssrutorna "View Audit History" och "View Audit Summary" i gränssnittet) |
| eMarketeer Subscriptions (`em_subscriptions`, anpassad) | Read, Create, Write, Delete, Append, Append To | `prvReadem_subscriptions`, `prvCreateem_subscriptions`, `prvWriteem_subscriptions`, `prvDeleteem_subscriptions`, `prvAppendem_subscriptions`, `prvAppendToem_subscriptions` |
| eMarketeer Subscription Categories (`em_subscriptioncategories`, anpassad) | Read, Create, Write, Delete, Append To | `prvReadem_subscriptioncategories`, `prvCreateem_subscriptioncategories`, `prvWriteem_subscriptioncategories`, `prvDeleteem_subscriptioncategories`, `prvAppendToem_subscriptioncategories` |
| Act on Behalf of Another User — *valfri* | Execute | `prvActOnBehalfOfAnotherUser`. Utelämna den om du inte vill att aktiviteter ska visa den valda användaren som skapare. Se [Personifiering](#personifiering). |
| Publisher (`publisher`) — *enbart anslut/koppla från* | Read, Create | `prvReadPublisher`, `prvCreatePublisher` |
| Tabelldefinitioner (metadata) — *enbart anslut/koppla från* | Read, Create, Delete | `prvReadEntity`, `prvCreateEntity`, `prvDeleteEntity`, `prvCreateAttribute` |
| Alternativa nycklar (metadata) — *enbart anslut/koppla från* | Read, Create | `prvReadEntityKey`, `prvCreateEntityKey` |
| Tabellrelationer (metadata) — *enbart anslut/koppla från* | Read, Create | `prvReadRelationship`, `prvCreateRelationship` |
| Systemvyer (`savedqueries`) — *enbart anslut/koppla från* | Read, Create | `prvReadCustomization`, `prvWriteCustomization` (Dataverse har ingen dedikerad savedquery-behörighet) |
| Formulär (`systemforms`) — *enbart anslut/koppla från* | Read, Write | `prvReadSystemForm`, `prvWriteSystemForm` |
| Webbresurser (`webresourceset`) — *enbart anslut/koppla från* | Read, Create, Write, Delete | `prvReadWebResource`, `prvCreateWebResource`, `prvWriteWebResource`, `prvDeleteWebResource` |
| Webhook-endpoints (`serviceendpoints`) — *enbart anslut/koppla från* | Read, Create, Write, Delete | `prvReadServiceEndpoint`, `prvCreateServiceEndpoint`, `prvWriteServiceEndpoint` (för att sätta webhook-nyckeln vid ny anslutning), `prvDeleteServiceEndpoint` |
| Webhook-registreringssteg (`sdkmessageprocessingsteps`, `sdkmessages`) — *enbart anslut/koppla från* | Read, Create, Delete | `prvReadSdkMessage`, `prvReadSdkMessageProcessingStep`, `prvCreateSdkMessageProcessingStep`, `prvDeleteSdkMessageProcessingStep` |
| Publicera anpassningar — *enbart anslut/koppla från* | Execute | `prvPublishCustomization` |

Ett krav utöver behörigheterna: granskning måste vara aktiverat på Contact-tabellen, annars kan samtyckessynken inte identifiera samtyckeändringar gjorda i Dynamics.

## Rekommenderad säkerhetsroll

Ersätt tilldelningen av System Administrator med en anpassad roll — till exempel "eMarketeer Integration" — tilldelad till eMarketeers applikationsanvändare och innehållande exakt de behörigheter som listas ovan med Organization scope. Ingen inbyggd Dynamics-roll matchar denna behörighetsuppsättning utan att tilldela mycket mer än integrationen behöver, så att bygga rollen från tabellen är det renaste alternativet.

I säkerhetsrollseditorn hittar du behörigheterna här:

| Plats i editorn | Behörigheter att ange |
|---|---|
| Fliken Core Records: Contact, Lead, Account, Marketing List, Activity | Read/Create/Write/Append/Append To/Assign-cellerna från tabellen ovan |
| Fliken Core Records, diverse behörigheter | View Audit History, View Audit Summary |
| Fliken Business Management: User, Security Role | Read på båda; Append To på User |
| Fliken Business Management, diverse behörigheter | Act on Behalf of Another User (valfri) |
| Fliken Customization: Entity, Field, Entity Key, Relationship, System Form, Web Resource, Customizations | Metadata-, formulär-, vy- och webbresursposterna från tabellen ovan, plus Publish Customizations |
| Fliken Customization: Sdk Message, Sdk Message Processing Step, Service Endpoint; fliken Business Management: Publisher | Webhook- och publisher-posterna från tabellen ovan |
| Fliken Custom Entities: eMarketeer Subscriptions, eMarketeer Subscription Categories | De fullständiga uppsättningarna från tabellen ovan |

**Obs om ordning:** de två eMarketeer-anpassade tabellerna (`em_subscriptions`, `em_subscriptioncategories`) existerar bara efter den första anslutningen, så deras behörigheter kan läggas till rollen först efter att användningsfall 1 har körts. Det praktiska tillvägagångssättet är: skapa rollen utan anpassade tabellrader, anslut, lägg sedan till de behörigheterna.

Vi avråder från att approximera detta med inbyggda roller som Salesperson, Marketing Professional eller System Customizer. De inkluderar breda rättigheter (radering av poster, delning, bulkoperationer, obegränsad anpassning) som integrationen aldrig använder, vilket motverkar syftet med att flytta bort från System Administrator.

När rollen har tilldelats, kör anslutningstestet i eMarketeer. Det verifierar att applikationsanvändaren kan nå de nödvändiga tabellerna. Dataverse anger den saknade behörigheten i felet när ett anrop nekas, så eventuella luckor som uppstår senare är enkla att spåra tillbaka till en specifik rollpost.

### Ta bort installationsbehörigheterna efter anslutning (valfritt)

Raderna markerade med *enbart anslut/koppla från* används bara av användningsfall 1 och 2. De omfattar rätten att ändra kontaktkortspanelen. Panelen är en webbresurs, och dess skript körs i webbläsarsessionen hos varje Dynamics-användare som öppnar den. Så länge applikationsanvändaren har de här behörigheterna kan eMarketeers inloggningsuppgifter ändra skriptet.

Om du vill ha minsta möjliga stående åtkomst delar du upp behörigheterna i två roller:

1. Skapa rollen "eMarketeer Integration" utan raderna markerade med *enbart anslut/koppla från*.
2. Skapa en andra roll, till exempel "eMarketeer Installer", med enbart de raderna.
3. Tilldela applikationsanvändaren båda rollerna.
4. Anslut integrationen i eMarketeer.
5. Ta bort rollen "eMarketeer Installer" från applikationsanvändaren.

Tilldela installationsrollen igen innan du ansluter på nytt, uppgraderar eller kopplar från integrationen. Daglig användning (användningsfall 3 till 8) behöver bara den första rollen.

## Säkerhetskontroller

Det här avsnittet beskriver hur åtkomsten identifieras, skyddas och granskas, och hur du återkallar den.

### Identitet och auktorisering

| Steg | Identitet | Auktorisering |
|---|---|---|
| Hitta miljön, enbart vid anslutning | Din administratör, inloggad med sitt eget Microsoft-konto | Administratörens egen Dynamics-åtkomst |
| Alla andra anrop | eMarketeers applikationsanvändare i din miljö | Säkerhetsrollen du tilldelar den, och inget annat |

- Administratörens inloggningstoken gäller bara för Dynamics identifieringstjänst. Den kan inte läsa data i din miljö, och eMarketeer sparar den inte.
- Applikationsanvändarens token har scope enbart till din Dataverse-miljös URL. Den ger ingen åtkomst till Microsoft Graph, Exchange, SharePoint eller någon annan miljö.

### Personifiering

`prvActOnBehalfOfAnotherUser` är valfri. Tilldela den bara om du behöver den.

- Om du tilldelar den visar aktiviteter den valda Dynamics-användaren som "Created By". eMarketeer skickar huvudet `CallerObjectId` enbart på `POST /tasks` och `POST /phonecalls`.
- Dataverse kör ett personifierat anrop med den personifierade användarens behörigheter, inte med eMarketeer-rollens behörigheter. Så länge rollen har den här behörigheten kan eMarketeers inloggningsuppgifter agera som vilken användare som helst i miljön, även en administratör.
- Om du utelämnar den skapar eMarketeer aktiviteter som applikationsanvändaren och sätter den valda användaren som "Owner". Integrationen kontrollerar rollen före varje aktivitet, så du kan lägga till eller ta bort behörigheten när som helst utan att ansluta på nytt.

### Inloggningsuppgifter och token

Du väljer vilken appregistrering applikationsanvändaren tillhör:

| Alternativ | Appregistrering | Vem som har klienthemligheten | Vad en läckt hemlighet exponerar |
|---|---|---|---|
| Standard | eMarketeers app för flera klientorganisationer | eMarketeer | Alla miljöer som har gett samtycke till den appen |
| Din egen appregistrering | En app du registrerar i din egen Microsoft Entra-klientorganisation | Du skapar den; eMarketeer sparar en kopia enbart för ditt konto | Enbart din miljö |

Så använder du din egen appregistrering:

1. Registrera en app för en enda klientorganisation i Microsoft Entra ID.
2. Skapa en klienthemlighet för den.
3. Skapa en applikationsanvändare för appen i din Dynamics-miljö, med säkerhetsrollen ovan.
4. Ange appens klient-ID och klienthemlighet när du ansluter Dynamics 365 i eMarketeer.

Du ansvarar för hemlighetens giltighetstid och rotation. För att rotera den skapar du en ny hemlighet och ansluter sedan på nytt i eMarketeer med den.

För båda alternativen gäller:

- Hemligheten lämnar aldrig eMarketeers AWS-miljö och skickas aldrig till en webbläsare.
- eMarketeer krypterar sparade klienthemligheter och cachade åtkomsttoken med en dedikerad AWS KMS-nyckel. AWS CloudTrail loggar varje användning av nyckeln.
- Åtkomsttoken kommer från Microsoft Entra ID och upphör att gälla efter ungefär en timme.
- Certifikatbaserade inloggningsuppgifter stöds inte.

### Transport

- Alla anrop går över HTTPS till `login.microsoftonline.com`, `globaldisco.crm.dynamics.com` och din Dataverse-miljös URL.
- Integrationen validerar servercertifikatet vid varje anrop.
- Alla anrop till din miljö kommer från en fast IP-adress. Be eMarketeers support om den om du vill begränsa applikationsanvändaren per IP, till exempel med Power Platforms IP-brandvägg.
- Din miljö anropar eMarketeer enbart via den webhook som registreras i användningsfall 1. Varje miljö får sin egen webhook-nyckel, och eMarketeer avvisar anrop med en nyckel som utfärdats till en annan miljö.
- eMarketeer lagrar och behandlar data i AWS-regionen `eu-west-1` (Irland).

### Granskning

| Var | Vad du kan se |
|---|---|
| Dataverse-granskning | Varje post som applikationsanvändaren skapar eller uppdaterar, med användarnamn, om granskning är aktiverad för tabellen |
| Inloggningsloggar i Microsoft Entra (inloggningar för tjänstens huvudnamn) | Varje tokenbegäran från appregistreringen |
| eMarketeer | Varje anrop till Dataverse API, med endpoint och tid. Frågesträngar, till exempel e-postfilter, sparas inte. Tillgängligt från eMarketeers support på begäran. |

eMarketeer sparar sin anropslogg och fellogg i 180 dagar och tar sedan bort dem. Applikationsloggar, som kan innehålla anrops-URL:er och felsvar från Dataverse, sparas i 30 dagar.

### Återkalla åtkomst

Du kan stoppa all åtkomst när som helst, utan att kontakta eMarketeer. Gör något av följande:

- Inaktivera eMarketeers applikationsanvändare i Power Platform admin center.
- Ta bort dess säkerhetsroller.
- Ta bort eMarketeers företagsprogram i Microsoft Entra ID.
- Om du använder din egen appregistrering: ta bort dess klienthemlighet.

Nästa anrop från eMarketeer misslyckas då. Befintliga token slutar fungera inom ungefär en timme.

## Behörigheter per funktion

Det här avsnittet beskriver vad integrationen gör med dessa behörigheter, funktion för funktion. Om du inte använder en funktion kan dess behörigheter utelämnas från rollen.

Varje användningsfall anger om det är användarinitierat (någon i eMarketeer eller Dynamics utlöser det, direkt eller via en automatisering de konfigurerat) eller automatiskt (en återkommande bakgrundssynk). De två automatiska flödena — samtyckessynk och prenumerationssynk — påverkar bara kontakter som redan finns i båda systemen; de hämtar aldrig in nya poster till endera sidan på egen hand.

### 1. Ansluta och installera

Körs en gång, när din administratör ansluter Dynamics 365 till eMarketeer. Integrationen verifierar att applikationsanvändaren fungerar och installerar sedan sina komponenter: en "eMarketeer"-publisher, två anpassade tabeller för prenumerationssynk (`em_subscriptions`, `em_subscriptioncategories`) med nycklar och relationer, en systemvy och ett avsnitt på Contact-formuläret som visar prenumerationer, webhooks som meddelar eMarketeer när kontakter skapas eller uppdateras, och eMarketeers kontaktkortspanel (en HTML-webbresurs).

**Utlösare:** användarinitierad. Körs bara när din administratör ansluter integrationen.

**Tabeller som används:** publisher, system forms, web resources, service endpoints, SDK-meddelanderegistreringar, tabell-/nyckel-/relationsdefinitioner (metadata), saved queries.

**Behörigheter som krävs:** posterna markerade med *enbart anslut/koppla från* i "Alla behörigheter i översikt". Bara vid installation.

| Vad som händer | Tabell | Åtkomst | Behörighet |
|---|---|---|---|
| Verifiera att applikationsanvändaren är konfigurerad (`WhoAmI`) | — | Read | ingen |
| Kontrollera att de nödvändiga tabellerna är synliga | — | Read | ingen |
| Kontrollera att granskning är aktiverat på Contact | metadata | Read | `prvReadEntity` |
| Skapa "eMarketeer"-publishern (prefix `em`) | publisher | Read + Create | `prvReadPublisher`, `prvCreatePublisher` |
| Skapa de två anpassade prenumerationstabellerna | metadata | Read + Create | `prvReadEntity`, `prvCreateEntity`, `prvCreateAttribute` |
| Skapa alternativa nycklar på dessa tabeller | metadata | Read + Create | `prvReadEntityKey`, `prvCreateEntityKey` |
| Skapa relationer till Contact | metadata | Read + Create | `prvReadRelationship`, `prvCreateRelationship` |
| Skapa prenumerationsvyn | savedquery | Read + Create | `prvReadCustomization`, `prvWriteCustomization` |
| Lägga till ett prenumerationsavsnitt i Contact-formuläret | systemform | Read + Write | `prvReadSystemForm`, `prvWriteSystemForm` |
| Publicera anpassningarna | — | Execute | `prvPublishCustomization` |
| Registrera eMarketeers webhook-endpoint, eller sätta dess nyckel vid ny anslutning | serviceendpoint | Read + Create + Write | `prvReadServiceEndpoint`, `prvCreateServiceEndpoint`, `prvWriteServiceEndpoint` |
| Registrera webhook-steg för Contact create/update | sdkmessage, sdkmessageprocessingstep | Read + Create | `prvReadSdkMessage`, `prvReadSdkMessageProcessingStep`, `prvCreateSdkMessageProcessingStep` |
| Installera kontaktkortspanelen | webresource | Read + Create + Write | `prvReadWebResource`, `prvCreateWebResource`, `prvWriteWebResource` |

### 2. Koppla från och avinstallera

Körs en gång om du kopplar från integrationen. Tar bort allt som användningsfall 1 installerade.

**Utlösare:** användarinitierad. Körs bara när din administratör kopplar från integrationen.

**Tabeller som används:** service endpoints, SDK-meddelanderegistreringar, tabelldefinitioner (metadata), web resources.

**Behörigheter som krävs:** `prvReadSdkMessageProcessingStep`, `prvDeleteSdkMessageProcessingStep`; `prvReadServiceEndpoint`, `prvDeleteServiceEndpoint`; `prvReadWebResource`, `prvDeleteWebResource`; `prvReadEntity`, `prvDeleteEntity`. Bara vid avinstallation.

| Vad som händer | Tabell | Åtkomst | Behörighet |
|---|---|---|---|
| Ta bort webhook-registreringarna | sdkmessageprocessingstep, serviceendpoint | Read + Delete | `prvReadSdkMessageProcessingStep`, `prvDeleteSdkMessageProcessingStep`, `prvReadServiceEndpoint`, `prvDeleteServiceEndpoint` |
| Ta bort de två anpassade prenumerationstabellerna | metadata | Read + Delete | `prvReadEntity`, `prvDeleteEntity` |
| Ta bort kontaktkortspanelen | webresource | Read + Delete | `prvReadWebResource`, `prvDeleteWebResource` |

### 3. Exportera kontakter och leads till Dynamics

Det här är det centrala utgående flödet: eMarketeer-automatiseringar och funktionen för manuell "dela till Dynamics" skapar eller uppdaterar Leads och kontakter i din miljö. Innan något skapas letar integrationen upp befintliga poster via e-post, telefon eller företag för att undvika dubbletter. Den kopplar nya Leads till en matchande Contact eller Account, kan skapa Account när en kontakt delas med ett nytt företag, och listar dina Dynamics-användare så att en ägare kan väljas för nya poster.

**Utlösare:** användarinitierad. Antingen delar någon manuellt en kontakt till Dynamics, eller når en kontakt ett exportsteg i en automatisering ditt team har byggt. Inget exporteras utan ett sådant steg.

**Tabeller som används:** contact, lead, account, systemuser, role.

**Behörigheter som krävs:** contact Read/Create/Append; lead Read/Create/Write/Append; account Read/Create/Append To; systemuser Read/Append To; role Read.

| Vad som händer | Tabell | Åtkomst | Behörighet |
|---|---|---|---|
| Slå upp befintliga kontakter (via e-post, id, företag, ursprunglig lead) | contact (+ account) | Read | `prvReadContact`, `prvReadAccount` |
| Slå upp befintliga Leads (via e-post, företag, id) | lead | Read | `prvReadLead` |
| Skapa en Lead (valfritt kopplad till ägare / parent Contact / Account) | lead | Create | `prvCreateLead`, `prvAppendLead`, `prvAppendToUser`, `prvAppendToContact`, `prvAppendToAccount` |
| Uppdatera en befintlig Lead | lead | Update | `prvWriteLead` |
| Skapa en Contact (valfritt kopplad till Account / ägare) | contact | Create | `prvCreateContact`, `prvAppendContact`, `prvAppendToAccount`, `prvAppendToUser`, `prvAssignContact` |
| Sök / läs konton | account | Read | `prvReadAccount` |
| Skapa ett Account (vid delning med ett nytt företag, valfritt kopplat till en ägare) | account | Create, Assign | `prvCreateAccount`, `prvAppendToUser`, `prvAssignAccount` |
| Lista användare för ägar-dropdown | systemuser, role | Read | `prvReadUser`, `prvReadRole` |

### 4. Logga marknadsföringsaktiviteter

eMarketeer-automatiseringssteg skriver Tasks och Phone Calls till matchande Leads eller kontakter, så att ditt säljteam ser marknadsföringshistoriken i Dynamics. När ett steg anger en ägare ägs aktiviteten av den Dynamics-användaren. Om du tilldelar den valfria personifieringsbehörigheten visas användaren också som skapare.

**Utlösare:** användarinitierad. Körs bara när en kontakt når ett aktivitetssteg i en automatisering ditt team har byggt.

**Tabeller som används:** task, phone call, activity party, contact, lead, systemuser.

**Behörigheter som krävs:** Activity Create/Append; contact och lead Read/Append To; systemuser Read/Append To; Activity Assign, eller den valfria Act on Behalf of Another User.

| Vad som händer | Tabell | Åtkomst | Behörighet |
|---|---|---|---|
| Hitta den Lead/Contact som aktiviteten ska kopplas till | contact, lead | Read | `prvReadContact`, `prvReadLead` |
| Skapa en Task på posten | task | Create | `prvCreateActivity`, `prvAppendActivity`, `prvAppendToLead` / `prvAppendToContact` |
| Skapa ett Phone Call på posten | phonecall, activityparty | Create | samma som Task, plus `prvAppendToUser` |
| Läsa ägarens Entra ID-objekt-id (för attribution) | systemuser | Read | `prvReadUser` |
| Kontrollera om personifiering är tilldelad | systemuser | Read | `prvReadUser`, `prvReadRole` |
| Utan personifiering: sätta den valda användaren som ägare | task, phonecall | Assign | `prvAssignActivity` |
| Med personifiering: skapa aktiviteten som den valda användaren | — | — | `prvActOnBehalfOfAnotherUser` (valfri) |

### 5. Marknadsföringslistor

Det här fungerar i två riktningar. eMarketeer kan importera medlemmarna i en Dynamics-marknadsföringslista (statisk eller dynamisk) som eMarketeer-kontakter, inklusive deras företagsnamn, och automatiseringssteg kan lägga till de Leads och kontakter de skapade i en befintlig Dynamics-marknadsföringslista. Integrationen skapar eller tar aldrig bort marknadsföringslistor i din miljö.

**Utlösare:** användarinitierad. Importer startas av en eMarketeer-användare som väljer en lista; att lägga till medlemmar sker bara via ett automatiseringssteg ditt team har byggt.

**Tabeller som används:** list, contact, lead, account.

**Behörigheter som krävs:** list Read/Write/Append To; contact och lead Read/Append; account Read.

| Vad som händer | Tabell | Åtkomst | Behörighet |
|---|---|---|---|
| Lista och läs marknadsföringslistor | list | Read | `prvReadList` |
| Läs statiska listmedlemmar | list, contact, lead | Read | `prvReadList`, `prvReadContact`, `prvReadLead` |
| Läs dynamiska listmedlemmar (kör listans egen fråga) | contact | Read | `prvReadContact` |
| Läs medlemsdetaljer och deras företag | contact, account | Read | `prvReadContact`, `prvReadAccount` |
| Lägg till medlemmar i en lista (association) | list, contact, lead | Update | `prvWriteList`, `prvAppendToList`, `prvAppendContact` / `prvAppendLead` |

### 6. Samtyckessynk

Håller e-postsamtycket synkroniserat i båda riktningarna med ett enda fält: `donotbulkemail`.

Dynamics → eMarketeer: integrationen läser Dataverse-granskningsloggen för ändringar av det fältet och tillämpar dem på matchande eMarketeer-kontakter, så att en avanmälan gjord i Dynamics blockerar marknadsförings-e-post i eMarketeer.

eMarketeer → Dynamics: när en kontakt avanmäler sig i eMarketeer sätter integrationen `donotbulkemail` på matchande Dynamics Contact. Inget annat fält på Contact ändras någonsin av det här flödet.

**Utlösare:** automatisk. Körs som en återkommande bakgrundssynk. Den påverkar bara kontakter som finns i båda systemen (matchade via e-post eller en etablerad länk) och skapar aldrig poster på endera sidan.

**Tabeller som används:** contact, audit, attributdefinitioner (metadata).

**Behörigheter som krävs:** contact Read/Write; View Audit History och View Audit Summary; granskning aktiverat på Contact-tabellen.

| Vad som händer | Tabell | Åtkomst | Behörighet |
|---|---|---|---|
| Hitta kolumnnumret för `donotbulkemail` | metadata | Read | `prvReadEntity`, `prvReadAttribute` |
| Läsa granskningsposter för samtyckeändringar på kontakter | audit | Read | `prvReadRecordAuditHistory`, `prvReadAuditSummary` |
| Lösa upp de granskade kontakterna | contact | Read | `prvReadContact` |
| Skriva `donotbulkemail` på kontakter | contact | Update | `prvWriteContact` |

### 7. Prenumerationssynk

Speglar eMarketeers prenumerationskategorier och varje kontakts prenumerationsval till de två anpassade tabellerna som integrationen installerade (`em_subscriptions`, `em_subscriptioncategories`), och läser ändringar gjorda i Dynamics (via prenumerationsavsnittet på Contact-formuläret) tillbaka till eMarketeer. Alla skrivningar i det här flödet går till integrationens egna anpassade tabeller; dina kontakter läses bara.

**Utlösare:** automatisk. Körs i bakgrunden när prenumerationsdata ändras på endera sidan (i Dynamics via de webhooks som installerades vid anslutning). Precis som samtyckessynken gäller den bara kontakter som finns i båda systemen.

**Tabeller som används:** em_subscriptions (anpassad), em_subscriptioncategories (anpassad), contact.

**Behörigheter som krävs:** Read, Create, Write, Delete, Append och Append To på de två anpassade tabellerna; contact Read och Append To.

| Vad som händer | Tabell | Åtkomst | Behörighet |
|---|---|---|---|
| Läsa prenumerationskategorier | em_subscriptioncategories | Read | `prvReadem_subscriptioncategories` |
| Skapa / byta namn på kategorier | em_subscriptioncategories | Create + Update | `prvCreateem_subscriptioncategories`, `prvWriteem_subscriptioncategories` |
| Ta bort kategorier raderade i eMarketeer | em_subscriptioncategories | Delete | `prvDeleteem_subscriptioncategories` |
| Läsa prenumerationstillstånd | em_subscriptions | Read | `prvReadem_subscriptions` |
| Spara prenumerationstillstånd (kopplade till Contact + kategori) | em_subscriptions | Create + Update | `prvCreateem_subscriptions`, `prvWriteem_subscriptions`, `prvAppendem_subscriptions`, `prvAppendToContact`, `prvAppendToem_subscriptioncategories` |
| Ta bort inaktuella prenumerationsrader | em_subscriptions | Delete | `prvDeleteem_subscriptions` |
| Läsa kontakter (matchning via e-post, initial synk) | contact | Read | `prvReadContact` |

### 8. Kontaktkort och att lägga till Dynamics-poster i eMarketeer

Kontaktkortspanelen som installeras på dina Contact- och Lead-formulär visar eMarketeers marknadsföringshistorik för posten som visas. Därifrån (eller automatiskt via contact-created-webhooken) kan en Dynamics-Contact eller Lead läggas till i eMarketeer: integrationen läser posten och dess parent Account och skapar en matchande kontakt i eMarketeer. Det här flödet är skrivskyddat i din miljö.

**Utlösare:** användarinitierad. En Dynamics-användare visar en post i panelen eller lägger till den i eMarketeer därifrån. När contact-created-webhooken är aktiverad meddelas eMarketeer automatiskt om nyligen skapade Dynamics-kontakter, men en post kan bara komma in i eMarketeers marknadsföringsdatabas via de flöden som beskrivs här.

**Tabeller som används:** contact, lead, account.

**Behörigheter som krävs:** contact, lead och account Read only.

| Vad som händer | Tabell | Åtkomst | Behörighet |
|---|---|---|---|
| Panelen läser den öppna Contact/Lead-postens e-post (körs i den visande användarens webbläsare, under den användarens egna behörigheter) | — | Read | ingen för applikationsanvändaren |
| Läsa Contact eller Lead som ska läggas till | contact, lead | Read | `prvReadContact`, `prvReadLead` |
| Läsa parent Account (företagsnamn) | account | Read | `prvReadAccount` |

## Utbytta data

Det här avsnittet listar all data som passerar mellan de två systemen, för granskning ur dataskyddssynpunkt. Inga informationskategorier eller personuppgifter utöver vad som listas här utbyts. Integrationen överför samma kategorier av personuppgifter som den tidigare godkända samtyckesintegrationen (vanliga affärskontaktuppgifter, samtycksstatus och prenumerationsval) och tillför inga nya. Den utför ingen berikning, poängsättning eller inferens: varje värde som skrivs till endera systemet har angetts av en användare i ett av de två systemen.

### Dynamics 365 → eMarketeer

| Data | Fält | När |
|---|---|---|
| Kontakt-/Lead-visitkortsuppgifter | förnamn, efternamn, e-postadress, telefon, mobiltelefon, jobbtitel, hälsningsfras, företagsnamn, post-id, skapad datum | Import av marknadsföringslistans medlemmar; lägga till en post i eMarketeer från kontaktskortet; matchning inför en export |
| Account-uppgifter (företag) | företagsnamn, adress (gata, stad, delstat/region, postnummer, land) | Visas när ett företag väljs under export; importeras som kontaktens företagsnamn |
| Samtycksstatus | flaggan `donotbulkemail` och granskningens tidsstämpel för ändringen | Samtyckessynk |
| Prenumerationsval | kategori och prenumererad ja/nej per kontakt (från integrationens egna `em_subscriptions`-tabell) | Prenumerationssynk |
| Dynamics-användarkatalogposter | förnamn, efternamn, jobbets e-postadress och (för den valda ägaren) Entra ID-objekt-id | Fyller i "postägare"-dropdown i eMarketeer; tillskriver aktiviteter till den valda användaren |

### eMarketeer → Dynamics 365

| Data | Fält | När |
|---|---|---|
| Kontaktuppgifter skrivna till Leads/kontakter | förnamn, efternamn, e-postadress, telefon, mobiltelefon, jobbtitel, hälsningsfras, företagsnamn, adress (gata, stad, delstat/region, postnummer, land) | Export av en kontakt eller lead (användningsfall 3) |
| Nya Account-uppgifter | företagsnamn och valfritt kontaktens adress | Delning av kontakt med ett nytt företag |
| Marknadsföringsaktivitetsposter | ämne och beskrivningstext (kampanj-/meddelandenamn och utfall enligt konfiguration i automatiseringen), datum, ägande användare | Loggning av aktiviteter (användningsfall 4) |
| Samtycksstatus | enbart flaggan `donotbulkemail` | Samtyckessynk, när en kontakt avanmäler sig i eMarketeer |
| Prenumerationsdata | kategorinamn; per kontakt, prenumererad ja/nej kopplad till Contact-posten (radnyckeln i de anpassade tabellerna härleds från kontaktens e-postadress och kategori) | Prenumerationssynk, skrivet till integrationens egna anpassade tabeller |

Registrerade personer begränsas till de kontakter och Leads ditt team väljer att hantera i båda systemen, plus namnen och jobbets e-postadresser för dina egna Dynamics-användare enligt ovan. Inga särskilda kategorier av personuppgifter (artikel 9 i GDPR) läses eller skrivs någonsin av integrationen själv. Fritext-fält som den överför, till exempel aktivitetsbeskrivningar, innehåller bara vad ditt team konfigurerar i eMarketeer.

## Komplett referens för API-anrop

Den här tabellen listar varje Dataverse Web API-anrop som integrationen gör. Anrop markerade med *enbart anslut* eller *enbart koppla från* körs bara under användningsfallen 1 och 2.

| HTTP-anrop | Tabell | Åtkomst | Behörighet som krävs |
|---|---|---|---|
| `GET /contacts?$filter=emailaddress1 eq ...` | contact | Read | `prvReadContact` |
| `GET /contacts?$filter=contactid eq ...&$select=...` | contact | Read | `prvReadContact` |
| `GET /contacts?$filter=...&$expand=parentcustomerid_account` | contact, account | Read | `prvReadContact` + `prvReadAccount` |
| `GET /contacts?$filter=companyname eq ...` | contact | Read | `prvReadContact` |
| `GET /contacts?$filter=_originatingleadid_value eq ...` | contact | Read | `prvReadContact` |
| `GET /contacts?$top=1000&$orderby=...&$filter=...` | contact | Read | `prvReadContact` |
| `POST /contacts` | contact | Create | `prvCreateContact`; `prvAppendContact` + `prvAppendToAccount` / `prvAppendToUser` vid länkning av Account / ägare; `prvAssignContact` |
| `POST /contacts/Microsoft.Dynamics.CRM.UpdateMultiple` (fält: `donotbulkemail`) | contact | Update | `prvWriteContact` |
| `GET /leads?$filter=emailaddress1 eq ...` | lead | Read | `prvReadLead` |
| `GET /leads?$filter=...` (företags- och aktiva lead-filter) | lead | Read | `prvReadLead` |
| `GET /leads(id)` | lead | Read | `prvReadLead` |
| `POST /leads` | lead | Create | `prvCreateLead`; `prvAppendLead` + `prvAppendToUser` / `prvAppendToContact` / `prvAppendToAccount` vid länkning av ägare / Contact / Account |
| `PATCH /leads(id)` | lead | Update | `prvWriteLead` |
| `GET /accounts?$filter=accountid eq ...` | account | Read | `prvReadAccount` |
| `GET /accounts?$filter=...` (namnsökning) | account | Read | `prvReadAccount` |
| `POST /accounts` | account | Create, Assign | `prvCreateAccount`; `prvAppendToUser` och `prvAssignAccount` när `ownerid` sätts |
| `GET /lists?$filter=...` | list | Read | `prvReadList` |
| `GET /lists(id)` | list | Read | `prvReadList` |
| `GET /lists(id)?$expand=listcontact_association / listlead_association` | list, contact, lead | Read | `prvReadList` + `prvReadContact` / `prvReadLead` |
| `GET /contacts?fetchXml=...` (kör en dynamisk listas lagrade fråga) | contact | Read | `prvReadContact` |
| `POST /AddListMembersList` | list, contact, lead | Update (association) | `prvWriteList` + `prvAppendToList` + `prvAppendContact` / `prvAppendLead` |
| `POST /tasks` | task | Create | `prvCreateActivity` + `prvAppendActivity` + `prvAppendToLead` / `prvAppendToContact` |
| `POST /phonecalls` | phonecall, activityparty | Create | samma som tasks + `prvAppendToUser` |
| `GET /WhoAmI()`; `GET /systemusers(id)/Microsoft.Dynamics.CRM.RetrieveUserPrivilegeByPrivilegeName(…)` | systemuser | Read | `prvReadUser`, `prvReadRole` |
| `CallerObjectId`-huvud på `POST /tasks` / `/phonecalls`, enbart om behörigheten är tilldelad | — | — | `prvActOnBehalfOfAnotherUser` (valfri) |
| `GET /systemusers?$select=...&$filter=...` | systemuser | Read | `prvReadUser` |
| `GET /systemusers(id)?$select=azureactivedirectoryobjectid` | systemuser | Read | `prvReadUser` |
| `GET /privileges?$filter=...`; `GET /roles?$filter=...` | privilege, role | Read | `prvReadRole` (privilegetabellen har ingen dedikerad läsbehörighet) |
| `GET /audits?$select=...&$filter=objecttypecode eq 'contact' and ...` | audit | Read | `prvReadRecordAuditHistory` + `prvReadAuditSummary` |
| `GET /RetrieveAvailableLanguages()` | — | Read | ingen |
| `GET /EntityDefinitions(LogicalName='contact')/Attributes?$select=...` | metadata | Read | `prvReadEntity` + `prvReadAttribute` |
| `GET /em_subscriptioncategorieseses` | em_subscriptioncategories | Read | `prvReadem_subscriptioncategories` |
| `GET /em_subscriptionses?$filter=...` | em_subscriptions | Read | `prvReadem_subscriptions` |
| `POST /em_subscriptioncategorieseses/Microsoft.Dynamics.CRM.UpsertMultiple` | em_subscriptioncategories | Create + Update | `prvCreateem_subscriptioncategories` + `prvWriteem_subscriptioncategories` |
| `POST /em_subscriptionses/Microsoft.Dynamics.CRM.UpsertMultiple` | em_subscriptions | Create + Update | `prvCreateem_subscriptions` + `prvWriteem_subscriptions` + `prvAppendem_subscriptions`; `prvAppendToContact` + `prvAppendToem_subscriptioncategories` |
| `GET` + `DELETE /em_subscriptionses(id)` / `/em_subscriptioncategorieseses(id)` | em_subscriptions, em_subscriptioncategories | Delete | `prvDeleteem_subscriptions` + `prvDeleteem_subscriptioncategories` |
| `GET` / `POST /publishers` — *enbart anslut* | publisher | Read + Create | `prvReadPublisher`, `prvCreatePublisher` |
| `GET` / `POST /EntityDefinitions` — *enbart anslut* | metadata | Read + Create | `prvReadEntity` + `prvCreateEntity` + `prvCreateAttribute` |
| `GET` / `POST /EntityDefinitions(...)/Keys` — *enbart anslut* | metadata | Read + Create | `prvReadEntityKey` + `prvCreateEntityKey` |
| `GET` / `POST /RelationshipDefinitions` — *enbart anslut* | metadata | Read + Create | `prvReadRelationship` + `prvCreateRelationship` |
| `GET /EntityDefinitions`; `DELETE /EntityDefinitions(id)` — *enbart koppla från* | metadata | Read + Delete | `prvReadEntity` + `prvDeleteEntity` |
| `GET` / `POST /savedqueries` — *enbart anslut* | savedquery | Read + Create | `prvReadCustomization` / `prvWriteCustomization` |
| `GET /systemforms?$filter=...`; `PATCH /systemforms(id)` — *enbart anslut* | systemform | Read + Update | `prvReadSystemForm` / `prvWriteSystemForm` |
| `POST /PublishXml` — *enbart anslut* | — | Execute | `prvPublishCustomization` |
| `GET /customcontrols` — *enbart anslut* | customcontrol | Read | ingen dedikerad (ingen `prvReadCustomControl` finns) |
| `GET` / `POST /serviceendpoints`; `PATCH /serviceendpoints(id)` — *enbart anslut* | serviceendpoint | Read + Create + Write | `prvReadServiceEndpoint` / `prvCreateServiceEndpoint` / `prvWriteServiceEndpoint` |
| `GET /sdkmessages`; `GET /sdkmessagefilters` — *enbart anslut* | sdkmessage, sdkmessagefilter | Read | `prvReadSdkMessage` |
| `GET` / `POST /sdkmessageprocessingsteps` — *enbart anslut* | sdkmessageprocessingstep | Read + Create | `prvReadSdkMessageProcessingStep` + `prvCreateSdkMessageProcessingStep` |
| `GET` + `DELETE /sdkmessageprocessingsteps(id)`; `GET` + `DELETE /serviceendpoints(id)` — *enbart koppla från* | sdkmessageprocessingstep, serviceendpoint | Read + Delete | `prvReadSdkMessageProcessingStep` + `prvDeleteSdkMessageProcessingStep`; `prvReadServiceEndpoint` + `prvDeleteServiceEndpoint` |
| `GET /webresourceset?$filter=...` — *enbart anslut/koppla från* | webresource | Read | `prvReadWebResource` |
| `POST` / `PATCH /webresourceset(id)` — *enbart anslut* | webresource | Create + Update | `prvCreateWebResource` / `prvWriteWebResource` |
| `DELETE /webresourceset(id)` — *enbart koppla från* | webresource | Delete | `prvDeleteWebResource` |
| `GET /WhoAmI()` — *enbart anslut* | — | Read | ingen |
| `GET /api/data/v9.2/` (servicedokument) — *enbart anslut* | — | Read | ingen |
| `GET /EntityDefinitions(LogicalName='contact')?$select=IsAuditEnabled` — *enbart anslut* | metadata | Read | `prvReadEntity` |

## Autentiseringsendpoints

Det här är de identitetsrelaterade anrop som integrationen gör utanför din Dataverse-miljö:

| Anrop | Endpoint | Syfte |
|---|---|---|
| Token-begäran | `POST https://login.microsoftonline.com/{yourtenant}/oauth2/v2.0/token` med `grant_type=client_credentials` och `scope=https://<yourenvironment>/.default` | Hämtar applikationsanvändarens åtkomsttoken. Ingen användarkontext, inga Microsoft Graph-scope. |
| Miljöidentifiering | `GET https://globaldisco.crm.dynamics.com/api/discovery/v2.0/Instances`, med den anslutande administratörens egna token, bara vid initial anslutning | Hittar Dynamics-miljön att ansluta till. |
