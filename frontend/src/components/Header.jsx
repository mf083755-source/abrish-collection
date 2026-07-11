import { Link } from "react-router-dom";
import { useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import {
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
function Header() {
const { cartItems } = useCart();
const { wishlistItems } = useWishlist();
const [menuOpen, setMenuOpen] = useState(false);

const cartCount = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

return ( <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-yellow-700">

```
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex items-center justify-between h-24">

      <Link to="/">
        <img
          src="/images/logo.png"
          alt="Abrish Collection"
          className="h-16"
        />
      </Link>

      <nav className="hidden lg:flex items-center gap-8 text-white font-medium">

        <Link to="/" className="hover:text-yellow-500">
          Home
        </Link>

        <Link to="/shop" className="hover:text-yellow-500">
          Shop
        </Link>

        <Link to="/collections" className="hover:text-yellow-500">
          Collections
        </Link>

        <Link to="/new-arrivals" className="hover:text-yellow-500">
          New Arrivals
        </Link>

        <Link to="/about" className="hover:text-yellow-500">
          About
        </Link>

        <Link to="/contact" className="hover:text-yellow-500">
          Contact
        </Link>
        <Link
  to="/admin-login"
  className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400"
>
  Admin
</Link>

      </nav>
      <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="lg:hidden text-white text-2xl"
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</button>
      <Link
  to="/admin-login"
  className="lg:hidden bg-yellow-500 text-black px-3 py-2 rounded-lg text-sm font-bold"
>
  Admin
</Link>

      <div className="flex items-center gap-6 text-white text-xl">

        <FaSearch className="cursor-pointer hover:text-yellow-500" />

        <Link to="/wishlist" className="relative">

          <FaHeart className="hover:text-yellow-500" />

          <span className="absolute -top-2 -right-3 bg-yellow-500 text-black text-xs font-bold px-2 rounded-full">
            {wishlistItems.length}
          </span>

        </Link>

        <FaUser className="cursor-pointer hover:text-yellow-500" />

        <Link to="/cart" className="relative">

          <FaShoppingBag className="hover:text-yellow-500" />

          <span className="absolute -top-2 -right-3 bg-yellow-500 text-black text-xs font-bold px-2 rounded-full">
            {cartCount}
          </span>

        </Link>

      </div>

    </div>
    {menuOpen && (
  <div className="lg:hidden bg-black border-t border-yellow-700 py-4">

    <div className="flex flex-col space-y-4 px-6">

      <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

      <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>

      <Link to="/collections" onClick={() => setMenuOpen(false)}>Collections</Link>

      <Link to="/new-arrivals" onClick={() => setMenuOpen(false)}>New Arrivals</Link>

      <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

      <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

      <Link
        to="/admin-login"
        onClick={() => setMenuOpen(false)}
        className="bg-yellow-500 text-black text-center py-3 rounded-lg font-bold"
      >
        Admin Login
      </Link>

    </div>

  </div>
)}

  </div>
</header>

);
}

export default Header;
