import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import "./MealKitForm.scss";

const MealKitForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [mealCount, setMealCount] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  return (
    <form className="form">
      <Input
        label="Pavadinimas"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        label="Kaina"
        type="number"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <Input
        label="Patiekalų kiekis"
        type="number"
        value={mealCount}
        onChange={(event) => setMealCount(event.target.value)}
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
