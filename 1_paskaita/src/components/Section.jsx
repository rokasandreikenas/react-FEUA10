import Button from "./Button";
import ButtonClass from "./ButtonClass";
import "./Section.css";

const Section = () => {
  const name = "Rokas";

  return (
    <section className="custom-section">
      <p>Hello {name}, How are you?</p>
      <Button />
      <ButtonClass />
    </section>
  );
};

export default Section;
