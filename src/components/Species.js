import React, { useState, useEffect } from 'react';
import './Species.css';

const SPECIES_URL = 'https://ghibliapi.herokuapp.com/species';

const Species = ({ data }) => {
  const [species, setSpecies] = useState([]);
  const [textInput, setText] = useState('');

  const handleText = (e) => {
    setText(e.target.value);
  };

  const getSpecies = (e) => {
    e.preventDefault();
    const found = species.find(
      ({ name }) => name.toLowerCase() === textInput.toLowerCase()
    );
    setSpecies(found);
  };

  useEffect(() => {
    (async () => {
      let response = await fetch(SPECIES_URL);
      response = await response.json();

      const data = response.map(
        ({ name, classification, eye_colors, hair_colors }) => {
          return { name, classification, eye_colors, hair_colors };
        }
      );
      setSpecies(data);
    })();
  }, [data]);

  return (
    <div className='species'>
      <h1 className='species__header'>Search For A Species</h1>
      <form onSubmit={getSpecies}>
        <input
          className='species__input'
          type='text'
          placeholder='Search a species here...'
          onChange={handleText}
        ></input>
        <button className='species__button' type='submit'>
          🔍 Search
        </button>
      </form>
      {species === undefined ? (
        <p>Species Not Found</p>
      ) : !Object.keys(species).length ? (
        ''
      ) : (
        <div>
          <h4>Name: {species.name}</h4>
          <p>Classification: {species.classification}</p>
          <p>Eye Colors: {species.eye_colors}</p>
          <p>Hair Colors: {species.hair_colors}</p>
        </div>
      )}
    </div>
  );
};

export default Species;
