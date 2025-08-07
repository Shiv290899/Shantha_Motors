import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import "./auth.css";

function Register() {
  const onFinish = (values) => {
    console.log("Registration form submitted:", values);
    alert("Registration successful!");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="title">Register for Shantha Motors</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input placeholder="Enter your name" className="input-field" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email is required" }]}
          >
            <Input type="email" placeholder="Enter your email" className="input-field" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password placeholder="Enter your password" className="input-field" />
          </Form.Item>

          <Button type="primary" block htmlType="submit" className="auth-button">
            Register
          </Button>
        </Form>
        <p className="switch-text">
          Already a user? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
