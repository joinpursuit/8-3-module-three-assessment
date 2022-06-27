import React from "react";

import { Component } from "react";

class People extends Component{
    constructor(){
        super()
        this.state = {
            people: []
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
   this.setState({
     peopleFind: !this.state.peopleFind
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