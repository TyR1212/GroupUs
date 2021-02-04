import React from "react";

const SearchInput = ({ setSearchInput }) => {
  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div id="search-input">
      <input
        placeholder="Search"
        onChange={searchInputHandler}
        type="search"
      ></input>
    </div>
  );
};

export default SearchInput;
