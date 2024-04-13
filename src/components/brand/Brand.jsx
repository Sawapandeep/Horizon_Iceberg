
import React from "react";
import "./brand.css";

import "react-multi-carousel/lib/styles.css";
import items from "./items";


const Brand = () => {

  const handleCardClick = (url) => {
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  const handleHover = (e, color) => {
    e.target.style.border = `1.8px solid ${color}`; // Add a colored border
  };
  
  
  const handleHoverExit = (e) => {
    e.target.style.border = "none"; 
  };
  
    const syncPointer = ({ x: pointerX, y: pointerY }) => {
      const x = pointerX.toFixed(2)
      const y = pointerY.toFixed(2)
      const xp = (pointerX / window.innerWidth).toFixed(2)
      const yp = (pointerY / window.innerHeight).toFixed(2)
      document.documentElement.style.setProperty('--x', x)
      document.documentElement.style.setProperty('--xp', xp)
      document.documentElement.style.setProperty('--y', y)
      document.documentElement.style.setProperty('--yp', yp)
    }
    document.body.addEventListener('pointermove', syncPointer)
        
return (
  <div className="Horizon__brand" id="brand">
    <div className="Horizon__container">
  {items.map((item, index) => (
    <div
      key={item.id}
      className={`slider-card `}
      style={{
        backgroundImage: `url(${item.logo.imgurl})`, // Set the background image
      }}
      onMouseEnter={(e) => handleHover(e, item.color)} // Add onMouseEnter event
      onMouseLeave={handleHoverExit} // Add onMouseLeave event
      onClick={() => handleCardClick(item.url)}
    />
  ))}
</div>


  </div>
);
};

export default Brand;