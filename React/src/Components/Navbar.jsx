const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#333",
        color: "white",
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
          }}
        />
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}></span>
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
          <a href="#home" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            style={{ color: "white", textDecoration: "none" }}
          >
            Animal
          </a>
        </li>
        <li>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
