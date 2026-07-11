import api from "./productApi";

export const brandApi = {
  getBrands: () => api.get("/brands"),

  createBrand: (data) =>
    api.post("/brands", data),

  updateBrand: (id, data) =>
    api.put(`/brands/${id}`, data),

  deleteBrand: (id) =>
    api.delete(`/brands/${id}`),
};