import { createContext ,useContext } from "react";

export const ThemeContext = createContext({
    theme: "light",
    darktheme : ()=>{},
    lighttheme : ()=>{}
})

export const ThemeProvider = ThemeContext.Provider

    // creating Custom Hook
export default function useTheme(){
    return useContext(ThemeProvider);
}