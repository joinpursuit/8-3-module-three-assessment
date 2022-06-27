import React from 'react';
import "./People.css"

class People extends React.Component {
    constructor() {
        super();
        this.state = {
            peopleArr: [],
            userSearch: '',
            searchResult: [],
        };
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people`)
            .then((response) => response.json())
            .then((response) => {
                this.setState({ peopleArr: response });
            });
    }
    handleSearch = (event) => {
        this.setState({ userSearch: event.target.value });
    };

    handleFormSubmission = (event) => {
        event.preventDefault();
        const { peopleArr, userSearch } = this.state;
        const result = peopleArr.find(
            (person) => person.name.toLowerCase() === userSearch.toLowerCase()
        );
        this.setState({ searchResult: result });
        event.target.reset();
    };

    render() {
        const { searchResult } = this.state;
        return (
            <div className='people'>
                <em><h1>Search for a Person</h1></em>
                <form onSubmit={this.handleFormSubmission}>
                    <input
                        type='text'
                        name='search'
                        placeholder='get ya search on!'
                        onChange={this.handleSearch}
                    />
                    <button className="people-button" type='submit'>Submit</button>
                </form>
                <div>
                    {/* tried to do an if else statement and I could not get the jsx syntax right */}
                    {searchResult ? (
                        <div className="people-deets">
                            <p><strong>Name:</strong> {searchResult.name}</p>
                            <p><strong>Age:</strong> {searchResult.age}</p>
                            <p><strong>Gender:</strong> {searchResult.gender}</p>
                        </div>
                    ) : (
                        <h4>Not Found</h4>
                    )}
                </div>
            </div>
        );
    }
}

export default People;
