import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import user from "../../assets/imgs/user.png";
function NavBar(props) {
  return (
    <nav className="navbar">
      <h1 className="navbar__heading">Bookstore CMS</h1>
      <ul className="navbar__list">
        <div className="nav__list">
          <li className="nav__item">
            <Link to="/" style={{ textDecoration: "none" }}>
              Books
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/categories" style={{ textDecoration: "none" }}>
              Categories
            </Link>
          </li>
        </div>
        <div>
          <img src={user} alt="user" className="nav__user" />
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
