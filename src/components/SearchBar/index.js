import React, { Component } from "react";

export default class index extends Component {

  state={
    open : false,
  }

  searchHeandle = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="row" style={{ margin: "20px" }}>
        <div className="col-sm-10">
          <input
            onSubmit={this.searchHeandle}
            onChange={this.props.searchMovieProps}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-success" type="submit">
            Create 
          </button>
        </div>
      </div>
    );
  }
}
