import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function DefaultLayout({ children }) {
  return (
    // bg-[#1E1E1E]
    <div className="w-full max-h-screen max-w-[1440px] mx-auto relative">
      <div className="bg-[#1e1e1e] absolute w-full top-0 ">
        <Navbar></Navbar>
      </div>
      <div className="absolute top-[213px] w-full">
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default DefaultLayout;
