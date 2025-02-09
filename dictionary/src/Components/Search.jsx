import { useState } from "react";
import dictionary from "./../../dictionary.json";
import WordOfTheDay from "./WordOfTheDay.jsx";
import SearchResult from "./SearchResult.jsx";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [isSubmitted, setisSubmitted] = useState(false);
  const [submitText, setSubmitText] = useState("Search");
  const [errorClass, setErrorClass] = useState("error-msg-hidden");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (submitText === "Search") {
      setisSubmitted(true);
      setSubmitText("Clear");
      setSearchResult(() => {
        let finalResult = searchInput.toUpperCase();
        if (dictionary[finalResult] === undefined) {
          console.log("DOES NOT EXIST");
          setErrorClass("error-msg");
          setisSubmitted(false);
          setSubmitText("Search");
          setSearchResult("");
          setSubmitText("Clear");
        }
        return dictionary[finalResult];
      });
    } else {
      setisSubmitted(false);
      setSubmitText("Search");
      setSearchResult("");
      setSearchInput("");
      setErrorClass("error-msg-hidden");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <h2>type a word</h2>
        <label htmlFor="search-bar"></label>
        <input
          type="text"
          id="search-bar"
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
        ></input>
        <p className={errorClass}>Word doesnt exist</p>
        <button className="submit-button" type="submit">
          {submitText}
        </button>
      </form>
      {isSubmitted === true ? (
        <SearchResult result={searchResult} searchInput={searchInput} />
      ) : (
        <WordOfTheDay />
      )}
    </>
  );
}

export default Search;
