import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const { cartItems, clearCart } = useCart();

  const productsTotal = cartItems.reduce((total, item) => {
  const price = Number(
    item.price.toString().replace(/[^0-9]/g, "")
  );

  return total + price * item.quantity;
}, 0);

const shipping = productsTotal > 0 ? 250 : 0;
const grandTotal = productsTotal + shipping;

  return (
    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl text-yellow-500 font-bold mb-10">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Customer Information */}
        <div className="bg-zinc-900 p-6 rounded-xl">

          <h2 className="text-2xl mb-6">
            Customer Information
          </h2>

          <input
            type="text"
  placeholder="Full Name"
  value={customerName}
  onChange={(e) => setCustomerName(e.target.value)}
  className="w-full p-3 mb-4 rounded bg-zinc-800"
/>

          <input
            type="text"
  placeholder="Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full p-3 mb-4 rounded bg-zinc-800"
/>

          <input
           type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-3 mb-4 rounded bg-zinc-800"
/>

          <textarea
            placeholder="Address"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  className="w-full p-3 mb-4 rounded bg-zinc-800"
  rows="4"
/>

          <input
           type="text"
  placeholder="City"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  className="w-full p-3 rounded bg-zinc-800"
/>
        </div>

        {/* Order Summary */}
        <div className="bg-zinc-900 p-6 rounded-xl">

          <h2 className="text-2xl mb-6">
            Order Summary
          </h2>

          <div className="space-y-3 mb-6">

            <div className="flex justify-between">
              <span>Products Total</span>
              <span>PKR {productsTotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>PKR {shipping.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-yellow-500 text-xl font-bold">
              <span>Grand Total</span>
              <span>PKR {grandTotal.toLocaleString()}</span>
            </div>

          </div>

          <h3 className="text-xl mb-4">
            Payment Method
          </h3>

          <div className="space-y-3 mb-6">

            <label className="flex gap-3">
              <input
                type="radio"
                checked={paymentMethod === "COD"}
                onChange={() => setPaymentMethod("COD")}
              />
              Cash On Delivery
            </label>

            <label className="flex gap-3">
              <input
                type="radio"
                checked={paymentMethod === "JazzCash"}
                onChange={() => setPaymentMethod("JazzCash")}
              />
              JazzCash
            </label>

            <label className="flex gap-3">
              <input
                type="radio"
                checked={paymentMethod === "EasyPaisa"}
                onChange={() => setPaymentMethod("EasyPaisa")}
              />
              EasyPaisa
            </label>

          </div>

          <button
   onClick={() => {
    if (!customerName || !phone || !address) {
      alert("Please fill required fields");
      return;
    }

    const orderId =
      "ORD-" + Math.floor(Math.random() * 100000);

    const order = {
      orderId,
      customerName,
      phone,
      email,
      address,
      city,
      paymentMethod,
      products: cartItems,
      total: grandTotal,
      status: "Pending",
      orderDate: new Date().toLocaleString(),
    };

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    existingOrders.push(order);

    localStorage.setItem(
  "orders",
  JSON.stringify(existingOrders)
);

alert(`Order Saved Successfully\n${orderId}`);

clearCart();

window.location.href = "/orders";
  }}
  className="w-full bg-yellow-500 text-black py-4 rounded-lg font-bold"
>
  Place Order
</button>

        </div>

      </div>

    </div>
  );
}

export default Checkout;    