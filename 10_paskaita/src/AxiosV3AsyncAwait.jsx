import { useEffect, useState } from "react";
import { fetchUsers, createUser, deleteUser, updateUser } from "./api/userV2";

const AxiosV2 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  const handleCreateUser = async () => {
    const newUser = { name: "Test Rokas" };

    try {
      const response = await createUser(newUser);
      setUsers((prevUsers) => [...prevUsers, response]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateUser = async (updatingUser) => {
    const newUserData = { ...updatingUser, name: "Testeris" };

    try {
      const response = await updateUser(newUserData);
      const userUpdater = (user) => (user.id === response.id ? response : user);
      setUsers((prevUsers) => prevUsers.map(userUpdater));
    } catch (error) {
      console.error(error);
    }
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
