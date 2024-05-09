import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to='/'>GUVI</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/all'>All</Link>
              </li>
              <li className="nav-item">
              <Link to='/fullstack'>Full Stack</Link>
              </li>
              <li className="nav-item">
              <Link to='/datascience'>Data Science</Link>
              </li>
              <li className="nav-item">
                <Link to='/cybersecurity'>Cyber Security</Link>
              </li>
              <li className="nav-item">
                <Link to='/career'>Career</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
