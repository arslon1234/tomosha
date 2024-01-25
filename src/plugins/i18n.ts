import { createI18n, type I18nOptions } from 'vue-i18n'

/**
 * import locale messages resource from json for global scope
 */
import uz from './locales/uz.json'
import ru from './locales/ru.json'
const lang = localStorage.getItem("lang")
const options: I18nOptions = {
    legacy: false,
    messages: {
        'uz': uz,
        'ru': ru
    },
    silentTranslationWarn: true,
    fallbackLocale: lang || 'uz',
    locale: 'uz',
}

/**
 * setup vue-i18n with i18n resources with global type definition.
 * if you define the i18n resource schema in your `*.d.ts`, these is checked with typeScript.
 */
const i18n = createI18n<false, typeof options>(options)
export default  i18n