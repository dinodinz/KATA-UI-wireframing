function SearchResult({ result, searchInput }) {
  const copySearchInput = searchInput;
  return (
    <section className="search-result">
      <h2>{copySearchInput}</h2>
      <h3>{result}</h3>
    </section>
  );
}

export default SearchResult;
