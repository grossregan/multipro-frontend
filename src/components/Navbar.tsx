import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="container nav-container">
      <nav id="main-navbar" className="navbar fixed-top navbar-expand-lg mt-2">
        <div className="container-fluid">
          <Link className="navbar-brand nav-item me-5" to="/">
            Multipro
          </Link>

          <button
            className="navbar-toggler toggler"
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
              <li className="nav-item me-3">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>

              <li className="nav-item me-3">
                <Link className="nav-link" to="/industries">
                  Industries
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
