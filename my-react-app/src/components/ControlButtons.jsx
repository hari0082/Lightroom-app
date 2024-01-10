import React from "react";

const ControlBtn = ({ name, imageSrc, lightsCount }) => {
  return (
    <li className="rounded-lg bg-white w-[150px] h-[150px]">
      <a className="flex flex-col" href="">
        <img className="w-16 m-4" src={imageSrc} alt="" />
        <b className="text-lg ml-2">{name}</b>
        <p className="text-orange-500 font-semibold ml-2 text-sm">
          {lightsCount} lights
        </p>
      </a>
    </li>
  );
};

export default ControlBtn;
