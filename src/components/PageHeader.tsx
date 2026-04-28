interface pageData {
  pageName: string;
  serviceDescription: string;
}

function PageHeader(data: pageData) {
  return (
    <>
      <div
        className="container-fluid text-center d-flex align-items-center flex-column"
        style={{ height: "550px", backgroundColor: "#d9d9d9" }}
      >
        <div className="m-auto">
          <h1 className="fw-bolder fs-1">{data.pageName}</h1>
          <p className="fs-5">{data.serviceDescription}</p>
        </div>
      </div>
    </>
  );
}

export default PageHeader;
