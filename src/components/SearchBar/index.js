import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class index extends Component {

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
          <Link to="/create" className="btn btn-success" type="submit">
            Create 
          </Link>
        </div>
      </div>
    );
  }
}
