import { inject } from 'vue';

export function useTranslation() {
    const i18n = inject('i18n')!; // Use non-null assertion if inject is not optional
    const translate = (key: string) => i18n.global.t(key);

    return {
        translate,
    };
}