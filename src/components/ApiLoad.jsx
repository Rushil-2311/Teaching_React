import React from "react";
import { data } from "../MOCK_DATA";
import { useState, useEffect } from "react";
import "../components/Form/form.css";
import { Form, Button, Input, InputNumber } from "antd";
import "./design.css";

const ApiLoad = () => {
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState(false);
  // const [addProduct, setAddProduct] = useState();
  const onSubmitHandler = (value) => {
    const user = [...product, value];
    setProduct(user);
  };

  useEffect(() => {
    setProduct(data);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="work" style={{ height: "100%", width: "100%" }}>
          {product?.map((data) => {
            {
              return (
                <div className="data__main">
                  <div key={data.id} className="data__container">
                    <div className="product__name">{data.product_name}</div>
                    <div> {data.id} </div>
                    <div> {data.category}</div>
                    <div> {data.created_at}</div>
                    <img src={data.prodcut_image} alt="product_name"></img>
                    <div>{data.user_rating} </div>
                    <div> {data.product_description} </div>
                  </div>
                </div>
              );
            }
          })}
          <hr />
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
  );
};

export default ApiLoad;
