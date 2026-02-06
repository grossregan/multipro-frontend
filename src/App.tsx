import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "./Home";
import InterimStaff from "./interimStaff";

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
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
