import React from "react";
import "./index.css";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="flex justify-between p-8 items-center">
        <h1 className="text-white text-3xl font-bold">
          Control <br /> Panel
        </h1>
        <span className="rounded-full border-2 solid border-gray-300 size-14">
          <img
            className="rounded-full"
            src="https://xsgames.co/randomusers/avatar.php?g=female"
            alt=""
          />
        </span>
      </div>
      <div className="footer">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
