import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./navigation.css";

const Navigation = (props) => {
  return (
    <>
      <nav>
        <Link to="/">
          <img
            style={{ height: 45 }}
            src="https://robohash.org/earumesseest.png?size=50x50&set=set1"
            alt="logo"
          />
        </Link>
        <ul className="nav__secondary">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products {props.name}</Link>
          </li>
          <li>
            <Link to="/cart">
              <div>
                <span className="span__quantity">{props.count}</span>
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
