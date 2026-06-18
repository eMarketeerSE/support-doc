___INFO___

{
  "type": "TAG",
  "id": "cvt_temp_public_id",
  "version": 1,
  "securityGroups": [],
  "displayName": "eMarketeer Web Tracker",
  "categories": ["ANALYTICS", "MARKETING"],
  "description": "Tracks website visitors for eMarketeer with automatic cookie consent integration. Works with Cookiebot, OneTrust, CookieYes, Cookie Information, Complianz, iubenda, and more.",
  "containerContexts": [
    "WEB"
  ]
}


___TEMPLATE_PARAMETERS___

[
  {
    "type": "TEXT",
    "name": "trackerId",
    "displayName": "Tracker ID",
    "simpleValueType": true,
    "valueValidators": [
      {
        "type": "NON_EMPTY"
      }
    ],
    "help": "Your eMarketeer tracker ID. Found in your eMarketeer account under tracking settings."
  },
  {
    "type": "CHECKBOX",
    "name": "preloadTjs",
    "checkboxText": "Preload t.js (recommended)",
    "simpleValueType": true,
    "defaultValue": true,
    "help": "When enabled, t.js is loaded immediately and page views are tracked as soon as consent is given. When disabled, t.js is only loaded after consent."
  },
  {
    "type": "CHECKBOX",
    "name": "enableLog",
    "checkboxText": "Enable console logging",
    "simpleValueType": true,
    "defaultValue": false,
    "help": "Enable detailed logging to the browser console for debugging."
  }
]


___SANDBOXED_JS_FOR_WEB_TEMPLATE___

const injectScript       = require('injectScript');
const log                = require('logToConsole');
const encodeUriComponent = require('encodeUriComponent');

var baseUrl   = 'https://app.emarketeer.com/resources/800/gtm_scripts/emtv2-consent.js';
var trackerId = data.trackerId || '';
var preload   = data.preloadTjs ? '1' : '0';
var logFlag   = data.enableLog ? '1' : '0';

var url = baseUrl + '?id=' + encodeUriComponent(trackerId) + '&preload=' + preload + '&log=' + logFlag;

log('[eMarketeer] injecting:', url);

injectScript(
  url,
  function () {
    log('[eMarketeer] consent handler loaded OK');
    data.gtmOnSuccess();
  },
  function () {
    log('[eMarketeer] FAILED to load consent handler');
    data.gtmOnFailure();
  }
);


___WEB_PERMISSIONS___

[
  {
    "instance": {
      "key": {
        "publicId": "inject_script",
        "versionId": "1"
      },
      "param": [
        {
          "key": "urls",
          "value": {
            "type": 2,
            "listItem": [
              {
                "type": 1,
                "string": "https://app.emarketeer.com/resources/*"
              }
            ]
          }
        }
      ]
    },
    "isRequired": true
  },
  {
    "instance": {
      "key": {
        "publicId": "logging",
        "versionId": "1"
      },
      "param": [
        {
          "key": "environments",
          "value": {
            "type": 1,
            "string": "all"
          }
        }
      ]
    },
    "isRequired": true
  }
]


___TESTS___

scenarios: []
