import React, { useState } from "react";
const PersonInfo = (props) => {
  //
  const { personSearch } = props;

  const listItems = personSearch.map((person, index) => {
    return  <>
              <li key={person.uniqueId}>
                <h2>Name: {person.name}</h2>
              </li>
              <li key={person.uniqueId}>
                Age: <span>{person.age}</span>  
              </li>
              <li key={person.uniqueId}>
                Gender: <span>{person.gender}</span>  
              </li>
              <li key={person.uniqueId}>
                Hair color: <span>{person.hair_color}</span>  
              </li>
            </>
  })

  return (
    <>
      <ul>{listItems}</ul>
    </>
  )
}

export default PersonInfo;