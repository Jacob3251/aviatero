import { Link, useLocation, useNavigate } from "react-router-dom";
import { formatDate } from "../../../../../../utils/helper";
import { RiUserFill } from "react-icons/ri";
import { useEffect } from "react";
import Loader from "../../../../Reusable/Loader/Loader";

function View() {
  const location = useLocation();
  const user = location?.state?.item;
  console.log(user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      return navigate("/dashboard/settings/user-management");
    }
  }, [location, user, navigate]);
  return (
    <>
      {user ? (
        <div className="w-full h-full">
          <div className="p-5">
            <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
              <Link
                to="/dashboard"
                className="no-underline text-primary tracking-wider"
              >
                Dashboard
              </Link>
              {"  "}
              <span className="text-[24px]">/</span>
              {"  "}
              <span
                className="cursor-pointer"
                onClick={() => {
                  navigate("/dashboard/settings/user-management");
                }}
              >
                User
              </span>
              <span className="text-[24px]">/</span>
              {"  "}
              <span>{user?.name}</span>
            </div>
            <div>
              <div className="w-full max-w-[200px] mb-5 aspect-square">
                {user?.photolink ? (
                  <img className="w-full h-full" src={user?.photolink} alt="" />
                ) : (
                  <div className="bg-slate-400 w-[300px] h-[250px] flex justify-center items-center rounded-lg mb-[50px]">
                    <RiUserFill className="text-slate-100 text-[128px]" />
                  </div>
                )}
              </div>
              <form action="" className="flex flex-col space-y-10">
                <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
                  {/*User Name */}
                  <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                    <label htmlFor="name">User Name</label>
                    <input
                      className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="John Doe.."
                      readOnly
                      // onChange={onChange}
                      value={user?.name}
                    />
                  </div>
                  {/* Email */}
                  <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
                    <label htmlFor="clientEmail">User Email</label>
                    <input
                      // onChange={onChange}
                      className="w-full py-2  text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                      type="email"
                      name="clientEmail"
                      id="clientEmail"
                      placeholder="example@mail.com"
                      value={user?.email}
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
                  {/* client type */}
                  <div className=" w-full text-primary font-semibold space-y-2 text-[18px] flex flex-col ">
                    <label htmlFor="clientEmail">User Role</label>

                    <div className="px-2 py-3 bg-primary  bg-opacity-15 text-primary font-bold rounded-md text-center inline-block w-[40%]">
                      {user?.role}
                    </div>
                  </div>
                  {/* CLIENT DESC */}
                  <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
                    <label htmlFor="clientDesc">Verification Status</label>
                    {user?.verified ? (
                      <div className="px-2 py-3 bg-green-500 bg-opacity-15 text-green-500 font-bold rounded-md text-center w-[40%]">
                        Verified
                      </div>
                    ) : (
                      <div className="px-2 py-3 bg-[#EA5455] bg-opacity-15 text-[#EA5455] font-bold rounded-md text-center w-[40%]">
                        Not Verified
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
                  {/* client phone number */}
                  <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                    <label htmlFor="phone_no">User Contact Number</label>
                    <input
                      required
                      // onChange={onChange}
                      value={user?.contact_no}
                      className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                      type="text"
                      name="phone_no"
                      id="phone_no"
                      placeholder="EXP: 017-XXXX-XXXX"
                      readOnly
                    />
                  </div>
                  {/* Preferred Destination */}
                  <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
                    <label htmlFor="preferredDestination">Joined At</label>
                    <input
                      value={
                        user?.created_at ? formatDate(user?.created_at) : ""
                      }
                      // onChange={onChange}
                      required
                      className="w-full py-2  text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                      type="text"
                      name="preferredDestination"
                      id="preferredDestination"
                      placeholder="Exp: THAILAND, UK, USA, CANADA"
                      readOnly
                    />
                  </div>
                </div>

                <div className="">
                  <div
                    onClick={() =>
                      navigate(
                        `/dashboard/settings/user-management/${user.id}/update`,
                        {
                          state: { item: user },
                        }
                      )
                    }
                    className="bg-primary text-root font-semibold font-monrope text-center hover:text-primary rounded-md px-5 py-3 text-[18px]  hover:border-primary border-2 border-transparent hover:bg-transparent  duration-300 cursor-pointer"
                  >
                    Update {user?.name}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
          <Loader></Loader>
        </div>
      )}
    </>
  );
}

export default View;
