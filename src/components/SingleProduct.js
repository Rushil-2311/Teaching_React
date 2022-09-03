import React from "react";
import "./singleproduct.css";
import { Button } from "antd";

const SingleProduct = ({ data, cart, setCart }) => {
  return (
    <>
      <div className="data__main ">
        <div className="data__container" key={data.id}>
          <div className="product__name">{data.product_name}</div>
          <div> {data.id} </div>
          <div> {data.category}</div>
          <div> {data.created_at}</div>
          <img src={data.prodcut_image} alt="product_name"></img>
          <div>{data.user_rating} </div>
          <div> {data.product_description} </div>
          {cart.includes(data) ? (
            <Button
              className="btn__Removecart"
              onClick={() => {
                setCart(cart.filter((c) => c.id !== data.id));
              }}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              className="btn__Addcart"
              onClick={() => {
                setCart([...cart, data]);
              }}
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
