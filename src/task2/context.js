import React, { createContext, useState, useContext } from "react";

const Detail = createContext();

const Context = ({ children }) => {
  const [detail, setDetail] = useState([]);
  return <Detail.Provider value={{ detail, setDetail }}>{children}</Detail.Provider>;
};
export const DetailState = () => {
  return useContext(Detail);
};

export default Context;
