import React from "react";
import "./Appbar.css";
import IEEE_logo from "../../Assets/images/IEEE-logo-WHITE.png";
import logo from "../../Assets/images/ias-png-white.png"

function Navbar() {
  return (
    <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-dark mx-1 sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand text-success font-weight-bold" href="/">
          <img src={IEEE_logo} alt="" />
        </a>
        <a className="navbar-brand text-success font-weight-bold" href="/">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/execom">
                Execome
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/awards">
                Awards
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacts">
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
