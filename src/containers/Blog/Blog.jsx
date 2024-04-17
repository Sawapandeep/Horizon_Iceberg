

  //!v2 implementing articles into blog 
  // import React, { useEffect, useState } from 'react';
  // import axios from 'axios';
  // import './blog.css';
  // import './loading.css';

  // import { Article } from '../../components'; // Import the Article component
  // import { formatDistanceToNow } from 'date-fns';
  
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
  //       setIsLoading(false); // Set loading to false when data is received
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }
  
  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  
  //   return (
  //     <div className="blog-container ">
  //       <div className="Horizon__blog-container_groupB">
  //         {isLoading ? ( // Show a loading message when data is being fetched
  //           <p>Loading data...</p>
  //         ) : (
  //           newsData.length > 0 ? (
  //             newsData.map((item, index) => (
  //               <Article
  //                 key={index}
  //                 imgUrl={item.imageSources[0]} // Use the first image source
  //                 // date={new Date(item.timestamp).toDateString()} 
  //                 date={formatTimestamp(item.timestamp)}// Convert timestamp to date string
  //                 text={item.title}
  //                 link={item.titleLink} // Pass the link to the Article component
  //               />
  //             ))
  //           ) : (
  //             <p>No data available.</p>
  //           )
  //         )}
  //       </div>
  //     </div>
  //   );
  // }
  
  // export default Blog;

//!v3 adding loading state
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './blog.css';
import './loading.css';

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
        {isLoading ? ( // Show the loading animation while data is being fetched
          <div className="loading-container" id="load"> 
          {/* id='load'> */}
          <div>G</div>
          <div>N</div>
          <div>I</div>
          <div>D</div>
          <div>A</div>
          <div>O</div>
          <div>L</div>
        </div>
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
