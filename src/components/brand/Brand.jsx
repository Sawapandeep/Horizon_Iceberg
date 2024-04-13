// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css"; // Import the library's styles
// import items from "./items";
// import "./brand.css"; // Import your custom styles

// const Brand = () => {
//   const handleCardClick = (url) => {
//     window.open(url, "_blank"); // Open the URL in a new tab
//   };

//   return (
//     <div className="Horizon__brand" id="brand">
//       <Carousel
//         additionalTransfrom={0}
//         arrows
//         autoPlaySpeed={3000}
//         centerMode={false}
//         className=""
//         containerClass="Horizon__container"
//         dotListClass=""
//         draggable
//         focusOnSelect={false}
//         infinite
//         itemClass="slider-card"
//         keyBoardControl
//         minimumTouchDrag={80}
//         renderButtonGroupOutside={false}
//         renderDotsOutside={false}
//         responsive={{
//           desktop: {
//             breakpoint: {
//               max: 3000,
//               min: 1024,
//             },
//             items: 4,
//           },
//           mobile: {
//             breakpoint: {
//               max: 464,
//               min: 0,
//             },
//             items: 1,
//           },
//           tablet: {
//             breakpoint: {
//               max: 1024,
//               min: 464,
//             },
//             items: 2,
//           },
//         }}
//         showDots={false}
//         sliderClass=""
//         slidesToSlide={1}
//         swipeable
//       >
//         {items.map((item) => (
//           <div
//             key={item.id}
//             style={{
//               backgroundImage: `url(${item.logo.imgurl})`, // Set the background image
//               borderColor: item.color, // Add a colored border
//             }}
//             onClick={() => handleCardClick(item.url)}
//           >
//             {/* Content goes here */}
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Brand;

// !v1
import React from "react";
import "./brand.css";

import "react-multi-carousel/lib/styles.css";
import items from "./items";


const Brand = () => {

  const handleCardClick = (url) => {
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  const handleHover = (e, color) => {
    e.target.style.border = `5px solid ${color}`; // Add a colored border
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