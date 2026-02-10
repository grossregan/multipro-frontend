import PageHeader from "../components/PageHeader";
import tir from "../assets/tir.avif";

const TenantIR = () => {
  return (
    <div>
      {PageHeader({
        pageName: "Tenant Improvements & Renovations",
        serviceDescription:
          "From small upgrades to full remodels and buildouts, our team completes high-quality renovation projects with professionalism and attention to detail.",
        imgSrc: tir,
      })}
    </div>
  );
};

export default TenantIR;
