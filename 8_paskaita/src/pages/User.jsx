import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const User = () => {
  const { id } = useParams(); // parametras visada grįžta kaip string, todel nepamirškite castint i number (jei reikia)
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        setTimeout(() => {
          setUser(response);
        }, 1000);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  if (!user) {
    return <div>User loading...</div>;
  }

  return (
    <div>
      <h1>Page of single user</h1>
      <button onClick={goBack}>Go back to user list</button>
      <p>Username: {user.username}</p>
      <p>email: {user.email}</p>
      <p>Website: {user.website}</p>
      <p>Phone no.: {user.phone}</p>
    </div>
  );
};

export default User;
