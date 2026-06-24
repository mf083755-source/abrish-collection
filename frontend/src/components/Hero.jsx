import { Link } from "react-router-dom";

function Hero() {
return (
<section
className="relative min-h-screen flex items-center bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000')",
}}
> <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative max-w-7xl mx-auto px-6 w-full">

    <div className="max-w-3xl">

      <p className="text-yellow-500 uppercase tracking-[10px] mb-4">
        Abrish Collection
      </p>

      <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
        Luxury
        <br />
        Fashion Store
      </h1>

      <p className="mt-8 text-gray-300 text-xl">
        Premium Clothing, Shoes, Watches, Jewellery &
        Accessories for Modern Lifestyle.
      </p>

      <div className="flex gap-4 mt-10">

        <Link
          to="/shop"
          className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold"
        >
          Shop Now
        </Link>

        <Link
          to="/collections"
          className="border border-white px-8 py-4 rounded-lg font-bold text-white"
        >
          View Collections
        </Link>

      </div>

    </div>

  </div>
</section>

);
}

export default Hero;
