import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import Multipro from "../assets/MMS_Logo.png";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid d-flex align-items-center"
        style={{
          height: "auto",
          backgroundColor: "#a6a6a6",
          color: "black",
        }}
      >
        <div className="row pt-1 p-4 mx-auto">
          <div className="col my-auto p-4">
            <div className="vstack text-center gap-3" style={{fontSize:"16pt", fontFamily:"north-rock"}}>
              <img
                src={Multipro}
                alt="multipro"
                height={288.5}
                width={488.5}
                className="mx-auto"
              />
              Solutions For All Your Property Needs
            </div>
          </div>
          <div className="col mx-auto p-4">
            <ContactForm />
          </div>
          <div className="col text-center my-auto mx-auto p-4">
            <h4>Site Map</h4>
            <Link to="/">
              Home
            </Link><br />
            <Link to="/services">
              Services
            </Link><br />
            <Link to="/industries">
              Industries
            </Link><br />
            <Link to="/about">
              About
            </Link><br />
            <Link to="/faq">
              FAQ
            </Link><br />
          </div>
          <div className="w-100" />
          <div className="col-12 text-center pb-2 footer-center">
            DAN@MULTIPROMN.COM
            <br />Direct- 612-405-8050
            <br />© 2025 by Multipro Maintenance Solutions LLC.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
