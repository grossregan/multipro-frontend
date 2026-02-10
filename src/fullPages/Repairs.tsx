import PageHeader from "../components/PageHeader";


const Repairs = () => {
  return (
    <div>
      {PageHeader({
        pageName: "Repairs",
        serviceDescription:
          "We handle daily work orders and essential repairs to keep your property running smoothly, including plumbing fixes, electrical troubleshooting, carpentry, drywall repairs, painting, flooring, lighting, and more.",
      })}
    </div>
  );
};

export default Repairs;
