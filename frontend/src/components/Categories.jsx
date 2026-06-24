import { Link } from "react-router-dom";

const categories = [
{
title: "Luxury Pret",
image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
},
{
title: "Elegant Abayas",
image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
},
{
title: "Chic Kurtis",
image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
},
{
title: "Accessories",
image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
},
];

function Categories() {
return ( <section className="bg-black py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <p className="text-yellow-500 uppercase tracking-[6px]">
        Shop By Collection
      </p>

      <h2 className="text-5xl text-white font-bold mt-4">
        Featured Collections
      </h2>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {categories.map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl border border-yellow-600"
        >

          <img
            src={item.image}
            alt={item.title}
            className="h-96 w-full object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-6">

            <h3 className="text-white text-2xl font-bold mb-3">
              {item.title}
            </h3>

            <Link
              to="/shop"
              className="inline-block bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold"
            >
              Shop Now
            </Link>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>
);
}

export default Categories;
