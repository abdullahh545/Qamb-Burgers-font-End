import React from "react";
import { useNavigate } from "react-router-dom";

function MenuPage({ cart, setCart }) {
  const navigate = useNavigate();

  // list of products
  const products = [
    {
      id: 1,
      name: "Classic Burger",
      price: 5.99,
      category: "Burgers",
      description:
        "A juicy beef patty with lettuce, tomato, and our secret sauce.",
    },
    {
      id: 2,
      name: "Cheese Melt",
      price: 6.49,
      category: "Burgers",
      description: "Double cheese layered on a flame-grilled beef patty.",
    },
    {
      id: 3,
      name: "BBQ Burger",
      price: 7.25,
      category: "Burgers",
      description: "Smoky BBQ sauce, crispy onions, and melted cheddar.",
    },
    { id: 4, name: "Fries", price: 2.99, category: "Sides" },
    { id: 5, name: "Onion Rings", price: 3.49, category: "Sides" },
    { id: 6, name: "Cheesy Fries", price: 3.99, category: "Sides" },
    { id: 7, name: "Soda", price: 1.99, category: "Drinks" },
    { id: 8, name: "Lemonade", price: 2.49, category: "Drinks" },
    { id: 9, name: "Milkshake", price: 3.99, category: "Drinks" },
  ];

  // add product to cart
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      // update quantity
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // get quantity of a product in cart
  const getQuantity = (productId) => {
    const item = cart.find((i) => i.id === productId);
    if (item) return item.quantity;
    return 0;
  };

  // get products by category
  const getProductsByCategory = (category) => {
    return products.filter((p) => p.category === category);
  };

  // total items in cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <h1>Our Menu</h1>

      <button onClick={() => navigate("/cart")}>
        View Your Cart ({totalItems})
      </button>

      <h2>Burgers 🍔</h2>
      <ul>
        {getProductsByCategory("Burgers").map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>
              Add To Cart ({getQuantity(product.id)})
            </button>
          </li>
        ))}
      </ul>

      <h2>Sides 🍟</h2>
      <ul>
        {getProductsByCategory("Sides").map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => addToCart(product)}>
              Add To Cart ({getQuantity(product.id)})
            </button>
          </li>
        ))}
      </ul>

      <h2>Drinks 🥤</h2>
      <ul>
        {getProductsByCategory("Drinks").map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => addToCart(product)}>
              Add To Cart ({getQuantity(product.id)})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuPage;
