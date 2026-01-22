import Cleaner from "../assets/house-cleaning-detergent-floor-cleaning-lifestyle-interior-photo.png";
import Window from "../assets/window.png";
import Plumber from "../assets/plumber.png";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div
      id="mainCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-pause="false"
    >
      <div className="carousel-inner">
        <div className="carousel-item active c-item" data-bs-interval="4500">
          <img src={Cleaner} className="d-block w-100 c-img"></img>
          <div className="carousel-caption top-0 mt-4 d-none d-md-block caption">
            <h1 className="display-1 mt-5 fs-16 fw-bolder">Multipro</h1>
            <p className="text-capitalize">
              Some representative placeholder content for the first slide.
            </p>
          </div>
        </div>
        <div className="carousel-item c-item" data-bs-interval="4500">
          <img src={Window} className="d-block w-100 c-img"></img>
          <div className="carousel-caption top-0 mt-4 d-none d-md-block caption">
            <h1 className="display-1 mt-5 fs-16 fw-bolder">Multipro</h1>
            <p className="text-capitalize">
              Some representative placeholder content for the Second slide.
            </p>
          </div>
        </div>
        <div className="carousel-item c-item" data-bs-interval="4500">
          <img src={Plumber} className="d-block w-100 c-img"></img>
          <div className="carousel-caption top-0 mt-4 d-none d-md-block caption">
            <h1 className="display-1 mt-5 fs-16 fw-bolder">Multipro</h1>
            <p className="text-capitalize">
              Some representative placeholder content for the Third slide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
