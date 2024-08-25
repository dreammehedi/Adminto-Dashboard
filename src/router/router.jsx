import { createBrowserRouter } from "react-router-dom";
import DashboardMainLayout from "../layout/DashboardMainLayout";
import Calendar from "../mega_menu/apps/Calendar";
import Error500 from "../mega_menu/pages/errors/Error500";
import Chat from "./../mega_menu/apps/Chat";
import MembersList from "./../mega_menu/apps/contacts/MembersList";
import Profile from "./../mega_menu/apps/contacts/Profile";
import Inbox from "./../mega_menu/apps/email/Inbox";
import Projects from "./../mega_menu/apps/Projects";
import Detailes from "./../mega_menu/apps/tasks/Detailes";
import KanbanBoard from "./../mega_menu/apps/tasks/KanbanBoard";
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

      // apps router
      {
        path: "/apps/calendar",
        element: <Calendar></Calendar>,
      },
      {
        path: "/apps/chat",
        element: <Chat></Chat>,
      },
      // email sub router
      {
        path: "/apps/inbox",
        element: <Inbox></Inbox>,
      },

      // tasks sub router
      {
        path: "/apps/kanban-board",
        element: <KanbanBoard></KanbanBoard>,
      },
      {
        path: "/apps/detailes",
        element: <Detailes></Detailes>,
      },
      {
        path: "/apps/projects",
        element: <Projects></Projects>,
      },

      // contacts sub router
      {
        path: "/apps/memberlist",
        element: <MembersList></MembersList>,
      },
      {
        path: "/apps/profile",
        element: <Profile></Profile>,
      },

      // extra pages router
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
