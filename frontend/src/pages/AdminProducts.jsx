import { useEffect, useState } from "react";

function AdminProducts() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    setProducts(savedProducts);
  }, []);

  const addProduct = () => {
    if (!name || !price) {
      alert("Please fill required fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
      image,
      category,
      description,
      stock: Number(stock),
    };

    const updatedProducts = [...products, newProduct];

    setProducts(updatedProducts);

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    setName("");
    setPrice("");
    setImage("");
    setCategory("");
    setDescription("");
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(updatedProducts);

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );
  };

  return (
    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl text-yellow-500 font-bold mb-10">
        Product Management
      </h1>

      <div className="bg-zinc-900 p-6 rounded-xl mb-10">

        <h2 className="text-2xl mb-6">
          Add Product
        </h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          className="w-full p-3 mb-3 bg-zinc-800 rounded"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="w-full p-3 mb-3 bg-zinc-800 rounded"
        />

        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          className="w-full p-3 mb-3 bg-zinc-800 rounded"
        />

        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="w-full p-3 mb-3 bg-zinc-800 rounded"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-3 mb-3 bg-zinc-800 rounded"
        />
        <input
  value={stock}
  onChange={(e) => setStock(e.target.value)}
  placeholder="Stock Quantity"
  className="w-full p-3 mb-3 bg-zinc-800 rounded"
/>
        <button
          onClick={addProduct}
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold"
        >
          Add Product
        </button>

      </div>

      <h2 className="text-3xl mb-6">
        Products List
      </h2>

      {products.map((product) => (
        <div
          key={product.id}
          className="bg-zinc-900 p-5 rounded-xl mb-4 flex justify-between items-center"
        >
          <div>
            <h3 className="text-xl text-yellow-500">
              {product.name}
            </h3>

            <p>PKR {product.price}</p>
            <p>{product.category}</p>
            <p>Stock: {product.stock}</p>
          </div>

          <button
            onClick={() => deleteProduct(product.id)}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      ))}

    </div>
  );
}

export default AdminProducts;