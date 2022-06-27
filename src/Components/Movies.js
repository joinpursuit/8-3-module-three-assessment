import React from 'react';
import "./Movies.css"
class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: '',
        };
    }

    handleMovieSelection = (event) => {
        this.setState({ selectedMovie: event.target.value });
    };

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films`)
            .then((response) => response.json())

            .then((response) => this.setState({ movies: response }));
    }

    render() {
        const { movies, selectedMovie } = this.state;
        const movieTitles = movies.map((movie) => {
            return (
                <option className='movies' key={movie.id}>
                    {movie.title}
                </option>
            );
        });

        const userSelects = movies.find((movie) => movie.title === selectedMovie);

        return (
            <div className='movies'>
                <em><h1>Select a Movie</h1></em>
                <select onChange={this.handleMovieSelection}>
                    <option></option>
                    {movieTitles}
                </select>
                <div>
                    {userSelects ? (
                        <div className='movies-deets'>
                            <h2>{userSelects.title}</h2>
                            <p>Release Date: {userSelects.release_date}</p>
                            <p>Description: {userSelects.description}</p>
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default Movies;
