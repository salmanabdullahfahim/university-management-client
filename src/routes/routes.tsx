import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { AdminPaths, AdminRoutes } from "./admin.routes";
import { routesGenerator } from "../utils/routesGenerator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenerator(AdminPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
