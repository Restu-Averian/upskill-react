import React from "react";
import FeatureComp from "./EasyToWinComp";
import {
  FillUpIcon,
  StartIcon,
  WinnerIcon,
} from "../IconSVG/easytowin/EasyToWinIcon";
// import FillUpIcon from "../IconSVG/easytowin/FillUpIcon";
// import StartIcon from "../IconSVG/easytowin/StartIcon";
// import WinnerIcon from "../IconSVG/easytowin/WinnerIcon";

function EasyToWin(props) {
  const featureData = [
    {
      index: 1,
      icon: <StartIcon />,
      name: "Start",
      desc: `Pilih salah satu game
            <br />
            yang ingin kamu top up`,
    },
    {
      index: 2,
      icon: <FillUpIcon />,
      name: "Fill Up",
      desc: `Top up sesuai dengan
            <br />
            nominal yang sudah tersedia`,
    },
    {
      index: 3,
      icon: <WinnerIcon />,
      name: "Be a Winner",
      desc: `Siap digunakan untuk
            <br />
            improve permainan kamu`,
    },
  ];
  return (
    <div className="container-fluid">
      <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
        It’s Really That
        <br /> Easy to Win the Game
      </h2>
      <div className="row gap-lg-0 gap-4" data-aos="fade-up">
        {featureData.map((data) => {
          return (
            <div key={data.index} className="col-lg-4">
              <FeatureComp
                icon={data.icon}
                name={data.name}
                desc={data.desc}
                index={data.index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EasyToWin;
