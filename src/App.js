import Products from "./components/products";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Navigation from "./components/Navigation/Navigation";
import { Button } from "antd";
import Home from "./pages/Home/Home";

import { useState } from "react";

const App = () => {
  return (
    <>
      <Router>
        <Navigation count="12" />
        <Routes>
          <Route path="/" component={Home} exact></Route>

          <Route path="/products" component={Products}></Route>

          <Route path="/cart" component={Cart}></Route>
        </Routes>
        <Products />
      </Router>
    </>
  );
};

export default App;
