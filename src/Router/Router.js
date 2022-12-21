import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Layout1 from "../Pages/Layout1/Layout1";
import Layout2 from "../Pages/Layout2/Layout2";
import Layout3 from "../Pages/Layout3/Layout3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Layout1></Layout1>,
      },
      {
        path: "/layout2",
        element: <Layout2></Layout2>,
      },
      {
        path: "/layout3",
        element: <Layout3></Layout3>,
      },
    ],
  },
]);

export default router;
