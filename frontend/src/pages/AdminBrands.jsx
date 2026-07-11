import { useEffect, useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import { brandApi } from "../api/brandApi";

function AdminBrands() {
  const [brands, setBrands] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);

  const loadBrands = async () => {
    try {
       const res = await brandApi.getBrands();
      setBrands(res.data.brands);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadBrands();
  }, []);

  const saveBrand = async () => {
  if (!name) {
    alert("Enter Brand Name");
    return;
  }

  try {

    if (editingId) {
      await brandApi.updateBrand(editingId, {
        name,
      });
    } else {
      await brandApi.createBrand({
        name,
      });
    }

    setName("");
    setEditingId(null);
    loadBrands();

  } catch (err) {
    console.error(err);
  }
};
const editBrand = (brand) => {
  setEditingId(brand.id);
  setName(brand.name);
};

const deleteBrand = async (id) => {
  if (!window.confirm("Delete this brand?")) return;

  try {
    await brandApi.deleteBrand(id);
loadBrands();
  } catch (err) {
    console.error(err);
  }
};
  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold text-yellow-500 mb-8">
        Brands
      </h1>

      <div className="bg-zinc-900 p-6 rounded-xl mb-8">

        <input
          type="text"
          placeholder="Brand Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white"
        />

        <button
          onClick={saveBrand}
          className="mt-4 bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold"
        >
          {editingId ? "Update Brand" : "Add Brand"}
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

            {brands.map((brand) => (

              <tr
                
                className="border-t border-zinc-800"
              >

                <td className="p-4">
                  {brand.name}
                </td>

                <td className="p-4 text-green-500">
                  {brand.status}
                </td>
                <td className="p-4 flex gap-2">

  <button
    onClick={() => editBrand(brand)}
    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
  >
    Edit
  </button>

  <button
    onClick={() => deleteBrand(brand.id)}
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

export default AdminBrands;
