import { createContext, useState } from "react";

const ThemeContext = createContext();  // ThemeContext is an object with Provider and Consumer properties
export const ThemeProvider = ({children})=>{ // ThemeProvider is a component
    const [theme, setTheme ]= useState("dark"); // theme is a state variable and setTheme is a function to update the theme
    const values={ // values is an object with theme and setTheme properties
        theme,
        setTheme,
    };
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>  // ThemeContext.Provider is a component. Children is a prop of ThemeProvider component.
}
export default ThemeContext;