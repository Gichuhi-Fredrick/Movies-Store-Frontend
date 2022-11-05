import React from "react";
import "./Movie.css";

export default function Movie({ rating, title, date, overview, image }) {
  return (
    <div className="movie">
      <div>
        <h3>{title}</h3>
      </div>
      <div className="image">
        <img
          // className="image"
          src={`https://image.tmdb.org/t/p/w300/${image}`}
          alt="poster"
        />
      </div>
      <div className="overview">
        <p>{overview}.</p>
      </div>
      <div className="date">
        <span>Release date: {date}</span>
        <span>Rating: {rating}</span>
      </div>
    </div>
  );
}
