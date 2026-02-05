import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import MaintenancePage from "./MaintenancePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Home.css";
import Apartment from "./assets/apartment.jpeg";
import Retail from "./assets/retail.webp";
import Hoa from "./assets/hoaHomes.webp";
import PropertyManager from "./assets/propertyManager.webp";
import SeniorLiving from "./assets/assistedLiving.webp";
import Warehouse from "./assets/warehouse.webp";

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
      <div className="container text-center">
        <div className="row row-cols-3 gx-5 gy-5">
          <div className="col">
            <div className="card">
              <img src={Apartment} className="card-img-top" alt="" />
              <div className="card-body p-3 grid">
                <h5 className="card-title">
                  Multi-Family & Apartment Communities
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={Retail} className="card-img-top" alt="" />
              <div className="card-body p-3 grid">
                <h5 className="card-title">Commercial & Retail Properties </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={Hoa} className="card-img-top" alt="" />
              <div className="card-body p-3 grid">
                <h5 className="card-title">HOA & Condo Associations</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={PropertyManager} className="card-img-top" alt="" />
              <div className="card-body p-3 grid">
                <h5 className="card-title">Property Management Companies</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={SeniorLiving} className="card-img-top" alt="" />
              <div className="card-body p-3 grid">
                <h5 className="card-title">
                  Senior Living & Assisted Living Communities
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={Warehouse} className="card-img-top" alt="" />
              <div className="card-body p-3 grid">
                <h5 className="card-title">
                 Industrial & Warehouse Facilities
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
