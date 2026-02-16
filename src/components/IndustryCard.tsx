//Used for Home.tsx, Industry.tsx, Services.tsx
interface CardDetails {
  industry: string;
  img?: string;
  description?: string;
  homeGrid: boolean;

}

function IndustryCard(details: CardDetails) {
  return details.homeGrid == true ? (
    <div className="card mx-auto">
      <img src={details.img} className="card-img-top" alt="" />
      <div className="card-body p-3 grid">
        <h5 className="card-title">{details.industry}</h5>
        {details.description && details.description.trim() !== "" ? (
          <p className="card-text fw-lighter">{details.description}</p>
        ) : null}
      </div>
    </div>
  ) : (
    <div className="card mx-auto">
      <img src={details.img} className="card-img-top" alt="" />
      <div className="card-body p-3">
        <h5 className="card-title">{details.industry}</h5>
        {details.description && details.description.trim() !== "" ? (
          <p className="card-text fw-lighter">{details.description}</p>
        ) : null}
      </div>
    </div>
  );
}

export default IndustryCard;
