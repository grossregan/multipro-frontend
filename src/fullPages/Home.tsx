import Apartment from "../assets/apartment.jpeg";
import Retail from "../assets/retail.webp";
import Hoa from "../assets/hoaHomes.webp";
import PropertyManager from "../assets/propertyManager.webp";
import SeniorLiving from "../assets/assistedLiving.webp";
import Warehouse from "../assets/warehouse.webp";

import Carousel from "../components/Carousel";
import GridCard from "../components/GridCard";
import "./Home.css";


const Home = () => {
  return (
    <>
      <Carousel />
      <div>
        <div
          className="container-fluid text-center"
          style={{ fontSize: "15pt" }}
        >
          <div
            className="row"
            style={{ backgroundColor: "rgb(202, 202, 202)" }}
          >
            <div style={{ marginTop: "25px", marginBottom: "25px" }}>
              Here at Multipro, we do it all! Everything from interim staffing
              to unit turnovers. <br></br>
              <strong>We are on your side!</strong>
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
      <div className="container-fluid container-grid text-center">
        <div className="row row-cols-3 gx-4 gy-5">
          <div className="col">
            {GridCard({
              industry: "Multi-Family & Apartment Communities",
              img: Apartment,
            })}
          </div>
          <div className="col">
            {GridCard({
              industry: "Commercial & Retail Properties",
              img: Retail,
            })}
          </div>
          <div className="col">
            {GridCard({ industry: "HOA & Condo Associations", img: Hoa })}
          </div>
          <div className="col">
            {GridCard({
              industry: "Property Management Companies",
              img: PropertyManager,
            })}
          </div>
          <div className="col">
            {GridCard({
              industry: "Senior Living & Assisted Living Communities",
              img: SeniorLiving,
            })}
          </div>
          <div className="col">
            {GridCard({
              industry: "Industrial & Warehouse Facilities",
              img: Warehouse,
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
