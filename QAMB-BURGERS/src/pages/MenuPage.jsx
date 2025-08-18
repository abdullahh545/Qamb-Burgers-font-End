import React from "react";
import { useNavigate } from "react-router-dom";

function MenuPage(cart, setCart) {
  const navigate = useNavigate();
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

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const getProductsByCategory = (category) =>
    products.filter((p) => p.category === category);
  return (
    <div>
      <h1>Our Menu</h1>
      <button onClick={() => navigate("/cart")}>Your Cart {cart.length}</button>

      <section className="Burgers">
        <h2>Burgers 🍔</h2>
        <ul>
          {getProductsByCategory("Burgers").map((product) => (
            <li key={product.id}>
              {product.name} -${product.price.toFixed(2)}
              <p>{product.description}</p>
              <button onClick={() => addToCart(product)}>Add To Cart</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="fries">
        <h2>Sides 🍟</h2>
        <ul>
          {getProductsByCategory("Sides").map((product) => (
            <li key={product.id}>
              {product.name} -${product.price.toFixed(2)}
              <button onClick={() => addToCart(product)}>Add To Cart</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="drinks">
        <h2>Drinks 🥤</h2>
        <ul>
          {getProductsByCategory("Drinks").map((product) => (
            <li key={product.id}>
              {product.name} -${product.price.toFixed(2)}
              <button onClick={() => addToCart(product)}>+</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MenuPage;
