import React, { Component } from "react";
import SearchBar from "../SearchBar";
import MovieList from "../MovieList";
import CreateMovie from "../CreateMovie";
import EditMovie from "../EditMovie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
// require("dotenv").config();

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      searchQuery: "",
    };
  }

  async componentDidMount() {
    const response = await axios.get(`http://localhost:3001/movies`);
    this.setState({
      movies: response.data,
    });
  }

  deleteMovie = async (movie) => {
    await axios.delete(`http://localhost:3001/movies/${movie.id}`);
    const newMovie = this.state.movies.filter((i) => i.id !== movie.id);

    this.setState({
      movies: newMovie,
    });
  };

  searchMovie = (e) => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  addMovie = async (movie) => {
    await axios.post(`http://localhost:3001/movies/`, movie);
    this.setState(state => ({
      movies: this.state.movies.concat([movie])
    }))
  }
  
  editMovie = async (id, updatedMovie) => {
    await axios.put(`http://localhost:3001/movies/${id}`, updatedMovie);
  }

  render() {
    let search = this.state.movies.filter(
      (i) =>
        i.name.toLocaleLowerCase().indexOf(this.state.searchQuery.toLocaleLowerCase()) !== -1)
        .sort((a,b) => a.id < b.id ? 1 : -1)
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

                <Route path="/create" render={({history}) => (
                    <CreateMovie onAddMovie={(movie) => {this.addMovie(movie) 
                      history.push("/")
                    }
                  }/>
                )}></Route>
                
                <Route path="/edit/:id" render={(props) => (
                  <EditMovie 
                    {...props} // params hatasini yok etmek
                    onEditMovie={(id,updatedMovie) => {this.editMovie(id,updatedMovie)}}/>
                )}></Route>

              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
