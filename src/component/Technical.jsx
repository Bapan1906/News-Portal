import React, { useEffect, useState } from "react";
import "../Css/Business.css";

function Technical() {
  // State to hold the news articles
  const [MyTechNews, setMYTechNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  // Fetching data from the news API
  const TechnologyNews = async () => {
    try {
      let response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a5d6bc912c424260826170a825cbfe73"
      );
      // Parsing the JSON response
      let data = await response.json();
      setMYTechNews(data.articles);
      setIsLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching the news articles:", error);
      setIsLoading(false); // Set loading to false even if there is an error
    }
  };

  // useEffect hook to call fetchData when the component mounts.
  useEffect(() => {
    TechnologyNews();
  }, []);

  return (
    <>
      {isLoading ? (
        <p className="loading">Loading...</p> // Display loading message while data is being fetched
      ) : (
        <div className="MainDiv">
          {MyTechNews.map((element, index) => {
            return (
              <div className="card" key={index}>
                <img
                  src={
                    element.urlToImage == null
                      ? "https://feeds.abplive.com/onecms/images/uploaded-images/2024/06/21/74f381b65a18908e6d2aa2f1252a9bf41718993653575295_original.png?impolicy=abp_cdn&imwidth=1200"
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

export default Technical;
