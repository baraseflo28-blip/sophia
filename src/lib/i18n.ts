import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../locales/en.json";
import ar from "../locales/ar.json";

// Initialize i18n immediately to prevent errors
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    lng: "ar", // Set default language to Arabic
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // Disable suspense to prevent hydration issues
    },
  });

export default i18n;
