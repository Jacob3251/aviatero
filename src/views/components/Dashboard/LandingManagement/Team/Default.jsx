import { useContext, useRef, useState } from "react";
import { FaRegFileImage } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import Select from "react-select";
import { convertToReactSelectOptions } from "../../../../../utils/helper";
import useRoles from "../../../../../utils/hooks/useRoles";
import axios from "axios";
import toast from "react-hot-toast";
import useTeamMember from "../../../../../utils/hooks/useTeamMember";
import EmptyComponent from "../../../EmptyComponent/EmptyComponent";
import { AppContext } from "../../../../../utils/contexts/AppContext";

function Default() {
  const [roles, rolesLoading] = useRoles();
  const { loggedUserData } = useContext(AppContext);
  const [teamMemberData, teamMemberDataLoading, setTeamMemberData] =
    useTeamMember();
  const [memberImage, setMemberImage] = useState(null);
  const [position, setPosition] = useState("");
  const fileInputRef = useRef(null);
  const handleDivClick = () => {
    fileInputRef.current.click();
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    // Do whatever you want with the selected file
    // console.log("Selected file:", file);
    setMemberImage(file);
  };
  const positionRef = useRef();
  const data = [
    {
      value: "CEO",
      label: "Founded & CEO",
      desc: "",
    },
    {
      value: "COO",
      label: "Chief Operating Officer",
      desc: "",
    },
    {
      value: "CFO",
      label: "Chief Financial Officer",
      desc: "",
    },
    {
      value: "CTO",
      label: "Chief Technology Officer",
      desc: "",
    },
    {
      value: "CMO",
      label: "Chief Marketing Officer",
      desc: "",
    },
    {
      value: "HRM",
      label: "Human Resources Manager",
      desc: "",
    },
    {
      value: "AcademicAdvisor",
      label: "Academic Advisor",
      desc: "",
    },
    {
      value: "AdmissionsCounselor",
      label: "Admissions Counselor",
      desc: "",
    },
    {
      value: "CareerCounselor",
      label: "Career Counselor",
      desc: "",
    },
    {
      value: "EducationConsultant",
      label: "Education Consultant",
      desc: "",
    },
    {
      value: "ProgramCoordinator",
      label: "Program Coordinator",
      desc: "",
    },
    {
      value: "MarketingSpecialist",
      label: "Marketing Specialist",
      desc: "",
    },
    {
      value: "ContentWriter",
      label: "Content Writer",
      desc: "",
    },
    {
      value: "ResearchAnalyst",
      label: "Research Analyst",
      desc: "",
    },
    {
      value: "OfficeManager",
      label: "Office Manager",
      desc: "",
    },
    {
      value: "ITSupport",
      label: "IT Support",
      desc: "",
    },
    {
      value: "AdministrativeAssistant",
      label: "Administrative Assistant",
      desc: "",
    },
    {
      value: "FinanceManager",
      label: "Finance Manager",
      desc: "",
    },
    {
      value: "ClientRelationsManager",
      label: "Client Relations Manager",
      desc: "",
    },
    {
      value: "EventCoordinator",
      label: "Event Coordinator",
      desc: "",
    },
  ];

  const selectOptions = data;
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
  const [formData, setFormData] = useState({
    member_name: "",
  });
  const { member_name } = formData;
  const onTeamMemberChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // onChange Function for changing the member position
  const handlePosition = (newValue) => {
    if (newValue) {
      setPosition(newValue.label.toString());
    }
    // console.log(newValue);
  };
  const handleMemberAddition = async (event) => {
    event.preventDefault();
    console.log(formData);
    // memberImage
    const memberData = {
      member_name,
      member_position: position,
      file: memberImage,
    };
    console.log("service package data", memberData);
    // console.log(data);
    const { data } = await axios.post(
      "https://consultancy-crm-serverside.onrender.com/api/teammember",
      memberData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${loggedUserData.token}`,
        },
      }
    );
    if (data) {
      console.log(data);
      setTeamMemberData((prev) => [...prev, data.data]);
      setFormData({
        member_name: "",
      });
      setPosition("");
      positionRef.current.clearValue();
      fileInputRef.current.value = null;
      toast.success("Team Member Added");
    } else {
      toast.error("Team Member Not Added");
    }
  };
  const handleDelete = async (item) => {
    const confirm = window.confirm(
      `Are you sure you to delete ${item.member_name} ?`
    );
    if (confirm) {
      await axios
        .delete(
          `https://consultancy-crm-serverside.onrender.com/api/teammember/${item.id}`,
          {
            headers: {
              Authorization: `Bearer ${loggedUserData.token}`,
            },
          }
        )
        .then((data) => {
          toast.success(`${item.member_name} deleted successfully.`);
          setTeamMemberData(teamMemberData.filter((i) => i.id !== item.id));
        })
        .catch((error) => {
          toast.error(`Couldn't delete due to ${error.message}`);
        });
    }
  };
  return (
    <>
      {rolesLoading === false ? (
        <div>
          <div className="font-monrope font-bold text-primary  text-[20px] uppercase">
            Teams / Members
          </div>
          <div>
            <div className="my-5">
              <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
                Team Section
              </div>
              <form
                onSubmit={handleMemberAddition}
                className="mb-5"
                encType="multipart/form-data"
              >
                <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-10 px-2">
                  {/* Employee Name */}
                  <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                    <label htmlFor="member_name">Member name</label>
                    <input
                      className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                      type="text"
                      name="member_name"
                      id="member_name"
                      required
                      placeholder="John Doe"
                      value={member_name}
                      onChange={onTeamMemberChange}
                    />
                  </div>
                  {/* Employee Postion */}
                  <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                    <label htmlFor="service_content">Select Position</label>
                    <Select
                      ref={positionRef}
                      name="member_position"
                      styles={colourStyles}
                      options={selectOptions}
                      className="basic-multi-select bg-root"
                      classNamePrefix="select"
                      onChange={handlePosition}
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
                    value="ADD Member"
                  />
                </div>
              </form>
              {/* data table */}
              <>
                {teamMemberDataLoading === false ? (
                  <div className="border-2 border-primary p-5">
                    <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
                      Manage Members
                    </div>
                    {teamMemberData.length === 0 ? (
                      <EmptyComponent heading="Team Members"></EmptyComponent>
                    ) : (
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
                          {teamMemberData.map((member, index) => (
                            <tr
                              key={member.id}
                              className="table-row border-2 border-secondary"
                            >
                              <th
                                scope="row"
                                className="px-6 py-4  whitespace-nowrap "
                              >
                                {index + 1}
                              </th>
                              <td className="px-6 py-4 uppercase">
                                {member.member_name}
                              </td>
                              <td className="px-6 py-4 uppercase">
                                {member.member_position}
                              </td>

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
                                  onClick={() => handleDelete(member)}
                                  className="cursor-pointer duration-300 hover:text-red-500"
                                >
                                  <MdDelete />
                                </div>
                              </td>
                              {/* <td>
                              <img src={member.member_imagelink} alt="" />
                            </td> */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                ) : (
                  <div className="bg-red-500">Loading Members</div>
                )}
              </>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-red-500 text-white text-center">Loading</div>
      )}
    </>
  );
}

export default Default;
