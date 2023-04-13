import React from "react";
import "./Appbar.css";
import logo from "./IEEE-logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="d-flex justify-content-center bg-white">
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand text-success font-weight-bold pl-4" href="/">
          <img src={logo} className="img-fluid" alt=""/>
        </Link>
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
          <ul className="navbar-nav pl-4">
            <li className="nav-item">
              <a
                className="nav-link active pl-4"
                aria-current="page"
                href="https://google.com"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-4" href="https://google.com">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-4" href="https://google.com">
                Execome
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-4" href="https://google.com">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-4" href="https://google.com">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-4" href="https://google.com">
                Awards
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-4" href="https://google.com">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  
  );
}

export default Navbar;
