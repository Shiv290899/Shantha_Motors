import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css"; // Optional custom styling

function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Login form submitted:", values);
    alert("Login successful!");
    navigate("/"); 
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="title">Login to Shantha Motors</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item 
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email is required" }]}
          >
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="input-field" 
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password 
              placeholder="Enter your password" 
              className="input-field" 
            />
          </Form.Item>

          <Button type="primary" block htmlType="submit" className="auth-button">
            Login
          </Button>
        </Form>

        <p className="switch-text">
          New User? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
