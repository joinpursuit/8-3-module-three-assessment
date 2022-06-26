import React from "react";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      titles: [],
      films: "",
      dates: "",
      description: "",
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films/")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        this.setState({
          titles: json,
        });
        // console.log(json);
      });
  }

  dropDownInfo = (event) => {
    const { value } = event.target;
    this.setState({ films: value });

    for (let info of this.state.titles) {
      if (info.title === value) {
        this.setState({
          dates: info.release_date,
          description: info.description,
        });
      } else if (!value) {
        this.setState({
          dates: "",
          description: "",
        });
      }
    }
  };

  render() {
    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select onChange={this.dropDownInfo} id="titles">
          <option></option>
          {this.state.titles.map((obj) => {
            return (
              <option key={obj.title} titles={obj.id}>
                {obj.title}
              </option>
            );
          })}
        </select>
        <div className="moviesBox">
          <h1>Title: {this.state.films}</h1>
          <h2>Release Date: {this.state.dates}</h2>
          <h3>Description: {this.state.description}</h3>
        </div>
      </div>
    );
  }
}
export default Movies;
