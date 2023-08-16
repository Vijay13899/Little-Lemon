import React from "react";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./App";
import { createHashRouter, RouterProvider } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
