import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props) {

    const { Language, setLanguage } = useState("english");
    const changeLanguage = (e) => {
        setLanguage(e.target.value);
    }

    return (
        <LanguageContext.Provider value={{ Language, changeLanguage }}>
            {props.children}
        </LanguageContext.Provider >
    )
}
