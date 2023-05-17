import { createContext, useContext, useState, ReactNode } from "react";

interface LanguageProviderProps {
    children: ReactNode;
}

interface LanguageProviderData {
    languagePosition: number;
    handleChangeLanguage: (newLanguage: LanguageTypes) => void;
}

export type LanguageTypes = 'en' | 'fr' | 'pt';

export const languageHashMap = new Map([
    ['en', 0],
    ['fr', 1],
    ['pt', 2]
]);

// export const languageMap = {
//     en: {
//         index: 0,
//         symbol: 🇬🇧
//     },
//     fr: {
//         index: 1,
//         symbol: 🇫🇷
//     },
//     pt: {
//         index: 2,
//         symbol: 🇧🇷
//     },
// }

const LanguageContext = createContext<LanguageProviderData>({} as LanguageProviderData);

export function LanguageProvider({ children }: LanguageProviderProps): JSX.Element {
    const [ language, setLanguage ] = useState<LanguageTypes>('en');
    const [ languagePosition, setLanguagePosition ] = useState<number>(0);

    const handleChangeLanguage = (newLanguage: LanguageTypes): void => {
        console.log('newLanguage')
        if (!languageHashMap.has(newLanguage) == undefined) return;

        const index = languageHashMap.get(newLanguage) || 0;
        // const result = languageMap[newLanguage] || 0;
        setLanguage(newLanguage);
        setLanguagePosition(index);

        localStorage.setItem('preferredLanguage', newLanguage);
    }

    return (
        <LanguageContext.Provider value={{
            languagePosition,
            handleChangeLanguage
        }}>
            { children }
        </LanguageContext.Provider>
    )
}

export const useLanguageContext: () => LanguageProviderData = (): LanguageProviderData => useContext(LanguageContext);