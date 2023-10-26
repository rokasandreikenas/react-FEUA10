import Section from "./components/Section";

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
        <h1>Hello world</h1>
      </header>
      <section>
        <p>Wow {name}</p>
      </section>
      {testSection}
      {testSection}
      {testSection}
      <Section />
    </main>
  );
}

export default App;
