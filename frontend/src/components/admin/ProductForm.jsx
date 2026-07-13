import OrganizationTab from "./product-form/OrganizationTab";
const ProductForm = ({
  name,
  setName,
  price,
  setPrice,
  salePrice,
  setSalePrice,
  sku,
  setSku,
  imageFile,
  setImageFile,
  preview,
  setPreview,
  category,
  setCategory,
  categories,
  brand,
  setBrand,
  brands,
  description,
  setDescription,
  stock,
  setStock,
  addProduct,
  editingId,
  resetForm,
}) => {
  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 mb-8">
      <h3 className="text-xl font-bold mb-4 text-yellow-500">
        {editingId ? "✏️ Edit Product" : "➕ Add New Product"}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <OrganizationTab
  category={category}
  setCategory={setCategory}
  categories={categories}


  brand={brand}
  setBrand={setBrand}
  brands={brands}

/>
<input
  type="text"
  placeholder="Product Name *"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 placeholder-gray-500"
/>
        <input
          type="number"
          placeholder="Price *"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 placeholder-gray-500"
        />
        <input
  type="number"
  placeholder="Sale Price"
  value={salePrice}
  onChange={(e) => setSalePrice(e.target.value)}
  className="bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 placeholder-gray-500"
/>
        <div className="flex flex-col gap-3">
  <label className="text-gray-300 font-medium">
    Product Image
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files[0];

      if (!file) return;

      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }}
    className="bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white"
  />

  {preview && (
    <img
      src={preview}
      alt="Preview"
      className="w-40 h-40 object-cover rounded-xl border border-zinc-700"
    />
  )}
</div>
        
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 placeholder-gray-500"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 placeholder-gray-500 col-span-1 md:col-span-2"
          rows="3"
        />
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        <button
          onClick={addProduct}
          className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-xl hover:bg-yellow-400 transition-colors"
        >
          {editingId ? "Update Product" : "Add Product"}
        </button>
        {editingId && (
          <button
            onClick={resetForm}
            className="bg-zinc-800 text-white px-6 py-3 rounded-xl hover:bg-zinc-700 transition-colors"
          >
            Cancel Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductForm;