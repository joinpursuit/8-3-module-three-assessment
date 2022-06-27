import React from 'react';

class Locations extends React.Component {
    constructor() {
        super();
        this.state = {
            display: false,
            locations: [],
        };
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/locations`)
            .then((response) => response.json())
            .then((response) => {
                this.setState({ locations: response });
            });
    }

    handleShowAndHide = () => {
        this.setState({ display: !this.state.display });
    };

    sortingName = (response) => {
        const nameSort = response.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });
        this.setState({ locations: nameSort });
    };

    sortingClimate = (response) => {
        const climateSort = response.sort((a, b) => {
            if (a.climate > b.climate) return 1;
            if (a.climate < b.climate) return -1;
            return 0;
        });
        this.setState({ locations: climateSort });
    };

    sortingTerrain = (response) => {
        const terrainSort = response.sort((a, b) => {
            if (a.terrain > b.terrain) return 1;
            if (a.terrain < b.terrain) return -1;
            return 0;
        });
        this.setState({ locations: terrainSort });
    };
    render() {
        const { display, locations } = this.state;
        const mappedLocations = locations.map((location) => {
            return (
                <li>
                    <ul>
                        <li>Name:{location.name}</li>
                        <li>Climate{location.climate}</li>
                        <li>Terrain:{location.terrain}</li>
                    </ul>
                </li>
            );
        });
        return (
            <div className='locations'>
                <h1>List of Locations</h1>
                {display ? (
                    <div>
                        <button onClick={this.handleShowAndHide}>Hide Locations</button>
                        <button onClick={() => this.sortingName(locations)}>
                            Sort by Name
                        </button>
                        <button onClick={() => this.sortingClimate(locations)}>
                            Sort by Climate
                        </button>
                        <button onClick={() => this.sortingTerrain(locations)}>
                            Sort by Terrain
                        </button>
                    </div>
                ) : (
                    <button onClick={this.handleShowAndHide}>Show Locations</button>
                )}
                <ul> {this.state.display ? mappedLocations : null} </ul>
            </div>
        );
    }
}

export default Locations;
