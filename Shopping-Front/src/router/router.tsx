import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ItemsPage } from "../pages/items/ItemsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ItemsPage />,
  },
]);
