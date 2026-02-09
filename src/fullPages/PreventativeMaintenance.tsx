import PageHeader from "../components/PageHeader";

const PreventativeMaintenance = () => {
  return (
    <>
      <div>
        {PageHeader({
          pageName: "Preventative Maintenance",
          serviceDescription:
            "Reduce breakdowns and increase equipment life with scheduled property-wide maintenance tasks, including HVAC filter changes, dryer-vent cleaning, safety checks, and seasonal services.",
        })}
      </div>
    </>
  );
};

export default PreventativeMaintenance;
