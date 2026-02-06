import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "./fullPages/Home";
import InterimStaff from "./fullPages/interimStaff";
import PreventativeMaintenance from "./fullPages/PreventativeMaintenance";

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
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
