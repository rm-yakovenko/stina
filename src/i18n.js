import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const apiKey = 'iB-9TRP5-HpN6u0T_ORJLg';
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

const lan = localStorage.getItem('lan') || 'uk';

i18next
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: lan,

    ns: ['default'],
    defaultNS: 'default',

    supportedLngs: ['uk', 'en', 'de', 'pl'],

    backend: {
      loadPath,
    },
  });
