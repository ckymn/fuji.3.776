import React, { Component } from "react";
import SearchBar from "../SearchBar";
import MovieList from "../MovieList";

export default class index extends Component {
  render() {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <div className="row">
            <div className="d-flex flex-column">
                <h1>Movies Porjects</h1>
                <SearchBar />
                <MovieList />
            </div>
        </div>
      </div>
    );
  }
}
