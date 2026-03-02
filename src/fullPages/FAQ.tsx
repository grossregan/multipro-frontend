import PageHeader from "../components/PageHeader";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

//Accordion variables question, description, numberAsString

const FAQ = () => {
  return (
    <>
      <div>
        {PageHeader({
          pageName: "FAQ",
          serviceDescription: "Frequently Asked Questions and their answers",
        })}
      </div>
      <div className="accordion" id="FAQaccordion">
        {Accordion({
          question: "What services does Multipro Maintenance provide?",
          description:
            "We offer full-service property maintenance and interior renovation support, including unit turns, general maintenance, painting, drywall, plumbing, and cleaning.",
          numberAsString: "One",
        })}
        {Accordion({
          question: "Who do you typically work with?",
          description:
            "We partner with property managers, multifamily properties, commercial buildings, and owners who need reliable, responsive maintenance support.",
          numberAsString: "Two",
        })}
        {Accordion({
          question: "Do you handle both small and large projects?",
          description:
            "Yes—no job is too big or too small. From a single work order to full unit turns or renovation projects, we scale to fit your needs.",
          numberAsString: "Three",
        })}
        {Accordion({
          question: "Are your technicians trained and insured?",
          description:
            "Absolutely. Our technicians are experienced, trained, and insured, and we hold ourselves to high standards of professionalism and quality.",
          numberAsString: "Four",
        })}
        {Accordion({
          question: "Are your technicians background checked?",
          description:
            "Yes. All our technicians undergo comprehensive background checks. We go above and beyond standard screening requirements—every technician completes a Kari Koskinen background check to ensure the highest level of safety, professionalism, and trust.",
          numberAsString: "Five",
        })}
        {Accordion({
          question:
            "Can you help when my staff is short or behind on work orders? That’s one of our specialties. We act as an extension of your team",
          description:
            "That’s one of our specialties. We act as an extension of your team to help cover staffing gaps, reduce backlogs, and keep your property running smoothly.",
          numberAsString: "Six",
        })}
        {Accordion({
          question:"Do you offer emergency or after-hours services?",
          description:"Yes. We understand maintenance issues don’t always happen during business hours and are available for urgent situations.",
          numberAsString:"Seven"
        })}
        {Accordion({
          question:"How quickly can you respond to service requests?",
          description:"We pride ourselves on fast response times and clear communication. Timelines depend on scope, but we always set expectations upfront and stick to them.",
          numberAsString:"Eight"
        })}
        {Accordion({
          question:"Do you provide estimates before starting work?",
          description:"Yes. We provide clear, upfront pricing and detailed estimates—no surprises.",
          numberAsString:"Nine"
        })}
        {Accordion({
          question:"What makes Multipro Maintenance different from other vendors?",
          description:"We focus on honesty, integrity, quality work, and strong partnerships. We treat your property like it’s our own and aim to be more than just a vendor—we’re your maintenance partner.",
          numberAsString:"Ten"
        })}
        {Accordion({
          question:"How do I get started with Multipro Maintenance?",
          description:"Just reach out! Contact us to discuss your needs, request a quote, or schedule service—we’re ready to help.",
          numberAsString:"Eleven"
        })}
        {Accordion({
          question:"What makes Multipro Maintenance different from other vendors?",
          description:"Yes. We help properties stay ahead of costly repairs with preventative and routine maintenance programs.",
          numberAsString:"Twelve"
        })}
        {Accordion({
          question:"Can you handle unit turns on tight timelines?",
          description:"Absolutely. We understand vacancy costs money and prioritize fast, efficient unit turns without cutting corners.",
          numberAsString:"Thirteen"
        })}
        
      </div>
      < Footer />
    </>
  );
};

export default FAQ;
