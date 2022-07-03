import { Component } from "react";
import React from "react";

class People extends Component{
    constructor(){
        super()
        this.state = {
            people: [],
            peopleInput: "",
            persons: [],
            search: null,
        }
    }
// componentDidMount(){
//     this.fetchPeople();
// }

//     handleChange = (e)=> {
//         this.state({
//             peopleInput: e.target.value
//         })
//     }

// fetchPeople = () => {
//     fetch("https://ghibliapi.herokuapp.com/people")
//         .then((res)=> res.json())
//         .then((data)=>{
//             this.setState({
//                 people: data,
//             })
//         })
// }



// handleSubmit =(e)=>{
//     e.preventDefault();
//     let peopleObj = this.state.people.find((person)=>{
//         return person.name === this.state.peopleInput;
//     })
//    this.setState({
//         persons: peopleObj,
//         peopleInput: "",
//      search: !this.state.search
//    })

// };

    render(){
        // let {peopleInput, search, handleChange, handleSubmit} = this.state;
    return(
        <div>
            {/* <div> Search for a Person </div>
        <form onSubmit={handleSubmit}>
            <input
            placeholder="Find Your Person"
            type="text"
            value={peopleInput}
            onChange={handleChange}
            />
        <button >Submit</button>
        </form>
        {search &&
        <div>
            <h3>Name {search.name}</h3>
            <h3>Age{search.age}</h3>
            <h3>Gender{search.genger}</h3>    
        </div>
        }
        {search === null  &&

        <h3> Not Found</h3>

        } */}
        People
        </div>
    )
           
    }
    }


export default People;