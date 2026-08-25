import { createContext, useState } from "react";


export const  ThemeContext = createContext('light')
export function ThemePorvider({children}) {

    let [theme , setTheme] = useState('light')

    return(   
        <ThemeContext value={{theme , setTheme}}>
        {children}
        </ThemeContext>
    )

}
