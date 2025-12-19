import Cleaner from "../assets/house-cleaning-detergent-floor-cleaning-lifestyle-interior-photo.png";
import Window from "../assets/window.png";
import Plumber from "../assets/plumber.png";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div id="mainCarousel" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active c-item">
          <img src={Cleaner} className="d-block w-100 c-img"></img>
          <div className="carousel-caption top-0 mt-4 d-none d-md-block caption">
            <h1 className="display-1 mt-5 fs-16 fw-bolder">Multipro</h1>
            <p className="text-capitalize">
              Some representative placeholder content for the first slide.
            </p>
          </div>
        </div>
        <div className="carousel-item c-item">
          <img src={Window} className="d-block w-100 c-img"></img>
          <div className="carousel-caption top-0 mt-4 d-none d-md-block caption">
            <h1 className="display-1 mt-5 fs-16 fw-bolder">Multipro</h1>
            <p className="text-capitalize">
              Some representative placeholder content for the Second slide.
            </p>
          </div>
        </div>
        <div className="carousel-item c-item">
          <img src={Plumber} className="d-block w-100 c-img"></img>
          <div className="carousel-caption top-0 mt-4 d-none d-md-block caption">
            <h1 className="display-1 mt-5 fs-16 fw-bolder">Multipro</h1>
            <p className="text-capitalize">
              Some representative placeholder content for the Third slide.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
