import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "./fullPages/Home";
import InterimStaff from "./fullPages/interimStaff";
import PreventativeMaintenance from "./fullPages/PreventativeMaintenance";
import CommonArea from "./fullPages/CommonArea";
import TenantIR from "./fullPages/TenantIR";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "ims",
        element: <InterimStaff />,
      },
      {
        path: "pm",
        element: <PreventativeMaintenance />,
      },
      {
        path: "caem",
        element: <CommonArea />,
      },
      {
        path: "tir",
        element: <TenantIR />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
