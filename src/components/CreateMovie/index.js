import serialize from "form-serialize";
import React, { Component } from "react";


export default class index extends Component {
  
  handleFormSubmit = (e) => {
    e.preventDefault();

    const newMovie = serialize(e.target, { hash: true });
    this.props.onAddMovie(newMovie);
  };

  render() {
    return (
      <div className="container">
        <div className="row" style={{width:"100%"}}>
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
          <input
            id="disabledInput"
            className="form-control"
            type="text"
            placeholder="Fill The Form To Add A Movie.."
            disabled
          />
          <div className="form-row">
            <div className="form-group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Raiting</label>
              <input type="text" className="form-control" name="raiting" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image</label>
              <input type="text" className="form-control" name="img" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                className="form-control"
                name="description"
                rows="5"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-danger btn-block"
            value="Add Movie"
            onClick={this.handleClick}
          >Create</button>
        </form>
        </div>
      </div>
    );
  }
}
