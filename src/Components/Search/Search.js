import React, { useState } from "react";
import Movie from "../Movie/Movie";

export default function SearchMovies() {
  // Track states: input query, movies
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  async function searchMovies(e) {
    // prevent page reload
    e.preventDefault();

    try {
      // use fetch api if you're making a GET request to return a promise
      const res = await fetch("http://localhost:4000/serach", {
        mode: "cors",
      });
      const json = res.json();
      // update movies
      setMovies(json.data.results);
    } catch (err) {
      console.error(err);
    }
  }

  console.log(movies);
  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
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
      <div className="card-list">
        {/* {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))} */}
      </div>
    </>
  );
}
