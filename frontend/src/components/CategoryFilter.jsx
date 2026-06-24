function CategoryFilter({ category, setCategory }) {
const categories = [
"All",
"Men",
"Women",
"Shoes",
"Accessories",
];

return ( <div className="flex justify-center flex-wrap gap-4 mb-12">

  {categories.map((item) => (
    <button
      key={item}
      onClick={() => setCategory(item)}
      className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
        category === item
          ? "bg-yellow-500 text-black"
          : "bg-zinc-900 text-white border border-zinc-700 hover:border-yellow-500"
      }`}
    >
      {item}
    </button>
  ))}

</div>


);
}

export default CategoryFilter;
