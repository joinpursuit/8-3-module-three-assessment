const DisplayPersonInfo = ({ foundPerson }) => {
  return (
    <div>
      {foundPerson ? (
        <div>
          <h1>Name: {foundPerson.name}</h1>
          <p>Age: {foundPerson.age}</p>
          <p>Eye Color: {foundPerson.eye_color}</p>
          <p>Hair Color: {foundPerson.hair_color}</p>
          <p>Gender: {foundPerson.gender}</p>
        </div>
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
};

export default DisplayPersonInfo;
