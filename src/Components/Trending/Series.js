import React, { useState, useEffect } from "react";
import Movie from "../Movie/Movie";
import SearchSeries from "../Search/SearchSeries";
import "./Trending.css";

export default function TrendingMovies() {
  const [seriesData, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/trendingSeries", {
        mode: "cors",
      });
      const json = await response.json();
      setData(json.data.results);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      {/* <SearchSeries /> */}
      <div className="movie-container">
        {seriesData.map((data, id) => {
          return (
            <Movie
              className="movie"
              key={id}
              image={data.poster_path}
              title={data.original_name}
              date={data.first_air_date}
              rating={data.vote_average.toFixed(1)}
            />
          );
        })}
      </div>
    </div>
  );
}
