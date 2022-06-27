import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        {/* Replace with an image soon. */}
        <Link to="/">
          <img
            src="https://cdn.vox-cdn.com/thumbor/s2_cd1uqU2wT_uy6vx4-GRESV8k=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19996673/Studio_Ghibli_Logo.jpg"
            alt="logo"
          ></img>
        </Link>
        <ul>
          <li className="active">
            <a href="/movies"> Movies</a>
          </li>
          <li>
            <a href="/people"> People</a>
          </li>
          <li>
            <a href="/locations"> Locations</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
