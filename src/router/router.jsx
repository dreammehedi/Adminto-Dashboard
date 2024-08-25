import { createBrowserRouter } from "react-router-dom";
import DashboardMainLayout from "../layout/DashboardMainLayout";
import Error500 from "../mega_menu/pages/errors/Error500";
import ComingSoon from "./../mega_menu/pages/utility/ComingSoon";
import FAQs from "./../mega_menu/pages/utility/FAQs";
import Gallery from "./../mega_menu/pages/utility/Gallery";
import Invoice from "./../mega_menu/pages/utility/Invoice";
import Maintenence from "./../mega_menu/pages/utility/Maintenence";
import Pricing from "./../mega_menu/pages/utility/Pricing";
import Timeline from "./../mega_menu/pages/utility/Timeline";
import Dashboard from "./../pages/dashboard/Dashboard";
import Error from "./../pages/error/Error";
import SignIn from "./../pages/signin/SignIn";
import SignUp from "./../pages/signup/SignUp";

const router = createBrowserRouter([
  // main layout and home router
  {
    path: "/",
    element: <DashboardMainLayout></DashboardMainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/extra-pages/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/extra-pages/timeline",
        element: <Timeline></Timeline>,
      },
      {
        path: "/extra-pages/invoice",
        element: <Invoice></Invoice>,
      },
      {
        path: "/extra-pages/FAQs",
        element: <FAQs></FAQs>,
      },
      {
        path: "/extra-pages/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/extra-pages/maintenence",
        element: <Maintenence></Maintenence>,
      },
      {
        path: "/extra-pages/comingsoon",
        element: <ComingSoon></ComingSoon>,
      },
    ],
  },

  // authentication router
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },

  // error pages router
  {
    path: "/error-404",
    element: <Error></Error>,
  },
  {
    path: "/error-500",
    element: <Error500></Error500>,
  },

  // extra pages router
  {
    path: "/extra-pagess",
    children: [
      {
        path: "pricing",
        element: <Pricing></Pricing>,
      },
    ],
  },
]);

export default router;
