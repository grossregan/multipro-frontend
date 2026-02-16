
interface serviceCard {
  serviceName: string;
  icon?: string;
  serviceDescription?: string;
}

function ServiceCard(data: serviceCard) {
  return (
    <div className="card mx-auto">
      <img src={data.icon} className="card-img-top" alt="" />
      <div className="card-body p-3">
        <h5 className="card-title">{data.serviceName}</h5>
        <p className="card-text fw-lighter">{data.serviceDescription}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
