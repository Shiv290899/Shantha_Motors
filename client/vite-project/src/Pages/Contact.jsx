import React from "react";
import {
  Card,
  Row,
  Col,
  Typography,
  Space,
  Button,
  Divider,
  Tag,
  Grid,
} from "antd";
import {
  PhoneFilled,
  EnvironmentFilled,
  WhatsAppOutlined,
  AimOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

// tel: and WhatsApp deep-links
const tel = (num) => `tel:${num.replace(/\s+/g, "")}`;
const wa = (num) => `https://wa.me/${num.replace(/\D/g, "")}`;

// Try to embed Maps when a full URL is provided
const toEmbed = (url) => {
  try {
    const u = new URL(url);
    if (u.hostname.includes("google") || u.hostname.includes("maps")) {
      if (!u.searchParams.has("output")) u.searchParams.set("output", "embed");
      return u.toString();
    }
  } catch {
    // intentionally ignoring errors (invalid URL)
  }
  return null;
};

// Demo data (replace with real)
const SHOWROOMS = [
  {
    name: "Shantha Motors – Main Branch",
    phone: "9538968888",
    address:
      "123, Sample Road, Rajajinagar, Bengaluru, Karnataka 560010",
    mapUrl: "https://share.google/wmssab0m2Q9XasnpM",
    isPrimary: true,
  },
  {
    name: "Shantha Motors – Branch 2",
    phone: "9876543210",
    address: "Opp. City Mall, JP Nagar, Bengaluru, Karnataka 560078",
    mapUrl: "https://share.google/GHfXHbjaAAxjjLl4A",
  },
  {
    name: "Shantha Motors – Branch 3",
    phone: "9812345678",
    address: "Near Metro Station, Yeshwanthpur, Bengaluru 560022",
    mapUrl: "https://share.google/SNN5ALEjkp91xOOZ7",
  },
  {
    name: "Shantha Motors – Branch 4",
    phone: "9900099000",
    address: "Outer Ring Road, Marathahalli, Bengaluru 560037",
    mapUrl: "https://share.google/sXDFk3XGTTABcgeFQ",
  },
  {
    name: "Shantha Motors – Branch 5",
    phone: "9988776655",
    address: "BTM Layout, Bengaluru 560076",
    mapUrl: "https://share.google/H0xWdCkq9Z8pLNW6s",
  },
  {
    name: "Shantha Motors – Branch 6",
    phone: "9123456780",
    address: "Indiranagar 100 ft Rd, Bengaluru 560038",
    mapUrl: "https://share.google/ETadgHcY5ltqtRlUF",
  },
  {
    name: "Shantha Motors – Branch 7",
    phone: "9012345678",
    address: "Koramangala 5th Block, Bengaluru 560095",
    mapUrl: "https://share.google/sqlxe0B40lwZZy0w9",
  },
];

export default function Contact() {
  const screens = useBreakpoint();
  const isMobile = !screens.sm;                // < 576px
  const isTablet = screens.sm && !screens.lg;  // 576–992px
  const containerPad = isMobile ? "16px 12px 40px" : "24px 16px 56px";
  const mapHeight = isMobile ? 180 : isTablet ? 220 : 260;

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: containerPad }}>
      {/* Header */}
      <Space direction="vertical" size={4} style={{ width: "100%" }}>
        <Title level={2} style={{ marginBottom: 0 }}>
          Contact & Locations
        </Title>
        <Text type="secondary">
          Call, WhatsApp, or visit your nearest Shantha Motors showroom.
        </Text>
      </Space>

      <Divider style={{ margin: isMobile ? "16px 0" : "24px 0" }} />

      {/* Note */}
      <Card
        bordered
        style={{
          marginBottom: isMobile ? 16 : 24,
          background: "#f8fbff",
          borderRadius: 14,
        }}
        bodyStyle={{ padding: isMobile ? 12 : 16 }}
      >
        <Space direction="vertical" size={4} style={{ width: "100%" }}>
          <Paragraph style={{ marginBottom: 6 }}>
            🔧 <b>Tip:</b> Paste the exact address from Google Maps into each
            card for the cleanest display.
          </Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>
            🗺️ Short links like <code>share.google/…</code> open in the Maps
            app. Full <code>google.com/maps</code> links will also embed below.
          </Paragraph>
        </Space>
      </Card>

      {/* Cards */}
      <Row
        gutter={[
          { xs: 8, sm: 12, md: 16, lg: 16, xl: 20 }, // horizontal gutters
          { xs: 8, sm: 12, md: 16, lg: 16, xl: 20 }, // vertical gutters
        ]}
      >
        {SHOWROOMS.map((s, idx) => {
          const embed = toEmbed(s.mapUrl);
          return (
            <Col
              key={idx}
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
              style={{ display: "flex" }}
            >
              <Card
                bordered
                hoverable
                style={{
                  borderRadius: 16,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                bodyStyle={{ padding: isMobile ? 14 : 16, flex: 1 }}
                title={
                  <Space align="center" wrap>
                    <EnvironmentFilled />
                    <span>{s.name}</span>
                    {s.isPrimary && <Tag color="blue">Primary</Tag>}
                  </Space>
                }
                extra={
                  <Tag bordered={false} color="processing">
                    Open 10:00–7:00
                  </Tag>
                }
              >
                <Space direction="vertical" size={12} style={{ width: "100%" }}>
                  {/* Phone */}
                  <Space direction="vertical" size={4}>
                    <Text strong>
                      <PhoneFilled /> Mobile
                    </Text>
                    <Space wrap>
                      <Text copyable>{s.phone}</Text>
                      <Button
                        type="primary"
                        size="middle"
                        block={isMobile}
                        href={tel(s.phone)}
                        icon={<PhoneFilled />}
                      >
                        Call
                      </Button>
                      <Button
                        size="middle"
                        block={isMobile}
                        href={wa(s.phone)}
                        target="_blank"
                        icon={<WhatsAppOutlined />}
                      >
                        WhatsApp
                      </Button>
                    </Space>
                  </Space>

                  {/* Address */}
                  <Space direction="vertical" size={4}>
                    <Text strong>
                      <EnvironmentFilled /> Address
                    </Text>
                    <Text style={{ lineHeight: 1.6 }}>{s.address}</Text>
                  </Space>

                  {/* Map / Link */}
                  <Space wrap>
                    <Button
                      type="default"
                      size="middle"
                      block={isMobile}
                      href={s.mapUrl}
                      target="_blank"
                      icon={<AimOutlined />}
                    >
                      Open in Google Maps
                    </Button>
                  </Space>

                  {/* Inline map embed (if full URL) */}
                  {embed ? (
                    <div
                      style={{
                        borderRadius: 12,
                        overflow: "hidden",
                        border: "1px solid #f0f0f0",
                      }}
                    >
                      <iframe
                        title={`${s.name} map`}
                        src={embed}
                        width="100%"
                        height={mapHeight}
                        style={{ border: 0, display: "block" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  ) : null}
                </Space>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
