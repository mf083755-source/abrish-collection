const defaultProducts = [
  {
    id: 1,
    name: "Premium Men's Shirt",
    price: 3500,
    image: "/images/men-shirt.jpg",
    category: "Men",
    description: "Premium cotton shirt for modern gentlemen."
  },
  {
    id: 2,
    name: "Luxury Watch",
    price: 8500,
    image: "/images/watch.jpg",
    category: "Accessories",
    description: "Luxury wrist watch with elegant design."
  },
  {
    id: 3,
    name: "Women's Handbag",
    price: 4500,
    image: "/images/bag.jpg",
    category: "Women",
    description: "Premium quality fashion handbag."
  },
  {
    id: 4,
    name: "Premium Sneakers",
    price: 6500,
    image: "/images/shoes.jpg",
    category: "Shoes",
    description: "Comfortable and stylish sneakers."
  }
];

if (!localStorage.getItem("products")) {
  localStorage.setItem(
    "products",
    JSON.stringify(defaultProducts)
  );
}

const products =
  JSON.parse(localStorage.getItem("products")) || [];

export default products;