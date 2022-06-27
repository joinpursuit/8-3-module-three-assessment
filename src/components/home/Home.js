import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  render() {
    return (
      <div>
        <body>
          <h1>Welcome to GhibliApp</h1>
        </body>
      </div>
    );
  }
}
