import React from "react";
import PageHeader from "../components/PageHeader";
import CAimg from "../assets/commonArea.avif";

const CommonArea = () => {
  return (
    <div>
      {PageHeader({
        pageName: "Common Area & Exterior Maintenance",
        serviceDescription:
          "We maintain lobbies, hallways, clubhouses, garages, and shared spaces to ensure they remain functional, safe, and inviting.",
        imgSrc: CAimg,
      })}
    </div>
  );
};

export default CommonArea;
