import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const usePermissions = () => {
  const [permissions, setPermissions] = useState([]);
  const [permissionLoading, setPermissionLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/api/permission`);
      if (response.data) {
        setPermissions(response.data.data);
        // console.log(response);
        setPermissionLoading(false);
      }
    };
    fetchData();
  }, []);
  return [permissions, permissionLoading, setPermissions, setPermissionLoading];
};

export default usePermissions;
