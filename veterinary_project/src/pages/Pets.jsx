import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Pets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
      .then((resp) => resp.json())
      .then((response) => {
        setPets(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {pets.map((pet) => (
        <div key={pet.id}>
          {/* <Link to={`/pets/${pet.id}`}>{pet.name}</Link> */}
          {pet.name}
        </div>
      ))}
    </div>
  );
};

export default Pets;
