import React from "react";
import "./LocationCard.css";

export default function LocationCard({ location }) {
	const { name, climate, terrain } = location;
	return (
		<div>
			{" "}
			<li className="location-card">
				<ul>
					<li>Name: {name}</li>
					<li>Climate: {climate}</li>
					<li>Terrain: {terrain}</li>
				</ul>
			</li>
		</div>
	);
}
