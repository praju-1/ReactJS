import { createContext, useState, useContext } from "react";

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
})

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((preTheme) => (preTheme === 'light' ? 'dark' : 'light'))
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};