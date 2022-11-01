import React from "react";

export default function Movie({ rating, title, date, overview, image }) {
  return (
    <div className="movie">
      <div>
        <h2>{title}</h2>
      </div>
      <div className="backdrop">
        <img src={`https://image.tmdb.org/t/p/w300/${image}`} alt="poster" />
      </div>
      <div className="overview">{overview}.</div>
      <div className="date">
        <span>{date}</span>
        <span>{rating}</span>
      </div>
    </div>
  );
}
