import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-8 flex justify-evenly">
      <Link to="/lights" className="focus:outline-none">
        <img src="src/assets/lightbulb.png" className="w-[18px] h-[27px]" />
      </Link>
      <Link to="/" className="focus:outline-none">
        <img src="src/assets/iconhome.png" className="w-[23px] h-[26px]" />
      </Link>
      <Link to="/settings" className="focus:outline-none">
        <img src="src/assets/settings.png" className="w-[25px] h-[25px]" />
      </Link>
    </div>
  );
};

export default Navigation;
