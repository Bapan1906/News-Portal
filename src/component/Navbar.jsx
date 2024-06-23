import React from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";
const Navbar = () => {
  return (
    <>
      <h1 className="companyName"> The Flash Bulletin </h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand"></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/business" className="nav-link">
                  Business
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/technical" className="nav-link">
                  Technical
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/political" className="nav-link">
                  Political
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/sports" className="nav-link">
                  Sports
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/entertainment" className="nav-link">
                  Entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/world" className="nav-link">
                 World
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
