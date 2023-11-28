import { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // New way with axios
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.data)
      .then((response) => {
        // for setting data
        setUsers(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCreateUser = () => {
    const newUser = { name: "Test Rokas" };

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((resp) => resp.data)
      .then((response) => {
        // for adding new
        setUsers((prevUsers) => [...prevUsers, response]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteUser = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.data)
      .then(() => {
        // for deleting
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateUser = (updatingUser) => {
    const newUserData = { name: "Testeris" };
    axios
      .put(
        `https://jsonplaceholder.typicode.com/users/${updatingUser.id}`,
        newUserData
      )
      .then((resp) => resp.data)
      .then((response) => {
        // for updating
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user.id === response.id ? response : user))
        );
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Axios way</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            <button onClick={() => handleUpdateUser(user)}>Update name</button>
          </li>
        ))}
      </ul>
      <button onClick={handleCreateUser}>Create new</button>
    </div>
  );
};

export default Axios;
