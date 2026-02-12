import InterimStaff from "../assets/interimStaff.jpg";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";

export const interimStaff: React.FC = () => {
  return (
    <>
      <div>
        {PageHeader({
          pageName: "Interim Staff",
          serviceDescription:
            "Short-staffed or need temporary help? We provide trained, reliable maintenance technicians to support your onsite team—whether for afew days or several months.",
          imgSrc: InterimStaff,
        })}
      </div>
      <div className="container-fluid text-center">
        <div className="row row-col-1 row-col-sm-2 row-col-md-3 gx-2 gy-5">
          <div className="col">
            {ServiceCard({ serviceName: "Interim Teams"})}
          </div>
          <div className="col">
            {ServiceCard({serviceName: "Short-term Staff"})}
          </div>
          <div className="col">
            {ServiceCard({serviceName: "Onsite Staff"})}
          </div>
        </div>
      </div>
    </>
  );
};

export default interimStaff;
