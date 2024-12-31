import { use } from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const i18n = 
  use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    fallbackLng: 'fr-CA',
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/cookbook/locales/{{lng}}/{{ns}}.json',
    }
  });

export default i18n;
