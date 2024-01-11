import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ControlPanel from "./pages/ControlPanel.jsx";
import DetailsSite from "./pages/Detailsview.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<NotFound />}>
      <Route path="/" element={<ControlPanel />} />
      <Route path="/Details" element={<DetailsSite />} />{" "}
      {/* husk at tilføje id til path: /Details/:id */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
