import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import Locations from "./Components/Locations";
import People from "./Components/People";

function App() {
	return (
		<div className="App">
			<NavBar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/locations" element={<Locations />} />
				<Route path="/people" element={<People />} />
			</Routes>
		</div>
	);
}

export default App;
