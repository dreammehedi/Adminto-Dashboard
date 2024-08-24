import { createBrowserRouter } from "react-router-dom";
import DashboardMainLayout from "../layout/DashboardMainLayout";
import Error from "./../pages/error/Error";
import SignIn from "./../pages/signin/SignIn";
import SignUp from "./../pages/signup/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardMainLayout></DashboardMainLayout>,
    errorElement: <Error></Error>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
]);

export default router;
