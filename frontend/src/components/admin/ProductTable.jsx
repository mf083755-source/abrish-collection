import { FiEdit, FiTrash2 } from 'react-icons/fi';

const ProductTable = ({ products, editProduct, deleteProduct }) => {
  if (!products || products.length === 0) {
    return (
      <div className="bg-zinc-900 p-12 rounded-xl border border-zinc-800 text-center">
        <p className="text-gray-400 text-lg">📦 No products found</p>
        <p className="text-gray-500 text-sm mt-2">Add your first product using the form above</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-black border-b border-zinc-800">
            <tr>
              <th className="px-4 py-3 text-left text-gray-400 text-sm">Image</th>
              <th className="px-4 py-3 text-left text-gray-400 text-sm">Name</th>
              <th className="px-4 py-3 text-left text-gray-400 text-sm">Category</th>
              <th className="px-4 py-3 text-left text-gray-400 text-sm">Price</th>
              <th className="px-4 py-3 text-left text-gray-400 text-sm">Stock</th>
              <th className="px-4 py-3 text-left text-gray-400 text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id || product.id} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <td className="px-4 py-3">
                  <img
                    src={product.image || 'https://via.placeholder.com/50x50/C9A84C/FFFFFF?text=ABRISH'}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/50x50/C9A84C/FFFFFF?text=ABRISH';
                    }}
                  />
                </td>
                <td className="px-4 py-3 font-medium">{product.name}</td>
                <td className="px-4 py-3 text-gray-400">{product.category}</td>
                <td className="px-4 py-3 text-yellow-500">PKR {product.price?.toLocaleString() || 0}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    (product.stock || 0) > 10 ? 'bg-green-500/20 text-green-500' :
                    (product.stock || 0) > 0 ? 'bg-yellow-500/20 text-yellow-500' :
                    'bg-red-500/20 text-red-500'
                  }`}>
                    {(product.stock || 0) > 0 ? `${product.stock} in stock` : 'Out of Stock'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => editProduct(product)}
                      className="p-2 bg-blue-500/20 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
                      title="Edit Product"
                    >
                      <FiEdit size={16} />
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="p-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                      title="Delete Product"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;