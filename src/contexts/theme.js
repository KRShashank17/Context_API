import { createContext ,useContext } from "react";

export const ThemeContext = createContext({
    theme: "light",
    darkTheme : ()=>{},
    lightTheme : ()=>{}
})

export const ThemeProvider = ThemeContext.Provider

    // creating Custom Hook
export default function useTheme(){
    return useContext(ThemeContext);
}