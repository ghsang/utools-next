import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationKO from '../public/locales/ko/common.json';
import translationEN from '../public/locales/en/common.json';

const resources = {
    ko: {
        translation: translationKO
    },
    fr: {
        translation: translationEN
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "ko",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n