import axios from "axios";
const base_url = "https://cd-server-5a27.onrender.com";

export const saveData = async (data) => {
  return await axios.post(`${base_url}/users`, data);
};
export const getContact = async (data) => {
  return await axios.get(`${base_url}/users`, data);
};
export const deleteContact = async (id) => {
  return await axios.delete(`${base_url}/users/${id}`);
};

export const getId = async (id) => {
  return await axios.get(`${base_url}/users/${id}`);
};

export const updateContact = async (id, data) => {
  return await axios.patch(`${base_url}/users/${id}`, data);
};
export const getFavorites = async () => {
  return await axios.get(`${base_url}/users/favourites`);
};

export const toggleFavorite = async (id) => {
  return await axios.post(`${base_url}/users/${id}/favorite`);
};
