import React, { useState, useEffect } from 'react';
import './People.css';

const PEOPLE_URL = 'https://ghibliapi.herokuapp.com/people';

const People = ({ data }) => {
  const [people, setPeople] = useState([]);
  const [textInput, setText] = useState('');
  const [person, setPerson] = useState('');

  const handleText = (e) => {
    setText(e.target.value);
  };

  const getPerson = (e) => {
    e.preventDefault();
    const found = people.find(
      ({ name }) => name.toLowerCase() === textInput.toLowerCase()
    );
    setPerson(found);
  };

  useEffect(() => {
    (async () => {
      let response = await fetch(PEOPLE_URL);
      response = await response.json();

      const data = response.map(
        ({ name, age, gender, gander, eye_color, hair_color }) => {
          return { name, age, gender, gander, eye_color, hair_color };
        }
      );
      setPeople(data);
    })();
  }, [data]);

  return (
    <div className='people'>
      <h1 className='people__header'>Search for a Person</h1>
      <form onSubmit={getPerson}>
        <input
          className='people__input'
          type='text'
          placeholder='Search a person here...'
          onChange={handleText}
        ></input>
        <button className='people__button' type='submit'>
          🔍 Search
        </button>
      </form>
      <br />
      {person === undefined ? (
        <p>Person Not Found</p>
      ) : !Object.keys(person).length ? (
        ''
      ) : (
        <div>
          <h4>Name: {person.name}</h4>
          <p>Age: {person.age}</p>
          <p>Gender: {person.gender || person.gander}</p>
          <p>Eye Color: {person.eye_color}</p>
          <p>Hair Color: {person.hair_color}</p>
        </div>
      )}
    </div>
  );
};

export default People;
