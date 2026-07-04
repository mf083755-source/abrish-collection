const ProductSearch = ({ search, setSearch, category, setCategory, categories = ["All"] }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 placeholder-gray-500"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default ProductSearch;