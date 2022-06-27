import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Componenets/NavBar";
import Movies from "./Componenets/Movies";
import People from "./Componenets/People";
import Locations from "./Componenets/Locations";
import Home from "./Componenets/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Movies" element={<Movies />} />
        <Route path="/People" element={<People />} />
        <Route path="/Locations" element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
