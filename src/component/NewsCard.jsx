import React, { useEffect, useState } from "react";
import "../Css/NewsCard.css";

// Functional component definition
function NewsCard() {
  // State to hold the news articles
  const [mynews, setMyNews] = useState([]);

  // Function to fetch data from the news API
  const fetchData = async () => {
    // Fetching data from the news API
    let response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=a5d6bc912c424260826170a825cbfe73"
    );
    // Parsing the JSON response
    let data = await response.json();
    // Setting the state with the fetched articles
    setMyNews(data.articles || []); // If data.articles is null or undefined, set it to an empty array
  };

  // useEffect hook to call fetchData when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="maindiv">
        {mynews.length > 0 ? (
          // Map over the news articles and render a card for each article
          mynews.map((article, index) => (
            <div className="card" key={index}>
              <img
                // Use a default image if urlToImage is null
                src={
                  article.urlToImage == null
                    ? "https://media.9news.com/assets/KUSA/images/d296be50-febf-4521-bc5f-1233693db6de/20240520T175459/d296be50-febf-4521-bc5f-1233693db6de_1140x641.jpg"
                    : article.urlToImage
                }
                className="card-img-top"
                alt={article.title}
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a
                  // Link to the full article
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Read more
                </a>
              </div>
            </div>
          ))
        ) : (
          // Show a loading message if the news articles are not yet loaded
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default NewsCard;
