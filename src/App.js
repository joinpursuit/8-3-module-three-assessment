import "./App.css";
import Nav from "./Components/Nav";
import HomePage from "./Components/HomePage";
import Movies from "./Components/Movies";
import People from "./Components/Pepople";
import Locations from "./Components/Locations";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/people" element={<People />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
