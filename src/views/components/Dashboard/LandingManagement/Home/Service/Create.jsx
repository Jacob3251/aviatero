import { Link } from "react-router-dom";

function Create() {
  return (
    <div>
      <div className="p-5">
        <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
          <Link
            to="/dashboard/lcm"
            className="no-underline text-primary tracking-wider"
          >
            FG{" "}
          </Link>

          <span>/ Add Service Page</span>
        </div>
        <div>
          <form
            action=""
            // onSubmit={handleSubmit}
            className="flex flex-col space-y-10"
          >
            <div className="flex space-x-10">
              {/* Name */}
              <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="service_title">Service Title</label>
                <input
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="text"
                  name="service_title"
                  id="service_title"
                  required
                  placeholder="Exp: Super-Admin, Admin, Officer"
                  //   onChange={onChange}
                  //   value={title}
                />
              </div>
              <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="service_link">Service Link</label>
                <input
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="text"
                  name="service_link"
                  id="service_link"
                  required
                  placeholder="Exp: Super-Admin, Admin, Officer"
                  //   onChange={onChange}
                  //   value={title}
                />
              </div>
            </div>

            <div className="">
              <input
                className="bg-primary text-white px-5 py-3 text-[18px] rounded-sm hover:border-primary border-2 border-transparent hover:bg-transparent  duration-300 cursor-pointer"
                type="submit"
                value="SUBMIT"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
