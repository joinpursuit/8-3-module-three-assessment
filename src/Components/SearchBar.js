import { React, Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchInput, handleChange, handleSubmit, fetchPeople } = this.props;

    return (
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <label>
            <div className='wrapper'>
              <input
                type='text'
                id='searchbar'
                placeholder='Search here'
                name='searchbar'
                value={searchInput}
                onChange={handleChange}
              />
              <button className='button' onClick={fetchPeople}>
                Search
              </button>
            </div>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
