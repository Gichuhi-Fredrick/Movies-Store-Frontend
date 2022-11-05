import React, { useState } from "react";
import Search from "./Search";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  async function searchMovies(e) {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:4000/searchMovie/?query=${query}`
      );
      const json = await res.json();

      setMovies(json.data.results);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Search
        query={query}
        movies={movies}
        setQuery={setQuery}
        searchMovies={searchMovies}
      />
    </>
  );
}
