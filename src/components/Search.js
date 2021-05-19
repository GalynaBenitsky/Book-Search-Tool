import React from "react";

const Search = ({ query, onQueryChange, onSearch }) => {
  return (
    <div className="container">
      <form className="book-search" onSubmit={onSearch}>
        <input
          name="title"
          className="book-input"
          type="text"
          defaultValue={query}
          onChange={onQueryChange}
          placeholder="Search"
        />

        <button type="submit" className="btn">
          Let's find a Book
        </button>
      </form>
    </div>
  );
};

export default Search;
