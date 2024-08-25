import { createBrowserRouter } from "react-router-dom";
import DashboardMainLayout from "../layout/DashboardMainLayout";
import Error500 from "../mega_menu/pages/errors/Error500";
import Dashboard from "./../pages/dashboard/Dashboard";
import Error from "./../pages/error/Error";
import SignIn from "./../pages/signin/SignIn";
import SignUp from "./../pages/signup/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardMainLayout></DashboardMainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/error-404",
    element: <Error></Error>,
  },
  {
    path: "/error-500",
    element: <Error500></Error500>,
  },
]);

export default router;
