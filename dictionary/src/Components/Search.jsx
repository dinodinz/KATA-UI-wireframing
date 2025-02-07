import { useState } from "react";
import dictionary from "./../../dictionary.json";
import SearchResult from "./SearchResult.jsx";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResult(() => {
      let finalResult = searchInput.toUpperCase();
      return dictionary[finalResult];
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-bar"></label>
        <input
          type="text"
          id="search-bar"
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
        ></input>
        <button type="submit">Search</button>
      </form>
      <SearchResult result={searchResult} />
    </>
  );
}

export default Search;
