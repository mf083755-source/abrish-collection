import { useEffect, useState } from "react";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(savedOrders);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl text-yellow-500 font-bold mb-10">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-xl mb-4"
          >
            <h2 className="text-xl text-yellow-500">
              {order.orderId}
            </h2>

            <p>Name: {order.customerName}</p>
            <p>Phone: {order.phone}</p>
            <p>Payment: {order.paymentMethod}</p>
            <p>Total: PKR {order.total}</p>
            <p>Status: {order.status}</p>
            <p>Date: {order.orderDate}</p>
          </div>
        ))
      )}

    </div>
  );
}

export default OrdersPage;