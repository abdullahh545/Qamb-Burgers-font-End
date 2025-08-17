import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  //   const navigate = useNavigate();

  //   const handleOrderNow = () => {
  //     navigate("/menu");
  //   };
  return (
    <>
      <section>
        <h1>Welcome to Qamb Burgers</h1>
        <p> Fresh, Juicy. Made with love.</p>
        <button>Order Now</button>
      </section>

      <section className="About-Section">
        <h2>About Us</h2>
        <p>
          At Qamb Burgers, we serve delicious, handcrafted burgers with the best
          ingredients.
        </p>
      </section>

      <section className="most-selling">
        <h2>Popular Burgers</h2>
        <ul>
          <li>🍔 Classic Burger - $5.99</li>
          <li>🧀 Cheese Melt - $6.49</li>
          <li>🔥 BBQ Burger - $7.25</li>
        </ul>
      </section>
    </>
  );
}

export default HomePage;
