import Search from "./Search.jsx";
import SearchResult from "./SearchResult.jsx";
import WordOfTheDay from "./WordOfTheDay.jsx";

function Homepage() {
  return (
    <main className="homepage">
      <h1>Homepage</h1>
      <Search />

      <WordOfTheDay />
    </main>
  );
}

export default Homepage;
