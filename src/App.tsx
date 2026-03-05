import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Industries from "./pages/Industries";
import FAQ from "./pages/FAQ";

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
