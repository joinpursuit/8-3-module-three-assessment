import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import Locations from "./Components/Locations";
import People from "./Components/People";

const BASE_URL = `https://ghibliapi.herokuapp.com`;

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movies" element={<Movies BASE_URL={BASE_URL} />} />
				<Route path="/locations" element={<Locations BASE_URL={BASE_URL} />} />
				<Route path="/people" element={<People BASE_URL={BASE_URL} />} />
			</Routes>
		</div>
	);
}

export default App;
