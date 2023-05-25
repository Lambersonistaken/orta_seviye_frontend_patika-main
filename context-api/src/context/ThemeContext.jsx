import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext(); 

export const ThemeProvider = ({children})=>{ 
    
    const mode = localStorage.getItem("theme")

    const [theme, setTheme ]= useState(mode); 



    useEffect(()=>{
        localStorage.setItem("theme", theme);
    },[theme]);



    const values={ 

        theme,
        setTheme,

    };


    return (

            <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider> 

    )
    
    
}
export default ThemeContext;