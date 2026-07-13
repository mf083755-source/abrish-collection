import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { productApi } from "../api/productApi";

function NewArrivals() {
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

  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-[6px]">
            Latest Fashion
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            New Arrivals
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover the latest additions to Abrish Collection.
            Handpicked fashion pieces designed for elegance and style.
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

export default NewArrivals;