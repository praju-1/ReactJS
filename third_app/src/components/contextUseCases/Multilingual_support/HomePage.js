import React from "react";
import { useLang } from "./LangContext";

function HomePage() {
    const { lang, switchLang } = useLang();

    return (
        <div>
            <h1>{lang === 'en' ? 'Welcome' : 'Bienvenido'}</h1>

            <p>{lang === 'en' ? 'This is react app..!' : 'Esto es una application de react'}</p>

            <button onClick={() => switchLang(lang === 'en' ? 'es' : 'en')}>
                {lang === 'en' ? 'Switch to Spanish' : 'Switch to english'}

            </button>

        </div>
    )
}

export default HomePage