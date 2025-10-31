const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "2rem",
        marginTop: "3rem",
        textAlign: "center",
      }}
    >
        
      <div style={{ marginBottom: "1rem" }}>
        <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Wildlife Gallery
        </p>
        <p style={{ fontSize: "0.9rem", color: "#ccc" }}>
          Explore the beauty of wildlife
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <a href="#facebook" style={{ color: "#ccc", textDecoration: "none" }}>
          Facebook
        </a>
        <a href="#twitter" style={{ color: "#ccc", textDecoration: "none" }}>
          Twitter
        </a>
        <a href="#instagram" style={{ color: "#ccc", textDecoration: "none" }}>
          Instagram
        </a>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <p style={{ fontSize: "0.8rem" }}>
          © 2025 Wildlife Gallery. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
