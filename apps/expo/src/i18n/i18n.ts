import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './ar/ar.json';
import en from './en/en.json';

export const resources = {
    en: {
        translation: en,
    },
    ar: {
        translation: ar,
    },
};

void i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});
