import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-10">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                </div>
                <div className="col-sm-2">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </div>
            </div>
        )
    }
}
