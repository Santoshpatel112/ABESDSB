const Navbar = () => {
  // Navigation component
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#2c3e50",
        color: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.JUgDt_nazAaq3KdWhKj0owHaHa?pid=Api&P=0&h=180"
          alt="Logo"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid white",
            transition: "transform 0.3s ease",
          }}
        />
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Wildlife</span>
      </div>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "2rem",
          margin: 0,
        }}
      >
        <li>
          <a href="#home" style={{ color: "white", textDecoration: "none", transition: "color 0.3s" }}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" style={{ color: "white", textDecoration: "none", transition: "color 0.3s" }}>
            About
          </a>
        </li>

        <li>
          <a href="#gallery" style={{ color: "white", textDecoration: "none", transition: "color 0.3s" }}>
            Gallery
          </a>
        </li>
        <li>
          <a
            href="#services"
            style={{ color: "white", textDecoration: "none", transition: "color 0.3s" }}
          >
            Animals
          </a>
        </li>
        <li>
          <a href="#contact" style={{ color: "white", textDecoration: "none", transition: "color 0.3s" }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
