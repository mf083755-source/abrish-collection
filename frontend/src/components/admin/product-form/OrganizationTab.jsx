function OrganizationTab({
  category,
  setCategory,
  categories,

  brand,
  setBrand,
  brands,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {/* Category */}

      <div>
        <label className="block text-gray-300 mb-2">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white"
        >
          <option value="">Select Category</option>

         {(categories || []).map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Brand */}

      <div>
        <label className="block text-gray-300 mb-2">
          Brand
        </label>

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white"
        >
          <option value="">Select Brand</option>

          {(brands || []).map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {/* Collection */}

      <div>
        <label className="block text-gray-300 mb-2">
          Collection
        </label>

        <select
          className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white"
        >
          <option>Coming Soon</option>
        </select>
      </div>

    </div>
  );
}

export default OrganizationTab;