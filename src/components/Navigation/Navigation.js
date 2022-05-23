import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import "./navigation.css";

const Navigation = ({ cart, setCart }) => {
  return (
    <>
      <nav>
        <Link to="/">
          <img
            style={{ height: 70 }}
            src="https://robohash.org/voluptasconsequaturomnis.png?size=50x50&set=set1"
            alt="logo"
          />
        </Link>
        <ul className="nav__secondary">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products </Link>
          </li>
          <li>
            <Link to="/form">From</Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="div_cart">
                <span className="span__quantity">{cart.length}</span>
                <img
                  className="nav__img"
                  src="/image/cart.png"
                  alt="cart-icon"
                />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
