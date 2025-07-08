import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import fr from './locales/fr.json'
import mk from './locales/mk.json'


i18n.use(LanguageDetector).use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      mk: { translation: mk }
    },
    interpolation: {
      escapeValue: false,
    }

  })

export default i18n