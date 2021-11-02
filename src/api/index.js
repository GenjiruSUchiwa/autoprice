import axios from 'axios';

const API_ENDPOINT = 'YOUR_API_ENDPOINT';

export const fetchProducts = async () => {
  return await axios.get(API_ENDPOINT);
};

export const fetchSingleProduct = async id => {
  return await axios.get(`${API_ENDPOINT}/${id}`);
};

export const createProduct = async post => {
  return await axios.post(API_ENDPOINT, post);
};

export const updateProduct = async (id, updatedProduct) => {
  return await axios.patch(`${API_ENDPOINT}/${id}`, updatedProduct);
};

export const deleteProduct = async id => {
  return await axios.delete(`${API_ENDPOINT}/${id}`);
};