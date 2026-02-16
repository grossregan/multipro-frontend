import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";

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
      <div className="container-fluid service-grid text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 gy-5">
          <div className="col">
            {ServiceCard({
              serviceName: "Interim Maintenance Staff",
              icon: interimStaff,
              serviceDescription:
                "Short-staffed or need temporary help? We provide trained, reliable maintenance technicians to support your onsite team—whether for a few days or several months.",
            })}
          </div>
          <div className="col">
            {ServiceCard({
              serviceName: "Tenant Improvements & Repairs",
              icon: tenantImprovement,
              serviceDescription:
                "From small upgrades to full remodels and buildouts, our team completes high-quality renovation projects with professionalism and attention to detail.",
            })}
          </div>
          <div className="col">
            {ServiceCard({
              serviceName: "Preventative Maintenance",
              icon: preventativeMaintenance,
              serviceDescription:
                "Reduce breakdowns and increase equipment life with scheduled property-wide maintenance tasks, including HVAC filter changes, dryer-vent cleaning, safety checks, and seasonal services.",
            })}
          </div>
          <div className="col">
            {ServiceCard({
              serviceName: "Common Area & Exterior Maintenance",
              icon: commonArea,
              serviceDescription:
                "We maintain lobbies, hallways, clubhouses, garages, and shared spaces to ensure they remain functional, safe, and inviting.",
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
