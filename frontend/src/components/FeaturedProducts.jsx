import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { productApi } from "../api/productApi";


function FeaturedProducts() {
  const [products, setProducts] = useState([]);

useEffect(() => {
  loadProducts();
}, []);

const loadProducts = async () => {
  try {
    const response = await productApi.getProducts();

    setProducts(
      (response.data.products || [])
        .filter((p) => p.status === "Active")
        .slice(0, 4)
    );

  } catch (err) {
    console.error(err);
  }
};
return ( <section className="bg-black py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <p className="text-yellow-500 uppercase tracking-[6px]">
        Customer Favorites
      </p>

      <h2 className="text-5xl font-bold text-white mt-4">
        Best Sellers
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Our most loved products chosen by customers for
        quality, elegance and timeless fashion.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {products.map((product) => (
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

</section>

);
}

export default FeaturedProducts;
