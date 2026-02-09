import InterimStaff from "../assets/interimStaff.jpg";
import PageHeader from "../components/PageHeader";

export const interimStaff: React.FC = () => {
  return (
    <div>
      {PageHeader({
        pageName: "Interim Staff",
        serviceDescription:
          "Short-staffed or need temporary help? We provide trained, reliable maintenance technicians to support your onsite team—whether for afew days or several months.",
        imgSrc: InterimStaff,
      })}
    </div>
  );
};

export default interimStaff;
