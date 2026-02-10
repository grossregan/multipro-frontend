
interface CardDetails {
  industry: string;
  img: string;
}

function GridCard(details: CardDetails) {
  return (
    <div className="card">
      <img src={details.img} className="card-img-top" alt="" />
      <div className="card-body p-3 grid">
        <h5 className="card-title">{details.industry}</h5>
      </div>
    </div>
  );
}

export default GridCard