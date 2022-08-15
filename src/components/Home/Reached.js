import React, { Fragment } from "react";

function Reached(props) {
  const dataReached = [
    {
      id: 1,
      main: "290M+",
      submain: "Players Top Up",
    },
    {
      id: 2,
      main: "12.500",
      submain: "Games Available",
    },
    {
      id: 3,
      main: "99,9%",
      submain: "Happy Players",
    },
    {
      id: 4,
      main: "4.7",
      submain: "Rating Worldwide",
    },
  ];
  return (
    <div className="container-fluid">
      <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
        {dataReached.map((data) => {
          return (
            <Fragment key={data.id}>
              <div className={`${data.id !== 1 ? "ms-lg-35" : ""} me-lg-35`}>
                <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                  {data.main}
                </p>
                <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                  {data.submain}
                </p>
              </div>
              <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
              <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Reached;
