import { RiUserFill } from "react-icons/ri";
import useIndividualUserProfile from "../../../../utils/hooks/useIndividualUserProfile";
import {
  addToLocale,
  formatDate,
  stringMatcher,
} from "../../../../utils/helper";
import { useContext, useState } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import axios from "axios";
import { site_sensitive_info } from "../../../../utils/helper";
import { AppContext } from "../../../../utils/contexts/AppContext";

function Profile() {
  // const [loggedUserInfo, userDataLoading, setUserData] = useIndividualUserProfile();
  // console.log("++++++++++++++++++", userData);
  const { loggedUserInfo, loggedUserInfoLoading } = useContext(AppContext);
  const [file, setFile] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [userInfo, setUserInfo] = useState(loggedUserInfo);
  console.log(userInfo);
  const [showUpdate, setShowUpdate] = useState(false);
  const [formData, setFormData] = useState({
    user_name: loggedUserInfo.name,
    contact_no: loggedUserInfo.contact_no,
    old_password: "",
    new_password: "",
  });
  const { user_name, contact_no, old_password, new_password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setUserInfo({ ...userInfo, storage_link: file });
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const uploadData = {
      user_name,
      contact_no,
      old_password,
      new_password,
      file,
    };
    await axios
      .put(
        `https://consultancy-crm-serverside-1.onrender.com/api/user/${loggedUserInfo.id}`,
        uploadData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((data) => {
        const receivedData = data.data;

        // console.log("receivedData++++++++++", receivedData);
        const { id, name, email, photolink } = receivedData.data;
        const modifiedUserData = {
          data: {
            id,
            name,
            email,
            photolink,
          },
          token: receivedData.token,
        };
        addToLocale(modifiedUserData);
        toast.success("Profile Updated!!");
        window.location.reload();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <>
      {loggedUserInfoLoading === false ? (
        <div className="w-full h-full px-10">
          <form
            onSubmit={handleSubmit}
            className="p-5 h-full text-primary flex flex-col justify-start items-start  space-y-5 text-left"
          >
            <div className="bg-slate-400 w-[300px] h-[250px] flex justify-center items-center rounded-lg mb-[50px]">
              {userInfo.photolink !== null ? (
                <img
                  className="w-full h-full"
                  src={userImage ? userImage : userInfo?.photolink}
                  alt=""
                />
              ) : (
                <RiUserFill className="text-slate-100 text-[128px]" />
              )}
            </div>
            {showUpdate && (
              <div className="w-full ">
                <input
                  type="file"
                  name=""
                  id=""
                  onChange={handleFileInputChange}
                />
              </div>
            )}
            <div className="text-[20px]  flex justify-between items-center w-full">
              <div className="text-[20px] flex flex-col w-full">
                <label htmlFor="">Name:</label>
                <input
                  onChange={onChange}
                  name="user_name"
                  type="text"
                  className="bg-transparent py-2 outline-none w-full"
                  readOnly={showUpdate === true ? false : true}
                  value={showUpdate ? user_name : loggedUserInfo.name}
                />
              </div>
              <div className="text-[32px] rounded-md hover:bg-primary hover:text-root p-1.5 duration-300">
                {!showUpdate && (
                  <HiOutlinePencilSquare
                    onClick={() => {
                      setShowUpdate(true);
                    }}
                    className="cursor-pointer "
                  />
                )}
                {showUpdate && (
                  <IoClose
                    onClick={() => {
                      setShowUpdate(false);
                      setFile(null);
                      setUserInfo({ ...userInfo, storage_link: null });
                    }}
                    className="cursor-pointer "
                  />
                )}
              </div>
            </div>
            <div className="text-[20px] flex flex-col w-full">
              <label htmlFor="">Contact No:</label>
              <input
                onChange={onChange}
                type="text"
                name="contact_no"
                className="bg-transparent py-2 outline-none w-full"
                readOnly={showUpdate === true ? false : true}
                value={showUpdate ? contact_no : loggedUserInfo.contact_no}
              />
            </div>
            <div className="text-[20px]">
              <div className="px-3 py-2 bg-primary text-root rounded-md">
                {loggedUserInfo.role}
              </div>
            </div>
            <div className="text-[20px]">
              <div className="px-3 py-2 bg-primary text-root rounded-md">
                Joined at: {formatDate(loggedUserInfo.created_at)}
              </div>
            </div>
            {showUpdate && (
              <div>
                <div className="text-[20px] font-bold mb-2">
                  Change Password
                </div>
                <div className="w-full flex space-x-3">
                  <div className="text-[20px] flex flex-col w-full">
                    <label htmlFor="">Previous password:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      name="old_password"
                      placeholder="**********"
                      value={old_password}
                      className="bg-transparent placeholder:text-primary py-2 outline-none w-full border-2 border-primary px-3 rounded-md mt-2"
                    />
                  </div>
                  <div className="text-[20px] flex flex-col w-full">
                    <label htmlFor="">New Password:</label>
                    <input
                      onChange={onChange}
                      type="text"
                      name="new_password"
                      value={new_password}
                      placeholder="**********"
                      className="bg-transparent placeholder:text-primary py-2 outline-none w-full border-2 border-primary px-3 rounded-md mt-2"
                    />
                  </div>
                </div>
              </div>
            )}

            {showUpdate && (
              <input
                className="px-3 py-2 text-root bg-primary text-[20px] rounded-md"
                type="Submit"
              />
            )}
          </form>
        </div>
      ) : (
        <div className="bg-red-500 text-white">Loading</div>
      )}
    </>
  );
}

export default Profile;
