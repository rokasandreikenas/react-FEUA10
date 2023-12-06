import axios from "axios";
import { API } from "./consts";

export const fetchPosts = async () => {
  const response = await axios.get(`${API}/posts`);
  return response.data;
};

export const createPost = async (post) => {
  // {title, text, imageUrl}
  const response = await axios.post(`${API}/posts`, post);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await axios.delete(`${API}/posts/${id}`);
  return response.data;
};
