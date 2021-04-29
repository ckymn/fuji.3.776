import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class index extends Component {

  maxDescription = (string, maxLength) => {
    if(!string) return "...";
    if(string.length <= maxLength) return string;
    return `${string.substring(0,maxLength)}...`
  }
  
  render() {
    return (
      <div className="row" style={{margin: "5px"}}>
        {this.props.movie.map((movie,i) => (
          <div className="col-md-4 col-sm-6" key={i}>
            <div className="card mb-4 shadow-sm">
              <img src={movie.img} className="card-img-top" alt="img1"/>
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text" style={{height:"150px", width:"auto"}}>
                  {
                    this.maxDescription(movie.description,90)
                  }
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn btn-md btn-outline-danger"
                    onClick={(e) => this.props.deleteMovieProps(movie)}
                  >
                    Delete
                  </button>
                  <Link 
                    type="button"
                    className="btn btn-md btn-outline-primary"  
                    to={`/edit/${movie.id}`}
                  >Edit</Link>
                    <span className="badge  bg-info">{movie.raiting}</span>
                    <span className="badge  bg-warning text-white">en-tr</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
