import React, { Component } from "react";

export default class index extends Component {
  state = {
    movies: [
      {
        id: 1,
        name: "Nomadland",
      },
      {
        id: 2,
        name: "The Father",
      },
      {
        id: 3,
        name: "Minari",
      },
    ],
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-4">
          <div className="card mb-4 shadow-sm">
            <img src="https://picsum.photos/id/237/200/200" className="card-img-top" alt="img1"/>
            <div className="card-body">
                <h5 className="card-title">MOVIE oNE</h5>
                <p className="card-text">MOVIE oNE DESCRIPTION</p>
                <div className="d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                    <h2><span className="badge badge-info">9.0</span></h2>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
        <div className="card mb-4 shadow-sm">
            <img src="https://picsum.photos/id/236/200/200" className="card-img-top" alt="img1"/>
            <div className="card-body">
                <h5 className="card-title">MOVIE oNE</h5>
                <p className="card-text">MOVIE oNE DESCRIPTION</p>
                <div className="d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                    <h2><span className="badge badge-info">9.0</span></h2>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
        <div className="card mb-4 shadow-sm">
            <img src="https://picsum.photos/id/55/200/200" className="card-img-top" alt="img1"/>
            <div className="card-body">
                <h5 className="card-title">MOVIE oNE</h5>
                <p className="card-text">MOVIE oNE DESCRIPTION</p>
                <div className="d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                    <h2><span className="badge badge-info">9.0</span></h2>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
