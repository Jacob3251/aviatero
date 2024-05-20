import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import AuthLayout from "../Layouts/AuthLayout";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { addToLocale } from "../../utils/helper";
import { AppContext } from "../../utils/contexts/AppContext";
function SignIn() {
  console.log();

  const currentLocation = window.location.pathname.split("/auth/")[1];
  const { isLogged } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/dashboard";
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  const handleSubmission = async (event) => {
    event.preventDefault();
    console.log("email: ", email, " Password: ", password);
    const response = await axios.post(
      "http://localhost:5000/api/user/autheticate",
      formData
    );
    if (response.data) {
      console.log(response.data);
      addToLocale(response.data);
      setFormData({
        email: "",
        password: "",
      });
      window.location.reload();
    } else {
      console.log(response);
    }
  };

  useEffect(() => {
    if (isLogged) {
      navigate(from, { replace: true });
    }
  }, [isLogged, navigate, from]);

  return (
    <AuthLayout>
      <div
        className={`flex flex-col items-center w-full min-w-[320px] max-w-[420px]
           mx-auto px-6`}
      >
        <div className="font-noto text-primary font-medium uppercase text-[36px] mb-[50px] md:text-[40px] md:mb-[40px] 2xl:text-[64px] 2xl:mb-[80px] ">
          Sign in
        </div>
        <div className="w-full flex justify-between items-center font-semibold text-[20px] mb-[30px] md:text-[22px] md:mb-[35px] 2xl:text-[24px]  2xl:mb-[40px]">
          <div className="font-monrope text-secondary">New Member?</div>
          <div
            onClick={() => navigate("/auth/signup")}
            className="font-noto text-primary uppercase cursor-pointer"
          >
            Sign Up
          </div>
        </div>
        <form className="w-full" onSubmit={handleSubmission}>
          <div className="flex flex-col w-full font-semibold text-[18px] md:text-[20px] 2xl:text-[24px] mb-[40px]">
            <label
              htmlFor=""
              className="font-monrope uppercase text-secondary mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@gmail.com"
              onChange={onChange}
              className="text-primary text-[18px] md:text-[20px] 2xl:text-[24px] placeholder:text-primary placeholder:text-opacity-90 bg-transparent border-0 border-b-2 border-primary py-2 outline-none"
            />
          </div>
          <div className="flex flex-col w-full font-semibold text-[18px] md:text-[20px] 2xl:text-[24px] mb-[20px] 2xl:mb-[40px] h-full relative">
            <label
              htmlFor=""
              className="font-monrope uppercase text-secondary mb-2"
            >
              Password
            </label>
            <input
              name="password"
              required
              onChange={onChange}
              type={showPass ? "text" : "password"}
              placeholder="* * * * * * * * * *"
              className="text-primary text-[18px] md:text-[20px] 2xl:text-[24px] placeholder:text-primary placeholder:text-opacity-90 bg-transparent border-0 border-b-2 border-primary py-2 outline-none"
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute bottom-3 right-2 text-primary cursor-pointer"
            >
              {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
          </div>

          <div className="w-full flex justify-start text-secondary font-monrope text-[16px] md:text-[18px] 2xl:text-[20px] mb-[20px] 2xl:mb-[40px] cursor-pointer">
            <div onClick={() => navigate("/auth/forgot-pass")}>
              Forgot Password?
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <input
              type="submit"
              className="w-auto bg-transparent rounded-lg cursor-pointer border-none outline-none hover:bg-primary duration-200 hover:text-secondary  text-primary font-monrope text-[20px] font-bold 2xl:text-[24px] px-3 py-3 uppercase"
            />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}

export default SignIn;
