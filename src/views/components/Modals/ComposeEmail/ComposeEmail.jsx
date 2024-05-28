import { useContext, useEffect, useRef, useState } from "react";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import JoditEditor from "jodit-react";
import useRegisteredEmails from "../../../../utils/hooks/useRegisteredEmails";
import {
  convertToReactSelectEmailOptions,
  convertToReactSelectPartyEmailOptions,
} from "../../../../utils/helper";
import axios from "axios";
import { AppContext } from "../../../../utils/contexts/AppContext";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

function ComposeEmail() {
  const [userEmails, setUserEmails, emailLoading, allEmails, setAllEmails] =
    useRegisteredEmails();
  const { loggedUserData, setShowModal, setModalType, setModalData } =
    useContext(AppContext);
  const fromRef = useRef();
  const partyEmailRef = useRef();
  const [fromEmailList, setFromEmailList] = useState("");
  const [toEmailList, setToEmailList] = useState([]);
  const [partyEmails, setPartyEmails] = useState([]);
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    height: "350px",
    width: "100%",
    enableDragAndDropFileToEditor: true,
    buttons: [
      "source",
      "|",
      "bold",
      "italic",
      "underline",
      "|",
      "ul",
      "ol",
      "|",
      "font",
      "fontsize",
      "brush",
      "paragraph",
      "|",
      "image",
      "table",
      "link",
      "|",
      "left",
      "center",
      "right",
      "justify",
      "|",
      "undo",
      "redo",
      "|",
      "hr",
      "eraser",
      "fullsize",
    ],
    uploader: { insertImageAsBase64URI: true },
    removeButtons: ["brush", "file"],
    showXPathInStatusbar: false,
    showCharsCounter: false,
    showWordsCounter: false,
    toolbarAdaptive: true,
    toolbarSticky: true,
    style: {
      background: "#050d0d",
      color: "rgba(255,255,255,0.5)",
    },
  };

  const data = convertToReactSelectEmailOptions(userEmails);
  const partydata = convertToReactSelectPartyEmailOptions(partyEmails);
  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: "white",
        color: "#D9B658",
      };
    },
  };
  const handleEmailChange = (newValue) => {
    if (newValue) {
      console.log(newValue);
      setFromEmailList(newValue.label.toString());
    }
  };
  const handlePartyEmailChange = (newValue) => {
    let emails = [];
    // console.log(newValue);
    for (let i = 0; i < newValue.length; i++) {
      if (!emails.includes(newValue[i].value)) {
        emails.push(newValue[i].value);
      }
      setToEmailList(emails);
    }
  };
  const [files, setFiles] = useState([]);
  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    const validFiles = [];
    let isValid = true;

    for (let i = 0; i < selectedFiles.length; i++) {
      if (selectedFiles[i].size > 5 * 1024 * 1024) {
        // 5 MB size limit
        isValid = false;
        // set error message
        break;
      } else {
        validFiles.push(selectedFiles[i]);
      }
    }

    if (isValid) {
      setFiles(validFiles);
      // set error message
    } else {
      setFiles([]);
    }
  };

  const handleEmailSend = async (event) => {
    event.preventDefault();
    const to = toEmailList;
    const from = { email: fromEmailList, name: loggedUserData.name };
    const subject = event.target.subject[0].value;
    // console.log("subject", subject);

    const formData = new FormData();
    formData.append("from", JSON.stringify(from));
    formData.append("to", JSON.stringify(to));
    formData.append("subject", subject);
    formData.append("content", content);
    files.forEach((file) => {
      formData.append("files", file);
    });
    await axios
      .post("http://localhost:5000/api/sendemail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => {
        // clearing all the value
        fromRef.current.clearValue();
        partyEmailRef.current.clearValue();
        console.log(editor);
        setFromEmailList("");
        setToEmailList([]);
        setContent("");
        setFiles([]);
        event.target.reset();
        toast.success("Email Sent successfully");
      })
      .catch((error) => {
        toast.error("Email not sent");
      });
  };
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/registeredemails/party-email"
      );
      if (data) {
        setPartyEmails(data.data);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="font-monrope w-full  min-w-[320px] max-w-[1000px]">
      <div className="w-full ">
        <div className="text-primary  Capitalize flex  justify-between font-semibold mt-2 mb-5 text-[20px]">
          <span>Compose Email</span>
          <span
            onClick={() => {
              setShowModal(false);
              setModalType(""), setModalData({});
            }}
            className="text-[32px] hover:scale-110 cursor-pointer hover:text-red-500"
          >
            <RxCross2 />
          </span>
        </div>
        <div className="flex items-center space-x-5 mb-5">
          <h1 className="text-[18px] capitalize">From:</h1>
          <div className="w-full">
            <Select
              ref={fromRef}
              name="colors"
              styles={colourStyles}
              options={data}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className="flex items-center space-x-5 mb-5">
          <h1 className="text-[18px] capitalize">To:</h1>
          <CreatableSelect
            styles={colourStyles}
            options={partydata}
            className="w-full"
            isMulti
            closeMenuOnSelect={false}
            ref={partyEmailRef}
            onChange={handlePartyEmailChange}
          />
        </div>
        <form
          onSubmit={handleEmailSend}
          className="flex flex-col space-y-4 justify-center items-center   w-full"
        >
          <div className=" w-full flex items-center justify-start space-x-5 ">
            <label
              htmlFor="subject"
              className="text-[18px] capitalize font-bold"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="py-2.5 rounded-md w-full pl-3 font-monrope text-[16px] outline-none text-black"
              placeholder="Subject"
            />
          </div>
          <div className=" w-full h-full">
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {
                console.log(newContent);
              }}
            />
          </div>
          <div className=" w-full flex items-center justify-start space-x-5 ">
            <label
              htmlFor="attachment"
              className="text-[18px] capitalize font-bold"
            >
              Attachment
            </label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              name="subject"
              id="attachment"
              className="py-2.5 rounded-md w-full pl-3 font-monrope text-[16px] outline-none text-black"
              placeholder="attachment"
            />
          </div>
          <div className="w-full">
            <input
              type="submit"
              value="Send"
              className="bg-primary border-2 border-primary w-full py-3 text-[16px] hover:text-primary uppercase font-monrope font-semibold text-center rounded-md  hover:bg-transparent cursor-pointer duration-300"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ComposeEmail;
