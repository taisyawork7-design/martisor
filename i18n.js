import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const savedLanguage = localStorage.getItem('selectedLanguage') || 'ru'

import headerRo from "./translations/header&footer/headerRo.json"
import headerRu from "./translations/header&footer/headerRu.json"
import headerEn from "./translations/header&footer/headerEn.json"

import mainRo from "./translations/main/homeRo.json"
import mainRu from "./translations/main/homeRu.json"
import mainEn from "./translations/main/homeEn.json"

i18n.use(initReactI18next).init({
    resources:{
        ro:{
            header: headerRo,
            main: mainRo
        },
        ru:{
            header: headerRu,
            main: mainRu
        },
        en:{
            header: headerEn,
            main: mainEn
        }

    },
    lng: savedLanguage, 
    fallbackLng: 'ru',
    ns: ['header'],
    defaultNS: 'header',
    interpolation: {
        escapeValue: false,
    },
})

export default i18n