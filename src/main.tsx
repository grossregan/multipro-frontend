import "bootstrap/dist/css/bootstrap.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

import { RouterProvider } from "react-router-dom";
import router from "./App";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics />
    <SpeedInsights />
    <RouterProvider router={router} />
  </StrictMode>,
);
