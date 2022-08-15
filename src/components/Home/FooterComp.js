import React from "react";

function FooterComp({ title, data }) {
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {data.map((comp) => {
          return (
            <li key={comp} className="mb-6">
              <a
                href=""
                className="text-lg color-palette-1 text-decoration-none"
              >
                {comp}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterComp;
