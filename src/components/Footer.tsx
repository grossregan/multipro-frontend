import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";

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
        <div className="col">
          <div className="container-fluid">
            <h4 className="text-center">Site Map</h4>
            <ul>
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
