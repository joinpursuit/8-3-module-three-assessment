import React from "react";
const PersonInfo = (props) => {
  //
  const { personSearch } = props;

  return (
    <>
      {React.Children.toArray(
        personSearch.map((person, index) => {
        return (
          <ul key={person.id}>
            <li >
              <h2>Name: {person.name}</h2>
            </li>
            <li >
              Age: <span>{person.age}</span>  
            </li>
            <li >
              Gender: <span>{person.gender}</span>  
            </li>
            <li >
              Hair color: <span>{person.hair_color}</span>  
            </li>
          </ul>
        );
      }))}
    </>
  )
}

export default PersonInfo;