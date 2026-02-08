import InterimStaff from "../assets/interimStaff.jpg"

export const interimStaff: React.FC = () => {
  return (
    <>
   <div className="container-fluid" style={{height: "90px"}}></div>
    <img src={InterimStaff}  className="rounded mx-auto d-block" alt="" />
      <div className="text-center">
        Short-staffed or need temporary help? We provide trained, reliable
        maintenance technicians to support your onsite team—whether for a few
        days or several months.
      </div>
    </>
  );
};

export default interimStaff;
