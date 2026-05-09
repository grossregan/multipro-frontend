import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import Brand from "../assets/MMS_Horizontal.png"


const Navbar: React.FC = () => {
  return (
    <div className="container nav-container">
      <BootstrapNavbar id="main-navbar" className="navbar fixed-top navbar-expand-lg mt-2">
        <div className="container-fluid">
          <BootstrapNavbar.Brand as={Link} className="navbar-brand nav-item" to="/">
            <img src={Brand} alt="Multipro logo" height={48}/>
          </BootstrapNavbar.Brand>

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

          <BootstrapNavbar.Collapse className="collapse navbar-collapse" id="navbarNav">
            <Nav className="navbar-nav">
              <Nav.Item className="nav-item me-3">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </Nav.Item>

              <Nav.Item className="nav-item me-3">
                <Link className="nav-link" to="/industries">
                  Industries
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-item me-3">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-item me-3">
                <Link className="nav-link" to="/faq">
                  FAQ
                </Link>
              </Nav.Item>
            </Nav>
          </BootstrapNavbar.Collapse>
        </div>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;
