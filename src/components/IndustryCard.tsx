//Used for Home.tsx, Industry.tsx, Services.tsx
interface CardDetails {
  industry: string;
  img?: string;
  description?: string;
  homeGrid: boolean;
}

function IndustryCard(details: CardDetails) {
  return details.homeGrid == true ? (
    //homeGrid == true for home landing page ONLY
    <div className="card mx-auto">
      <img src={details.img} className="card-img-top" alt="" />
      <div className="card-body p-3 grid">
        <h5 className="card-title">{details.industry}</h5>
        {/*modification based on whether the card has body text or not. Helps with formatting*/}
        {details.description && details.description.trim() !== "" ? (
          <p className="card-text">{details.description}</p>
        ) : null}
      </div>
    </div>
  ) : (
    //card declaration for all other pages
    <div className="card mx-auto">
      <img src={details.img} className="card-img-top" alt="" />
      <div className="card-body p-3">
        <h5 className="card-title">{details.industry}</h5>
        {/*modification based on whether the card has body text or not. Helps with formatting*/}
        {details.description && details.description.trim() !== "" ? (
          <p className="card-text">{details.description}</p>
        ) : null}
      </div>
    </div>
  );
}

export default IndustryCard;
