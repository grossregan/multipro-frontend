interface pageData {
  pageName: string;
  serviceDescription: string;
  imgSrc?: string;
}

function PageHeader(data: pageData) {
  return (
    <>
      <div
        className="container-fluid text-center d-flex align-items-center flex-column"
        style={{ height: "700px", backgroundColor: "rgb(161, 161, 161)" }}
      >
        <div className="m-auto">
          <h1 className="fw-bolder fs-1">{data.pageName}</h1>
          <p className="fs-5">{data.serviceDescription}</p>
        </div>
      </div>
      <img src={data.imgSrc} className="rounded mx-auto d-block" alt="" />
    </>
  );
}

export default PageHeader;
