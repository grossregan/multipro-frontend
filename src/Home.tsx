import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import MaintenancePage from "./maintenancePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/repairs" element={<Home />} />
            <Route path="/pm" element={<MaintenancePage />} />
            <Route path="/utmr" element={<Home />} />
            <Route path="/tir" element={<Home />} />
            <Route path="/caem" element={<Home />} />
            <Route path="/ims" element={<Home />} />
          </Routes>
        </Router>
      </div>
      <div>
        <Carousel />
      </div>
    </>
  );
};

export default Home;
