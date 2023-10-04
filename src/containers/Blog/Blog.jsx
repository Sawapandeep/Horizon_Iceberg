// import React from 'react';
// import { Article } from '../../components';
// import {blog01,blog02,blog03,blog04,blog05} from './imports.js';
// import './blog.css';
//  const Blog = () => {
//   return (
//     <div className="Horizon__blog section__padding" id="blog">
//     <div className="Horizon__blog-heading">
//       <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
//     </div>
//     <div className="Horizon__blog-container">
//       {/* <div className="Horizon__blog-container_groupA">
//         <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
//       </div> */}
//       <div className="Horizon__blog-container_groupB">
//         <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
//         {/* <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
//         <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
//         <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" /> */}
//       </div>
//     </div>
//   </div>
//   )
// }
// export default Blog;
//!v1 works nicely
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './blog.css';

// function Blog() {
//   const [newsData, setNewsData] = useState([]);

//   const fetchData = async () => {
//     try {
//       // Replace 'your-api-url-here' with the correct URL of your API
//       const response = await axios.get('https://trending-gaming-api.onrender.com/fetch');
//       setNewsData(response.data); // Use response.data directly as it should be an array
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []); // Run this effect only once when the component mounts

//   return (
//     <div className="blog-container">
//       <div className="Horizon__blog-container_groupB">
//         {newsData.length > 0 ? (
//           newsData.map((item, index) => (
//             <div key={index} className="blog-post" style={{ color: "black" }}>
//               <h2>{item.title}</h2>
//               <p>{item.description}</p>
//               <p>Timestamp: {item.timestamp}</p>
//               <a href={item.titleLink}>Read More</a>
//               <div className="tags">
//                 {item.brandTags.map((tag, tagIndex) => (
//                   <span key={tagIndex} className="tag">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <div className="image-container">
//                 {item.imageSources.map((imgSource, imgIndex) => (
//                   <img key={imgIndex} src={imgSource} alt={` ${imgIndex}`} />
//                 ))}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Loading data...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Blog;
//!v3
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './blog.css';
// import { Article } from '../../components'; // Import the Article component
// import { formatDistanceToNow } from 'date-fns';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import React Router components
// import ScrapedContent from './components/Scraped/ScrapedContent';
// function formatTimestamp(timestamp) {
//   const distance = formatDistanceToNow(new Date(timestamp), { addSuffix: true });
//   return distance;
// }

// function Blog() {
//   const [newsData, setNewsData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://trending-gaming-api.onrender.com/fetch');
//       setNewsData(response.data);
//       setIsLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   const handlePostClick = (link) => {
//     // Use React Router history to navigate to the new route
//     window.location.href = `/scraped?url=${encodeURIComponent(link)}`;
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <Router> {/* Wrap your component with BrowserRouter */}
//       <div className="blog-container">
//         <div className="Horizon__blog-container_groupB">
//           {isLoading ? (
//             <p>Loading data...</p>
//           ) : (
//             newsData.length > 0 ? (
//               newsData.map((item, index) => (
//                 <Article
//                   key={index}
//                   imgUrl={item.imageSources[0]}
//                   date={formatTimestamp(item.timestamp)}
//                   text={item.title}
//                   link={item.titleLink}
//                   handlePostClick={handlePostClick} // Pass handlePostClick as a prop
//                 />
//               ))
//             ) : (
//               <p>No data available.</p>
//             )
//           )}
//         </div>
//       </div>

//       <Switch> {/* Define your routes */}
//         <Route path="/scraped" component={ScrapedContent} />
//       </Switch>
//     </Router>
//   );
// }

// export default Blog;

  //!v2 implementing articles into blog 
  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import './blog.css';
  import { Article } from '../../components'; // Import the Article component
  import { formatDistanceToNow } from 'date-fns';
  
  function formatTimestamp(timestamp) {
    const distance = formatDistanceToNow(new Date(timestamp), { addSuffix: true });
    return distance;
  }
  
  function Blog() {
    const [newsData, setNewsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('https://trending-gaming-api.onrender.com/fetch');
        setNewsData(response.data);
        setIsLoading(false); // Set loading to false when data is received
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <div className="blog-container ">
        <div className="Horizon__blog-container_groupB">
          {isLoading ? ( // Show a loading message when data is being fetched
            <p>Loading data...</p>
          ) : (
            newsData.length > 0 ? (
              newsData.map((item, index) => (
                <Article
                  key={index}
                  imgUrl={item.imageSources[0]} // Use the first image source
                  // date={new Date(item.timestamp).toDateString()} 
                  date={formatTimestamp(item.timestamp)}// Convert timestamp to date string
                  text={item.title}
                  link={item.titleLink} // Pass the link to the Article component
                />
              ))
            ) : (
              <p>No data available.</p>
            )
          )}
        </div>
      </div>
    );
  }
  
  export default Blog;