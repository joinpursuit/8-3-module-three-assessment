import React from 'react'
import LocationDetail from './LocationDetail'

class Locations extends React.Component {
  constructor() {
    super()
    this.state = {
      showButton: true,
      locations: [],
    }
  }

  componentDidMount() {
    let Base_Url = 'https://ghibliapi.herokuapp.com/'
    let locations = 'locations'
    fetch(`${Base_Url}${locations}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ locations: json })
      })

      .catch((error) => console.log(error))
  }

  toggle = () => this.setState({ show: !this.state.show })

  handleSortName = () => {
    let sorted = this.state.locations.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
    this.setState({
      sorted,
    })
  }

  handleSortClimate = () => {
    let sorted = this.state.locations.sort((a, b) => {
      if (a.climate > b.climate) {
        return 1
      }
      if (a.climate < b.climate) {
        return -1
      }
      return 0
    })
    this.setState({
      sorted,
    })
  }

  handleSortTerrain = () => {
    let sorted = this.state.locations.sort((a, b) => {
      if (a.terrain > b.terrain) {
        return 1
      }
      if (a.terrain < b.terrain) {
        return -1
      }
      return 0
    })
    this.setState({
      sorted,
    })
  }

  render() {
    return (
      <div className='locations'>
        <button onClick={() => this.toggle()}>
          {this.state.show ? 'Show Locations' : 'Hide Locations'}
        </button>
        {this.state.show && (
          <section>
            <button onClick={this.handleSortName}>Sort By Name</button>
            <button onClick={this.handleSortClimate}>Sort By Climate</button>
            <button onClick={this.handleSortTerrain}>Sort By Terrain</button>
            <LocationDetail locationData={this.state.locations} />
          </section>
        )}
      </div>
    )
  }
}

export default Locations
