import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./Components/themeBtn";
import Card from "./Components/card";

function App() {
      // use the same names as in "context-> theme.js" folder / values passed via ThemeProvider
  const [theme , setTheme] = useState("light");

  const lightTheme = ()=>{
    setTheme("light");
  }
  const darkTheme = ()=>{
    setTheme("dark");
  }

      // switching done here 
  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(theme);
  } , [theme])

  // bg-gradiants 
  // bg-gradient-to-r from-slate-300 to-slate-500
  // bg-gradient-to-r from-fuchsia-600 to-purple-600 

  return (
    <ThemeProvider value={{theme, darkTheme, lightTheme}}>
      <div className="bg-gradient-to-r from-slate-300 to-slate-500 flex flex-wrap h-screen w-screen items-center overflow-auto">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
