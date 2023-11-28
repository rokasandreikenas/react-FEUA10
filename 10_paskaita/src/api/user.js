import axios from "axios";
import { API } from "./index";

export const fetchUsers = () => {
  return axios.get(`${API}/users`).then((response) => response.data);
};

export const createUser = (user) => {
  return axios.post(`${API}/users`, user).then((response) => response.data);
};

export const deleteUser = (id) => {
  return axios.delete(`${API}/users/${id}`).then((response) => response.data);
};
export const updateUser = (user) => {
  return axios
    .put(`${API}/users/${user.id}`, user)
    .then((response) => response.data);
};
