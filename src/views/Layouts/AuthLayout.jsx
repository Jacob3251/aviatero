import LoginLogo from "../../assets/images/Logos/branding.png";
function AuthLayout({ children }) {
  return (
    <div className="max-w-[1440px] mx-auto w-full flex flex-col justify-start items-center h-[100vh]">
      <div className="h-[50px] w-[70px] md:h-[70px] md:w-[11  0px] 2xl:w-[140px] 2xl:h-[100px] my-[50px] xl:my-[50px]">
        <img className="w-full h-full" src={LoginLogo} alt="" />
      </div>
      <div className="w-full flex flex-1 justify-center items-start">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
