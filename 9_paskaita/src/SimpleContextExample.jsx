import { createContext } from "react";
import Toolbar from "./components/Toolbar";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = createContext(themes.light); // konteksto sukūrimas ir defaultValue nustatymas

const SimpleContextExample = () => {
  return (
    <ThemeContext.Provider value={themes.light}>
      {/* Nurodoma pradinė reikšmė value atribute */}
      <h1>Simple as that</h1>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

export default SimpleContextExample;
