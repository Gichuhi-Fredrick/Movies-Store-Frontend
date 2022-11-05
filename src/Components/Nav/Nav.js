import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2>Movies</h2>
          </Link>
        </li>

        <li>
          <Link to="/series" style={{ textDecoration: "none" }}>
            <h2>Series</h2>
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
}
