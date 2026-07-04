import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import Checkout from "./pages/Checkout";
import OrdersPage from "./pages/OrdersPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminOrders from "./pages/AdminOrders";
import AdminProducts from "./pages/AdminProducts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collections from "./pages/Collections";
import NewArrivals from "./pages/NewArrivals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin-orders" element={<AdminOrders />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/admin-products" element={<AdminProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;