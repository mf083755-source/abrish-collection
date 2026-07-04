const DashboardCards = ({ products }) => {
  const totalProducts = products.length;
  const totalValue = products.reduce((sum, p) => sum + (p.price * (p.stock || 0)), 0);
  const categories = new Set(products.map(p => p.category)).size;
  const lowStock = products.filter(p => (p.stock || 0) < 10).length;
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
        <p className="text-gray-400 text-sm">Total Products</p>
        <p className="text-3xl font-bold text-yellow-500">{totalProducts}</p>
      </div>
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
        <p className="text-gray-400 text-sm">Total Value</p>
        <p className="text-2xl font-bold text-green-500">PKR {totalValue.toLocaleString()}</p>
      </div>
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
        <p className="text-gray-400 text-sm">Categories</p>
        <p className="text-3xl font-bold text-blue-500">{categories}</p>
      </div>
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
        <p className="text-gray-400 text-sm">Low Stock</p>
        <p className="text-3xl font-bold text-red-500">{lowStock}</p>
      </div>
    </div>
  );
};

export default DashboardCards;