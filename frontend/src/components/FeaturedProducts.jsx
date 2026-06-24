import ProductCard from "./ProductCard";

const products = [
{
id: 1,
name: "Premium Abaya",
price: "PKR 5,250",
image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
},
{
id: 2,
name: "Luxury Watch",
price: "PKR 8,500",
image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
},
{
id: 3,
name: "Designer Handbag",
price: "PKR 4,250",
image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
},
{
id: 4,
name: "Premium Sneakers",
price: "PKR 6,500",
image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
},
];

function FeaturedProducts() {
return ( <section className="bg-black py-24">

```
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <p className="text-yellow-500 uppercase tracking-[6px]">
        Customer Favorites
      </p>

      <h2 className="text-5xl font-bold text-white mt-4">
        Best Sellers
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Our most loved products chosen by customers for
        quality, elegance and timeless fashion.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}

    </div>

  </div>

</section>

);
}

export default FeaturedProducts;
