function Newsletter() {
  return (
    <section className="bg-black py-20">

      <div className="max-w-3xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold text-yellow-500">
          Subscribe Newsletter
        </h2>

        <p className="text-gray-400 mt-4">
          Get updates about new arrivals and exclusive offers.
        </p>

        <div className="flex mt-8 gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-zinc-900 text-white border border-yellow-700"
          />

          <button className="bg-yellow-500 text-black px-6 rounded-lg font-semibold">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;