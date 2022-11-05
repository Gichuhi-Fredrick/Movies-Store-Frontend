import React, { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Movies from "./Components/Trending/Movies";
import SearchMovies from "./Components/Search/SearchMovie";
import Series from "./Components/Trending/Series";
import "./App.css";

export const DataContext = createContext();

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/movies", {
        mode: "cors",
      });
      const json = await response.json();
      setData(json.data.results);
    };

    fetchData().catch(console.error);
  }, []);

  console.log(data);
  return (
    <div className="App">
      <Nav />
      <SearchMovies />
      <h2>Trending</h2>
      <Routes>
        <Route
          path="/"
          element={
            <DataContext.Provider value={data}>
              <Movies />
            </DataContext.Provider>
          }
        />
        <Route path="/series" element={<Series />} />
      </Routes>
    </div>
  );
}
