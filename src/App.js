import Products from "./components/products";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { Button } from "antd";
import Home from "./pages/Home/Home";
import FormPage from "./pages/Form/Form";
import { useState } from "react";
import CartPage from "./pages/Cart/Cart";
import "antd/dist/antd.css";

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Navigation cart={cart} setCart={setCart} />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route
            path="/products"
            element={<Products cart={cart} setCart={setCart} />}
          ></Route>
          <Route
            path="/cart"
            element={<CartPage cart={cart} setcart={setCart} />}
          ></Route>
          <Route path="/form" element={<FormPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
