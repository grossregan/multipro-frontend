//import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container nav-container">
      <nav id="main navbar" className="navbar fixed-top navbar-expand-lg mt-2">
        <div className="container-fluid">
          <Link className="navbar-brand nav-item me-5" to='root'>
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
            <ul className="navbar-nav ">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="repairs">Repairs</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="pm">Preventative Maintenance</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#utmr">Unit Turns & Make-Readies</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="tir#">
                      Tenant Improvements & Renovations
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="caem">
                      Common Area & Eexterior Maintenance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="ims">
                      Interim Maintenance Staffing
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">
                  Industries
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
