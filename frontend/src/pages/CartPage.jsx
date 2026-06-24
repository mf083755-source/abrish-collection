import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const grandTotal = cartItems.reduce((total, item) => {
    const price = Number(
      item.price.toString().replace(/[^0-9]/g, "")
    );

    return total + price * item.quantity;
  }, 0);

  return (
    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl text-yellow-500 font-bold mb-10">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => {
            const price = Number(
              item.price.toString().replace(/[^0-9]/g, "")
            );

            const subtotal = price * item.quantity;

            return (
              <div
                key={index}
                className="bg-zinc-900 p-5 rounded-xl mb-4"
              >
                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-5">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />

                    <div>
                      <h3 className="text-xl font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-yellow-500">
                        {item.price}
                      </p>

                      <p className="mt-2">
                        Subtotal:
                        <span className="text-green-500 ml-2">
                          PKR {subtotal.toLocaleString()}
                        </span>
                      </p>
                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQty(index)}
                      className="bg-zinc-700 px-3 py-2 rounded"
                    >
                      -
                    </button>

                    <span className="text-xl">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(index)}
                      className="bg-zinc-700 px-3 py-2 rounded"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(index)}
                      className="bg-red-500 px-4 py-2 rounded ml-4"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              </div>
            );
          })}

          <div className="bg-zinc-900 p-6 rounded-xl mt-8">

            <h2 className="text-3xl font-bold text-yellow-500">
              Grand Total
            </h2>

            <p className="text-4xl mt-3">
              PKR {grandTotal.toLocaleString()}
            </p>

            <button
              onClick={() => navigate("/checkout")}
              className="mt-6 bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold"
            >
              Proceed To Checkout
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default CartPage;