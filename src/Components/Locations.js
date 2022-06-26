import React from 'react'
import LocationDetail from './LocationDetail'

class Locations extends React.Component {
  constructor() {
    super()
    this.state = {
      showButton: false,
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

  handleShow = () => {
    this.setState({ showButton: true })
  }

  handleHide = () => {
    this.setState({ showButton: false })
  }
  handleSort = () => {
    // console.log("ldhjfkld")

    let locationName = this.state.locations.map((location) => location.name)

    locationName.sort((a, b) => {
      // let nameA = a.toUpperCase()
      // let nameB = b.toUpperCase()

      if (a > b) {
        return 1
      }
      if (a < b) {
        return -1
      }
      return 0
    })
    console.log(locationName)
  }

  render() {
    return (
      <div className='locations'>
        <h2>List of Locations</h2>
        {this.state.showButton ? (
          <div>
            <button onClick={this.handleHide}>Hide Locations</button>
            <button onClick={this.handleSort}>Sort By Name</button>
            <button>Sort By Climate</button>
            <button>Sort By Terrain</button>
            <LocationDetail
              locations={this.state.locations}
              sortName={this.handleSort}
            />
          </div>
        ) : (
          <div>
            <button onClick={() => this.handleShow()}>Show Locations</button>
          </div>
        )}
      </div>
    )
  }
}

export default Locations
