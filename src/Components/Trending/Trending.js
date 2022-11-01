import React, { useContext } from "react";
import Movie from "../Movie/Movie";
import { DataContext } from "../../App";

export default function Trending() {
  const movieData = useContext(DataContext);
  return (
    <div>
      <h1>Trending</h1>
      {movieData.map((data, id) => {
        return (
          <Movie
            key={id}
            overview={data.overview}
            image={data.poster_path}
            title={data.title}
            date={data.release_date}
            rating={data.vote_average}
          />
        );
      })}
      <Movie />
    </div>
  );
}
