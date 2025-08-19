import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import Footer from "./components/Footer/Footer";
import CartPage from "./pages/CartPage";
function App() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/menu"
            element={<MenuPage cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} setCart={setCart} />}
          />
        </Routes>
        
      </div>
      <Footer />
  

     
    </BrowserRouter>
  
    
  );
}

export default App;
