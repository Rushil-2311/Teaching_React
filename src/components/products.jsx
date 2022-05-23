import React from "react";
import { data } from "../MOCK_DATA";
import { useState, useEffect, useMemo } from "react";
import { Button, Input } from "antd";

import "./design.css";
import SingleProduct from "./SingleProduct";
import FormPage from "../pages/Form/Form";

const Products = ({ cart, setCart }) => {
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState(false);

  const [search, setSearch] = useState("");

  const sortByFirstName = () => {
    const sorted = [...product].sort((a, b) => {
      return a.product_name > b.product_name ? 1 : -1;
    });
    setProduct(sorted);
  };
  const sortByRating = () => {
    const sorted = [...product].sort((a, b) => {
      return a.user_rating > b.user_rating ? -1 : 1;
    });
    setProduct(sorted);
  };
  const sortByTime = () => {
    const sorted = [...product].sort((a, b) => {
      return a.created_at > b.created_at ? -1 : 1;
    });
    setProduct(sorted);
  };

  const searchHandler = useMemo(() => {
    if (!search) return product;

    return product.filter((prodcutname) => {
      return prodcutname.product_name
        .toLowerCase()
        .includes(search.toLocaleLowerCase());
    });
  }, [search, product]);

  useEffect(() => {
    setProduct(data);
  }, []);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="function__container">
            <Button onClick={sortByFirstName} className="btn__hide">
              Short by product name
            </Button>
            <Button onClick={sortByRating} className="btn__hide">
              Short by ratting
            </Button>
            <Button onClick={sortByTime} className="btn__hide">
              Short by time
            </Button>

            <Input
              className="search__style"
              placeholder="search here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></Input>
          </div>
          <div className="work" style={{ height: "100%", width: "100%" }}>
            {searchHandler?.map((data) => (
              <SingleProduct
                data={data}
                cart={cart}
                setCart={setCart}
                key={data.id}
              />
            ))}
            <div className="btn__main">
              <Button className="btn__hide" onClick={() => setShow(true)}>
                show Form
              </Button>
              <Button className="btn__hide" onClick={() => setShow(false)}>
                Hide Form
              </Button>
            </div>
            {console.log(product)};{console.log(cart)}
          </div>

          <div className="form__container">
            {show ? (
              <FormPage product={product} setProduct={setProduct} />
            ) : null}
          </div>
        </header>
      </div>
    </>
  );
};

export default Products;
