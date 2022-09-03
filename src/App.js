<<<<<<< HEAD
import React, { useMemo, useRef, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
//usememo
function App() {
  const [count, setCount] = useState(0);
  const render = useRef(0);
  console.log(render.current++);
  function featchData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const incremet = useMemo(() => {
    setCount(count + 1);
  }, []);
  return (
    <div className="App">
      <div>hellow world</div>
      <div onClick={() => incremet()}>increment</div>
      {/* {featchData()} */}
    </div>
=======
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
>>>>>>> 700d5bfe50ed520e21c305a4849aad31867f489d
  );
};

export default App;
