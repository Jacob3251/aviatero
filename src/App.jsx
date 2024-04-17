import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/pages/Home";
import Services from "./views/pages/Services";
import Testimonials from "./views/pages/Testimonials";
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
      path: "/testimonials",
      element: <Testimonials></Testimonials>,
    },
    {
      path: "/contact-us",
      element: <div>Hello world!</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
