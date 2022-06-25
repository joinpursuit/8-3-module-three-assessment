import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Homepage from "./Components/Home/Homepage";
import Movies from "./Components/Movies/Movies";
import People from "./Components/People/People";
import Locations from "./Components/Locations/Locations";

const App = () => {
  return (
    <section className="main">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/Movies" element={<Movies />} />

        <Route path="/People" element={<People />} />

        <Route path="/Locations" element={<Locations />} />
      </Routes>
    </section>
  );
};

export default App;

// the api is https://ghibliapi.herokuapp.com
