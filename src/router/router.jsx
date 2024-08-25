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
    children:[
      {
        path:"/",
        element:<h2 className="text-4xl text-white">Hello world</h2>

      },
      {
        path:'x',
        element: <h1 className="text-4xl text-white" >testing route </h1>
      }
    ]
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
