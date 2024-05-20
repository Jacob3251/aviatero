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

import Notifications from "./views/components/Dashboard/Notifications/Notifications";
import Default from "./views/components/Dashboard/Default/Default";
import Email from "./views/components/Dashboard/Email/Email";

import LandingManagement from "./views/components/Dashboard/LandingManagement/LandingManagement";

import Profile from "./views/components/Dashboard/Profile/Profile";
import AddClient from "./views/components/Dashboard/Clients/AddClient/AddClient";
import ManageClient from "./views/components/Dashboard/Clients/ManageClient/ManageClient";

import UpdateClient from "./views/components/Dashboard/Clients/UpdateClient/UpdateClient";
import AddLeads from "./views/components/Dashboard/Leads/AddLeads/AddLeads";
import UpdateLeads from "./views/components/Dashboard/Leads/UpdateLeads/UpdateLeads";
import ManageLeads from "./views/components/Dashboard/Leads/ManageLeads/ManageLeads";
import Role from "./views/components/Dashboard/Settings/Role/Role";
import Permission from "./views/components/Dashboard/Settings/Permission/Permission";
import Config from "./views/components/Dashboard/Settings/Config/Config";
import IndividualEmail from "./views/components/Dashboard/Email/IndividualEmail/IndividualEmail";
import IndividualNotification from "./views/components/Dashboard/Notifications/IndividualNotification/IndividualNotification";
import IndividualClient from "./views/components/Dashboard/Clients/IndividualClient/IndividualClient";
import IndividualLead from "./views/components/Dashboard/Leads/IndividualLead/IndividualLead";
import CreateRole from "./views/components/Dashboard/Settings/Role/Create/Create";
import CreatePermission from "./views/components/Dashboard/Settings/Permission/Create/Create";
import CreateService from "./views/components/Dashboard/LandingManagement/Home/Service/Create";
import AuthChecker from "./utils/Other/AuthChecker";

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
      element: (
        <AuthChecker>
          <DashboardBoard></DashboardBoard>
        </AuthChecker>
      ),
      children: [
        {
          path: "",
          index: 1,
          element: <Default></Default>,
        },
        { path: "clients/:id/update", element: <UpdateClient></UpdateClient> },
        { path: "clients/addclient", element: <AddClient></AddClient> },
        {
          path: "clients/manageclient",
          element: <ManageClient></ManageClient>,
        },
        {
          path: "clients/information/:id",
          element: <IndividualClient></IndividualClient>,
        },
        { path: "leads/:id/update", element: <UpdateLeads></UpdateLeads> },
        { path: "leads/addlead", element: <AddLeads></AddLeads> },
        {
          path: "leads/information/:id",
          element: <IndividualLead></IndividualLead>,
        },
        {
          path: "leads/manageleads",
          element: <ManageLeads></ManageLeads>,
        },
        {
          path: "notifications",
          element: <Notifications></Notifications>,
        },
        {
          path: "notifications/:id",
          element: <IndividualNotification></IndividualNotification>,
        },
        {
          path: "email",
          element: <Email></Email>,
        },
        {
          path: "email/:id",
          element: <IndividualEmail></IndividualEmail>,
        },
        {
          path: "lcm",
          element: <LandingManagement></LandingManagement>,
        },
        {
          path: "lcm/home/add-service",
          element: <CreateService></CreateService>,
        },

        {
          path: "settings/role",
          element: <Role></Role>,
        },
        {
          path: "settings/role/create",
          element: <CreateRole></CreateRole>,
        },
        {
          path: "settings/permission",
          element: <Permission></Permission>,
        },
        {
          path: "settings/permission/update",
          element: <Permission></Permission>,
        },
        {
          path: "settings/permission/create",
          element: <CreatePermission></CreatePermission>,
        },
        {
          path: "settings/config",
          element: <Config></Config>,
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
        <AuthChecker>
          <div className=" w-[80%] mx-auto   h-screen flex justify-center items-center">
            <div className="text-red-500 font-monrope text-[48px] animate__animated animate__infinite	infinite animate__pulse">
              PAGE IN DEVELOPMENT
            </div>
          </div>
        </AuthChecker>
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
