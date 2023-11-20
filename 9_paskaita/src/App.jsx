import { useState } from "react";
import { useRef } from "react";
import SimpleContextExample from "./SimpleContextExample";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [name, setName] = useState("");
  const inputRef = useRef(null); // {current: null} -

  const handleFocusNameInput = () => {
    inputRef.current.focus();
  };

  return (
    <ThemeProvider>
      <input
        ref={inputRef}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={handleFocusNameInput}>Focus on my name input</button>

      <SimpleContextExample />
    </ThemeProvider>
  );
};

export default App;
