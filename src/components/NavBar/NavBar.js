import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar(props) {
  return (
    <nav className="navbar">
      <h1 className="navbar__heading">Bookstore CMS</h1>
      <ul className="navbar__list">
        <div className="nav__list">
          <li className="nav__item">
            <Link to="/">Books</Link>
          </li>
          <li className="nav__item">
            <Link to="/categories">Categories</Link>
          </li>
        </div>
        <div>photo</div>
      </ul>
    </nav>
  );
}

export default NavBar;
