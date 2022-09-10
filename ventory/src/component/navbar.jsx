import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
 
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo">Ventorify</span>
      </div>
      <div id="hamburger">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div id="nav-list" className="nav-items">
        <ul>
          <li>
            <Link to="warehouse" className="links">
              Warehouse
            </Link>
          </li>
          <li>
            <Link to="shelf" className="links">
              Shelf
            </Link>
          </li>
          <li>
            <Link to="sales" className="links">
              Sales
            </Link>
          </li>
          <li>
            <Link to="create" className="links">
              New inventory
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
