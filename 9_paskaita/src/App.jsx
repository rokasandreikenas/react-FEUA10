import { useState } from "react";
import { useRef } from "react";

const App = () => {
  const [name, setName] = useState("");
  const inputRef = useRef(null); // {current: null} -

  const handleFocusNameInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={handleFocusNameInput}>Focus on my name input</button>
    </div>
  );
};

export default App;
