import ContactForm from "./ContactForm";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid text-center d-flex align-items-center"
        style={{
          height: "auto",
          backgroundColor: "#a6a6a6",
          color: "black",
        }}
      >
        <div className="col">
          <div className="row">
            <h6>Site Map</h6>
          </div>
          <div className="col" />
        </div>
        <div className="col">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Footer;
