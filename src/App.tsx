import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "./fullPages/Home";
import Services from "./fullPages/Services";

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
        path:"services",
        element: <Services />,
      }
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
