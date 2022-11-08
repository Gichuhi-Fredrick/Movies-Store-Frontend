import React from "react";
import "./Movie.css";

export default function Movie({ rating, title, date, overview, image }) {
  return (
    <div className="movie">
      <div>
        <h3>{title}</h3>
      </div>
      <div className="image"></div>
      <img
        className="image"
        src={`https://image.tmdb.org/t/p/w300/${image}`}
        alt="poster"
      />
      <div className="overview">
        <p>{overview}</p>
      </div>
      <div className="date-rate">
        <div>
          <small className="date">Release date: {date}</small>
        </div>
        <div>
          {" "}
          <small className="rating">Rating: {rating}</small>
        </div>
      </div>
    </div>
  );
}
