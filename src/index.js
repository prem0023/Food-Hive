import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import { RouterProvider } from "react-router-dom";

root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
