import React, { createContext, useState, useContext } from "react";

const Cart1 = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [number, setNumber] = useState(0)
  return <Cart1.Provider value={{ cart, setCart }}>{children}</Cart1.Provider>;
};
export const CartState = () => {
  return useContext(Cart1);
};

export default Context;
