import './Footer.css';

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
        <h1 style={{ paddingTop: "10px" }}>Contact Us!</h1>
        <div className="my-auto">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col">
              <textarea
                className="form-control"
                placeholder="Type your message here"
                id="Message entry"
                rows={6}
              />
            </div>
          </div>
          <div className="row my-3">
            <button type="button" className="btn btn-outline-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
