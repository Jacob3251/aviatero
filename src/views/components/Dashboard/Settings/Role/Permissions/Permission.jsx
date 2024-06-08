import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Permission({ permissionId }) {
  const [permissionInfo, setPermissionInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(
            `https://consultancy-crm-serverside.onrender.com/api/permission/${permissionId}`
          )
          .then((data) => {
            setPermissionInfo(data.data.data);
            // console.log(data.data.data);
          });
      } catch (error) {
        toast.error("Couldn't Fetch Data");
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" m-2 bg-primary inline-block px-3 py-2 rounded-md text-root">
      {permissionInfo.title}
    </div>
  );
}

export default Permission;
