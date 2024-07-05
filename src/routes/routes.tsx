import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { AdminPaths } from "./admin.routes";
import { routesGenerator } from "../utils/routesGenerator";

import { StudentPaths } from "./student.route";
import { FacultyPaths } from "./faculty.routes";

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
    path: "/faculty",
    element: <App />,
    children: routesGenerator(FacultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenerator(StudentPaths),
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
