import Footer from "../components/Footer/Footer";
function LandingLayout({ children }) {
  return (
    <div className="">
      <div className="w-full">{children}</div>
      <Footer></Footer>
    </div>
  );
}

export default LandingLayout;
