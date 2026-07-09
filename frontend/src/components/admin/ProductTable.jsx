import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function ProductTable({ products, editProduct, deleteProduct }) {

  console.log("TABLE PRODUCTS:", products);

  return (
    <div className="bg-zinc-900 rounded-xl p-4">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left p-2">Image</th>
            <th className="text-left p-2">Title</th>
            <th className="text-left p-2">Category</th>
            <th className="text-left p-2">Price</th>
            <th className="text-left p-2">Stock</th>
            <th className="text-left p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="p-2">
                <img
                  src={product.featuredImage}
                  width="50"
                  height="50"
                  alt={product.title}
                />
              </td>

              <td className="p-2">{product.title}</td>

              <td className="p-2">{product.category}</td>

              <td className="p-2">{product.price}</td>

              <td className="p-2">{product.stock}</td>

              <td className="p-2">
                <button onClick={() => editProduct(product)}>
                  <FiEdit />
                </button>

                <button onClick={() => deleteProduct(product.id)}>
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}