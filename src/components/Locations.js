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
    }
  }

  componentDidMount() {
    axios.get('https://ghibliapi.herokuapp.com/locations').then((result) => {
      this.setState({ locationsList: result.data });
    });
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

  handleSortByName = (event) => {
    event.preventDefault();
    const sortByName = (this.state.locationsList).sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({locationsList: sortByName})
  }

  handleSortByClimate = (event) => {
    event.preventDefault();
    const sortByClimate = (this.state.locationsList).sort((a, b) => {
      return a.climate.localeCompare(b.climate);
    });
    this.setState({locationsList: sortByClimate})
  }

  handleSortByTerrain = (event) => {
    event.preventDefault();
    const sortByTerrain = (this.state.locationsList).sort((a, b) => {
      return a.terrain.localeCompare(b.terrain);
    });
    this.setState({locationsList: sortByTerrain})
  }

  render () {
    return (
      <section className="locations container">
        <section className="layout">
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
                onClick={this.handleSortByName}
              >
                Sort by Name
              </button> 
              <button
                onClick={this.handleSortByClimate}
              >
                Sort by Climate
              </button> 
              <button
                onClick={this.handleSortByTerrain}
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
        </section>
      </section>
    )
  }
}

export default Locations;