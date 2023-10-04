import React, { useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };
  return (
    <div className="searchBox-container">
      <input
        type="text"
        value={query}
        className="searchBox"
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
