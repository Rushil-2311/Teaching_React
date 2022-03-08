import React, { useState } from "react";
import "./form.css";
import {
  Form,
  Button,
  Checkbox,
  TimePicker,
  Input,
  Select,
  InputNumber,
} from "antd";
const { Option } = Select;

const UserForm = () => {
  const [addProduct, setAddProduct] = useState();
  return (
    <div className="form__container">
      <Form
        // labelCol={{ span: 10 }}
        // wrapperCol={{ span: 14 }}
        onFinish={(value) => {
          setAddProduct(value);
          console.log(addProduct);
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
            defaultValue={5}
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        {/* <Form.Item name="product_name" label="product_name">
          <Input placeholder="Enter your product name"></Input>
        </Form.Item>
        <Select showSearch placeholder="Select a categary">
          <Option value="jack">Jack</Option>
          <Option value="Regorz"> Regorz</Option>
          <Option value="Strangman"> Strangman</Option>
          <Option value="Orrow"> Orrow</Option>
          <Option value="Bing"> Bing</Option>
          <Option value="Richmont"> Richmont</Option>
        </Select>
        <Form.Item name="product_name" label=" ">
          <Checkbox placeholder="Enter your product name " value="">
            here click for term and condition
          </Checkbox>
        </Form.Item>
        <FormItem label="product id">
          <InputNumber min={1} max={1100} defaultValue={1001} />
        </FormItem>
         */}
      </Form>
    </div>
  );
};

export default UserForm;
