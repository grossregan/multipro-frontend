import PageHeader from "../components/PageHeader";

const About = () => {
  return (
    <div>
      {PageHeader({
        pageName: "About",
        serviceDescription:
          "Here is some more information about us here at Multipro",
      })}
    </div>
  );
};

export default About;
