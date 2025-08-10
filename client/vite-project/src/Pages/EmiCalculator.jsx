// src/components/EmiCalculator.jsx
import React, { useMemo, useState } from "react"; // import React + hooks
// Below: Ant Design UI imports
import {
  Card, Form, InputNumber, Slider, Row, Col,
  Typography, Divider, Statistic, Radio, Space, Tooltip
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons"; // Info icon for hints

const { Title, Text } = Typography; // Shorthand for typography components

export default function EmiCalculator() { // Export the EMI calculator component
  // ---------- STATE ----------
  const [price, setPrice] = useState(120000);        // On-road price input
  const [down, setDown] = useState(20000);           // Down payment input
  const [rate, setRate] = useState(11);            // Annual flat (simple) interest rate (%)
  const [tenureType, setTenureType] = useState("months"); // Whether user sets tenure in months or years
  const [tenure, setTenure] = useState(24);          // Tenure value corresponding to tenureType

  const fixedProcessingFee = 8000;                    // Fixed processing fee to be added to loan

  // ---------- CALCULATION (FLAT / SIMPLE INTEREST) ----------
  // Rules:
  // principal = max(price - down, 0) + fixedProcessingFee
  // months = (tenureType === 'years') ? tenure * 12 : tenure
  // years = months / 12
  // totalInterest = principal * (rate/100) * years
  // totalPayable = principal + totalInterest
  // monthlyPay = totalPayable / months
  const { principal, months, years, totalInterest, totalPayable, monthlyPay } = useMemo(() => {
    // Compute base principal after down payment
    const base = Math.max(Number(price || 0) - Number(down || 0), 0); // guard against negatives

    // Add fixed processing fee into the financed amount
    const p = base + fixedProcessingFee;

    // Normalize tenure to months
    const m = tenureType === "years" ? Math.max(1, Number(tenure || 0)) * 12 : Math.max(1, Number(tenure || 0));

    // Convert to years for simple-interest formula
    const y = m / 12;

    // Rate as a decimal per year (e.g., 10.5% => 0.105)
    const r = Number(rate || 0) / 100;

    // Simple interest over full tenure (no reducing balance)
    const interest = p * r * y;

    // Total payable over the tenure
    const total = p + interest;

    // Equal monthly payment in flat interest model
    const monthly = m > 0 ? total / m : 0;

    // Return only what we render
    return {
      principal: isFinite(p) ? p : 0,
      months: isFinite(m) ? m : 0,
      years: isFinite(y) ? y : 0,
      totalInterest: isFinite(interest) ? interest : 0,
      totalPayable: isFinite(total) ? total : 0,
      monthlyPay: isFinite(monthly) ? monthly : 0,
    };
  }, [price, down, rate, tenure, tenureType]); // Recompute when inputs change

  // INR currency formatter (no decimals for clean look)
  const inr = (n) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n || 0);

  // Guard for down payment slider/input max
  const maxDown = Math.max(price, 0);

  return (
    <Row justify="center" style={{ padding: 16 }}>
      {/* Center container with responsive width */}
      <Col xs={24} md={22} lg={18} xl={14}>
        <Card
          bordered
          style={{
            borderRadius: 16,
            boxShadow: "0 8px 30px rgba(24, 144, 255, 0.15)", // blue glow
            background: "linear-gradient(180deg, #e6f4ff 0%, #ffffff 40%)", // light blue gradient
          }}
        >
          <Space direction="vertical" size={8} style={{ width: "100%" }}>
            <Title level={3} style={{ margin: 0, color: "#0958d9" }}>
              EMI Calculator
            </Title>
          </Space>

          <Divider style={{ margin: "16px 0" }} />

          {/* --------- INPUTS --------- */}
          <Form layout="vertical">
            <Row gutter={[16, 16]}>
              {/* On-road Price */}
              <Col xs={24} md={12}>
                <Form.Item
                  label={
                    <Space>
                      <Text strong>On-road Price (₹)</Text>
                      <Tooltip title="Total cost incl. RTO, insurance, accessories, etc.">
                        <InfoCircleOutlined />
                      </Tooltip>
                    </Space>
                  }
                >
                  <InputNumber
                    min={0}
                    step={1000}
                    value={price}
                    onChange={(v) => setPrice(Number(v || 0))}
                    style={{ width: "100%" }}
                    formatter={(val) => `₹ ${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    parser={(val) => String(val || "0").replace(/[₹,\s]/g, "")}
                  />
                  <Slider min={0} max={5000000} step={5000} value={price} onChange={(v) => setPrice(Number(v))} />
                </Form.Item>
              </Col>

              {/* Down Payment */}
              <Col xs={24} md={12}>
                <Form.Item
                  label={
                    <Space>
                      <Text strong>Down Payment (₹)</Text>
                      <Tooltip title="Upfront amount; the rest is financed.">
                        <InfoCircleOutlined />
                      </Tooltip>
                    </Space>
                  }
                >
                  <InputNumber
                    min={0}
                    max={maxDown}
                    step={1000}
                    value={down}
                    onChange={(v) => setDown(Math.min(Number(v || 0), maxDown))}
                    style={{ width: "100%" }}
                    formatter={(val) => `₹ ${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    parser={(val) => String(val || "0").replace(/[₹,\s]/g, "")}
                  />
                  <Slider min={0} max={maxDown} step={1000} value={down} onChange={(v) => setDown(Math.min(Number(v), maxDown))} />
                </Form.Item>
              </Col>

              {/* Interest Rate (Flat) */}
              <Col xs={24} md={12}>
                <Form.Item
                  label={
                    <Space>
                      <Text strong>Interest Rate (% p.a., flat)</Text>
                      <Tooltip title="Simple interest on initial principal for the entire tenure.">
                        <InfoCircleOutlined />
                      </Tooltip>
                    </Space>
                  }
                >
                  <InputNumber
                    min={0}
                    max={36}
                    step={0.1}
                    value={rate}
                    onChange={(v) => setRate(Number(v || 0))}
                    style={{ width: "100%" }}
                  />
                  <Slider min={0} max={36} step={0.1} value={rate} onChange={(v) => setRate(Number(v))} />
                </Form.Item>
              </Col>

              {/* Tenure (Months / Years) */}
              <Col xs={24} md={12}>
                <Form.Item
                  label={
                    <Space>
                      <Text strong>Tenure</Text>
                      <Tooltip title="Choose months or years; interest uses full years (m/12).">
                        <InfoCircleOutlined />
                      </Tooltip>
                    </Space>
                  }
                >
                  <Radio.Group
                    value={tenureType}
                    onChange={(e) => {
                      const next = e.target.value;
                      setTenureType(next);
                      // Convert value when unit changes for continuity
                      if (next === "years") setTenure(Math.max(1, Math.round(tenure / 12)));
                      else setTenure(Math.max(1, Math.round(tenure * 12)));
                    }}
                    style={{ marginBottom: 8 }}
                  >
                    <Radio.Button value="months">Months</Radio.Button>
                    <Radio.Button value="years">Years</Radio.Button>
                  </Radio.Group>

                  {tenureType === "months" ? (
                    <>
                      <InputNumber min={1} max={120} step={1} value={tenure} onChange={(v) => setTenure(Number(v || 0))} style={{ width: "100%" }} />
                      <Slider min={1} max={120} step={1} value={tenure} onChange={(v) => setTenure(Number(v))} />
                    </>
                  ) : (
                    <>
                      <InputNumber min={1} max={10} step={1} value={tenure} onChange={(v) => setTenure(Number(v || 0))} style={{ width: "100%" }} />
                      <Slider min={1} max={10} step={1} value={tenure} onChange={(v) => setTenure(Number(v))} />
                    </>
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>

          <Divider style={{ margin: "16px 0" }} />

          {/* --------- RESULTS --------- */}
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12} lg={6}>
              <Card size="small" bordered style={{ borderRadius: 12 }}>
                <Statistic title="Loan Amount (incl. ₹8,000 fee)" value={inr(principal)} />
              </Card>
            </Col>
            <Col xs={24} md={12} lg={6}>
              <Card size="small" bordered style={{ borderRadius: 12 }}>
                <Statistic title="Monthly Payment" value={inr(monthlyPay)} />
                <Text type="secondary">over {months} months</Text>
              </Card>
            </Col>
            <Col xs={24} md={12} lg={6}>
              <Card size="small" bordered style={{ borderRadius: 12 }}>
                <Statistic title="Total Interest (flat)" value={inr(totalInterest)} />
                <Text type="secondary">{rate}% p.a. × {years.toFixed(2)} yrs</Text>
              </Card>
            </Col>
            <Col xs={24} md={12} lg={6}>
              <Card size="small" bordered style={{ borderRadius: 12 }}>
                <Statistic title="Total Payable" value={inr(totalPayable)} />
              </Card>
            </Col>
          </Row>

          <Divider style={{ margin: "16px 0" }} />

          {/* --------- SUMMARY --------- */}
          <Row>
            <Col span={24}>
              <Text>
                <strong>Formula:</strong> Simple Interest = Principal × (Rate/100) × Years; Monthly = (Principal + Interest) / Months
              </Text>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
