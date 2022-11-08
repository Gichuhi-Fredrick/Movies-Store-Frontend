import React, { useContext } from "react";
import Movie from "../Movie/Movie";
import { DataContext } from "../../App";
import "./Trending.css";

export default function TrendingMovies() {
  const movieData = useContext(DataContext);
  return (
    <div className="movie-container">
      {movieData.map((data, id) => {
        return (
          <Movie
            className="movie"
            key={id}
            image={data.poster_path}
            title={data.title}
            date={data.release_date}
            rating={data.vote_average}
          />
        );
      })}
    </div>
  );
}
