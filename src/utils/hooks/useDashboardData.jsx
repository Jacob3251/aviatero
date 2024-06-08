import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import toast from "react-hot-toast";
import { removeFromLocale } from "../helper";

function useDashboardData() {
  const [data, setData] = useState([]);
  const [errorID, setErrorID] = useState(0);
  const [loading, setLoading] = useState(true);
  const { loggedUserData } = useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://consultancy-crm-serverside.onrender.com/api/dashboarddata`,
          {
            headers: {
              Authorization: `Bearer ${loggedUserData.token}`,
            },
          }
        )
        .then((data) => {
          console.log(data.data.data);
          setData(data.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log();
          setErrorID(error.response.data.errorId);
        });
    };
    fetchData();
  }, []);
  return [data, loading, setData, setLoading, errorID];
}

export default useDashboardData;
