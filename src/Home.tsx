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
            <div className="pad">
              <text>
                Here at Multipro, we do it all! Everything from interim staffing
                to unit turnovers. <br></br>
                <strong>We are on your side!</strong>
              </text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
