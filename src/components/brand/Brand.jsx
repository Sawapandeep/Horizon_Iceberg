
import React from "react";
import "./brand.css";

import "react-multi-carousel/lib/styles.css";
import items from "./items";

const Brand = () => {
  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  const handleHover = (e, color) => {
    e.target.style.border = `2.8px solid ${color}`;
    e.target.style.boxShadow = `0 0 25px ${color}`; // Add glow effect
  };

  const handleHoverExit = (e, color) => {
    e.target.style.border = `2.8px solid ${color}`;
    e.target.style.boxShadow = "none"; // Remove glow effect on hover exit
  };

  const syncPointer = ({ x: pointerX, y: pointerY }) => {
    const x = pointerX.toFixed(2);
    const y = pointerY.toFixed(2);
    const xp = (pointerX / window.innerWidth).toFixed(2);
    const yp = (pointerY / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty("--x", x);
    document.documentElement.style.setProperty("--xp", xp);
    document.documentElement.style.setProperty("--y", y);
    document.documentElement.style.setProperty("--yp", yp);
  };
  document.body.addEventListener("pointermove", syncPointer);

  return (

    <div className="Horizon__brand" id="brand">
    <div className="Horizon__container">
      {items.map((item, index) => (
        <div key={item.id}
          className={`slider-card `}
          style={{
            backgroundImage: `url(${item.logo.imgurl})`,
            border: `2.8px solid ${item.color}`,
          }}
          onMouseEnter={(e) => handleHover(e, item.color)}
          onMouseLeave={(e) => handleHoverExit(e, item.color)}
          onClick={() => handleCardClick(item.url)}
        />
      ))}
    </div>
  </div>
  );
};

export default Brand;
