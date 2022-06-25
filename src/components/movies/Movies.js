import React, { Component } from "react";

export default class Movies extends Component {
  render() {
    return (
      <div>
        <section>
          <h2>Select a movie</h2>
          <select name="Select a movie" id="select">
            <option value=""></option>
          </select>
        </section>
      </div>
    );
  }
}
