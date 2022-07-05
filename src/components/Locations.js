import React from "react";
import LocationsView from "./LocationsView";

import axios from "axios";

class Locations extends React.Component {
  constructor () {
    super ();
    this.state = {
      locationsList: [],
      location: '',
      isVisible: false,
      display: 'none',
      sortBy: '',
    }
  }

  getAPILocations = () => {
    axios.get('https://ghibliapi.herokuapp.com/locations').then((result) => {
      this.setState({ locationsList: result.data });
    });
  }

  componentDidMount() {
    this.getAPILocations();  
  }
  
  handleShowLocations = (event) => {
    event.preventDefault();
    if(this.state.isVisible) {
      this.setState({isVisible: false})
      this.setState({display: 'none'})
    } else {
      this.setState({isVisible: true})
      this.setState({display: 'inline-block'})
    }
  }

  handleSort = (sortBy, event) => {
    event.preventDefault();
    // >> Getting the locations data sorted by params
    const sortedArray = (this.state.locationsList).sort((a, b) => {
      return (a[sortBy]).localeCompare(b[sortBy]);
    });
    this.setState({locationsList: sortedArray})
  }

  render () {
    return (
      <section className="locations container">
        <div className="layout">
          <h1>List of Locations</h1>
          <div className="form__container">
            <form
            >
            <div className="form__control">
              <button
                onClick={this.handleShowLocations}
              >
                {(this.state.isVisible) ? 'Hide' : 'Show' } Locations
              </button>
              {(this.state.isVisible) ? 
              <>
              <button
                onClick={(e) => this.handleSort('name', e)}
              >
                Sort by Name
              </button> 
              <button
                onClick={(e) => this.handleSort('climate', e)}
              >
                Sort by Climate
              </button> 
              <button
                onClick={(e) => this.handleSort('terrain', e)}
              >
                Sort by Terrain
              </button>
              </>
              : null 
              }
            </div>
            </form>
          </div>
        {(this.state.isVisible) ? 
          <>
            <LocationsView 
              locations={this.state.locationsList} 
            />
          </>
          : null
        }
        </div>
      </section>
    )
  }
}

export default Locations;