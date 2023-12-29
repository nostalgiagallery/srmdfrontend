import React from "react";
import "./App.css";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import DashBoard from "./features/DashBoard/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
