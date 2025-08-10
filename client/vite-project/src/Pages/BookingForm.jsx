import React, { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  Button,
  Row,
  Col,
  Card,
  Typography,
  message,
} from "antd";
import { InboxOutlined, CreditCardOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Dragger } = Upload;

const phoneRule = [
  { required: true, message: "Mobile number is required" },
  {
    pattern: /^[6-9]\d{9}$/,
    message: "Enter a valid 10-digit Indian mobile number",
  },
];

const BookingForm = () => {
  const [form] = Form.useForm();
  const [aadharList, setAadharList] = useState([]);
  const [panList, setPanList] = useState([]);

  // Prevent auto-upload; limit type & size
  const beforeUpload = (file) => {
    const isValidType =
      file.type === "application/pdf" ||
      file.type === "image/jpeg" ||
      file.type === "image/png";
    if (!isValidType) {
      message.error("Only PDF / JPG / PNG are allowed.");
      return Upload.LIST_IGNORE;
    }
    const isLt4M = file.size / 1024 / 1024 < 4;
    if (!isLt4M) {
      message.error("File must be smaller than 4MB.");
      return Upload.LIST_IGNORE;
    }
    return false; // stop auto upload, keep in fileList
  };

  const onFinish = (values) => {
    // Normalize files to actual File objects
    const aadhar = aadharList[0]?.originFileObj || null;
    const pan = panList[0]?.originFileObj || null;

    const payload = {
      ...values,
      documents: { aadhar, pan },
    };

    console.log("Booking submitted:", payload);
    message.success("✅ Booking submitted!");
    form.resetFields();
    setAadharList([]);
    setPanList([]);
  };

  return (
    <div style={{ padding: 24 }}>
      <Card
        bordered={false}
        style={{
          maxWidth: 900,
          margin: "0 auto",
          boxShadow:
            "0 10px 30px rgba(37, 99, 235, 0.10), 0 2px 8px rgba(0,0,0,0.06)",
        }}
        bodyStyle={{ padding: 28 }}
        headStyle={{ borderBottom: "none" }}
        title={
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                height: 44,
                width: 44,
                borderRadius: 12,
                display: "grid",
                placeItems: "center",
                color: "white",
                background:
                  "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
                boxShadow: "0 8px 20px rgba(37, 99, 235, 0.35)",
                fontSize: 22,
              }}
            >
              🏍️
            </div>
            <div>
              <Title level={3} style={{ margin: 0 }}>
                Two Wheeler Booking
              </Title>
              <Text type="secondary">
                Fill the details below to reserve your ride. It takes ~2 mins.
              </Text>
            </div>
          </div>
        }
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          requiredMark="optional"
        >
          {/* Name */}
          <Form.Item
            label="Customer Name"
            name="customerName"
            rules={[{ required: true, message: "Please enter customer name" }]}
          >
            <Input size="large" placeholder="e.g., Rahul Sharma" />
          </Form.Item>

          {/* Phone row */}
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item label="Mobile Number" name="mobileNumber" rules={phoneRule}>
                <Input size="large" placeholder="10-digit number" maxLength={10} />
              </Form.Item>
              <Text type="secondary" style={{ marginTop: -8, display: "block" }}>
                Starts with 6/7/8/9, exactly 10 digits.
              </Text>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Alternate Mobile Number"
                name="alternateMobileNumber"
                rules={[
                  {
                    pattern: /^$|^[6-9]\d{9}$/,
                    message: "Enter a valid 10-digit number",
                  },
                ]}
              >
                <Input size="large" placeholder="Optional" maxLength={10} />
              </Form.Item>
            </Col>
          </Row>

          {/* Email + Amount */}
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item label="Email" name="email" rules={[{ type: "email" }]}>
                <Input size="large" placeholder="you@example.com" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Booking Amount (₹)"
                name="bookingAmount"
                rules={[{ required: true, message: "Enter booking amount" }]}
              >
                <InputNumber
                  size="large"
                  className="w-full"
                  min={500}
                  step={500}
                  prefix={<CreditCardOutlined />}
                  placeholder="e.g., 2000"
                />
              </Form.Item>
              <Text type="secondary" style={{ marginTop: -8, display: "block" }}>
                Minimum ₹500. Adjust as per your policy.
              </Text>
            </Col>
          </Row>

          {/* Address */}
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please enter address" }]}
          >
            <Input.TextArea
              size="large"
              rows={3}
              placeholder="House No, Street, Area, City, PIN"
            />
          </Form.Item>

          {/* Bike + Variant */}
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Bike Model"
                name="bikeModel"
                rules={[{ required: true, message: "Select a model" }]}
              >
                <Select
                  size="large"
                  placeholder="Select Model"
                  options={[
                    { value: "Hero Splendor", label: "Hero Splendor" },
                    { value: "Honda Shine", label: "Honda Shine" },
                    { value: "TVS Apache", label: "TVS Apache" },
                    { value: "Yamaha FZ", label: "Yamaha FZ" },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Variant"
                name="variant"
                rules={[{ required: true, message: "Select a variant" }]}
              >
                <Select
                  size="large"
                  placeholder="Select Variant"
                  options={[
                    { value: "Standard", label: "Standard" },
                    { value: "Deluxe", label: "Deluxe" },
                    { value: "Disc Brake", label: "Disc Brake" },
                    { value: "Electric Start", label: "Electric Start" },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>

          {/* Documents */}
          <Card
            size="small"
            title={<Text strong>Upload Documents</Text>}
            style={{ marginTop: 8, marginBottom: 12, borderRadius: 12 }}
            headStyle={{ background: "#f8fafc", borderRadius: 12 }}
          >
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Aadhar Card (PDF/JPG/PNG)"
                  name="aadhar"
                  rules={[{ required: true, message: "Upload Aadhar" }]}
                  valuePropName="fileList"
                  getValueFromEvent={(e) => e?.fileList || []}
                >
                  <Dragger
                    multiple={false}
                    beforeUpload={beforeUpload}
                    fileList={aadharList}
                    onChange={({ fileList }) => setAadharList(fileList)}
                    maxCount={1}
                    accept=".pdf,.jpg,.jpeg,.png"
                    itemRender={(origin) => origin}
                  >
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">Single file only. Max 4MB.</p>
                  </Dragger>
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label="PAN Card (PDF/JPG/PNG)"
                  name="pan"
                  rules={[{ required: true, message: "Upload PAN" }]}
                  valuePropName="fileList"
                  getValueFromEvent={(e) => e?.fileList || []}
                >
                  <Dragger
                    multiple={false}
                    beforeUpload={beforeUpload}
                    fileList={panList}
                    onChange={({ fileList }) => setPanList(fileList)}
                    maxCount={1}
                    accept=".pdf,.jpg,.jpeg,.png"
                    itemRender={(origin) => origin}
                  >
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">Single file only. Max 4MB.</p>
                  </Dragger>
                </Form.Item>
              </Col>
            </Row>
          </Card>

          {/* Submit */}
          <Form.Item style={{ marginTop: 8 }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              style={{
                boxShadow:
                  "0 10px 20px rgba(37, 99, 235, 0.25), 0 2px 6px rgba(0,0,0,0.06)",
              }}
            >
              Reserve My Bike
            </Button>
            <div style={{ textAlign: "center", marginTop: 8 }}>
              <Text type="secondary" style={{ fontSize: 12 }}>
                By submitting, you agree to our booking terms & verification
                policy.
              </Text>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default BookingForm;