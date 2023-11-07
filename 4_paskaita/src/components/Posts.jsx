import { useState, useEffect } from "react";
import Post from "./Post";

const URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [data, setData] = useState([]); // pradine reikšmė masyvas, jeigu duomenys bus masyve

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // tusčias masyvas indikuoja, kad suveiks tik vieną kartą, kai komponentas užsikraus

  return (
    <div>
      {data.map((item, index) => (
        <Post key={item.id} post={item} index={index} />
      ))}
    </div>
  );
};

export default Posts;
