import Commercial from "../assets/commercialBuilding.jpg";
import Neighborhood from "../assets/neighborhood.jpg";
import LoadingBay from "../assets/loadingBay.webp";
import Multipro from "../assets/MMS_Horizontal.png";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

const MultiproCarousel = () => {
  const caption = "Proudly serving the greater Twin Cities area";

  return (
    <Carousel
      indicators={false}
      controls={false}
      fade
      interval={4500}
      pause={false}
      className="mainCarousel"
    >
      <Carousel.Item className="c-item">
        <img
          src={Commercial}
          className="d-block w-100 c-img"
          alt="Commercial"
        />
        <Carousel.Caption className="top-0 mt-4 d-none d-md-block caption">
          <h1 className="display-1 mt-5 fs-16 fw-bolder">
            <img alt="multipro logo" src={Multipro} style={{ width: "50%" }} />
          </h1>
          <p className="text-capitalize">{caption}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="c-item">
        <img
          src={Neighborhood}
          className="d-block w-100 c-img"
          alt="Neighborhood"
        />
        <Carousel.Caption className="top-0 mt-4 d-none d-md-block caption">
          <h1 className="display-1 mt-5 fs-16 fw-bolder">
            <img alt="multipro logo" src={Multipro} style={{ width: "50%" }} />
          </h1>
          <p className="text-capitalize">{caption}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="c-item">
        <img
          src={LoadingBay}
          className="d-block w-100 c-img"
          alt="Loading Bay"
        />
        <Carousel.Caption className="top-0 mt-4 d-none d-md-block caption">
          <h1 className="display-1 mt-5 fs-16 fw-bolder">
            <img alt="multipro logo" src={Multipro} style={{ width: "50%" }} />
          </h1>
          <p className="text-capitalize">{caption}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MultiproCarousel;
