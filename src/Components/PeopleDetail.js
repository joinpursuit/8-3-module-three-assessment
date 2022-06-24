function PeopleDetail(props) {
  const { selectedPeople, peopleList } = props;
  const selectedPeopleInfo = peopleList.find((people) => {
    return people.name.toLowerCase() === selectedPeople.toLowerCase();
  });

  let displayPeople = <p>Not Found</p>;

  if (selectedPeopleInfo) {
    const { name, age, eye_color, hair_color, gender } = selectedPeopleInfo;
    displayPeople = (
      <div>
        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Eye Color: {eye_color}</p>
        <p>Hair Color: {hair_color}</p>
      </div>
    );
  }

  return <>{displayPeople}</>;
}

export default PeopleDetail;
