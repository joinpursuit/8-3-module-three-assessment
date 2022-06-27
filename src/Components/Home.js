import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>
        Welcome to <span className="ghibliwordmark">GhibliApp</span>
      </h1>
      <h3>
        To search for a movie, person, or location from a <i>Studio Ghibli</i>{" "}
        film, choose from the navigation bar above.
      </h3>
      <img alt="" src="./splash.png" />
    </div>
  );
};

export default Home;
