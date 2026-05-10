import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import Brand from "../assets/MMS_Horizontal.png"


const Navbar: React.FC = () => {
  return (
    <Container>
      <BootstrapNavbar expand="lg" id="main-navbar" className="navbar fixed-top navbar-expand-lg mt-2">
        <div className="container-fluid">
          <BootstrapNavbar.Brand as={Link} className="navbar-brand nav-item" to="/">
            <img src={Brand} alt="Multipro logo" height={48}/>
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle />

          <BootstrapNavbar.Collapse className="rounded" id="navbarNav">
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
    </Container>
  );
};

export default Navbar;
