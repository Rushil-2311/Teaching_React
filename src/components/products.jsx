import React from "react";
import { data } from "../MOCK_DATA";
import { useState, useEffect, useMemo, useContext } from "react";
import { Form, Button, Input, InputNumber } from "antd";
import { Link } from "react-router-dom";
import "./design.css";
import SingleProduct from "./SingleProduct";

const Products = ({ cart, setCart }) => {
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState(false);
  // const [showData, setShowData] = useState(false);
  const [search, setSearch] = useState("");

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

            {/* <div>
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
            </div> */}
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
                // showData={showData}
                // setShowData={setShowData}
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
              <Form
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
                <Form.Item name="id" label="id" rules={[{ required: true }]}>
                  <Input placeholder="Enter product id"></Input>
                </Form.Item>
                <Form.Item
                  name="category"
                  label="category"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Enter prodcut_image link"></Input>
                </Form.Item>
                <Form.Item name="prodcut_image" label="prodcut_image link">
                  <Input placeholder="prodcut_image"></Input>
                </Form.Item>
                <Form.Item
                  name="created_at"
                  label="created_at"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Enter created time"></Input>
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
                    value="Enter user_rating"
                  ></InputNumber>
                </Form.Item>

                <Form.Item
                  name="product_description"
                  label="product_description"
                  rules={[{ required: true }]}
                >
                  <Input
                    placeholder="Enter product_description"
                    value="product_description"
                  ></Input>
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

export default Products;
