import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeButton = ()=>{
    const {theme, toggleTheme} = useTheme();

    return(
        <button onClick={toggleTheme} style={{background:theme==='light' ? '#fff' : '#333', color:theme=== 'light'? '#333':'#fff'}}>
            Toggle Theme
        </button>
    )
};

export default ThemeButton;