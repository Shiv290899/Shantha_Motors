import React from "react";
import {
  Typography,
  Row,
  Col,
  Card,
  Timeline,
  Statistic,
  Descriptions,
  Tag,
  Button,
  Divider,
} from "antd";
import {
  FlagOutlined,
  EnvironmentOutlined,
  ThunderboltOutlined,
  SmileOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  TrophyOutlined,
  TeamOutlined,
  ToolOutlined,
  AimOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export default function About() {
  // Data
  const facts = [
    { label: "Founded", value: "Aug 2022" },
    { label: "Headquarters", value: "Bengaluru" },
    { label: "Current Showrooms", value: "10" },
    { label: "2025 Target", value: "15" },
    { label: "Vision", value: "100+ (aiming 200+)" },
  ];

  const timeline = [
    {
      year: "2022",
      title: "Year 1",
      desc:
        "Launched our first showroom in Bengaluru. Premium, transparent buying experience and dependable after-sales.",
      stat: 1,
    },
    {
      year: "2023",
      title: "Year 2",
      desc:
        "Expanded to more neighborhoods for easy access to sales, service, and genuine spares.",
      stat: 3,
    },
    {
      year: "2024",
      title: "Year 3",
      desc:
        "Scaled rapidly while cloning our service DNA—bright spaces, trained teams, and customer-first process.",
      stat: 9,
    },
    {
      year: "2025",
      title: "Year 4",
      desc:
        "Operational excellence across the city. Targeting city-wide coverage by year-end.",
      stat: "10 → 15",
    },
    {
      year: "Next",
      title: "Momentum",
      desc:
        "Extending the ~3× trajectory—next milestone: 27 showrooms—on the path to 100+.",
      stat: "27 • 100+",
    },
  ];

  const whyUs = [
    {
      icon: <TrophyOutlined />,
      title: "Proven Track Record",
      desc: "From 1 to 10 showrooms in three years—growth powered by customer trust.",
    },
    {
      icon: <SmileOutlined />,
      title: "Customer-First",
      desc: "Every decision—from inventory to processes—centers your needs.",
    },
    {
      icon: <ToolOutlined />,
      title: "Skilled Teams",
      desc: "Friendly advisors & trained technicians using only genuine parts.",
    },
    {
      icon: <EnvironmentOutlined />,
      title: "Close to You",
      desc: "Strategic locations for quick access to sales & service.",
    },
    {
      icon: <CheckCircleOutlined />,
      title: "Consistent Quality",
      desc: "Every branch upholds the same high Shantha Motors standard.",
    },
  ];

  // Styles (light inline to complement AntD tokens)
  const styles = {
    hero: {
      position: "relative",
      minHeight: 360,
      borderRadius: 16,
      overflow: "hidden",
      background:
        "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2100&auto=format&fit=crop') center / cover no-repeat",
      display: "flex",
      alignItems: "center",
    },
    heroOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.35))",
    },
    heroContent: {
      position: "relative",
      color: "#fff",
      padding: "56px 24px",
      width: "100%",
      maxWidth: 1180,
      margin: "0 auto",
    },
    heroBadge: {
      background: "rgba(255,255,255,0.92)",
      color: "#e11d48",
      borderRadius: 999,
      padding: "6px 12px",
      fontWeight: 700,
      fontSize: 12,
      display: "inline-block",
      border: "1px solid rgba(225,29,72,0.2)",
      marginBottom: 8,
    },
    section: { padding: "40px 0" },
    muted: { color: "rgba(0,0,0,0.45)" },
  };

  return (
    <main>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <span style={styles.heroBadge}>Since 2022 • Bengaluru</span>
          <Title level={1} style={{ color: "#fff", marginTop: 8, marginBottom: 10 }}>
            About Shantha Motors
          </Title>
          <Paragraph style={{ color: "#fff", opacity: 0.95, maxWidth: 860 }}>
            Founded by <Text strong>Nagesh</Text>, an <Text strong>NITK Civil Engineer</Text>,
            Shantha Motors began with a single showroom and a bold mission: redefine the
            two-wheeler buying and ownership experience through trust, transparency, and joyful service.
          </Paragraph>
          <Tag color="magenta" style={{ fontWeight: 700 }}>
            <ThunderboltOutlined /> Fast-growing • Customer-first • Trusted
          </Tag>
        </div>
      </section>

      {/* STORY + FACTS */}
      <section style={styles.section}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 16px" }}>
          <Row gutter={[16, 16]} align="top">
            <Col xs={24} md={14}>
              <Card bordered>
                <Title level={2} style={{ marginBottom: 8 }}>
                  Our Story
                </Title>
                <Paragraph>
                  In August 2022, Shantha Motors opened its doors in Bengaluru. From day one, we
                  focused on more than vehicles—we built an experience. Our founder rolled up his
                  sleeves to set up operations from scratch: sourcing, layout, hiring, training,
                  and crafting processes rooted in <Text strong>trust</Text>,{" "}
                  <Text strong>transparency</Text>, and <Text strong>care</Text>. Each satisfied
                  rider became an ambassador, and our reputation accelerated.
                </Paragraph>
                <Paragraph>
                  Today, we proudly operate <Text strong>10 showrooms</Text> across the city, and by the
                  end of <Text strong>2025</Text> we’re on track for <Text strong>15</Text>. Our long-term
                  vision is expansive: a resilient network of <Text strong>100+</Text> (and possibly{" "}
                  <Text strong>200+</Text>) showrooms across Karnataka and beyond—bringing Shantha
                  Motors quality within easy reach of every rider.
                </Paragraph>

                <Divider style={{ margin: "16px 0" }} />

                <Row gutter={[16, 16]}>
                  <Col xs={12} md={6}>
                    <Statistic title="Year 1" value={1} suffix="Showroom" />
                  </Col>
                  <Col xs={12} md={6}>
                    <Statistic title="Year 2" value={3} suffix="Showrooms" />
                  </Col>
                  <Col xs={12} md={6}>
                    <Statistic title="Year 3" value={9} suffix="Showrooms" />
                  </Col>
                  <Col xs={12} md={6}>
                    <Statistic title="Year 4" value={10} suffix="→ 15" />
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col xs={24} md={10}>
              <Card bordered title="Quick Facts" extra={<FlagOutlined />}>
                <Descriptions
                  column={1}
                  colon
                  size="middle"
                  labelStyle={{ width: 140, color: "rgba(0,0,0,0.65)" }}
                >
                  {facts.map((f) => (
                    <Descriptions.Item key={f.label} label={f.label}>
                      <Text strong>{f.value}</Text>
                    </Descriptions.Item>
                  ))}
                </Descriptions>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* GROWTH TIMELINE */}
      <section style={{ ...styles.section, background: "#faf6f8" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 16px" }}>
          <Title level={2} style={{ textAlign: "center", marginBottom: 0 }}>
            Growth Timeline
          </Title>
          <Paragraph style={{ textAlign: "center", ...styles.muted }}>
            Nearly 3× scale-up year over year
          </Paragraph>

          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card bordered>
                <Timeline
                  mode="alternate"
                  items={timeline.map((t) => ({
                    label: <Tag color="magenta">{t.year}</Tag>,
                    children: (
                      <div>
                        <Title level={4} style={{ marginBottom: 4 }}>
                          {t.title}
                        </Title>
                        <Paragraph style={{ marginBottom: 8 }}>{t.desc}</Paragraph>
                        <Tag color="red">
                          <RocketOutlined /> Showrooms: <Text strong>{t.stat}</Text>
                        </Tag>
                      </div>
                    ),
                    dot: <AimOutlined style={{ color: "#e11d48" }} />,
                  }))}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section style={styles.section}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 16px" }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card bordered title="Our Mission" extra={<CheckCircleOutlined />}>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  <li>Deliver excellence at every touchpoint</li>
                  <li>Transparent, fair pricing—no surprises</li>
                  <li>Service you can trust with genuine parts</li>
                  <li>Continuous innovation for convenience</li>
                  <li>Create happy customers, not just sales</li>
                </ul>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card bordered title="Our Vision" extra={<RocketOutlined />}>
                <Paragraph style={{ marginBottom: 0 }}>
                  To be the most trusted two-wheeler brand in Bengaluru and beyond—recognized
                  for quality vehicles, delightful service, and an ownership experience that
                  feels effortless. Bringing Shantha Motors within 15–20 minutes of every rider.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ ...styles.section, background: "#faf6f8" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 16px" }}>
          <Title level={2} style={{ textAlign: "center" }}>
            Why Riders Choose Shantha Motors
          </Title>

          <Row gutter={[16, 16]}>
            {whyUs.map((card) => (
              <Col key={card.title} xs={24} sm={12} md={8} lg={8} xl={4}>
                <Card
                  bordered
                  hoverable
                  style={{ height: "100%" }}
                  actions={[<SmileOutlined key="smile" />]}
                >
                  <div style={{ fontSize: 22, marginBottom: 8, color: "#e11d48" }}>
                    {card.icon}
                  </div>
                  <Title level={4} style={{ marginBottom: 6 }}>
                    {card.title}
                  </Title>
                  <Paragraph style={{ marginBottom: 0 }}>{card.desc}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.section}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", padding: "0 16px" }}>
          <Title level={2}>Ride into the Future with Us</Title>
          <Paragraph style={{ fontSize: 16 }}>
            From first bike to lifelong service partner, we’re here with expertise, warmth,
            and a genuine smile. Visit your nearest showroom and feel the difference.
          </Paragraph>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Button type="primary" size="large" href="/locations" icon={<EnvironmentOutlined />}>
              Find a Showroom
            </Button>
            <Button size="large" href="/service" icon={<ToolOutlined />}>
              Book a Service
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
