import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Pet = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null); // is pradziu null, o poto {...}
  const [logs, setLogs] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [logFilter, setLogFilter] = useState(true);

  useEffect(() => {
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
      .then((resp) => resp.json())
      .then((response) => {
        const foundPet = response.find((pet) => pet.id === +id);
        setPet(foundPet);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        setLogs(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    fetch(
      `https://glittery-dull-snickerdoodle.glitch.me/v1/prescriptions/${id}`
    )
      .then((resp) => resp.json())
      .then((response) => {
        setPrescriptions(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pet.name}: Health Records</h1>
      <div>
        Display:
        <span
          style={{
            background: logFilter ? "orange" : "lightgrey",
            padding: 16,
            marginLeft: 16,
            marginRight: 16,
          }}
          onClick={() => setLogFilter(!logFilter)}
        >
          Logs
        </span>
        <span style={{ background: "orange", padding: 16 }}>Prescriptions</span>
      </div>
      <div>
        <ul>
          {logFilter &&
            logs.map((log) => (
              <li key={log.id}>
                {log.description} - <strong>{log.status}</strong>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Pet;
