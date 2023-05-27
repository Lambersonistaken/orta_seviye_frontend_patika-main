import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext(); 

const ThemeProvider = ({children})=>{ 
    
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

const useTheme = ()=>useContext(ThemeContext); // custom hook

export {ThemeProvider, useTheme}