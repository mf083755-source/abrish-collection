import axios from 'axios';

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const productApi = {
  // Get all products
  getProducts: (params) => api.get('/products', { params }),
  
  // Get single product
  getProduct: (id) => api.get(`/products/${id}`),
  
  // Create product
  createProduct: (data) => api.post('/products', data),

  // Upload Image
uploadImage: (formData) =>
  api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }),
  
  // Update product
  updateProduct: (id, data) => api.put(`/products/${id}`, data),
  
  // Delete product
  deleteProduct: (id) => api.delete(`/products/${id}`)
};

export default api;