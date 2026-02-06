import Apartment from "./assets/apartment.jpeg";
import Retail from "./assets/retail.webp";
import Hoa from "./assets/hoaHomes.webp";
import PropertyManager from "./assets/propertyManager.webp";
import SeniorLiving from "./assets/assistedLiving.webp";
import Warehouse from "./assets/warehouse.webp";


import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import "./Home.css";


interface CardDetails {
  industry: string;
  img: string;
}

function gridCard(details: CardDetails) {
  return (
    <div className="card">
      <img src={details.img} className="card-img-top" alt="" />
      <div className="card-body p-3 grid">
        <h5 className="card-title">{details.industry}</h5>
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Carousel />
      </div>
      <div>
        <div className="container-fluid text-center t-size">
          <div className="row r-color">
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
            {gridCard({
              industry: "Multi-Family & Apartment Communities",
              img: Apartment,
            })}
          </div>
          <div className="col">
            {gridCard({
              industry: "Commercial & Retail Properties",
              img: Retail,
            })}
          </div>
          <div className="col">
            {gridCard({ industry: "HOA & Condo Associations", img: Hoa })}
          </div>
          <div className="col">
            {gridCard({
              industry: "Property Management Companies",
              img: PropertyManager,
            })}
          </div>
          <div className="col">
            {gridCard({
              industry: "Senior Living & Assisted Living Communities",
              img: SeniorLiving,
            })}
          </div>
          <div className="col">
            {gridCard({
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
