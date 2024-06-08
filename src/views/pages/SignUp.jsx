import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import AuthLayout from "../Layouts/AuthLayout";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { addToLocale } from "../../utils/helper";
import { AppContext } from "../../utils/contexts/AppContext";

function SignUp() {
  const navigate = useNavigate();
  const { isLogged } = useContext(AppContext);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/dashboard";
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    c_number: "",
    name: "",
  });

  const { email, password, confirm_password, c_number, name } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPass(!showPass);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowPassConfirm(!showPassConfirm);
  };

  const handleSubmission = async (event) => {
    event.preventDefault();
    console.log(formData);
    if (password !== confirm_password) {
      setFormData({
        email: "",
        password: "",
        confirm_password: "",
        c_number: "",
        name: "",
      });
      event.target.reset();
      return toast.error("Passwords did not match. Try again!!");
    }
    const { data } = await axios.get(
      "https://consultancy-crm-serverside.onrender.com/api/user"
    );
    let role = "";
    if (data.data.length > 1) {
      role = "Officer";
    } else {
      role = "Super-Admin";
    }
    const user = {
      name: name,
      email: email,
      role: role,
      password: password,
      verified: false,
      contact_no: c_number,
    };
    return await axios
      .post("https://consultancy-crm-serverside.onrender.com/api/user", user)
      .then((data) => {
        console.log(data);
        addToLocale(data.data);
        setFormData({
          email: "",
          password: "",
          confirm_password: "",
          c_number: "",
          name: "",
        });
        toast.success("User registration Successfull", {
          style: {
            backgroundColor: "#333333",
            color: "#fafafa",
          },
          className: "font-monrope",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };
  useEffect(() => {
    if (isLogged) {
      navigate(from, { replace: true });
    }
  }, [isLogged, navigate, from]);
  return (
    <AuthLayout>
      <div className="flex flex-col items-center w-full min-w-[320px] max-w-[85%] mx-auto px-6 ">
        <div className="font-noto text-primary font-medium uppercase text-[36px] mb-[50px] md:text-[40px] md:mb-[40px] 2xl:text-[64px] 2xl:mb-[80px] ">
          Sign up
        </div>
        <div className="w-full flex justify-between items-center font-semibold text-[20px] mb-[30px] md:text-[22px] md:mb-[35px] 2xl:text-[24px]  2xl:mb-[40px]">
          <div className="font-monrope text-secondary">Already a Member?</div>
          <div
            onClick={() => navigate("/auth/signin")}
            className="font-noto text-primary uppercase cursor-pointer"
          >
            Sign In
          </div>
        </div>
        <form className="w-full" onSubmit={handleSubmission}>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-[20px] md:gap-y-[0px] md:gap-x-[50px]">
            <div className="flex flex-col w-full font-semibold text-[18px] md:text-[20px] 2xl:text-[24px] mb-[40px]">
              <label
                htmlFor="name"
                className="font-monrope uppercase text-secondary mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="John"
                onChange={onChange}
                className="text-primary text-[18px] md:text-[20px] 2xl:text-[24px] placeholder:text-primary placeholder:text-opacity-90 bg-transparent border-0 border-b-2 border-primary py-2 outline-none"
              />
            </div>
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
                className="absolute top-10 right-5 text-primary cursor-pointer"
              >
                {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>

            <div className="flex flex-col w-full font-semibold text-[18px] md:text-[20px] 2xl:text-[24px] mb-[20px] 2xl:mb-[40px] h-full relative">
              <label
                htmlFor=""
                className="font-monrope uppercase text-secondary mb-2"
              >
                Confirm Password
              </label>
              <input
                name="confirm_password"
                required
                onChange={onChange}
                type={showPassConfirm ? "text" : "password"}
                placeholder="* * * * * * * * * *"
                className="text-primary text-[18px] md:text-[20px] 2xl:text-[24px] placeholder:text-primary placeholder:text-opacity-90 bg-transparent border-0 border-b-2 border-primary py-2 outline-none"
              />
              <div
                onClick={toggleConfirmPasswordVisibility}
                className="absolute top-10 right-5 text-primary cursor-pointer"
              >
                {showPassConfirm ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            <div className="flex flex-col w-full font-semibold text-[18px] md:text-[20px] 2xl:text-[24px] mb-[20px] 2xl:mb-[40px] h-full">
              <label
                htmlFor=""
                className="font-monrope uppercase text-secondary mb-2"
              >
                Contact number
              </label>
              <input
                name="c_number"
                required
                onChange={onChange}
                type="text"
                placeholder="017XXXXXXXX"
                className="text-primary text-[18px] md:text-[20px] 2xl:text-[24px] placeholder:text-primary placeholder:text-opacity-90 bg-transparent border-0 border-b-2 border-primary py-2 outline-none"
              />
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

export default SignUp;
