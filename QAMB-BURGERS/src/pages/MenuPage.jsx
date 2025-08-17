import React from "react";

function MenuPage() {
  return (
    <div>
      <h1>Our Menu</h1>

      <section className="Burgers">
        <h2>Burgers 🍔</h2>
        <ul>
          <li>
            <h3>Classic Burger - $5.99</h3>
            <p>
              A juicy beef patty with lettuce, tomato, and our secret sauce.
            </p>
          </li>
          <li>
            <h3>Cheese Melt - $6.49</h3>
            <p>Double cheese layered on a flame-grilled beef patty.</p>
          </li>
          <li>
            <h3>BBQ Burger - $7.25</h3>
            <p>Smoky BBQ sauce, crispy onions, and melted cheddar.</p>
          </li>
        </ul>
      </section>

      <section className="fries">
        <h2>Sides 🍟</h2>
        <ul>
          <li>Fries - $2.99</li>
          <li>Onion Rings - $3.49</li>
          <li>Cheesy Fries - $3.99</li>
        </ul>
      </section>

      <section className="drinks">
        <h2>Drinks 🥤</h2>
        <ul>
          <li>Soda - $1.99</li>
          <li>Lemonade - $2.49</li>
          <li>Milkshake - $3.99</li>
        </ul>
      </section>
    </div>
  );
}

export default MenuPage;
