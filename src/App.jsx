import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/pages/Home";
import Services from "./views/pages/Services";
import Contact from "./views/pages/Contact";
import Testimonials from "./views/pages/Testimonials";
import Team from "./views/pages/Team";
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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
