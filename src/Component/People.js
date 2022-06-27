import React from "react";
import "../../App.css";
import { Component } from "react";

class People extends Component{
    constructor(){
        super()
        this.state = {
            people: [],
            peopleFind: " ",
            searchResult: {},
        }
    }
fetchPeople = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
                people: data,
            })
        })
}
handlePersonInput=(e)=>{
    personInput(e.target.value);
}

handleSubmit = ()=> {
    let peopleFind =people.find(person=>{
        return person.name;
    })

}
    render(){
    return(
        <div>
            <div> Search for a Person </div>
            <input
            placeholder=""
            type="text"
            value={personInput}
            onChange={handlePersonInput}
            />
        <button onClick={handleSubmit}>Submit</button>
        {searchResult &&
        <div>
            <h3>Name {}</h3>
            <h3>Age{}</h3>
            <h3>Gender{}</h3>    
        </div>
        }
        {searchResult === undefined &&
        <h3> Not Found</h3>

        }
        </div>
    )
           
    }
    }


export default People;