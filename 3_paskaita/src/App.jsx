import { useState } from "react"; // importuojam
import Button from "./components/Button";

const App = () => {
  const [state, setState] = useState(0); // sukuriam ir panaudojam initial reikšmę t.y. 0
  const [name, setName] = useState("Guest");
  const doubledCount = state + state;

  const colors = ["red", "green", "blue", "yellow", "black", "pink"];
  return (
    <div>
      <h1>Hello, {name}. how are you?</h1>
      <button onClick={() => setName("Rokas")}>Log in as Rokas</button>
      <button onClick={() => setName("Greta")}>Log in as Greta</button>
      <button onClick={() => setName("Guest")}>Log out</button>
      <br />
      <br />
      <button
        onClick={() => {
          setState(state + 1); // iškviečiam setState kai norim pakeisti reikšmę
        }}
      >
        Add +1
      </button>{" "}
      <span style={{ fontSize: 24 }}>
        {state} doubled {doubledCount}
      </span>
      <button
        onClick={() => {
          setState(state - 1);
        }}
      >
        Minus 1
      </button>{" "}
      <Button onClick={() => setState(0)}>Reset </Button>
      <br />
      <div
        style={{ height: 100, width: 100, background: "red" }}
        onClick={() => alert("I clicked red box")}
      />
      <br />
      {colors.map((color, index) => (
        <div
          key={color}
          style={{
            height: 50 * (index + 1),
            width: 50 * (index + 1),
            background: color,
            marginBottom: 4,
          }}
          onClick={() => alert(`I clicked ${color} box`)}
        />
      ))}
    </div>
  );
};

export default App;
