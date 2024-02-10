import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";

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


  return (
    <ThemeProvider value={{theme, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* button  */}
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
