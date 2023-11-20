import { useContext } from "react";
import { ThemeContext } from "../SimpleContextExample";

const ThemedButton = () => {
  const theme = useContext(ThemeContext); // panaudojimas konteksto

  return (
    <button
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      Button with theme
    </button>
  );
};

export default ThemedButton;
