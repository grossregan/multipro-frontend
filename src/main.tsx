import "bootstrap/dist/css/bootstrap.css";


import { RouterProvider } from "react-router-dom";
import router from "./App";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
