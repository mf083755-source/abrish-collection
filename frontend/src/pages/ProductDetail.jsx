import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productApi } from "../api/productApi";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductDetail() {
const { id } = useParams();
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [qty, setQty] = useState(1);

const { addToCart } = useCart();
const { addToWishlist } = useWishlist();

useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await productApi.getProduct(id);
console.log(response.data);
setProduct(response.data.product);
setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };

  fetchProduct();
}, [id]);
if (loading) {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      Loading...
    </div>
  );
}
if (!product) {
return ( <div className="bg-black text-white min-h-screen flex items-center justify-center">
Product Not Found </div>
);
}

const addQtyToCart = () => {
for (let i = 0; i < qty; i++) {
addToCart({
  id: product.id,
  image: product.featuredImage,
  name: product.title,
  price: product.price,
});
}
};

return ( <div className="bg-black text-white min-h-screen py-20">

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

    <div>
      <img
        src={product.featuredImage}
        alt={product.title}
        className="w-full rounded-3xl border border-yellow-700"
      />
    </div>

    <div>

      <p className="text-yellow-500 uppercase tracking-[5px]">
        Abrish Collection
      </p>

      <h1 className="text-5xl font-bold mt-3">
        {product.title}
      </h1>

      <p className="text-4xl text-yellow-500 font-bold mt-6">
        PKR {product.price}
      </p>

      <p className="text-gray-400 mt-8 leading-8">
        {product.description}
      </p>

      <div className="flex items-center gap-4 mt-8">

        <button
          onClick={() =>
            setQty(qty > 1 ? qty - 1 : 1)
          }
          className="bg-zinc-800 px-4 py-2 rounded"
        >
          -
        </button>

        <span className="text-2xl">
          {qty}
        </span>

        <button
          onClick={() => setQty(qty + 1)}
          className="bg-zinc-800 px-4 py-2 rounded"
        >
          +
        </button>

      </div>

      <div className="flex gap-4 mt-10">

        <button
          onClick={addQtyToCart}
          className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold"
        >
          Add To Cart
        </button>

        <button
  onClick={() =>
    addToWishlist({
      id: product.id,
      image: product.featuredImage,
      name: product.title,
      price: product.price,
    })
  }
  className="border border-pink-500 text-pink-500 px-8 py-4 rounded-xl"
>
  ♥ Wishlist
</button>

      </div>

      <div className="mt-10 border-t border-zinc-800 pt-6">

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p className="mt-2">
        <strong>Stock:</strong> {product.stock}
        </p>


        <p className="mt-2">
        <strong>Availability:</strong>{" "}
         {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

      </div>

    </div>

  </div>

</div>

);
}

export default ProductDetail;
