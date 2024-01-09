import { useState } from "react";
import "./index.css";
import ControlPanel from "./pages/controlpanel";

function App() {
  return (
    <>
      <div className="flex justify-between p-6 items-center ">
        <h1 className="text-white text-3xl font-bold">
          Control <br /> Panel
        </h1>
        <span className="rounded-full border-2 solid border-gray-300 size-14">
          <img
            className="rounded-full"
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            alt=""
          />
        </span>
      </div>
      <ControlPanel />
    </>
  );
}

export default App;
