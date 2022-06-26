const PeopleInfo = ({ person }) => {
  return (
    <div className="info">
      {person ? (
        <div>
          <h1>Name: {person.name}</h1>
          <p>Age: {person.age}</p>
          <p>Gender: {person.gender}</p>
          <p>Eye Color: {person.eye_color}</p>
          <p>Hair Color: {person.hair_color}</p>
        </div>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
};

export default PeopleInfo;
