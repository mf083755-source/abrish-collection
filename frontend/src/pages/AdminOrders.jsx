function AdminOrders() {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl text-yellow-500 font-bold mb-10">
        Admin Orders
      </h1>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-xl mb-4 border border-yellow-700"
          >
            <h2 className="text-xl text-yellow-500">
              {order.orderId}
            </h2>

            <p>Name: {order.customerName}</p>
            <p>Phone: {order.phone}</p>
            <p>City: {order.city}</p>
            <p>Payment: {order.paymentMethod}</p>
            <p>Total: PKR {order.total}</p>

            <div className="mt-3">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full">
                {order.status}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminOrders;