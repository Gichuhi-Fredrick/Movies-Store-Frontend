import React, { useState } from "react";
import Search from "./Search";

export default function SearchSeries() {
  const [query, setQuery] = useState("");
  const [series, setSeries] = useState([]);

  async function searchSeries(e) {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:4000/searchSeries/?query=${query}`
      );
      const json = await res.json();

      setSeries(json.data.results);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <Search
        movieSearch={searchSeries}
        query={query}
        setQuery={setQuery}
        movies={series}
      />
    </div>
  );
}
