import React from "react";
import { Form, Input, Button, InputNumber } from "antd";
import "./form.css";

const FormPage = ({ product, setProduct }) => {
  const onSubmitHandler = (value) => {
    const user = [...product, value];
    setProduct(user);
  };
  return (
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
      <Form.Item name="category" label="category" rules={[{ required: true }]}>
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
  );
};

export default FormPage;
