import React from "react";
import MovieInfo from "./MovieInfo";

import axios from "axios";

class Movies extends React.Component {
  constructor () {
    super ();
    this.state = {
      movieList: [],
      movieSelected: '',
      isSelected: false,
    }
  }

  componentDidMount() {
    axios.get('https://ghibliapi.herokuapp.com/films').then((result) => {
      this.setState({ movieList: result.data });
    });
  }
  
  handleChange = (event) => {
    const {value} = event.target;
    //
    if(value !== '') {
      this.setState({movieSelected: value});
      this.setState({isSelected: true});
    } else {
      this.setState({movieSelected: ''});
      this.setState({isSelected: false});  
    }
  };

  render () {
    return (
      <section className="movies container">
        <div className="layout">
        <h1>Movies</h1>
        <div className="form__container">
          <form >
            <div className="form__control">
              <label >Select a Movie</label>
              <select
                id="select"
                value={this.state.movieSelected}
                onChange={this.handleChange}
              >
                <option key='0' value='' ></option>
                {this.state.movieList.map(movie =>  {
                  return  <option key={movie.id} 
                                    value={movie.id}>{movie.title}
                          </option>  
                })}  
              </select>
            </div>
          </form>
        </div>
        {(this.state.isSelected) ? 
          <div className="movie__info">
            <MovieInfo 
              movieList={this.state.movieList} 
              movieSelected={this.state.movieSelected}
            />
          </div>
          : null
        }
        </div>
      </section>
    )
  }
}

export default Movies;