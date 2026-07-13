import api from "./productApi";

export const categoryApi = {
  getCategories: () => api.get("/categories"),

  createCategory: (data) =>
    api.post("/categories", data),

  updateCategory: (id, data) =>
    api.put(`/categories/${id}`, data),

  deleteCategory: (id) =>
    api.delete(`/categories/${id}`),

  uploadImage: (formData) =>
    api.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};