import React, { Component } from "react";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      selected: "",
      description: "",
    };
  }

  api = () => {
    fetch("https://ghibliapi.herokuapp.com/films/")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ films: json });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.api();
  }

  select = (event) => {
    this.setState({
      selected: event.target.value,
    });
  };

  render() {
    let { films, selected } = this.state;
    let current = 0;

    let titles = films.map((film) => {
      return <option>{film.title}</option>;
    });

    let chosen = () => {
      return <p>{selected}</p>;
    };

    let information = films.map((film) => {
      if (film.title === selected) {
        return (
          <div key={current++}>
            <p>
              <strong>Release Date:</strong>
              <br />
              {film.release_date}
            </p>
            <p key={film.id}>
              <strong>Description:</strong>
              <br />
              {film.description}
            </p>
          </div>
        );
      }
    });

    return (
      <div className="movies">
        <h2>Select a movie</h2>
        <select name="Select a movie" id="select" onChange={this.select}>
          <option value=""></option>
          {titles}
        </select>
        <section className="description">
          <h3>{chosen()}</h3>
          <div>{information}</div>
        </section>
      </div>
    );
  }
}
