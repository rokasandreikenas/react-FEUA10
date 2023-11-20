import { createContext, useState } from "react";
import PropTypes from "prop-types";

const themes = {
  light: {
    foreground: "#ffffff",
    background: "#673ab7",
  },
  dark: {
    foreground: "#000000",
    background: "#e1cffc",
  },
};

const ThemeContext = createContext({
  theme: themes.light,
  isDarkMode: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const theme = isDarkMode ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext, ThemeProvider };
