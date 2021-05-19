import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Book from "./Book";

const BookList = ({ loading = false, books = [], count = 0, sort = "asc" }) => {
  return (
    <div>
      {loading && (
        <Spinner className="spinner" animation="border" variant="secondary" />
      )}
      {books.length > 0 && (
        <p className="subtitle">
          Showing <strong>{books.length}</strong> of <strong>{count}</strong>{" "}
          books.
        </p>
      )}
      <div className="grid-container">
        {books.map((book) => {
          return <Book key={book.key} book={book} />;
        })}
      </div>
    </div>
  );
};
export default BookList;
