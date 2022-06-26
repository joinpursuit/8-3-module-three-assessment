import "./PeopleDetail.css";

function PeopleDetail(props) {
  const { selectedPeople, peopleList } = props;
  const selectedPeopleInfo = peopleList.find((people) => {
    return people.name.toLowerCase() === selectedPeople.toLowerCase();
  });

  let displayPeople = <p className="notFound">Not Found</p>;

  if (selectedPeopleInfo) {
    const { name, age, eye_color, hair_color, gender } = selectedPeopleInfo;
    displayPeople = (
      <div className="peopleInfo">
        <h3>
          <span className="bold">Name:</span> {name}
        </h3>
        <p>
          <span className="bold">Age:</span> {age}
        </p>
        <p>
          <span className="bold">Gender:</span> {gender}
        </p>
        <p>
          <span className="bold">Eye Color:</span> {eye_color}
        </p>
        <p>
          <span className="bold">Hair Color:</span> {hair_color}
        </p>
      </div>
    );
  }

  return <>{displayPeople}</>;
}

export default PeopleDetail;
