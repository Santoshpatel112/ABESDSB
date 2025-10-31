const Gallery = () => {
  const animals = [
    {
      name: "Lion",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.gSu7QHJB8Ey_Hn5Ql8LqhQHaEo?w=300&h=187&c=7&r=0&o=5&pid=1.7",
    },
    {
      name: "Elephant",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.Wy7Aq8oS-tt-Xmv8lZ8RowHaE8?w=263&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      name: "Tiger",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.Wy0Aq8oS-tt-Xmv8lZ8RowHaE8?w=263&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      name: "Monkey",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.C0S2HJNlHADRFXwv9ZU76wHaHa?pid=Api&P=0&h=180",
    },
    {
      name: "Giraffe",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.8Aq8oS-tt-Xmv8lZ8RowHaE8?w=263&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      name: "Zebra",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.Aq8oS-tt-Xmv8lZ8RowHaE8?w=263&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      name: "Panda",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.q8oS-tt-Xmv8lZ8RowHaE8?w=263&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      name: "Dolphin",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.8oS-tt-Xmv8lZ8RowHaE8?w=263&h=180&c=7&r=0&o=5&pid=1.7",
    },
  ];

  return (
    <div id="gallery" style={{ padding: "2rem" }}>
      <h2
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        Animal Gallery
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
        }}
      >
        {animals.map((animal, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "15px",
              padding: "1.5rem",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
            }}
          >
            <h3
              style={{
                color: "#2c3e50",
                marginBottom: "1rem",
                fontSize: "1.5rem",
              }}
            >
              {animal.name}
            </h3>
            <img
              src={animal.image}
              alt={animal.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
