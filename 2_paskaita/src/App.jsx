import Button from "./components/Button";
import ButtonClass from "./components/ButtonClass";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <Button title="Spausk mane" />
      <Button title="Click me" />
      <ButtonClass title="Atidaryti " />
    </div>
  );
};

export default App;
