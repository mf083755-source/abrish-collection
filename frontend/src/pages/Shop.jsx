import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import { productApi } from "../api/productApi";

import CategoryFilter from "../components/CategoryFilter";

function Shop() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [products, setProducts] = useState([]);
    useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  try {
    const response = await productApi.getProducts();
    console.log("SHOP API:", response.data);

    setProducts(response.data.products || []);
  } catch (error) {
    console.error("Failed to load products:", error);
  }
};
    const filteredProducts = products.filter((product) => {
  const matchesSearch = (product.title || "")
  .toLowerCase()
  .includes(search.toLowerCase());

  const matchesCategory =
  category === "All" ||
  (product.category || "") === category;

  return matchesSearch && matchesCategory;
});
  return (
    <div className="bg-black min-h-screen py-20">

      <div className="max-w-7xl mx-auto px-6">

       <h1 className="text-6xl text-center text-white font-bold mb-4">

          Luxury Fashion Collection
        </h1>
        <p className="text-center text-gray-400 mb-10">
          Discover premium clothing, footwear, accessories and luxury fashion.
         </p>

        <SearchBar
         search={search}
         setSearch={setSearch}
        />
        <CategoryFilter
        category={category}
        setCategory={setCategory}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


          {filteredProducts.map((product) => (
            <ProductCard
  key={product.id}
  id={product.id}
  image={product.featuredImage}
  name={product.title}
  price={`PKR ${product.price}`}
 />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Shop;