import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/pages/Home";
import Services from "./views/pages/Services";
import Contact from "./views/pages/Contact";
import Testimonials from "./views/pages/Testimonials";
import Team from "./views/pages/Team";
import "animate.css";
import SignUp from "./views/pages/SignUp";
import SignIn from "./views/pages/SignIn";
import ForgetPassword from "./views/pages/ForgetPassword";
import DashboardBoard from "./views/pages/DashboardBoard";
import Clients from "./views/components/Dashboard/Clients/Clients";
import Notifications from "./views/components/Dashboard/Notifications/Notifications";
import Default from "./views/components/Dashboard/Default/Default";
import Email from "./views/components/Dashboard/Email/Email";

import LandingManagement from "./views/components/Dashboard/LandingManagement/LandingManagement";
import Settings from "./views/components/Dashboard/Settings/Settings";
import Profile from "./views/components/Dashboard/Profile/Profile";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/services",
      element: <Services></Services>,
    },

    {
      path: "/dashboard",
      element: <DashboardBoard></DashboardBoard>,
      children: [
        {
          path: "",
          index: 1,
          element: <Default></Default>,
        },
        { path: "clients", element: <Clients></Clients> },
        { path: "clients/addclient", element: <Clients></Clients> },
        { path: "clients/manageclient", element: <Clients></Clients> },
        {
          path: "notifications",
          element: <Notifications></Notifications>,
        },
        {
          path: "email",
          element: <Email></Email>,
        },
        {
          path: "lcm/option1",
          element: <LandingManagement></LandingManagement>,
        },
        {
          path: "lcm/option2",
          element: <LandingManagement></LandingManagement>,
        },
        {
          path: "settings",
          element: <Settings></Settings>,
        },
        {
          path: "profile",
          element: <Profile></Profile>,
        },
      ],
    },
    // {
    //   path: "/partners",
    //   element: (
    //     <div className=" w-[80%] mx-auto   h-screen flex justify-center items-center">
    //       <div className="text-red-500 font-monrope text-[48px] animate__animated animate__infinite	infinite animate__pulse">
    //         PAGE IN DEVELOPMENT
    //       </div>
    //     </div>
    //   ),
    // },
    {
      path: "/blogs",
      element: (
        <div className=" w-[80%] mx-auto   h-screen flex justify-center items-center">
          <div className="text-red-500 font-monrope text-[48px] animate__animated animate__infinite	infinite animate__pulse">
            PAGE IN DEVELOPMENT
          </div>
        </div>
      ),
    },

    {
      path: "/contact-us",
      element: <Contact></Contact>,
    },
    {
      path: "/testimonials",
      element: <Testimonials></Testimonials>,
    },
    {
      path: "/teams",
      element: <Team></Team>,
    },
    // auth pages
    {
      path: "/auth/signup",
      element: <SignUp></SignUp>,
    },
    {
      path: "/auth/signin",
      element: <SignIn></SignIn>,
    },
    {
      path: "/auth/forgot-pass",
      element: <ForgetPassword></ForgetPassword>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
