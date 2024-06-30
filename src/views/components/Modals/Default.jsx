import { useContext, useState } from "react";
import { AppContext } from "../../../utils/contexts/AppContext";
import ComposeEmail from "./ComposeEmail/ComposeEmail";
import ProgressAdd from "./ProgressAdd/ProgressAdd";
import ProgressView from "./ProgressView/ProgressView";
import ProgressUpdate from "./ProgressUpdate/ProgressUpdate";
import AttachmentAdd from "./AttachmentAdd/AttachmentAdd";
import AttachmentView from "./AttachmentView/AttachmentView";
import AttachmentUpdate from "./AttachmentUpdate/AttachmentUpdate";

function Default() {
  const { modalType } = useContext(AppContext);
  return (
    <div
      style={{ border: "2px solid #D9B658" }}
      className="bg-root text-white p-5 rounded-md space-y-5"
    >
      {modalType === "compose-email" && <ComposeEmail></ComposeEmail>}
      {modalType === "progress-add" && <ProgressAdd></ProgressAdd>}
      {modalType === "progress-view" && <ProgressView></ProgressView>}
      {modalType === "progress-update" && <ProgressUpdate></ProgressUpdate>}
      {modalType === "attachment-add" && <AttachmentAdd></AttachmentAdd>}
      {modalType === "attachment-view" && <AttachmentView></AttachmentView>}
      {modalType === "attachment-update" && (
        <AttachmentUpdate></AttachmentUpdate>
      )}
    </div>
  );
}

export default Default;
