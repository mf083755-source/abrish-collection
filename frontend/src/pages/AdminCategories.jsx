import { useEffect, useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import { categoryApi } from "../api/categoryApi";

function AdminCategories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);

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

    if (editingId) {
      await categoryApi.updateCategory(editingId, {
        name,
      });
    } else {
      await categoryApi.createCategory({
        name,
      });
    }

    setName("");
    setEditingId(null);
    loadCategories();

  } catch (err) {
    console.error(err);
  }
};
const editCategory = (cat) => {
  setEditingId(cat.id);
  setName(cat.name);
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
          className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white"
        />

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

              <th className="p-4 text-left">Name</th>

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

                <td className="p-4">
                  {cat.name}
                </td>

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