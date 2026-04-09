import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid d-flex"
        style={{
          height: "auto",
          backgroundColor: "#a6a6a6",
          color: "black",
        }}
      >
        <div className="col p-2">
          <div className="container-fluid">
            <h3 className="text-center" style={{paddingTop:"10px"}}>Site Map</h3>
            <ul >
              <Link to="/"><li>Home</li></Link>
              <Link to="/services"><li>Services</li></Link>
              <Link to="/industries"><li>Industries</li></Link>
              <Link to="/about"><li>About</li></Link>
              <Link to="/faq"><li>FAQ</li></Link>
            </ul>
          </div>
        </div>
        <div className="col" />
        <div className="col text-center">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Footer;
