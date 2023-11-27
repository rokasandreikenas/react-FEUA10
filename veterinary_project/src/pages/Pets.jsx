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

  const handleDelete = (deletingPet) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch(
      `https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${deletingPet.id}`,
      options
    )
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        const updatedPets = pets.filter((pet) => pet.id !== deletingPet.id);
        setPets(updatedPets);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Link to="/add-pet">Add new pet</Link>
      {pets.map((pet) => (
        <div key={pet.id} style={{ margin: 16 }}>
          <Link to={`/pets/${pet.id}`}>{pet.name}</Link>
          <strong>{new Date(pet.dob).toLocaleDateString()}</strong>
          <button onClick={() => handleDelete(pet)}>Delete this pet</button>
        </div>
      ))}
    </div>
  );
};

export default Pets;
