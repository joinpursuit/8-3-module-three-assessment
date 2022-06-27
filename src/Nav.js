import { Link } from "react-router-dom";
import "./Nav.css";
import Movie from "./Movie";

const Nav = () => {
//   const Home = () => {
//     const handleClick = () => {
//       return <Home />;
//     }
      return (
        <>
          <header>
            {/* {/* <img/> */}
            <Link id="nav-section" to="/">
              <img
                // onClick={handleClick}
                src="/Users/candace/Desktop/Pursuit Labs/Mod 3 Assessment/public/Images/ghibli-icon.jpeg"
                alt="ghibli-icon"
              />
            </Link>
            <Link id="nav-section" to="/movie">
              <h1>Movie</h1>
            </Link>
            <Link id="nav-section" to="/people">
              <h1>People</h1>
            </Link>
            <Link id="nav-section" to="/locations">
              <h1>Locations</h1>
            </Link>
            {/* <Link to "/people">
                <h1>People</h1>
            </Link>
            <Link to "/locations">
                <h1>Locations</h1>
            </Link> */}{" "}
            *
          </header>
        </>
      );
    };
export default Nav;
