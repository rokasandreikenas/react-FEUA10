import { useState } from "react"; // importuojam

const App = () => {
  const [state, setState] = useState(0); // sukuriam ir panaudojam initial reikšmę t.y. 0

  return (
    <div>
      <button
        onClick={() => {
          setState(state + 1); // iškviečiam setState kai norim pakeisti reikšmę
        }}
      >
        Add +1
      </button>{" "}
      <span style={{ fontSize: 24 }}>{state}</span>
      <button
        onClick={() => {
          setState(state - 1);
        }}
      >
        Minus 1
      </button>{" "}
      <button onClick={() => setState(0)}> Reset</button>
      <br />
      <div
        style={{ height: 100, width: 100, background: "red" }}
        onClick={() => alert("I clicked red box")}
      />
    </div>
  );
};

export default App;
