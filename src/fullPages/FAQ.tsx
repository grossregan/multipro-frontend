import PageHeader from "../components/PageHeader";

const FAQ = () => {
  return (
    <div>
      {PageHeader({
        pageName: "FAQ",
        serviceDescription: "Frequently Asked Questions and their answers",
      })}
    </div>
  );
};

export default FAQ;
