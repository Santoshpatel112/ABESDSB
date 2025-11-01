import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className="animal-card">
      <h1>Monkey</h1>
      <img
        src="https://tse1.mm.bing.net/th/id/OIP.C0S2HJNlHADRFXwv9ZU76wHaHa?pid=Api&P=0&h=180"
        alt="Monkey"
      />
      <p style={{ marginTop: '1rem', color: '#555' }}>
        A curious and intelligent primate
      </p>
      
    </div>
  );
}

export default Card;
