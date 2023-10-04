import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ScrapedContent = () => {
  const { url } = useParams();
  const [scrapedContent, setScrapedContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(url);
        setScrapedContent(response.data); // Assuming the response contains HTML content
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, [url]);

  return (
    <div>
      {/* Display the scraped content here */}
      <div dangerouslySetInnerHTML={{ __html: scrapedContent }} />
    </div>
  );
};

export default ScrapedContent;
