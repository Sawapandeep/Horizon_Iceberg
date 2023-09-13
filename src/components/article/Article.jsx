import React from 'react';
import './article.css';
export const Article = ({imgUrl,date,text,link}) => {
  return (
    <div className="Horizon__blog-container_article">
    <div className="Horizon__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="Horizon__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <a href={link}>Read Full Article here</a>
    </div>
  </div>
  )
}  
export default Article
// import React, { useState, useEffect } from 'react';
// import './article.css';
// import axios from 'axios';

// export const Article = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Make a GET request to your HTML scraper endpoint
//     axios.get('LuWii:5000/fetch')
//       .then((response) => {
//         setData(response.data); // Set the retrieved data in the state
//       })
//       .catch((error) => {
//         console.error('Error fetching data from the scraper:', error);
//       });
//   }, []);

//   return (
//     <div className="Horizon__blog-container">
//       {data.map((item, index) => (
//         <div key={index} className="Horizon__blog-container_article">
//           <div className="Horizon__blog-container_article-image">
//             <img src={item.imageSources[0]} alt="blog_image" /> {/* Display the image */}
//           </div>
//           <div className="Horizon__blog-container_article-content">
//             <div>
//               <p>{item.time}</p>
//               <h3>{item.title}</h3>
//             </div>
//             <p>{item.description}</p>
//             <p>Read Full Article</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Article;