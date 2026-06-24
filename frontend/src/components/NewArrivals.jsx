import ProductCard from "./ProductCard";

const products = [
{
name: "Premium Men's Shirt",
price: "PKR 3,500",
image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
},
{
name: "Luxury Watch",
price: "PKR 8,500",
image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
},
{
name: "Women's Handbag",
price: "PKR 4,500",
image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
},
{
name: "Premium Sneakers",
price: "PKR 6,500",
image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
},
];

function NewArrivals() {
return ( <section className="bg-zinc-950 py-24">

```
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <p className="text-yellow-500 uppercase tracking-[6px]">
        Latest Fashion
      </p>

      <h2 className="text-5xl font-bold text-white mt-4">
        New Arrivals
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Discover the latest additions to Abrish Collection.
        Handpicked fashion pieces designed for elegance and style.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {products.map((product, index) => (
        <ProductCard
          key={index}
          id={index + 1}
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

export default NewArrivals;
