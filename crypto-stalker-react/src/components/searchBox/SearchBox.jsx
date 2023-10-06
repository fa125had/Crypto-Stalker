const SearchBox = ({ searchQuery, setSearchQuery }) => {
  const handleChange = ({ target }) => {
    setSearchQuery(target.value);
  };
  
  return (
    <div className="searchBox-container">
      <input
        type="text"
        value={searchQuery}
        className="searchBox"
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
