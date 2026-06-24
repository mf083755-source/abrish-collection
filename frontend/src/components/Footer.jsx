import { Link } from "react-router-dom";

function Footer() {
return ( <footer className="bg-black border-t border-yellow-600 text-white">

```
  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid md:grid-cols-4 gap-10">

      <div>

        <h2 className="text-3xl font-bold text-yellow-500">
          ABRISH COLLECTION
        </h2>

        <p className="text-gray-400 mt-4">
          Premium Fashion Store offering luxury clothing,
          footwear, accessories and timeless elegance.
        </p>

      </div>

      <div>

        <h3 className="text-xl font-semibold mb-4 text-yellow-500">
          Quick Links
        </h3>

        <div className="flex flex-col gap-3">

          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/new-arrivals">New Arrivals</Link>

        </div>

      </div>

      <div>

        <h3 className="text-xl font-semibold mb-4 text-yellow-500">
          Customer Care
        </h3>

        <div className="flex flex-col gap-3">

          <Link to="/orders">Track Orders</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About Us</Link>

        </div>

      </div>

      <div>

        <h3 className="text-xl font-semibold mb-4 text-yellow-500">
          Contact Info
        </h3>

        <p className="text-gray-400">
          Lahore, Pakistan
        </p>

        <p className="text-gray-400 mt-2">
          +92 300 0000000
        </p>

        <p className="text-gray-400 mt-2">
          info@abrishcollection.com
        </p>

      </div>

    </div>

  </div>

  <div className="border-t border-zinc-800 py-6 text-center text-gray-400">
    © 2026 Abrish Collection. All Rights Reserved.
  </div>

</footer>
);
}

export default Footer;
