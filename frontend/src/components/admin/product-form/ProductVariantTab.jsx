const ProductVariantTab = ({ variants, setVariants }) => {
    const addVariant = () => {
  setVariants([
    ...variants,
    {
      color: "",
      size: "",
      sku: "",
      price: "",
      salePrice: "",
      stock: "",
      images: [],
    },
  ]);
};
  return (
    <div className="bg-zinc-800 rounded-xl p-5 border border-zinc-700 mt-6">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-xl font-bold text-yellow-500">
          Product Variants
        </h3>

        <button
          type="button"
          onClick={addVariant}
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400"
        >
          + Add Variant
        </button>
      </div>

      {variants.map((variant, index) => (
  <div
    key={index}
    className="bg-black border border-zinc-700 rounded-xl p-5 mb-4"
  >
    <h4 className="text-lg font-semibold text-white mb-4">
      Variant #{index + 1}
    </h4>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <input
        type="text"
        placeholder="Color"
        className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white"
      />

      <input
        type="text"
        placeholder="Size"
        className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white"
      />

      <input
        type="text"
        placeholder="SKU"
        className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white"
      />

      <input
        type="number"
        placeholder="Price"
        className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white"
      />

      <input
        type="number"
        placeholder="Sale Price"
        className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white"
      />

      <input
        type="number"
        placeholder="Stock"
        className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white"
      />

    </div>
  </div>
))}
    </div>
  );
};

export default ProductVariantTab;