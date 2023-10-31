import Adult from "./components/Adult";
import Button from "./components/Button";
import ButtonClass from "./components/ButtonClass";
import Card from "./components/Card";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  const isAdult = (age) => {
    if (age >= 18) {
      return true;
    }

    return false;
  };

  const isAdultV2 = (age) => age >= 18;
  const isAdultV3 = (age) => (age >= 18 ? true : false);
  const isAdultV4 = (age) => {
    return age >= 18 ? true : false;
  };
  const isAdultV5 = (age) => {
    return age >= 18;
  };

  const isAdultV6 = (age) => {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <Header />
      <Hero
        title="Akcija atrakcija"
        subtitle="Visiem saldainiam akcija"
        imageUrl="https://cdn.britannica.com/77/249077-138-B757C7FD/origins-of-Halloween-explained.jpg?w=800&h=450&c=crop"
      />
      <br />
      <br />
      <Button title="Spausk mane" />
      <Button title="Click me" />
      <ButtonClass title="Atidaryti " />
      <br />
      <Hero
        title="Akcija atrakcija"
        subtitle="Visiem saldainiam akcija"
        color="red"
      />
      <br />
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <Card
          imageUrl="https://cdn.britannica.com/77/249077-138-B757C7FD/origins-of-Halloween-explained.jpg?w=800&h=450&c=crop"
          description="Halloween party in Vilnius"
        />
        <Card
          imageUrl="https://hips.hearstapps.com/hmg-prod/images/halloween-pumpkins-royalty-free-image-1688047405.jpg?crop=1.00xw:0.716xh;0,0.259xh&resize=1200:*"
          description="Halloween party in Kaunas"
        />
        <Card
          imageUrl="https://assets.editorial.aetnd.com/uploads/2009/11/halloween-gettyimages-1424736925.jpg"
          description="Halloween party Klaipeda"
        />
      </div>
      <br />
      <br />
      <Adult name="Rokas" age={24} />
      <Adult name="Tomas" age={17} />
      <Greeting />
      <Greeting name="Rokas" />
      <Greeting name="Tomas" lastLoggedIn={new Date().toLocaleDateString()} />
    </div>
  );
};

export default App;
