//Used for Home.tsx, Industry.tsx, Services.tsx
interface CardDetails {
  industry: string;
  img?: string;
  description?: string;
}

function IndustryCard(details: CardDetails) {
  return (
    //homeGrid == true for home landing page ONLY
    <div className="card mx-auto">
      <img src={details.img} className="card-img-top" alt="" />
      <div className="card-body p-3 grid">
        <h5 className="card-title">{details.industry}</h5>
        {/*modification based on whether the card has body text or not. Helps with formatting*/}
        {details.description && details.description.trim() !== "" ? (
          <p
            className="card-text"
            style={{
              fontFamily:
                "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
              fontSize: "15px",
              fontWeight:"lighter",
            }}
          >
            {details.description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default IndustryCard;
