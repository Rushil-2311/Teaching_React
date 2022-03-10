import React from "react";
import { data } from "../MOCK_DATA";
import { useState, useEffect, useMemo, useContext } from "react";
import { Form, Button, Input, InputNumber } from "antd";
import { Link } from "react-router-dom";
import "./design.css";
// import Navigation from "./Navigation/Navigation";
// import { CartContext } from "../components/CartContex";

const ApiLoad = (props) => {
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState(false);
  const [showData, setShowData] = useState(false);
  const [search, setSearch] = useState("");

  // const [isAdding, setIsAdding] = useState(false);
  // const { cart, setCart } = useContext(CartContext);
  // const { products } = props;

  const addToCart = (event, product) => {
    console.log(product.length);
  };

  // const addToCart = (event, products) => {
  //   event.preventDefault();
  //   let _cart = { ...cart }; // { items: {}}
  //   if (!_cart.items) {
  //     _cart.items = {};
  //   }
  //   if (_cart.items[products._id]) {
  //     _cart.items[products._id] += 1;
  //   } else {
  //     _cart.items[products._id] = 1;
  //   }

  //   if (!_cart.totalItems) {
  //     _cart.totalItems = 0;
  //   }
  //   _cart.totalItems += 1;
  //   setCart(_cart);
  //   setIsAdding(true);
  //   setTimeout(() => {
  //     setIsAdding(false);
  //   }, 1000);
  // };
  const onSubmitHandler = (value) => {
    const user = [...product, value];
    setProduct(user);
  };
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
  // const seachHandler = (event) => {
  //   const search = [...product].filter((value) => {
  //     if (product == "") {
  //       setProduct(search);
  //     } else if (
  //       value.product.toLowerCase().includes(product.toLocaleLowerCase())
  //     ) {
  //       setProduct(search);
  //     }
  //   });
  // };
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

            <div>
              <div className="btn__main">
                <Button className="btn__hide" onClick={() => setShowData(true)}>
                  Load Data
                </Button>
                <Button
                  className="btn__hide"
                  onClick={() => setShowData(false)}
                >
                  Hide Data
                </Button>
              </div>
            </div>
            <Input
              className="search__style"
              placeholder="search here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></Input>
          </div>
          <div className="work" style={{ height: "100%", width: "100%" }}>
            {searchHandler?.map((data) => {
              {
                return (
                  <>
                    {showData ? (
                      <div className="data__main ">
                        <div className="data__container" key={data.id}>
                          <div className="product__name">
                            {data.product_name}
                          </div>
                          <div> {data.id} </div>
                          <div> {data.category}</div>
                          <div> {data.created_at}</div>
                          <img
                            src={data.prodcut_image}
                            alt="product_name"
                          ></img>
                          <div>{data.user_rating} </div>
                          <div> {data.product_description} </div>
                          <Button
                            className="btn__primary"
                            onClick={(e) => {
                              addToCart(e, product);
                            }}
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                    ) : null}
                  </>
                );
              }
            })}
            <div className="btn__main">
              <Button className="btn__hide" onClick={() => setShow(true)}>
                show Form
              </Button>
              <Button className="btn__hide" onClick={() => setShow(false)}>
                Hide Form
              </Button>
            </div>
            {console.log(product)};
          </div>
          )
          <div className="form__container">
            {show ? (
              <Form
                // labelCol={{ span: 10 }}
                // wrapperCol={{ span: 14 }}
                onFinish={onSubmitHandler}
                onFinishFailed={(error) => {
                  console.log(error);
                }}
              >
                <Form.Item
                  name="product_name"
                  label="product_name"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Enter product name"></Input>
                </Form.Item>
                <Form.Item
                  name="product_id"
                  label="product_id"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Enter product id"></Input>
                </Form.Item>
                <Form.Item
                  name="product_category"
                  label="product_category"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Enter prodcut_image link"></Input>
                </Form.Item>
                <Form.Item name="prodcut_image" label="prodcut_image link">
                  <Input placeholder="prodcut_image"></Input>
                </Form.Item>

                <Form.Item
                  name="user_rating"
                  label="user_rating"
                  rules={[{ required: true }]}
                >
                  <InputNumber
                    min={1}
                    max={5}
                    // defaultValue={5}
                    placeholder="Enter user_rating"
                  ></InputNumber>
                </Form.Item>

                <Form.Item
                  name="product_description"
                  label="product_description"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Enter product_description"></Input>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="btn">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            ) : null}
          </div>
        </header>
      </div>
    </>
  );
};

export default ApiLoad;
