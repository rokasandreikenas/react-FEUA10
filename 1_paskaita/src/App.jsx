import Section from "./components/Section";
import Button from "./components/Button";
import { FaBeer } from "react-icons/fa";
import "./App.css";

function App() {
  const name = "Rokas";

  const testSection = (
    <section>
      <p>Wow {name}</p>
    </section>
  );

  return (
    <main>
      <header>
        <h1 className="hello">
          Hello world <FaBeer />{" "}
        </h1>
      </header>
      <div className="container">
        If you love software press this button <Button />
        <FaBeer color="red" />
        <section className="custom-section">
          <p>Wow {name}</p>
        </section>
        {testSection}
        {testSection}
        {testSection}
        <Section />
      </div>
    </main>
  );
}

export default App;
