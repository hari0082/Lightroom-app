import React from "react";
import "./index.css";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="footer">
      <Outlet />
    </div>
  );
}

export default App;
