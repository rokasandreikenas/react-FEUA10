import { useState, useEffect } from "react";
import Post from "./Post";

const URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [data, setData] = useState([]); // pradine reikšmė masyvas, jeigu duomenys bus masyve
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
        setError("Įvyko klaida. Pabandykite už kelių akimirkų.");
      });
  }, []);

  return (
    <div>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      {data.map((item, index) => (
        <Post key={index} post={item} index={index} />
      ))}
    </div>
  );
};

export default Posts;
