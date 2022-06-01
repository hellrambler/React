import React, { createContext } from "react";
import UseToggle from "../hooks/UseToggle";

export const ThemeContext = createContext();

export function ThemeProvider(props) {

    const [isDarkMode, toggleMode] = UseToggle(false)

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
            {props.children}
        </ThemeContext.Provider>
    )

}