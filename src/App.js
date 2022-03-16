import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Product from "./product/product.js";
// import Cart from "./product/cart.js";
import Form from "./task2/form.js";
import Details from "./task2/details.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          {/* <Route exact path="/" element={<Product />} /> */}
          {/* <Route exact path="/cart" element={<Cart />} /> */}
          <Route exact path="/" element={<Form/>}/>
          <Route exact path="/detailsPage" element={<Details/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
