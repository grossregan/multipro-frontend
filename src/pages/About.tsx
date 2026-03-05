import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

const About = () => {
  return (
    <>
      <div>
        {PageHeader({
          pageName: "About",
          serviceDescription:
            "Here is some more information about us here at Multipro",
        })}
      </div>
      <div className="container-lg" style={{height: "350px"}}></div>
      <Footer />
    </>
  );
};

export default About;
