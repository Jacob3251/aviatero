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
import UpdateRole from "./views/components/Dashboard/Settings/Role/Update/Update";
import CreatePermission from "./views/components/Dashboard/Settings/Permission/Create/Create";
import CreatePage from "./views/components/Dashboard/LandingManagement/Home/Service/Create";
import ViewPage from "./views/components/Dashboard/LandingManagement/Home/Service/View";
import UpdatePage from "./views/components/Dashboard/LandingManagement/Home/Service/Update";
import AuthChecker from "./utils/Other/AuthChecker";
import Blogs from "./views/pages/Blogs";
import User from "./views/components/Dashboard/Settings/User/User";
import Update from "./views/components/Dashboard/Settings/User/Update/Update";
import View from "./views/components/Dashboard/Settings/User/View/View";

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
        {
          path: "clients/:userid/update",
          element: <UpdateClient></UpdateClient>,
        },
        { path: "clients/addclient", element: <AddClient></AddClient> },
        {
          path: "clients/manageclient",
          element: <ManageClient></ManageClient>,
        },
        {
          path: "clients/information/:id",
          element: <IndividualClient></IndividualClient>,
        },
        { path: "leads/:leadid/update", element: <UpdateLeads></UpdateLeads> },
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
          path: "lcm/home/add-page",
          element: <CreatePage></CreatePage>,
        },
        {
          path: "lcm/home/view-page",
          element: <ViewPage></ViewPage>,
        },
        {
          path: "lcm/home/update-page",
          element: <UpdatePage></UpdatePage>,
        },

        {
          path: "settings/user-management",
          element: <User></User>,
        },
        {
          path: "settings/user-management/:id",
          element: <View></View>,
        },
        {
          path: "settings/user-management/:id/update",
          element: <Update></Update>,
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
          path: "settings/role/:id/update",
          element: <UpdateRole></UpdateRole>,
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
    {
      path: "/blogs/:id",
      element: <Blogs></Blogs>,
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
