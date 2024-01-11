import React from "react";
import Navigation from "../components/FooterNav";

const DetailsSite = () => {
  return (
    <>
      <span className="m-2 pb-4 pt-10 flex gap-4 overflow-x-scroll scrollbar-hidden">
        <button className="flex-shrink-0 flex justify-around items-center bg-white p-2 rounded-xl text-[#002D67] w-[124px] h-[45px] font-bold text-xs">
          <img src="src/assets/light.png" alt="" />
          Main light
        </button>
        <button className="flex-shrink-0 flex justify-around items-center bg-white p-2 rounded-xl text-[#002D67] w-[124px] h-[45px] font-bold text-xs">
          <img src="src/assets/light.png" alt="" />
          Desk light
        </button>
        <button className="flex-shrink-0 flex justify-around items-center bg-white p-2 rounded-xl text-[#002D67] w-[124px] h-[45px] font-bold text-xs">
          <img src="src/assets/light.png" alt="" />
          Bed light
        </button>
      </span>
      <div className="bg-[#F6F8FB] min-h-screen rounded-t-3xl p-8">
        <h2 className="text-lg font-bold text-[#002D67]">Intensity</h2>
        <div className="flex justify-between items-center mt-2 mb-8">
          <img src="src/assets/solution.png" alt="" />
          <span>---------------------------------O-----</span>
          <img src="src/assets/solution+.png" alt="" />
        </div>
        <h2 className="text-lg font-bold text-[#002D67] mb-2">Colors</h2>
        <ul className="flex gap-3">
          <li>
            <button className=" bg-green-500 p-2 rounded-full text-transparent w-8 h-8">
              Green
            </button>
          </li>
          <li>
            <button className=" bg-green-500 p-2 rounded-full text-transparent w-8 h-8">
              Green
            </button>
          </li>
          <li>
            <button className=" bg-green-500 p-2 rounded-full text-transparent w-8 h-8">
              Green
            </button>
          </li>
          <li>
            <button className=" bg-green-500 p-2 rounded-full text-transparent w-8 h-8">
              Green
            </button>
          </li>
          <li>
            <button className=" bg-green-500 p-2 rounded-full text-transparent w-8 h-8">
              Green
            </button>
          </li>
        </ul>
        <h2 className="text-lg font-bold text-[#002D67] mt-4">Scenes</h2>
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
