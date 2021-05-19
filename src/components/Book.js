import React from "react";

const Book = ({ book }) => {
  const { title, author_name, first_publish_year, cover_i, key } = book;

  return (
    <div className="card">
      <div className="card-body d-flex flex-column">
        {/* <img src={cover_i} alt={title} /> */}
        <h5 className="card-title">
          <strong>{title}</strong>
        </h5>
        {author_name}
        <p className="card-text">First published: {first_publish_year}</p>
        <button className="btn btn-primary mt-auto">
          <a href={`https://openlibrary.org${key}`}>Show at Open Library</a>
        </button>
      </div>
    </div>
  );
};
export default Book;
