import PageHeader from "../components/PageHeader";
import IndustryCard from "../components/IndustryCard";

import interimStaff from "../assets/interimStaff.jpg";
import preventativeMaintenance from "../assets/preventativeMaintenance.webp";
import tenantImprovement from "../assets/tir.jpg";
import commonArea from "../assets/commonArea.avif";

import "./Services.css";

const Services = () => {
  return (
    <>
      <div>
        {PageHeader({
          pageName: "Our Services",
          serviceDescription:
            "We offer plenty of servies here at Multipro, whether it be interim staff or just some light maintenance work, we've got you covered!",
        })}
      </div>
      <div className="container-fluid service-grid container-grid text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 gy-5">
          <div className="col">
            {IndustryCard({
              homeGrid: false,
              industry: "Interim Maintenance Staff",
              img: interimStaff,
              description:
                "Short-staffed or need temporary help? We provide trained, reliable maintenance technicians to support your onsite team—whether for a few days or several months.",
            })}
          </div>
          <div className="col">
            {IndustryCard({
              homeGrid: false,
              industry: "Tenant Improvements & Repairs",
              img: tenantImprovement,
              description:
                "From small upgrades to full remodels and buildouts, our team completes high-quality renovation projects with professionalism and attention to detail.",
            })}
          </div>
          <div className="col">
            {IndustryCard({
              homeGrid: false,
              industry: "Preventative Maintenance",
              img: preventativeMaintenance,
              description:
                "Reduce breakdowns and increase equipment life with scheduled property-wide maintenance tasks, including HVAC filter changes, dryer-vent cleaning, safety checks, and seasonal services.",
            })}
          </div>
          <div className="col">
            {IndustryCard({
              homeGrid: false,
              industry: "Common Area & Exterior Maintenance",
              img: commonArea,
              description:
                "We maintain lobbies, hallways, clubhouses, garages, and shared spaces to ensure they remain functional, safe, and inviting.",
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
