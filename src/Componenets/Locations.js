import React, { Component } from "react";

export default class Locations extends Component {
  constructor() {
    super();
    this.state = {
      apiLocations: [],
      isShowing: false,
      text: "Show Locations",
      buttonDisplay: false,
    };
  }

  componentDidMount = () => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          apiLocations: data,
        });
      });
  };
  // buttonToggler = () => {
  //   this.setState({ buttonDisplay: true });
  // };

  // buttonDisplayHandler = () => {
  //   if (this.state.isShowing === true && this.state.text === "HIDE LOCATIONS") {
  //     this.setState({
  //       buttonDisplay: true,
  //     });
  //   }
  // };

  showHandler = () => {
    if (this.state.isShowing === false) {
      this.setState({
        isShowing: true,
      });
    } else {
      this.setState({
        isShowing: false,
      });
    }
  };

  changeText = (text) => {
    if (this.state.text === "Show Locations") {
      this.setState({
        text: "HIDE LOCATIONS",
      });
    } else {
      this.setState({
        text: "Show Locations",
      });
    }
  };

  render() {
    // const buttonDisplay = this.state.isShowing.value
    const locationDisplay = this.state.apiLocations.map((selected, i) => {
      return (
        <ul key={i}>
          <ul>
            <strong>Name:</strong>
            {selected.name}
          </ul>
          <ul>
            <strong>Climate:</strong>
            {selected.climate}
          </ul>
          <ul>
            <strong>Terrain:</strong>
            {selected.terrain}
          </ul>
        </ul>
      );
    });

    return (
      <div className=".locations">
        <div className="container">
          <h1>
            <center>List of Locations</center>
          </h1>
          <button
            onClick={() => {
              this.showHandler();
              this.changeText("Show Locations");
              this.buttonToggler();
            }}
          >
            {this.state.text}
          </button>
          <div className="wrapper">
            <button>SORT BY NAME</button>
            <button>SORT BY CLIMATE</button>
            <button>SORT BY TERRAIN</button>
          </div>
          {this.state.showButton ? <div></div> : null}
          {this.state.isShowing ? locationDisplay : ""}
        </div>
      </div>
    );
  }
}
