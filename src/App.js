import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Product from "./product/product.js";
import Cart from "./product/cart.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
