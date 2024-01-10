import React from "react";
import "./index.css";
import ControlPanel from "./pages/controlpanel";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-between p-8 items-center">
        <h1 className="text-white text-3xl font-bold">
          Control <br /> Panel {/* Skal laves dynamisk senere */}
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
    </BrowserRouter>
  );
}

export default App;
