import { useEffect, useState } from "react";
import { fetchUsers, createUser, deleteUser, updateUser } from "./api/user";

const AxiosV2 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((response) => {
        setUsers(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCreateUser = () => {
    const newUser = { name: "Test Rokas" };

    createUser(newUser)
      .then((response) => {
        setUsers((prevUsers) => [...prevUsers, response]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteUser = (id) => {
    deleteUser(id)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateUser = (updatingUser) => {
    const newUserData = { ...updatingUser, name: "Testeris" };
    updateUser(newUserData)
      .then((response) => {
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user.id === response.id ? response : user))
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Axios v2 way</h2>
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

export default AxiosV2;
