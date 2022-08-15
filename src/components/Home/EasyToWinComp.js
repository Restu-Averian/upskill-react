import React from "react";

function FeatureComp({ icon, index, name, desc }) {
  return (
    <div className="card feature-card border-0">
      {icon}
      <p className="fw-semibold text-2xl mb-2 color-palette-1">
        {index} {name}
      </p>
      <p
        className="text-lg color-palette-1 mb-0"
        dangerouslySetInnerHTML={{ __html: desc }}
      ></p>
    </div>
  );
}

export default FeatureComp;
