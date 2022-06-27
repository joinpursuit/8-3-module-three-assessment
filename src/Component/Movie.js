import React from "react";
import { Component } from "react";
import "../../App.css";


class Movies extends Component{
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }
fetchFilms = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((data)=>{
            this.setState({
                movies: data,
            })
        });
};
componentDidMount(){
    this.fetchFilms();
};
    render () {
        let showMovieArr = this.state.movies.map((movies)=>{
            return (
                <div className="movies-card">
                    <ul>
                       <li>Title: {movies.title}</li>
                       <li>Release Date: {movies.releasedate}</li>
                       <li>Description: {movies.description} </li>
                    </ul>
                </div>
            )
        })
        return (
          <div className='movies' >
              <h1>Select a Movie</h1>
              <option>

              </option>
          </div>   
        )
    }
}
export default Movies;