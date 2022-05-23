import React from "react";
import { Form, Input, Button, Checkbox, DatePicker, Space, Select } from "antd";
import "./form.css";
import { SettingOutlined } from "@ant-design/icons";

const { Option } = Select;

const FormPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const selectBefore = (
    <Select defaultValue="add" style={{ width: 60 }}>
      <Option value="add">+</Option>
      <Option value="minus">-</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue="USD" style={{ width: 60 }}>
      <Option value="USD">$</Option>
      <Option value="EUR">€</Option>
      <Option value="GBP">£</Option>
      <Option value="CNY">¥</Option>
    </Select>
  );

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Employee name"
        name="Employee name"
        rules={[
          {
            required: true,
            message: "Please Employee name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Date of birth"
        name="Date of birth"
        rules={[
          {
            required: true,
            message: "Please Date of birth",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Space direction="vertical">
        <InputNumber addonBefore="+" addonAfter="$" defaultValue={100} />
        <InputNumber
          addonBefore={selectBefore}
          addonAfter={selectAfter}
          defaultValue={100}
        />
        <InputNumber addonAfter={<SettingOutlined />} defaultValue={100} />
        <InputNumber
          addonBefore={
            <Cascader placeholder="cascader" style={{ width: 150 }} />
          }
          defaultValue={100}
        />
      </Space>
      ,
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default FormPage;
