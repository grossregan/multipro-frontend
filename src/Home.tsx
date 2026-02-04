import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import MaintenancePage from "./MaintenancePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            {/* <Route path="/repairs" element={<Home />} /> */}
            <Route path="/pm" element={<MaintenancePage />} />
            {/* <Route path="/utmr" element={<Home />} />
            <Route path="/tir" element={<Home />} />
            <Route path="/caem" element={<Home />} />
            <Route path="/ims" element={<Home />} /> */}
          </Routes>
          <Carousel />
        </Router>
      </div>
      <div>
        <div className="container-fluid text-center t-size">
          <div className="row r-color">
            <div style={{ marginTop: "25px", marginBottom: "25px" }}>
              <text>
                Here at Multipro, we do it all! Everything from interim staffing
                to unit turnovers. <br></br>
                <strong>We are on your side!</strong>
              </text>
            </div>
          </div>
        </div>
        <div
          className="container-fluid text-center"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <strong
            style={{
              fontSize: "27pt",
              letterSpacing: "1.25pt",
              wordSpacing: "1.75pt",
            }}
          >
            Industries We Serve
          </strong>
        </div>
      </div>
      <div className="container px-4 text-center">
        <div className="row row-cols-3 gx-5 gy-5">
          <div className="col">
            <div className="p-3 grid">Multi-Family & Apartment Communities</div>
          </div>
          <div className="col">
            <div className="p-3 grid">Commercial & Retail Properties</div>
          </div>
          <div className="col">
            <div className="p-3 grid">HOA & Condo Associations</div>
          </div>
          <div className="col">
            <div className="p-3 grid">Property Management Companies</div>
          </div>
          <div className="col">
            <div className="p-3 grid">
              Senior Living & Assisted Living Communities
            </div>
          </div>
          <div className="col">
            <div className="p-3 grid">Industrial & Warehouse Facilities</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
