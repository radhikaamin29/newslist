import React, { useState, useEffect } from "react";
import "../styles/newsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

/* https://newsapi.org/v2/top-headlines?country=us&apiKey=634c025c124f4790a919fb1e0a11935e */

export const NewsList = ({ value1 }) => {
  const [news, setNews] = useState([]);
  const [hasErrors, setErrors] = useState(false);

  /* Function to fetch data */
  async function fetchData(value1) {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${value1.id}&apiKey=634c025c124f4790a919fb1e0a11935e`
    );
    res
      .json()
      .then((res) => setNews(res.articles))
      .catch((err) => setErrors(err));
  }

  /* Calling function  */
  useEffect(() => {
    fetchData(value1);
  }, [value1]);

  /* Date formate function */
  const formatDate = (s) =>
    new Date(s).toLocaleDateString(undefined, { dateStyle: "long" });

  console.log("News: ", news);
  return (
    <div style={{ marginTop: "40px" }}>
      {news.map((article) => (
        <div
          className="item"
          style={{
            margin: "20px 100px 20px 100px",
            padding: "20px",
            display: "flex",
          }}
        >
          {/*  Content */}
          <div style={{ width: "75%" }}>
            <div>
              <a href={article.url}>
                <h2 style={{ fontSize: "20px" }}> {article.title} </h2>
              </a>
            </div>
            <div className="description">{article.description}</div>
            <br />
            <div className="description">{article.content}</div>
            <br />
            <div className="meta">
              <span style={{ marginRight: "30px" }}>
                Author: {article.author}
              </span>
              <span style={{ marginRight: "30px" }}>
                Published Date: {formatDate(article.publishedAt)}
              </span>
              <span>Source: {article.source.name}</span>
              <button className="btn">
                <FontAwesomeIcon color="grey" icon={faStar} size="lg" />
              </button>
            </div>
          </div>
          {/* Image */}
          <div
            style={{
              display: "flex",
            }}
          >
            <img
              src={article.urlToImage}
              alt="article_image"
              ß
              className="image"
            />

            {/*  <i class="fa fa-star" aria-hidden="true"></i> */}
          </div>
        </div>
      ))}
    </div>
  );
};
