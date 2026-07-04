const ProductForm = ({
  name, setName,
  price, setPrice,
  image, setImage,
  category, setCategory,
  description, setDescription,
  stock, setStock,
  addProduct,
  editingId,
  resetForm
}) => {
  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 mb-8">
      <h3 className="text-xl font-bold mb-4 text-yellow-500">
        {editingId ? "✏️ Edit Product" : "➕ Add New Product"}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 placeholder-gray-500"
        />
        <input
          type="text"
          placeholder="Category *"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 placeholder-gray-500"
        />
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