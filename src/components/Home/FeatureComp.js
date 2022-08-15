import React from "react";

function FeatureComp({ img, icon, name, jenis }) {
  return (
    <div className="featured-game-card position-relative">
      <a href="./src/detail.html">
        <div className="blur-sharp">
          <img src={img} width="205" height="270" alt="" />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              {icon}
              <p className="fw-semibold text-white text-xl m-0">{name}</p>
              <p className="fw-light text-white m-0">{jenis}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default FeatureComp;
