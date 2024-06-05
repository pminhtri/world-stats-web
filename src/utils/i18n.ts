import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import { supportedLanguages } from "../contracts";
import { DEFAULT_LANGUAGE_CODE } from "../constants";
import translationEN from "../locales/en-US.json";

export function getLanguageName(languageCode: string) {
    const language = supportedLanguages.find(
        (lang) => lang.code === languageCode,
    );

    return language?.name || '';
}

export const getLocaleCode = (): string => {
    const { language } = i18n;

    return language;
};

async function loadResources() {
    const supportedLanguageCodes = supportedLanguages.map(
        (language) => language.code,
    );

    const resources = await Promise.all(
        supportedLanguageCodes.map(async (languageCode) => {
            return (await import(`../locales/${languageCode}.json`)).default;
        }),
    );

    for (let i = 0; i < supportedLanguageCodes.length; i += 1) {
        i18n.addResourceBundle(
            supportedLanguageCodes[i],
            'translation',
            resources[i],
            true,
            true,
        );
    }
}

i18n.use(initReactI18next).init({
    lng: DEFAULT_LANGUAGE_CODE,
    resources: { DEFAULT_LANGUAGE_CODE: { translation: translationEN } },
    fallbackLng: DEFAULT_LANGUAGE_CODE,
    interpolation: {
        escapeValue: false,
    },
    nsSeparator: '|',
});

(async () => {
    await loadResources();
    i18n.changeLanguage(
        localStorage.getItem('languageCode') || DEFAULT_LANGUAGE_CODE,
    );
})();

export default i18n;