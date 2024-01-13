import { createI18n } from "vue-i18n";
import uz from '../i18n/uz.json'
import ru from '../i18n/ru.json'

const lang = localStorage.getItem("lang");
console.log(lang, "lang")
const i18n = createI18n({
    messages: {
        uz,
        ru,
    },
    silentTranslationWarn: true,
    fallbackLocale: lang || 'uz',
});


export default i18n;
