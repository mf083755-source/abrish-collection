function AdminDashboard() {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  const totalOrders = orders.length;

  const totalSales = orders.reduce(
    (total, order) => total + order.total,
    0
  );

  return (
    <>
      <div className="bg-black min-h-screen text-white p-10">

        <h1 className="text-5xl text-yellow-500 font-bold mb-10">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-2xl">Total Orders</h2>
            <p className="text-4xl mt-3 text-yellow-500">
              {totalOrders}
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-2xl">Total Sales</h2>
            <p className="text-4xl mt-3 text-green-500">
              PKR {totalSales.toLocaleString()}
            </p>
          </div>

        </div>

      </div>
      <div className="mt-8">
        <a
          href="/admin-orders"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold"
        >
          View All Orders
        </a>
      </div>
    </>
  );
}

export default AdminDashboard;