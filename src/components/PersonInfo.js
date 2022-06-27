import React, { useState } from "react";
const PersonInfo = (props) => {
  //
  const [isValid, setIsValid] = useState(false);
  
  const { personSearch } = props;

  return (
    <>
      <div>
        {personSearch.map((person, index) => {
          return (
            <div>
              <ul>
                <li>
                  <h2>Name: {person.name}</h2>
                </li>
                <li>
                  Age: {person.age}  
                </li>
                <li>
                  Gender: {person.gender}  
                </li>
                <li>
                  Hair color: {person.hair_color}  
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default PersonInfo;