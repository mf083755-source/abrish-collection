import { useEffect, useState } from "react";
import { productApi } from "../api/productApi";
import { categoryApi } from "../api/categoryApi";
import { brandApi } from "../api/brandApi";
import DashboardCards from "../components/admin/DashboardCards";
import ProductForm from "../components/admin/ProductForm";
import ProductSearch from "../components/admin/ProductSearch";
import ProductTable from "../components/admin/ProductTable";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Form state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [sku, setSku] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [editingId, setEditingId] = useState(null);
  
  // Filter state
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await productApi.getProducts();
      console.log("API RESPONSE:", response.data);
      console.log("PRODUCT COUNT:", response.data.products.length);
      setProducts(response.data.products || []);
      setError(null);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products");
      // Fallback to localStorage
      const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
      setProducts(savedProducts);
    } finally {
      setLoading(false);
    }
  };
  const fetchCategories = async () => {
  try {
    const response = await categoryApi.getCategories();
    setCategories(response.data.categories || []);
  } catch (err) {
    console.error("Category Error:", err);
  }
};
const fetchBrands = async () => {
  try {
    const response = await brandApi.getBrands();
    setBrands(response.data.brands || []);
  } catch (err) {
    console.error("Brand Error:", err);
  }
};

  useEffect(() => {
  fetchProducts();
  fetchCategories();
  fetchBrands();
}, []);
  const resetForm = () => {
    setEditingId(null);
    setName("");
    setPrice("");
    setSalePrice("");
    setSku("");
    setImage("");
    setCategory("");
    setBrand("");
    setDescription("");
    setStock("");

    setImageFile(null);
    setPreview("");
  };

  const addProduct = async () => {
  if (!name || !price || !category) {
    alert("Please fill required fields.");
    return;
  }
  console.log("IMAGE FILE:", imageFile);
  let uploadedImage = "";
console.log("IMAGE FILE:", imageFile);
if (imageFile) {

  const formData = new FormData();
  formData.append("image", imageFile);
  console.log("Uploading image...");
  const uploadResponse = await productApi.uploadImage(formData);
  console.log("UPLOAD RESPONSE:", uploadResponse.data);
  console.log("IMAGE URL:", "http://localhost:5000" + uploadResponse.data.imageUrl);
  console.log(uploadResponse.data);
  console.log("UPLOAD RESPONSE:", uploadResponse.data);

  uploadedImage =
    "http://localhost:5000" + uploadResponse.data.imageUrl;
}
  const productData = {
    title: name,
    price: Number(price),
    salePrice: Number(salePrice) || 0,
    sku,
    featuredImage:
  uploadedImage ||
  "https://via.placeholder.com/400x400/C9A84C/FFFFFF?text=ABRISH",
    category,
    brand,
    description,
    stock: Number(stock) || 0,
    status: "Active",
  };

  try {
    if (editingId) {
      // Update Existing Product
      await productApi.updateProduct(editingId, productData);
      alert("Product updated successfully!");
    } else {
      // Create New Product
      await productApi.createProduct(productData);
      alert("Product added successfully!");
    }

    resetForm();
    fetchProducts();

  } catch (err) {
    console.error("UPLOAD ERROR:", err);

    alert(
      err.response?.data?.message ||
      "Failed to save product."
    );
  }
  };
  const editProduct = (product) => {
    setEditingId(product._id || product.id);
    setName(product.title || product.name);
    setPrice(product.price);
    setImage(product.featuredImage || product.image);
    setCategory(product.category);
    setBrand(product.brand || "");
    setDescription(product.description || "");
    setStock(product.stock);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    
    try {
      await productApi.deleteProduct(id);
      fetchProducts();
      if (editingId === id) {
        resetForm();
      }
    } catch (err) {
      console.error("Error deleting product:", err);
      // Fallback
      const updatedProducts = products.filter((p) => (p._id || p.id) !== id);
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      if (editingId === id) resetForm();
      alert("Product deleted locally (API not available)");
    }
  };

  const filteredProducts = products.filter((product) => {
    const productName = product.title || product.name || "";
    const productCategory = product.category || "";
    
    const matchesSearch = productName
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || productCategory === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const uniqueCategories = ["All", ...new Set(products.map(p => p.category).filter(Boolean))];

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-yellow-500">
              Product Management
            </h1>
            <p className="text-gray-400 mt-2">Manage your store products</p>
          </div>
          <div className="text-sm text-gray-500 bg-zinc-900 px-4 py-2 rounded-lg">
            Total: {products.length} products
          </div>
        </div>

        {/* Dashboard Cards */}
        <DashboardCards products={products} />

        {/* Search & Filter */}
        <ProductSearch
          search={search}
          setSearch={setSearch}
          category={filterCategory}
          setCategory={setFilterCategory}
          categories={uniqueCategories}
        />

        {/* Product Form */}
        <ProductForm
  name={name}
  setName={setName}
  price={price}
  setPrice={setPrice}
  salePrice={salePrice}
  setSalePrice={setSalePrice}
  sku={sku}
  setSku={setSku}
  imageFile={imageFile}
  setImageFile={setImageFile}
  preview={preview}
  setPreview={setPreview}
  category={category}
  setCategory={setCategory}
  categories={categories}
  brand={brand}
  setBrand={setBrand}
  brands={brands}
  description={description}
  setDescription={setDescription}
  stock={stock}
  setStock={setStock}
  addProduct={addProduct}
  editingId={editingId}
  resetForm={resetForm}
/>

        {/* Products Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Products</h2>
            <p className="text-gray-400 mt-1">
              {filteredProducts.length} Product(s) Found
            </p>
          </div>
          <button
            onClick={resetForm}
            className="bg-zinc-800 hover:bg-zinc-700 px-5 py-3 rounded-xl transition-colors w-full sm:w-auto"
          >
            Clear Form
          </button>
        </div>

        {/* Product Table */}
        <ProductTable
  products={filteredProducts}
  editProduct={editProduct}
  deleteProduct={deleteProduct}
/>
      </div>
    </div>
  );
}

export default AdminProducts;