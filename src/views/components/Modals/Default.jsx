import { useContext, useState } from "react";
import { AppContext } from "../../../utils/contexts/AppContext";
import ComposeEmail from "./ComposeEmail/ComposeEmail";

function Default() {
  const { modalType } = useContext(AppContext);
  return (
    <div
      style={{ border: "2px solid #D9B658" }}
      className="bg-root text-white p-5 rounded-md space-y-5"
    >
      {modalType === "compose-email" && <ComposeEmail></ComposeEmail>}
    </div>
  );
}

export default Default;
