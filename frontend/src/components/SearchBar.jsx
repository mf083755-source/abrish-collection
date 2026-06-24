function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-lg bg-zinc-900 text-white border border-yellow-500"
      />
    </div>
  );
}

export default SearchBar;