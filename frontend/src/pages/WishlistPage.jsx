import { useWishlist } from "../context/WishlistContext";

function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl text-pink-500 font-bold mb-10">
        My Wishlist
      </h1>

      {wishlistItems.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        wishlistItems.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-5 rounded-xl mb-4 flex justify-between"
          >
            <div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>

            <button
              onClick={() => removeFromWishlist(index)}
              className="bg-red-500 px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}

    </div>
  );
}

export default WishlistPage;