import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import Multipro from "../assets/MMS_Logo.png";
import Renet from "../assets/RENET_MemberLogo FullColor.png";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid d-flex align-items-center"
        style={{
          height: "auto",
          backgroundColor: "#a6a6a6",
          color: "rgb(75, 75, 75)",
        }}
      >
        <div className="row pt-1 p-4 mx-auto">
          <div className="col my-auto p-4">
            <div
              className="vstack text-center gap-3"
              style={{ fontSize: "16pt", fontFamily: "north-rock", color:"black"}}
            >
              <img
                src={Multipro}
                alt="multipro"
                height={"50%"}
                width={"50%"}
                className="mx-auto"
              />
              Solutions For All Your Property Needs
            </div>
          </div>
          <div className="col mx-auto p-4 pb-1">
            <ContactForm />
          </div>
          <div className="col text-center my-auto mx-auto p-4">
            <h5>Site Map</h5>
            <Link to="/">Home</Link>
            <br />
            <Link to="/services">Services</Link>
            <br />
            <Link to="/industries">Industries</Link>
            <br />
            <Link to="/about">About</Link>
            <br />
            <Link to="/faq">FAQ</Link>
            <br />
          </div>
          <div className="w-100" />
          <div className="col">
            <img alt="RENET Logo" src={Renet} style={{ width: "50%", alignSelf:"center"}} />
          </div>
          <div className="col pb-2 text-center footer-center">
            <p style={{fontSize:"10pt"}}>
              DAN@MULTIPROMN.COM
              <br />
              Direct- 612-405-8050
              <br />© 2025 by Multipro Maintenance Solutions LLC.
            </p>
          </div>
          <div className="col w-100" />
        </div>
      </div>
    </>
  );
};

export default Footer;
