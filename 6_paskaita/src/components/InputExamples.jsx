import { useState } from "react";

const InputExamples = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [favourite, setFavourite] = useState("");

  return (
    <div>
      <h3>
        Vardas {name} susideda iš {name.length}{" "}
        {name.length === 1 ? "raidės" : "raidžių"}
      </h3>
      {age !== "" && (
        <p>
          {name} yra {age >= 18 ? "pilnametis" : "nepilnametis"}
        </p>
      )}
      <div>
        {name} mėgstamiausia diena yra {favourite}
      </div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Vardas..."
        style={{ marginBottom: 16 }}
      />
      <input
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Metai..."
        style={{ marginBottom: 16 }}
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Slaptazodis..."
        style={{ marginBottom: 16 }}
      />
      <input
        type="password"
        value={repeatPassword}
        onChange={(event) => setRepeatPassword(event.target.value)}
        placeholder="Pakartokite savo slaptazodi..."
        style={{ marginBottom: 16 }}
      />
      {password !== repeatPassword && (
        <p style={{ color: "red" }}>Slaptazodziai neatitinka!</p>
      )}
      <select
        style={{ width: 200 }}
        value={favourite}
        onChange={(event) => setFavourite(event.target.value)}
      >
        <option value="">Nepasirinkta</option>
        <option value="Pirmadienis">Pirmadienis</option>
        <option value="Penktadienis">Penktadienis</option>
        <option value="Savaitgalis">Savaitgalis</option>
      </select>
    </div>
  );
};

export default InputExamples;
