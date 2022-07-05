import React from "react";
const PersonInfo = (props) => {
  //
  const { personSearch } = props;

  return (
    <>
      {/* 
      [https://reactjs.org/docs/react-api.html#reactchildrentoarray]
      [React.Children.toArray(children)]
      Returns the children opaque data structure as a flat array with keys assigned to each child.
      Useful if you want to manipulate collections of children in your render methods, especially
      if you want to reorder or slice this.props.children before passing it down. 
      */}
      {React.Children.toArray(
        personSearch.map((person) => {
        return (
          <ul key={person.id}>
            <li ><h2>Name: {person.name}</h2></li>
            <li >Age: <span>{person.age}</span></li>
            <li >Gender: <span>{person.gender}</span></li>
            <li >Hair color: <span>{person.hair_color}</span></li>
          </ul>
        );
      }))}
    </>
  )
}

export default PersonInfo;