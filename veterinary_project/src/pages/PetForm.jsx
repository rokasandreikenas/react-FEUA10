import { useState } from "react";

const PetForm = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPet = { name, dob, client_email: clientEmail };

    const options = {
      method: "POST",
      body: JSON.stringify(newPet),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets", options)
      .then((resp) => resp.json())
      .then((response) => {
        // Reset form
        // Back to pet list
        // Show success message
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        style={{ display: "block", marginBottom: 16 }}
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={dob}
        onChange={(event) => setDob(event.target.value)}
        style={{ display: "block", marginBottom: 16 }}
      />
      <input
        placeholder="Client Email"
        type="email"
        value={clientEmail}
        onChange={(event) => setClientEmail(event.target.value)}
        style={{ display: "block", marginBottom: 16 }}
      />
      <button type="submit">Add new pet</button>
    </form>
  );
};

export default PetForm;
