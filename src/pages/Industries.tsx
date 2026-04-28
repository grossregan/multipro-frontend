import Apartment from "../assets/apartment.jpeg";
import Retail from "../assets/retail.webp";
import Hoa from "../assets/hoaHomes.webp";
import PropertyManager from "../assets/propertyManager.webp";
import SeniorLiving from "../assets/assistedLiving.webp";
import Warehouse from "../assets/warehouse.webp";

import PageHeader from "../components/PageHeader";
import IndustryCard from "../components/IndustryCard";
import Footer from "../components/Footer";

const Industries = () => {
  return (
    <>
      <div>
        {PageHeader({
          pageName: "Industries",
          serviceDescription:
            "Multipro Maintenance Solutions proudly supports a diverse range of property types and organizations. Our team understands the unique needs and expectations of each industry, ensuring consistent, high-quality service every time.",
        })}
      </div>
      <div className="container-fluid text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gx-4 gy-5 container-grid">
          <div className="col">
            {IndustryCard({
              industry: "Multi-Family & Apartment Communities",
              img: Apartment,
              description:
                "Daily work orders, unit turns, preventative maintenance, and project support to keep your buildings operating efficiently and residents satisfied.",
            })}
          </div>
          <div className="col">
            {IndustryCard({
              industry: "Commercial & Retail Properties",
              img: Retail,
              description:
                "Reliable facility maintenance, repairs, and tenant improvements designed to keep businesses operating without interruption.",
            })}
          </div>
          <div className="col">
            {IndustryCard({
              industry: "HOA & Condo Associations",
              img: Hoa,
              description:
                "We partner with homeowner associations to maintain common areas, perform building repairs, and handle seasonal and scheduled maintenance needs.",
            })}
          </div>
          <div className="col">
            {IndustryCard({
              industry: "Property Management Companies",
              img: PropertyManager,
              description:
                "Comprehensive support across your entire portfolio, including staffing, work order management, and project execution.",
            })}
          </div>
          <div className="col">
            {IndustryCard({
              industry: "Senior Living & Assisted Living Communities",
              img: SeniorLiving,
              description:
                "Professional, respectful maintenance services to support safe, compliant, and comfortable environments.",
            })}
          </div>
          <div className="col">
            {IndustryCard({
              industry: "Industrial & Warehouse Facilities",
              img: Warehouse,
              description:
                "General building maintenance, lighting repairs, plumbing, and safety-related services for industrial and logistics properties.",
            })}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Industries;
