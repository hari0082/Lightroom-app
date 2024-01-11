// src/components/ControlButtons.jsx
import React from "react";
import { Link } from "react-router-dom";

const ControlBtn = ({ name, imageSrc, lightsCount }) => {
  return (
    <li className="rounded-lg bg-white w-[150px] h-[150px]">
      <Link to="/details">
        <img className="w-12 h-10 m-4" src={imageSrc} alt="" />
        <b className="text-lg ml-2">{name}</b>
        <p className="text-orange-500 font-semibold ml-2 text-sm">
          {lightsCount} lights
        </p>
      </Link>
    </li>
  );
};

export default ControlBtn;
