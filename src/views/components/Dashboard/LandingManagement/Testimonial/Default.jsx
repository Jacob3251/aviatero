import { MdDelete } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { convertToReactSelectOptions } from "../../../../../utils/helper";
import Select from "react-select";
import { useRef } from "react";
import { FaRegFileImage } from "react-icons/fa6";
function Default() {
  const fileInputRef = useRef(null);
  const handleDivClick = () => {
    fileInputRef.current.click();
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    // Do whatever you want with the selected file
    console.log("Selected file:", file);
  };
  const permissionRef = useRef();
  const data = [
    {
      id: "1",
      title: "Very Bad",
    },
    {
      id: "2",
      title: "Somewhat Bad",
    },
    {
      id: "3",
      title: "Average",
    },
    {
      id: "4",
      title: "Somewhat Good",
    },
    {
      id: "5",
      title: "Very Good",
    },
  ];
  const selectOptions = convertToReactSelectOptions(data);
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#050d0d",
      padding: "0px",
    }),
    menu: (prev, state) => ({
      ...prev,
      backgroundColor: "#333333",
    }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: "#333333",
        color: "#D9B658",
        // paddingTop: "0px",
      };
    },
  };
  return (
    <div>
      <div className="font-monrope font-bold text-primary  text-[20px] uppercase">
        Testimonials
      </div>
      <div>
        <div className="my-5">
          <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
            Create
          </div>
          <form action="" className="mb-5">
            <div className="flex flex-col md:flex-row space-x-10 md:space-y-0 md:space-x-10 px-2">
              {/* Employee Name */}
              <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="name">Client Name</label>
                <input
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John Doe"
                />
              </div>
              {/* Employee Name */}
              <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="address">Address</label>
                <input
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="text"
                  name="address"
                  id="address"
                  required
                  placeholder="John Doe"
                />
              </div>
              {/* Employee Postion */}
              <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="service_content">Select Rating</label>
                <Select
                  ref={permissionRef}
                  name="colors"
                  styles={colourStyles}
                  options={selectOptions}
                  className="basic-multi-select bg-root"
                  classNamePrefix="select"
                  // onChange={handlePermissions}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-x-10 md:space-y-0 md:space-x-10 px-2">
              {/* Employee Name */}
              <div className="w-full text-primary font-semibold space-y-2 text-[18px] mt-5">
                <label htmlFor="name">Client Review</label>
                <textarea
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Aviate is a very good orgranization..."
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-x-10 md:space-y-0 md:space-x-10 px-2 mt-5">
              {/* Service Image */}
              <div
                htmlFor="serviceImage"
                onClick={handleDivClick}
                className="w-full flex flex-col justify-center items-center my-5 text-primary cursor-pointer border-2 border-primary p-5 rounded-md"
              >
                <FaRegFileImage className="text-[46px]" />
                <div>Upload File</div>
              </div>
              <input
                type="file"
                name="serviceImage"
                id="serviceImage"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
            </div>
            <div className="text-left">
              <input
                type="submit"
                className="w-auto uppercase bg-primary text-black  py-1 px-2 font-monrope font-semibold tracking-wider rounded-md border-2 border-primary hover:bg-transparent cursor-pointer duration-300 hover:text-primary"
                value="ADD testimonial"
              />
            </div>
          </form>
          {/* data table */}
          <div className="border-2 border-primary p-5">
            <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
              Manage Testimonials
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0">
              <thead className="text-xs text-primary uppercase bg-transparent  ">
                <tr className="uppercase font-monrope font-semibold text-[14px] border-2 border-secondary">
                  <th scope="col" className="px-6 py-5">
                    Serial No
                  </th>
                  <th scope="col" className="px-6 py-5">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-5">
                    Positions
                  </th>

                  <th scope="col" className="px-6 py-5">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="text-secondary font-monrope ">
                <tr className="table-row border-2 border-secondary">
                  <th scope="row" className="px-6 py-4  whitespace-nowrap ">
                    1
                  </th>
                  <td className="px-6 py-4 uppercase">Ali</td>
                  <td className="px-6 py-4 uppercase">Owner</td>

                  <td className="px-6 py-4 flex space-x-2 text-[24px]">
                    <div
                      // onClick={() =>
                      //   navigate(`/dashboard/clients/${item.id}/update`, {
                      //     state: { item: item },
                      //   })
                      // }
                      className="cursor-pointer duration-300 hover:text-green-500"
                    >
                      <PiNotePencil />
                    </div>
                    <div
                      // onClick={() => handleDelete(item)}
                      className="cursor-pointer duration-300 hover:text-red-500"
                    >
                      <MdDelete />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Default;
