import { useEffect, useState } from "react";

const FetchAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Old way with fetch
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((response) => {
        setUsers(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCreateUser = () => {
    const newUser = { name: "Test Rokas" };

    const options = {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch("https://jsonplaceholder.typicode.com/users", options)
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        setUsers((prevUsers) => [...prevUsers, response]); // same as

        // same as ^
        // const updatedUsers = [...users, response];
        // setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Old way</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={handleCreateUser}>Create new</button>
    </div>
  );
};

export default FetchAPI;
