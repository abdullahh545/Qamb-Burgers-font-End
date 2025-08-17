import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <HomePage />
      </div>
    </>
  );
}

export default App;
