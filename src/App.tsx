import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "./fullPages/Home";
import Services from "./fullPages/Services";
import About from "./fullPages/About";
import Industries from "./fullPages/Industries";
import FAQ from "./fullPages/FAQ";

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
      },
      {
        path:"about",
        element: <About />
      },
      {
        path:"industries",
        element: <Industries />
      },
      {
        path:"faq",
        element: <FAQ />
      }

    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
