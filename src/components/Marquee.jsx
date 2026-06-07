import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const items = [
    "KAKEMONOS PREMIUM",
    "•",
    "AFFICHES PUBLICITAIRES",
    "•",
    "VIDÉOS PROMOTIONNELLES",
    "•",
    "DESIGN GRAPHIQUE",
    "•",
    "IDENTITÉ VISUELLE",
    "•",
    "IMPRESSION HAUTE QUALITÉ",
    "•",
  ];

  return (
    <div className="marquee-container bg-dark">
      <div className="marquee-content">
        {/* We duplicate the items to create a seamless infinite loop */}
        {[...items, ...items, ...items, ...items].map((text, index) => (
          <span key={index} className={text === "•" ? "marquee-dot" : "marquee-text"}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
