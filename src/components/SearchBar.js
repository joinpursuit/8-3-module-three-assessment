import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  updateSearch = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ search: "" });
  };

  render() {
    console.log(this.state.search);
    const { foundInfo } = this.props;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="search"
            onChange={(event) => this.updateSearch(event)}
            value={this.state.search}
            autoComplete="off"
          />
          <button onClick={() => foundInfo(this.state.search)} type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
