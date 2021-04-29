import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class index extends Component {
  state = {
    name: "",
    raiting: "",
    description: "",
    img: "",
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const movie = await axios.get(`http://localhost:3001/movies/${id}`);
	console.log(movie);
    this.setState({
      name: movie.data.name,
      raiting: movie.data.raiting,
      description: movie.data.description,
      img: movie.data.img,
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

	const { name, raiting, description, img } = this.state;
	const id = this.props.match.params.id;

	const updatedMovie = {
		name: name,
		raiting: raiting,
		description: description,
		img: img  
	} 

	this.props.onEditMovie(id, updatedMovie);
  };

  render() {
    return (
      <div className="container">
        <div className="row" style={{ width: "100%" }}>
          <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <input
              id="disabledInput"
              className="form-control"
              type="text"
              placeholder="EDIT The Form To Add A Movie.."
              disabled
            />
            <div className="form-row">
              <div className="form-group col-md-10">
                <label htmlFor="inputName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputRating">Raiting</label>
                <input
                  type="text"
                  className="form-control"
                  name="raiting"
                  value={this.state.raiting}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="inputImage">Image</label>
                <input
                  type="text"
                  className="form-control"
                  name="img"
                  value={this.state.img}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="overviewTextarea">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="5"
                  value={this.state.description}
                  onChange={this.onInputChange}
                ></textarea>
              </div>
            </div>
            <Link
              type="submit"
              className="btn btn-danger btn-block"
              value="Add Movie"
              onClick={this.handleClick}
              onChange={this.onInputChange}
			  to={"/"}
            >
              Edit Movie
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
