import { useEffect, useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import { categoryApi } from "../api/categoryApi";

function AdminCategories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");

  const loadCategories = async () => {
    try {
      const res = await categoryApi.getCategories();
      setCategories(res.data.categories);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const saveCategory = async () => {
  if (!name) {
    alert("Enter Category Name");
    return;
  }

  try {

    let uploadedImage = preview;

if (imageFile) {
  const formData = new FormData();
  formData.append("image", imageFile);

  const uploadResponse = await categoryApi.uploadImage(formData);

  uploadedImage =
    "http://localhost:5000" + uploadResponse.data.imageUrl;
}

const categoryData = {
  name,
  description,
  status,
  image: uploadedImage,
};

if (editingId) {
  await categoryApi.updateCategory(editingId, categoryData);
} else {
  await categoryApi.createCategory(categoryData);
}

    setName("");
setDescription("");
setStatus("Active");
setImageFile(null);
setPreview("");
setEditingId(null);

loadCategories();

  } catch (err) {
    console.error(err);
  }
};
const editCategory = (cat) => {
  setEditingId(cat.id);
  setName(cat.name);
  setDescription(cat.description || "");
  setStatus(cat.status || "Active");
  setPreview(cat.image || "");
};

const deleteCategory = async (id) => {
  if (!window.confirm("Delete this category?")) return;

  try {
    await categoryApi.deleteCategory(id);
    loadCategories();
  } catch (err) {
    console.error(err);
  }
};
  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold text-yellow-500 mb-8">
        Categories
      </h1>

      <div className="bg-zinc-900 p-6 rounded-xl mb-8">

        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white mb-4"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white mb-4"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white mb-4"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0] || null;
            setImageFile(file);

            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => setPreview(reader.result);
              reader.readAsDataURL(file);
            } else {
              setPreview("");
            }
          }}
          className="w-full text-white mb-4"
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mb-4 h-40 w-auto object-cover rounded-xl"
          />
        )}
        <button
          onClick={saveCategory}
          className="mt-4 bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold"
        >
          {editingId ? "Update Category" : "Add Category"}
        </button>

      </div>

      <div className="bg-zinc-900 rounded-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-black">

            <tr>

              <th className="p-4 text-left">Image</th>

                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Description</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Action</th>

            </tr>

          </thead>

          <tbody>

            {categories.map((cat) => (

              <tr
                key={cat.id}
                className="border-t border-zinc-800"
              >

                <>
  <td className="p-4">
    <img
      src={
        cat.image ||
        "https://via.placeholder.com/60x60?text=No+Image"
      }
      alt={cat.name}
      className="w-16 h-16 rounded-lg object-cover"
    />
  </td>

  <td className="p-4">
    {cat.name}
  </td>
</>

                <td className="p-4 text-green-500">
                  {cat.status}
                </td>
                <td className="p-4 flex gap-2">

  <button
    onClick={() => editCategory(cat)}
    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
  >
    Edit
  </button>

  <button
    onClick={() => deleteCategory(cat.id)}
    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
  >
    Delete
  </button>

</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}

export default AdminCategories;