import React, { Component } from "react";
import "./App.css";
import * as user from "./apias/openLibrary";
import BooksList from "./components/BookList";
import Search from "./components/Search.js";

class App extends Component {
  state = { books: [], isFetching: false, query: "", numFound: 0 };

  onSearch = async (e) => {
    e.preventDefault();
    this.setState({ isFetching: true, books: [] });
    const result = await user.openLibrary(this.state.query);
    const { docs = [], numFound = 0 } = result;
    this.setState({ books: docs, isFetching: false, numFound });
  };

  onQueryChange = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title has-text-centered">Book Search Tool</h1>

        <Search
          onQueryChange={this.onQueryChange}
          onSearch={this.onSearch}
          query={this.state.query}
        />
        <BooksList
          loading={this.state.isFetching}
          books={this.state.books}
          count={this.state.numFound}
        />
      </div>
    );
  }
}

export default App;
