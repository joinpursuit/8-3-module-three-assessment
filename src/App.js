import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Locations from "./components/Locations";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import People from "./components/People";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/People" element={<People />} />
        <Route path="/Locations" element={<Locations />} />
      </Routes>
    </div>
  );
}


export default App;
