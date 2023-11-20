import { useContext } from "react";
import ThemedButton from "./ThemedButton";
import { ThemeContext } from "../context/ThemeContext";

const Toolbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div
        style={{
          backgroundColor: theme.background,
          color: theme.foreground,
          width: 100,
          height: 100,
        }}
        onClick={toggleTheme}
      >
        Hello
      </div>
      <ThemedButton />
    </div>
  );
};

export default Toolbar;
