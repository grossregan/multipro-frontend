import Apartment from "../assets/apartment.jpeg";
import Retail from "../assets/retail.webp";
import Hoa from "../assets/hoaHomes.webp";
import PropertyManager from "../assets/propertyManager.webp";
import SeniorLiving from "../assets/assistedLiving.webp";
import Warehouse from "../assets/warehouse.webp";

import PageHeader from "../components/PageHeader";
import IndustryCard from "../components/IndustryCard";

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
      <div className="container-fluid container-grid text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gx-4 gy-5">
          <div className="col">
            {IndustryCard({
              homeGrid: false,
              industry: "Multi-Family & Apartment Communities",
              img: Apartment,
            })}
          </div>
          <div className="col">
            {IndustryCard({
              homeGrid: false,
              industry: "Commercial & Retail Properties",
              img: Retail,
            })}
          </div>
          <div className="col">
            {IndustryCard({
              homeGrid: false,
              industry: "HOA & Condo Associations",
              img: Hoa,
            })}
          </div>
          <div className="col">
            {IndustryCard({
              homeGrid: false,
              industry: "Property Management Companies",
              img: PropertyManager,
            })}
          </div>
          <div className="col">
            {IndustryCard({
              homeGrid: false,
              industry: "Senior Living & Assisted Living Communities",
              img: SeniorLiving,
            })}
          </div>
          <div className="col">
            {IndustryCard({
              homeGrid: false,
              industry: "Industrial & Warehouse Facilities",
              img: Warehouse,
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
