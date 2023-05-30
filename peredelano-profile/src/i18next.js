import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import detector from "i18next-browser-languagedetector";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  // Подключение бэкенда i18next
  .use(Backend)
  // Автоматическое определение языка 
  .use(LanguageDetector)
  // 
  .use(detector)
  // модуль инициализации
  .use (initReactI18next)
  .init({
    // Стандартный язык
    fallbackLng: 'ru',
    saveMissing: true,
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json', // Путь к файлам переводов
    },
    debug: true,
    // Распознавание и кэширование языковых кук
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n;