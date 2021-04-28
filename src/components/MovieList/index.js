import React, { Component } from "react";

export default class index extends Component {
  
  render() {
    return (
      <div className="row" style={{margin: "5px"}}>
        {this.props.movie.map((movie) => (
          <div className="col-md-4 col-sm-6" key={movie.id}>
            <div className="card mb-4 shadow-sm">
              <img src={movie.img} className="card-img-top" alt="img1"/>
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text" style={{height:"200px", width:"auto", overflow:"auto"}}>{movie.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn btn-md btn-outline-danger"
                    onClick={(e) => this.props.deleteMovieProps(movie)}
                  >
                    Delete
                  </button>
                  <h2 style={{fontSize:"1.5em"}}>
                    <span className="badge  bg-info">{movie.raiting}</span>
                    <span className="badge  bg-warning text-white">en-tr</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
