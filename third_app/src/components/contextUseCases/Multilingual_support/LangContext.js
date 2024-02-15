import { createContext, useContext, useState } from "react";

const Langcontext = createContext();

export const useLang = ()=> useContext(Langcontext);

export const LangProvider = ({children}) =>{
    const [lang, setLang] = useState('en')

    const switchLang = (newLang) =>{
        setLang(newLang)
    }


    return(
        <Langcontext.Provider value={{lang, switchLang}}>

        {children}
        </Langcontext.Provider>
    )
};