import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon


/**
 * Home.jsx — Shantha Motors homepage (single-file version)
 * - Pure React + inline styles (no external CSS needed)
 * - Floating WhatsApp button
 * - Responsive 5-star fake reviews (10 cards)
 */

export default function Home() {
  // Responsive columns for reviews
  const [reviewCols, setReviewCols] = React.useState(5);

  React.useEffect(() => {
    const calcCols = () => {
      const w = window.innerWidth;
      if (w <= 480) return 1;
      if (w <= 768) return 2;
      if (w <= 1024) return 3;
      return 5;
    };
    const onResize = () => setReviewCols(calcCols());
    setReviewCols(calcCols());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const styles = {
    topbar: {
      background: "#f6f6f6",
      color: "#333",
      fontSize: 14,
      padding: "6px 16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    container: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 16px",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 0",
    },
    logoWrap: { display: "flex", alignItems: "center", gap: 12 },
    logoImg: { height: 48, width: "auto" },
    tagline: { fontSize: 12, color: "#666" },
    nav: { display: "flex", gap: 18, flexWrap: "wrap" },
    navLink: { textDecoration: "none", color: "#222", fontWeight: 500 },
    hero: {
      position: "relative",
      height: 420,
      borderRadius: 12,
      overflow: "hidden",
      background:
        "url('https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqERXzr146IsKS4GQQ4JGMeLJ0mgoDHukDDj-APgJCV7yS-6YkpU5kGqqeXJON2Q1RaHiqL5wm58rrm61xo7dudc3SbYfpbVh6AXUg-773yATRyZeuJxymp8bm83xiK7rXfSI8Ear0dzli4=s1360-w1360-h1020-rw') center/cover no-repeat",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textAlign: "center",
    },
    heroOverlay: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.35)",
    },
    heroContent: { position: "relative", zIndex: 1, padding: "0 16px" },
    heroTitle: { fontSize: 40, fontWeight: 800, margin: "6px 0" },
    heroSub: { fontSize: 18, opacity: 0.95 },
    ctaRow: {
      marginTop: 16,
      display: "flex",
      gap: 12,
      justifyContent: "center",
      flexWrap: "wrap",
    },
    ctaBtnPrimary: {
      background: "#e11d48",
      color: "white",
      padding: "10px 16px",
      borderRadius: 8,
      border: "none",
      cursor: "pointer",
      fontWeight: 600,
    },
    ctaBtn: {
      background: "white",
      color: "#111",
      padding: "10px 16px",
      borderRadius: 8,
      border: "1px solid #ddd",
      cursor: "pointer",
      fontWeight: 600,
    },
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
    },
    card: {
      border: "1px solid #eee",
      borderRadius: 12,
      padding: 16,
      background: "white",
      boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    },
    section: { padding: "32px 0" },
    sectionTitle: { fontSize: 24, fontWeight: 800, marginBottom: 10 },
    sectionSub: { color: "#555", marginBottom: 16 },
    about: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 18,
      alignItems: "center",
    },
    aboutImg: {
      width: "100%",
      borderRadius: 12,
      height: 260,
      objectFit: "cover",
    },
    linkBtn: { color: "#e11d48", textDecoration: "none", fontWeight: 700 },
    footer: {
      marginTop: 32,
      padding: "18px 0",
      color: "#666",
      borderTop: "1px solid #eee",
      fontSize: 14,
      textAlign: "center",
    },
    badge: {
      display: "inline-block",
      padding: "6px 10px",
      borderRadius: 999,
      background: "#fce7f3",
      color: "#9d174d",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: 0.6,
    },
    reviewsWrap: {},
    whatsapp: {
      position: "fixed",
      right: 16,
      bottom: 16,
      height: 54,
      width: 54,
      borderRadius: "50%",
      background: "#25D366",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: 800,
      boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
      cursor: "pointer",
      textDecoration: "none",
      transition: "transform 0.2s ease, boxShadow 0.2s ease",
    },
    small: { fontSize: 12, color: "#777" },
  };

  return (
    <div>
      {/* Topbar */}
      <div style={styles.topbar}>
        <div style={styles.container}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              Sales : <strong>9731366921</strong>
            </div>
            <div style={styles.small}>Open 9:00 AM – 8:30 PM • Mon–Sat</div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.logoWrap}>
           <img
            src="/shantha-logo.png"
            alt="Shantha Motors Logo"
            style={styles.logoImg}
          />


            <div>
              <div style={{ fontSize: 18, fontWeight: 800 }}>Shantha Motors</div>
              <div style={styles.tagline}>The Power of Trust</div>
            </div>
          </div>
          <nav style={styles.nav} aria-label="Primary">
            {[
              "Home",
              "Products",
              "BookingForm",
              "Enquiry",
              "EMICalculator",
              "Service",
              "Gallery",
              "Locations",
              "Contact",
              "Login",
            ].map((item) => {
              // Convert label to a route-friendly path (lowercase, replace spaces with "-")
              const path = "/" + item.toLowerCase().replace(/\s+/g, "-");

              return (
                <Link key={item} to={path} style={styles.navLink}>
                  {item}
                </Link>
              );
            })}
          </nav>

        </header>
      </div>

      {/* Hero */}
      <div style={styles.container}>
        <section style={styles.hero} role="img" aria-label="Showroom image">
          <div style={styles.heroOverlay} />
          <div style={styles.heroContent}>
            <span style={styles.badge}>Grab your best DEAL...</span>
            <h1 style={styles.heroTitle}>Welcome to Shantha Motors</h1>
            <p style={styles.heroSub}>
              Your trusted two-wheeler partner in Bengaluru. Explore the latest bikes, EVs, service,
              offers and genuine spares.
            </p>
            <div style={styles.ctaRow}>
              <button
                style={styles.ctaBtnPrimary}
                onClick={() =>
                  document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book a Test Ride
              </button>
              <button
                style={styles.ctaBtn}
                onClick={() =>
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Browse Products
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* We Do / We Offer / We Prefer In */}
      <div style={styles.container}>
        <section style={styles.section} id="offerings">
          <h2 style={styles.sectionTitle}>We Do • We Offer • We Prefer In</h2>
          <p style={styles.sectionSub}>
            End-to-end dealership services focused on sales, service, safety and genuine spares.
          </p>
          <div style={styles.grid3}>
            <div style={styles.card}>
              <h3>SALES</h3>
              <p>
                Latest Multi-branded Two wheeler vehicle bikes and scooters with city-wise on-road prices and flexible EMI
                options.
              </p>
            </div>
            <div style={styles.card}>
              <h3>SERVICE</h3>
              <p>Expert multi-point inspection, maintenance, and quick turnaround by technicians.</p>
            </div>
            <div style={styles.card}>
              <h3>SAFETY</h3>
              <p>Ride assured with genuine spares, helmets, and safety accessories approved.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Genuine Parts / Spares */}
      <div style={styles.container}>
        <section style={styles.section}>
          <div style={styles.card}>
            <h3>Genuine Parts • SPARES</h3>
            <p>
              We strictly use and recommend genuine parts to ensure performance, warranty
              compliance, and rider safety.
            </p>
          </div>
        </section>
      </div>

      {/* About */}
      <div style={styles.container}>
        <section style={{ ...styles.section, ...styles.about }} id="about">
          <div>
            <h2 style={styles.sectionTitle}>About Shantha Motors</h2>
            <p style={styles.sectionSub}>
              Founded in Aug 2022 by a visionary NITK Civil Engineer Nagesh, Shantha Motors began its journey with a single showroom in Bengaluru and a clear mission — to deliver exceptional two-wheeler sales, service, and customer experiences.

From humble beginnings, we have grown rapidly:
Year 1: 1 showroom → Year 2: 3 showrooms → Year 3: 9 showrooms → Year 4: 10 showrooms (and counting). By the end of 2025, we aim for 15 showrooms, with a long-term vision of 100+ across Karnataka, possibly even 200+.

Our growth reflects a near 3x scale-up each year, driven by unwavering commitment to quality, genuine spares, transparent pricing, and friendly, expert service. We’re not just building outlets — we’re building a trusted brand recognized across Bengaluru for seamless, happy customer experiences.

Whether it’s your first bike, an upgrade, or reliable servicing, our promise is simple: you’re not just a customer — you’re family.
            </p>
            <a href="/about" style={styles.linkBtn}>
              Read More →
            </a>
          </div>
          <img
            style={styles.aboutImg}
            src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4noMW7Ad5Pr7EhspftUPaMgaQPVTsLV5pZadjaSorV2-Jzq-KVEli15Kt22yg0QYUymh9lP4VGYbzLvoxZTPPIgybOfXySDzi9u9tCMGGpE5BK5qGJiz3Zh31slVi3n3KnwFin4=s1360-w1360-h1020-rw"
            alt="About Shantha Motors"
          />
        </section>
      </div>

      {/* Google Reviews (responsive + fake 5-star) */}
      <div style={styles.container}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Google Reviews</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${reviewCols}, 1fr)`,
              gap: 16,
            }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #eee",
                  borderRadius: 12,
                  padding: 12,
                  background: "#fff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  textAlign: "left",
                }}
              >
                {/* Header: avatar + name + time */}
                <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                  <img
                    src={`https://i.pravatar.cc/40?img=${(i % 70) + 1}`}
                    alt="Customer avatar"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      marginRight: 10,
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>Customer {i + 1}</div>
                    <div style={{ fontSize: 12, color: "#888" }}>{(i % 3) + 1} days ago</div>
                  </div>
                </div>

                {/* Stars */}
                <div style={{ color: "#FFD700", fontSize: 16, marginBottom: 6 }}>
                  {"★".repeat(5)}
                </div>

                {/* Title + text */}
                <div style={{ fontWeight: 700, color: "#222", fontSize: 13, marginBottom: 4 }}>
                  Excellent
                </div>
                <div style={{ fontSize: 13, color: "#444" }}>
                  Excellent service! Very satisfied with the bike purchase and overall experience.
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <div style={styles.container}>
        <footer style={styles.footer}>
          <div>© {new Date().getFullYear()} Shantha Motors. All rights reserved.</div>
        </footer>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        style={styles.whatsapp}
        href="https://wa.me/+919731366921"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
