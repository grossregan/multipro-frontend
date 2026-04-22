import PageHeader from "../components/PageHeader";
import accordion from "../components/Accordion";
import Footer from "../components/Footer";
import { Accordion } from "react-bootstrap";

//Accordion variables question, answer, numberAsString

const FAQ = () => {
  return (
    <>
      <div>
        {PageHeader({
          pageName: "FAQ",
          serviceDescription: "Frequently Asked Questions and their answers",
        })}
      </div>
      <Accordion>
        {accordion({
          question: "Who do you typically work with?",
          answer:
            "We partner with property managers, multifamily properties, commercial buildings, and owners who need reliable, responsive maintenance support.",
          numberAsString: "Two",
        })}
        {accordion({
          question: "Do you handle both small and large projects?",
          answer:
            "Yes—no job is too big or too small. From a single work order to full unit turns or renovation projects, we scale to fit your needs.",
          numberAsString: "Three",
        })}
        {accordion({
          question: "Are your technicians trained and insured?",
          answer:
            "Absolutely. Our technicians are experienced, trained, and insured, and we hold ourselves to high standards of professionalism and quality.",
          numberAsString: "Four",
        })}
        {accordion({
          question: "Are your technicians background checked?",
          answer:
            "Yes. All our technicians undergo comprehensive background checks. We go above and beyond standard screening requirements—every technician completes a Kari Koskinen background check to ensure the highest level of safety, professionalism, and trust.",
          numberAsString: "Five",
        })}
        {accordion({
          question:
            "Can you help when my staff is short or behind on work orders? That’s one of our specialties. We act as an extension of your team",
          answer:
            "That’s one of our specialties. We act as an extension of your team to help cover staffing gaps, reduce backlogs, and keep your property running smoothly.",
          numberAsString: "Six",
        })}
        {accordion({
          question: "Do you offer emergency or after-hours services?",
          answer:
            "Yes. We understand maintenance issues don’t always happen during business hours and are available for urgent situations.",
          numberAsString: "Seven",
        })}
        {accordion({
          question: "How quickly can you respond to service requests?",
          answer:
            "We pride ourselves on fast response times and clear communication. Timelines depend on scope, but we always set expectations upfront and stick to them.",
          numberAsString: "Eight",
        })}
        {accordion({
          question: "Do you provide estimates before starting work?",
          answer:
            "Yes. We provide clear, upfront pricing and detailed estimates—no surprises.",
          numberAsString: "Nine",
        })}
        {accordion({
          question:
            "What makes Multipro Maintenance different from other vendors?",
          answer:
            "We focus on honesty, integrity, quality work, and strong partnerships. We treat your property like it’s our own and aim to be more than just a vendor—we’re your maintenance partner.",
          numberAsString: "Ten",
        })}
        {accordion({
          question: "How do I get started with Multipro Maintenance?",
          answer:
            "Just reach out! Contact us to discuss your needs, request a quote, or schedule service—we’re ready to help.",
          numberAsString: "Eleven",
        })}
        {accordion({
          question:
            "What makes Multipro Maintenance different from other vendors?",
          answer:
            "Yes. We help properties stay ahead of costly repairs with preventative and routine maintenance programs.",
          numberAsString: "Twelve",
        })}
        {accordion({
          question: "Can you handle unit turns on tight timelines?",
          answer:
            "Absolutely. We understand vacancy costs money and prioritize fast, efficient unit turns without cutting corners.",
          numberAsString: "Thirteen",
        })}
        {accordion({
          question: "Do you supply materials, or do we?",
          answer:
            "We’re flexible—we can supply materials or work with materials provided by the property.",
          numberAsString: "Fourteen",
        })}
        {accordion({
          question:"Do you offer recurring or contract services?",
          answer:"Yes. We offer ongoing maintenance partnerships as well as one-time service calls.",
          numberAsString:"Fifteen"
        })}
      </Accordion>
      <Footer />
    </>
  );
};

export default FAQ;
