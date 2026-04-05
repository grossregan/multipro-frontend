import ContactForm from "./ContactForm";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid text-center d-flex align-items-center flex-column"
        style={{
          height: "auto",
          backgroundColor: "#a6a6a6",
          color: "black",
        }}
      >
        <div className="col">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Footer;
