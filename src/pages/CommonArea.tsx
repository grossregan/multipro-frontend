import PageHeader from "../components/PageHeader";

const CommonArea = () => {
  return (
    <div>
      {PageHeader({
        pageName: "Common Area & Exterior Maintenance",
        serviceDescription:
          "We maintain lobbies, hallways, clubhouses, garages, and shared spaces to ensure they remain functional, safe, and inviting.",
      })}
    </div>
  );
};

export default CommonArea;
