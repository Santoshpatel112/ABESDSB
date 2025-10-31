const Gallery = () => {
  const animals = [
    { name: "Lion", image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=300" },
    { name: "Elephant", image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=300" },
    { name: "Tiger", image: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=300" },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", padding: "2rem" }}>
      {animals.map((animal, index) => (
        <div key={index} style={{ background: "white", borderRadius: "10px", padding: "1rem", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
          <h3>{animal.name}</h3>
          <img src={animal.image} alt={animal.name} style={{ width: "100%", borderRadius: "8px" }} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
