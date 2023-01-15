'use client';
// 1. create the provider, that will provide the global state to my app
// 1.1 create the context
// 1.2 create the context wrapper (provider)

import { createContext, useEffect, useState } from "react" //static line
// 1.1 create the context //predefined method
export const ThemeContext = createContext();




// 1.2 create the context wrapper (provider) // we use children parameter inreturned value
export default function ThemeWrapper({children}){

    function initialThemeHandle(){
        // take the initial value
        isDarkTheme && document.querySelector("body").classList.add("dark"); // add dark class to the body element
    }

    const [isDarkTheme, setIsDarkTheme] = useState(true);

    function toggleThemeHandler() {
        // check the previus flag value if false make it true , if true make it false
        setIsDarkTheme(!isDarkTheme); // take the previos value and oppisite using not operetor (!)
        document.querySelector("body").classList.toggle("dark"); // add dark class to the body element
    }

    const globalState = {
        isDarkTheme: true, 
        toggleThemeHandler  //function which allow me to toggle between the theme
    } 


//static lines ->
//value={globalState} : it is the gglobal state to share between the component
    return(
        <ThemeContext.Provider value={globalState}>  
            {children}
        </ThemeContext.Provider>
    )

}
