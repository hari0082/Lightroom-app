import React from "react";
import Navigation from "../components/FooterNav";

const DetailsSite = () => {
  return (
    <>
      <span className="flex gap-4 m-4 pb-4 pt-10">
        <button className="border-2 border-white p-2 rounded-xl w-1/2 text-white">
          Klik her
        </button>
        <button className="border-2 border-white p-2 rounded-xl w-1/2 text-white">
          Klik her
        </button>
        <button className="border-2 border-white p-2 rounded-xl w-1/2 text-white">
          Klik her
        </button>
      </span>
      <div className="bg-[#F6F8FB] min-h-screen rounded-t-3xl p-8">
        <h2>Intensity</h2>
        <div>Slider her</div>
        <h2>Colors</h2>
        <ul className="flex">
          <li>
            <button className="border-2 border-green-500 p-2 rounded-full text-transparent">
              Green
            </button>
          </li>
          <li>
            <button className="border-2 border-green-500 p-2 rounded-full text-transparent">
              Green
            </button>
          </li>
          <li>
            <button className="border-2 border-green-500 p-2 rounded-full text-transparent">
              Green
            </button>
          </li>
        </ul>
        <h2>Scenes</h2>
        <ul>
          <li>
            <button>Birthday</button>
          </li>
        </ul>
      </div>
      <Navigation />
    </>
  );
};

export default DetailsSite;
