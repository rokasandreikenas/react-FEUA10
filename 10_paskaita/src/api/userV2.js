import axios from "axios";
import { API } from "./index";

export const fetchUsers = async () => {
  const response = await axios.get(`${API}/users`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(`${API}/users`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${API}/users/${id}`);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await axios.put(`${API}/users/${user.id}`, user);
  return response.data;
};
