import React, { useEffect, useState } from "react";
import "../Css/Business.css";

function World() {
  // State to hold the news articles
  const [MyWorldNews, setMYWorldNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  // Fetching data from the news API
  const WorldNews = async () => {
    try {
      let response = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2024-05-23&sortBy=publishedAt&apiKey=a5d6bc912c424260826170a825cbfe73"
      );
      // Parsing the JSON response
      let data = await response.json();
      setMYWorldNews(data.articles);
      setIsLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching the news articles:", error);
      setIsLoading(false); // Set loading to false even if there is an error
    }
  };

  // useEffect hook to call fetchData when the component mounts.
  useEffect(() => {
    WorldNews();
  }, []);

  return (
    <>
      {isLoading ? (
        <p className="loading">Loading...</p> // Display loading message while data is being fetched
      ) : (
        <div className="MainDiv">
          {MyWorldNews.map((element, index) => {
            return (
              <div className="card" key={index}>
                <img
                  src={
                    element.urlToImage == null
                      ? "https://www.letemsvetemapplem.eu/wp-content/uploads/2018/11/Elon-Musk-1.jpg"
                      : element.urlToImage
                  }
                  className="card-img-top"
                  alt={element.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text">{element.description}</p>
                  <a
                    href={element.url}
                    target="_blank"
                    rel="noopener noreferrer" // Corrected rel attribute
                    className="btn btn-primary"
                  >
                    Read more
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default World;
