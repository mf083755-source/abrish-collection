import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ id, image, name, price }) {
const { addToCart } = useCart();
const { addToWishlist } = useWishlist();

const handleAddToCart = () => {
addToCart({ id, image, name, price });
};

const handleAddToWishlist = () => {
addToWishlist({ id, image, name, price });
};

return ( <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-500 transition duration-500">

```
  <div className="relative overflow-hidden">

    <span className="absolute top-4 left-4 z-10 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
      NEW
    </span>

    <img
      src={image}
      alt={name}
      className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
    />

  </div>

  <div className="p-6">

    <h3 className="text-white text-xl font-semibold">
      {name}
    </h3>

    <p className="text-yellow-500 text-lg mt-2 font-bold">
      {price}
    </p>

    <div className="flex flex-col gap-3 mt-5">

      <button
        onClick={handleAddToCart}
        className="bg-yellow-500 text-black py-3 rounded-xl font-bold hover:bg-yellow-400 transition"
      >
        Add To Cart
      </button>

      <button
        onClick={handleAddToWishlist}
        className="border border-pink-500 text-pink-500 py-3 rounded-xl font-semibold"
      >
        ♥ Wishlist
      </button>

      <Link
        to={`/product/${id}`}
        className="text-center border border-white/20 text-white py-3 rounded-xl hover:border-yellow-500"
      >
        View Product
      </Link>

    </div>

  </div>

</div>

);
}

export default ProductCard;
