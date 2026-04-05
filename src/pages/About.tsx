import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Dan from "../assets/headshot.jpg";

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
      <div className="container-flex about-columns m-3">
        <div className="about-left">
          <p>
            As the owner of Multipro Maintenance, my goal has always been simple
            — to build a company that clients can truly rely on, not just
            another vendor you call when something breaks.
            <br />
            We approach every property as if it were our own. That means taking
            pride in the details, doing the job right the first time, and never
            cutting corners. I believe that when you trust someone with your
            property, you deserve honesty, consistency, and results you can
            count on.
          </p>
          <p>At Multipro, our core values guide everything we do:</p>
          <ul>
            <li>
              <strong>Accountability</strong> – We take ownership of our work
              and follow through on every commitment.
            </li>
            <li>
              <strong>Integrity</strong> – We operate with honesty and
              transparency in every interaction.
            </li>
            <li>
              <strong>Communication</strong> – We keep you informed every step
              of the way — no surprises.
            </li>
            <li>
              <strong>Quality Workmanship </strong>– We focus on doing things
              right, not just getting them done.
            </li>
            <li>
              <strong>Urgency </strong>– We understand that time matters and
              respond quickly to keep your operations running smoothly.
            </li>
          </ul>
          <p>
            We know that property maintenance isn’t just about fixing problems —
            it’s about keeping your residents satisfied, protecting your
            investment, and making your job easier. That’s a responsibility we
            don’t take lightly.
            <br />
            My team and I are committed to being a true partner you can depend
            on.
          </p>
        </div>
        <div className="about-right">
          <img
            src={Dan}
            className="rounded-circle mx-auto d-block"
            alt="Dan Rodich"
            style={{ width: "320px", height: "480px", objectFit: "cover" }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
