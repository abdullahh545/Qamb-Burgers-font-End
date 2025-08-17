import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Sidebar">
      <div className="logo">🍔 Qamb Burgers </div>
      <nav id="nav-links">
        <a href="/home">🏠</a>
        <a href="/Menu">🍔Menu</a>
        <a href="/Cart">Your Cart</a>
        <a href="/order">Order Now</a>
        <a href="/login">👤Login / Signup </a>
      </nav>
    </div>
  );
}

export default Navbar;
