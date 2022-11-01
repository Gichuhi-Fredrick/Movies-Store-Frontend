import React, { useEffect, useState, createContext } from "react";
import Trending from "./Components/Trending/Trending";
import SearchMovies from "./Components/Search/Search";

export const DataContext = createContext();

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const response = await fetch("http://localhost:4000/movies", {
        mode: "cors",
      });
      // convert the data to json
      const json = await response.json();
      // set state with the result
      setData(json.data.results);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  // data.forEach((d) => console.log(d));

  return (
    <div>
      {/* <SearchMovies /> */}
      <DataContext.Provider value={data}>
        <Trending />
      </DataContext.Provider>
    </div>
  );
}
