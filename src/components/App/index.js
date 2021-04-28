import React, { Component } from "react";
import SearchBar from "../SearchBar";
import MovieList from "../MovieList";
import CreateMovie from "../CreateMovie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
// require("dotenv").config();

export default class index extends Component {
  constructor(props) {
    super(props);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      movies: [],
      searchQuery: "",
    };
  }

  async componentDidMount() {
    // const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`);
    const response = await axios.get(`http://localhost:3001/movies`);
    this.setState({
      movies: response.data,
    });
  }

  deleteMovie = (movie) => {
    axios.delete(`http://localhost:3001/movies/${movie.id}`);
    const newMovie = this.state.movies.filter((i) => i.id !== movie.id);

    this.setState({
      movies: newMovie,
    });
  };

  searchMovie = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  render() {
    let search = this.state.movies.filter(
      (i) =>
        i.name
          .toLocaleLowerCase()
          .indexOf(this.state.searchQuery.toLocaleLowerCase()) !== -1
    );
    return (
      <Router>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="row">
            <div className="d-flex flex-column">
              <Switch>

                <Route
                  path="/"
                  exact
                  render={() => (
                    <React.Fragment>
                      <h1 style={{ fontFamily: "'Abril Fatface', cursive" }}>
                        FUJI.3.776
                      </h1>
                      <SearchBar searchMovieProps={this.searchMovie} />
                      <MovieList
                        movie={search}
                        deleteMovieProps={this.deleteMovie}
                      />
                    </React.Fragment>
                  )}
                ></Route>

                <Route path="/add" component={CreateMovie}></Route>

              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
