// pages/ControlPanel.js
import React from "react";
import ControlBtn from "../components/ControlButtons";
import Navigation from "../components/FooterNav";

const ControlPanel = () => {
  const buttonsData = [
    { name: "Bed Room", imageSrc: "src/assets/bed.png", lightsCount: 4 },
    { name: "Living Room", imageSrc: "src/assets/room.png", lightsCount: 2 },
    { name: "Kitchen", imageSrc: "src/assets/kitchen.png", lightsCount: 5 },
    { name: "Bathroom", imageSrc: "src/assets/bathtube.png", lightsCount: 1 },
    { name: "Outdoor", imageSrc: "src/assets/house.png", lightsCount: 5 },
    { name: "Balcony", imageSrc: "src/assets/balcony.png", lightsCount: 2 },
  ];

  return (
    <>
      <div className="bg-[#F6F8FB] min-h-screen rounded-t-3xl p-8 justify-between">
        <ul className="flex justify-between flex-wrap gap-6">
          {buttonsData.map((button, index) => (
            <ControlBtn
              key={index}
              name={button.name}
              imageSrc={button.imageSrc}
              lightsCount={button.lightsCount}
            />
          ))}
        </ul>
      </div>
      <Navigation />
    </>
  );
};

export default ControlPanel;
