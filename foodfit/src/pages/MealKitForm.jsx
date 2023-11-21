import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { createMealKit } from "../api";
import "./MealKitForm.scss";

const MealKitForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [mealCount, setMealCount] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Date.now();
    const newMealKit = { id, title, price, mealCount, imageUrl };
    createMealKit(newMealKit);
    setIsSubmitted(true);
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setPrice(0);
    setMealCount(0);
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="test">Check this out</div>

      {isSubmitted && (
        <h3 className="success-message">
          Sėkmingai sukūrėte naują mitybos rinkinį
        </h3>
      )}
      <Input
        label="Pavadinimas"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        label="Kaina"
        type="number"
        value={price}
        onChange={(event) => setPrice(+event.target.value)}
      />
      <Input
        label="Patiekalų kiekis"
        type="number"
        value={mealCount}
        onChange={(event) => setMealCount(+event.target.value)}
      />
      <Input
        label="Nuotraukos nuoroda"
        type="url"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      />
      <Button>Sukurti</Button>
    </form>
  );
};

export default MealKitForm;
