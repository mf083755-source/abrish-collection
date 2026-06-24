import { Link } from "react-router-dom";

const collections = [
{
title: "Men Collection",
image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
},
{
title: "Women Collection",
image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
},
{
title: "Shoes Collection",
image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
},
{
title: "Accessories",
image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
},
];

function Collections() {
return ( <div className="bg-black min-h-screen text-white">

  <div className="relative h-[450px]">

    <img
      src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
      alt="Collection Banner"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-6xl font-bold text-white">
          Our Collections
        </h1>

        <p className="text-gray-300 mt-4 text-xl">
          Discover Luxury Fashion & Premium Lifestyle
        </p>

      </div>

    </div>

  </div>

  <div className="max-w-7xl mx-auto px-6 py-20">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {collections.map((item, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-3xl border border-yellow-700"
        >

          <img
            src={item.image}
            alt={item.title}
            className="h-96 w-full object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="p-6 bg-zinc-900">

            <h3 className="text-2xl font-bold mb-4">
              {item.title}
            </h3>

            <Link
              to="/shop"
              className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
            >
              Shop Collection
            </Link>

          </div>

        </div>
      ))}

    </div>

  </div>

</div>

);
}

export default Collections;
