import React from "react";
import Movie from "../Movie/Movie";
import "./Search.css";

export default function Search({ searchMovies, query, setQuery, movies }) {
  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movies
        </label>
        <input
          type="text"
          className="input"
          name="query"
          placeholder="Enter a movie to search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list movie-contianer">
        {movies.map((movie, id) => {
          return (
            <Movie
              className="movie"
              key={id}
              overview={movie.overview}
              image={movie.poster_path}
              title={movie.title}
              date={movie.release_date}
              rating={movie.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}
