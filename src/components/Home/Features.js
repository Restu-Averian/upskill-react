import React from "react";
import Thumbnail1 from "../../assets/img/Thumbnail-1.png";
import Thumbnail2 from "../../assets/img/Thumbnail-2.png";
import Thumbnail3 from "../../assets/img/Thumbnail-3.png";
import Thumbnail4 from "../../assets/img/Thumbnail-4.png";
import Thumbnail5 from "../../assets/img/Thumbnail-5.png";
import {
  IconFeature1,
  IconFeature2,
  IconFeature3,
  IconFeature4,
  IconFeature5,
} from "../IconSVG/features/IconInFeatures";
import FeatureComp from "./FeatureComp";

function Features() {
  const dataFeatures = [
    {
      id: 1,
      name: "Super Mechs",
      icon: <IconFeature1 />,
      img: Thumbnail1,
      jenis: "Mobile",
    },
    {
      id: 2,
      name: "Call of Duty: Modern",
      icon: <IconFeature2 />,
      img: Thumbnail2,
      jenis: "Mobile",
    },
    {
      id: 3,
      name: "Mobile Legends",
      icon: <IconFeature3 />,
      img: Thumbnail3,
      jenis: "Mobile",
    },
    {
      id: 4,
      name: "Clash of Clans",
      icon: <IconFeature4 />,
      img: Thumbnail4,
      jenis: "Mobile",
    },
    {
      id: 5,
      name: "Valorant",
      icon: <IconFeature5 />,
      img: Thumbnail5,
      jenis: "Desktop",
    },
  ];
  return (
    <div className="container-fluid">
      <h2 className="text-4xl fw-bold color-palette-1 mb-30">
        Our Featured
        <br /> Games This Year
      </h2>
      <div
        className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
        data-aos="fade-up"
      >
        {dataFeatures.map((data) => {
          return (
            <FeatureComp
              key={data.id}
              name={data.name}
              jenis={data.jenis}
              img={data.img}
              icon={data.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Features;
