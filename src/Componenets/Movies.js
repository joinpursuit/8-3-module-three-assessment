import React, { Component } from "react";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      apiData: [],
      movieCategory: [],
    };
  }

  componentDidMount = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          apiData: data,
        });
      });
  };

  selectorHandle = (e) => {
    this.setState({
      movieCategory: e.target.value,
    });
  };

  render() {
    let titles = this.state.apiData.map((item) => {
      return <option key={item.id}>{item.title}</option>;
    });

    const selectedMovie = this.state.apiData.map((selected, i) => {
      if (this.state.movieCategory === selected.title) {
        return (
          <div>
            <h3>Title:</h3>
            <h3 key={i}>{selected.title}</h3>
            <h3>Released Date:</h3>
            <p>{selected.release_date}</p>
            <h3>Description</h3>
            <p>{selected.description}</p>
          </div>
        );
      }
    });

    return (
      <div className="container">
        <center>
          <h1>Select A Movie</h1>
          <form>
            <select onChange={this.selectorHandle}>
              <option>{""}</option>
              {titles}
            </select>
          </form>

          {selectedMovie}
        </center>
      </div>
    );
  }
}
