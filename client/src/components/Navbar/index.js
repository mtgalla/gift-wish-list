import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <div style={{backgroundColor:"darkGray"}}>
    <ul className="nav nav-tabs">
      <li className="nav-item ">
        <Link to="/" className={window.location.pathname === "/" ? ("nav-link active") : ("nav-link")} style={{backgroundColor:"darkGray", color:"white"}}>
          Google Books
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
          Saved
        </Link>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
