import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./People.scss";

class People extends Component {
  constructor() {
    super();
    this.state = {
      peopleList: [],
      search: "",
      name: "",
      age: 0,
      gender: "",
      eyeColor: "",
      hairColor: "",
      errors: null,
    };
  }

  componentDidMount = () => {
    axios.get(`https://ghibliapi.herokuapp.com/people/`).then((res) => {
      this.setState({
        peopleList: res.data,
      });
    });
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { search, peopleList } = this.state;

    const searchedPerson = peopleList.find((person) => {
      return person.name.toLowerCase() === search.toLowerCase();
    });

    if (searchedPerson) {
      if (searchedPerson.name.toLowerCase() === "kiki") {
        this.setState({
          name: searchedPerson.name,
          age: searchedPerson.age,
          gender: searchedPerson.gander,
          eyeColor: searchedPerson.eye_color,
          hairColor: searchedPerson.hair_color,
        });
      } else {
        this.setState({
          name: searchedPerson.name,
          age: searchedPerson.age,
          gender: searchedPerson.gender,
          eyeColor: searchedPerson.eye_color,
          hairColor: searchedPerson.hair_color,
        });
      }
    } else {
      this.errors();
    }

    this.clearForms();
  };

  clearForms = () => {
    this.setState({
      search: "",
    });
  };

  errors = () => {
    this.setState({
      errors: "Not Found",
      name: "",
      age: "",
      gender: "",
      eyeColor: "",
      hairColor: "",
    });
    setTimeout(() => {
      this.setState({
        errors: null,
      });
    }, 3000);
  };

  render() {
    const { search, name, age, gender, eyeColor, hairColor, errors } =
      this.state;

    return (
      <section className="people">
        <h1>Search for a Person</h1>
        <Form onSubmit={this.handleSubmit} id="searchForm">
          <Form.Group controlId="basicFormSearch">
            <Form.Control
              type="text"
              onChange={this.handleChange}
              value={search}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            SUBMIT
          </Button>
        </Form>
        {name ? (
          <section className="personDetails">
            <h2>Name: {name}</h2>
            <ul>
              <li>
                <strong>Age: </strong>
                {age}
              </li>
              <br />
              <li>
                <strong>Gender: </strong>
                {gender}
              </li>
              <br />
              <li>
                <strong> Eye Color: </strong>
                {eyeColor}
              </li>
              <br />
              <li>
                <strong>Hair Color: </strong>
                {hairColor}
              </li>
            </ul>
          </section>
        ) : null}
        {errors && <h3>{errors}</h3>}
      </section>
    );
  }
}

export default People;
