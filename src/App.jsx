import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/pages/Home";
import Services from "./views/pages/Services";
import Contact from "./views/pages/Contact";
import Testimonials from "./views/pages/Testimonials";
import Team from "./views/pages/Team";
import "animate.css";
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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
