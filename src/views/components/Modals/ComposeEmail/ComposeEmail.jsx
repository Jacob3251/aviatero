import { useRef, useState } from "react";
import CreatableSelect from "react-select/creatable";
import JoditEditor from "jodit-react";

function ComposeEmail() {
  const [emailList, setEmailList] = useState([]);
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    height: "450px",
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

  const data = [
    { value: "a@gmail.com", label: "Mofiz" },
    { value: "aa@gmail.com", label: "Mofiza" },
    { value: "aaa@gmail.com", label: "Mofizaa" },
    { value: "aaaa@gmail.com", label: "Mofizaaa" },
  ];
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
    let emails = [];
    // console.log(newValue);
    for (let i = 0; i < newValue.length; i++) {
      if (!emails.includes(newValue[i].value)) {
        emails.push(newValue[i].value);
      }
      setEmailList(emails);
    }
  };
  return (
    <div className="font-monrope w-full  min-w-[320px] max-w-[450px]">
      <div className="w-full ">
        <div className="text-primary  Capitalize font-semibold mt-2 mb-5 text-[20px]">
          Compose Email
        </div>
        <div className="flex items-center space-x-5 mb-5">
          <h1 className="text-[18px] capitalize">To:</h1>
          <CreatableSelect
            styles={colourStyles}
            options={data}
            className="w-full"
            isMulti
            closeMenuOnSelect={false}
            onChange={handleEmailChange}
          />
        </div>
        <div className="flex flex-col space-y-4 justify-center items-center   w-full">
          <div className=" w-full flex items-center justify-start space-x-5 ">
            <label htmlFor="" className="text-[18px] capitalize font-bold">
              Subject
            </label>
            <input
              type="text"
              name=""
              id=""
              className="py-2.5 rounded-md w-full pl-3 font-monrope text-[16px] outline-none"
              placeholder="Subject"
            />
          </div>
          <div className=" w-full ">
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
          <div
            style={{ border: "2px solid #D9B658" }}
            className="bg-primary w-full py-3 text-[16px] hover:text-primary uppercase font-monrope font-semibold text-center rounded-md  hover:bg-transparent cursor-pointer duration-300"
          >
            Send
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComposeEmail;
